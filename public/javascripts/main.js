/**  AUTHOR: hbates@northmen.org
 *   VERSION: 1.00
 *   CREATED: 2/25/2016
 *   PURPOSE: Sign-In!
 *   TODO: Finalize leadership stuff; Finalize overflow stuff; Finish shift finalization
 */

"use strict";

import LoadDataClass from './LoadDataClass';
import FadeStuffClass from './FadeStuffClass';
import AddDivClass from './AddDivClass';

class main {
     constructor(counter, finalData) {
          main.patrollerData = finalData;
          main.shiftPatrollers = [[]];
          main.numPatrollers = 0;
          main.raceTimes = ["7:00", "7:15", "7:30", "7:45", "8:00", "8:15", "8:30", "8:45"];
          main.leaders = ["178647", "251542", "178651", "128105", "226122", "223304", "128072", "192354"];
          main.setDate();
          document.getElementById("when").innerText = main.setWhen();
          main.fade("in", "masthead");
          for (let i = 1; i <= 4; i++) {
               main.handlePatroller("patrollerID." + i + "." + counter, i, counter);
          }
          main.handleFinalize();
          //main.fade("in", "NSPLogo");
     }

     static setDate() {
          main.date = new Date();
          let month = main.date.getMonth() + 1;
          let day = main.date.getDate();
          let year = main.date.getFullYear();
          let weekDay = main.date.getDay();
          let hour = main.date.getHours();
          let minute = main.date.getMinutes();
          if (minute < 10) {
               minute = "0" + minute;
          }
          if (weekDay == 0) {
               weekDay = "Sunday";
          } else if (weekDay == 1) {
               weekDay = "Monday";
          } else if (weekDay == 2) {
               weekDay = "Tuesday";
          } else if (weekDay == 3) {
               weekDay = "Wednesday";
          } else if (weekDay == 4) {
               weekDay = "Thursday";
          } else if (weekDay == 5) {
               weekDay = "Friday";
          } else {
               weekDay = "Saturday";
          }
          document.getElementById("date").innerText = weekDay + "\t" + month + "/" + day + "/" + year + "\t ~ " + hour + ":" + minute;
          return setTimeout(main.setDate, 10000);
     }

     static setWhen() {
          const MAX_DAY_TIME = 11;
          const MAX_AFTERNOON_TIME = 13;
          if (main.date.getHours() > 0 && main.date.getHours() < MAX_DAY_TIME) {
               //return "Day Shift";
               return "Day";
          } else if (main.date.getHours() >= MAX_DAY_TIME && main.date.getHours() <= MAX_AFTERNOON_TIME) {
               //return "Day Shift - Afternoon";
               return "Afternoon";
          } else {
               //return "Night Shift";
               return "Meow - 3";
          }
     }

     static handlePatroller(patrollerDiv, teamNum, counter) {
          const MAX_COUNTER = 4;
          document.getElementById(patrollerDiv).addEventListener("change", function () {
               let patrollerID = document.getElementById(patrollerDiv).value;
               let daysDiv = "daysDiv." + teamNum + "." + counter;
               let radioDiv = "radioDiv." + teamNum + "." + counter;
               let name = "name." + teamNum + "." + counter;
               let days = "days." + teamNum + "." + counter;
               let found = false;
               for (let i = 0; i < main.patrollerData.length; i++) {
                    const COLUMNS = 4;
                    if (patrollerID == main.patrollerData[i][0]) {
                         found = true;
                         main.fade("out", patrollerDiv);
                         main.fade("in", daysDiv);
                         main.fade("in", radioDiv);
                         document.getElementById(name).innerText = main.patrollerData[i][2] + " " + main.patrollerData[i][1];
                         let daysNum = Number(main.patrollerData[i][3]) + 1;
                         document.getElementById(days).innerText = " " + daysNum;
                         main.determineShift(counter, teamNum);
                         counter++;
                         for (let j = 0; j < COLUMNS; j++) {
                              main.shiftPatrollers[main.numPatrollers][j] = main.patrollerData[i][j];
                         }
                         main.patrollerData[i].splice(0, MAX_COUNTER);  //remove patroller from array if found.
                         if (counter <= MAX_COUNTER ) {
                              main.addRow(counter, teamNum);
                              patrollerDiv = "patrollerID." + teamNum + "." + counter;
                              return main.handlePatroller(patrollerDiv, teamNum, counter);
                         }
                         main.numPatrollers++;
                    }
               }
               if (!found) {
                    alert(patrollerID + " Already signed in or this is an invalid patroller ID number.");
                    document.getElementById(patrollerDiv).value = null;
               }
          }, false);
     }

     static determineShift(counter, whichShift) {
          const DAY_START = 1;
          const AFTERNOON_START = 11;
          const NIGHT_START = 15;
          let shift = "shift." + whichShift + "." + counter;
          let guest = "guestDiv." + whichShift + "." + counter;
          let days = "days." + whichShift + "." + counter;
          let am = "am." + whichShift + "." + counter;
          let row = "row." + whichShift + "." + counter;
          //let hour = main.date.getHours();
          let hour = 16;
          if (hour > DAY_START && hour < AFTERNOON_START) {
               main.fade("in", shift);
               main.fade("in", guest);
               document.getElementById(am).addEventListener("change", function() {
                    if (document.getElementById(am).checked) {
                         main.fade("out", guest);
                         main.recountDays("half", Number(document.getElementById(days).innerText), document.getElementById(days));
                         document.getElementById(row).style.backgroundColor = "yellow";
                    } else {
                         main.fade("in", guest);
                         main.recountDays("full", Number(document.getElementById(days).innerText), document.getElementById(days));
                         document.getElementById(row).style.backgroundColor = "white";
                    }
               });
          } else if (hour >= AFTERNOON_START && hour <= NIGHT_START) {
               main.fade("out", guest);
               main.fade("out", shift);
               main.recountDays("half", Number(document.getElementById(days).innerText), document.getElementById(days));
          } else {
               main.fade("in", guest);
               main.populateRaceCourse(whichShift, counter);
          }
     }

     static addRow(counter, whichRow) {
          const team = "team" + whichRow;
          let row = document.createElement("div");
          row.setAttribute('class', 'row fullWidth');
          row.setAttribute('id', 'row.' + whichRow + '.' + counter);
          row.innerHTML = '<div class="small-2 columns" id="patroller.' + whichRow + '.' + counter + '">'
               + '<input type="number" maxlength="5" id="patrollerID.' + whichRow + '.' + counter + '" placeholder="ID Number">'
               + '</div>'
               + '<div class="small-3 columns">'
               + '<h5 class="y-center" id="name.' + whichRow + '.' + counter + '"></h5>'
               + '</div>'
               + '<div class="small-1 columns noDisp" id="radioDiv.' + whichRow + '.' + counter + '">'
               + '<input type="number" maxlength="2" required="1" id="radioNum.' + whichRow + '.' + counter + '" placeholder="Radio" />'
               + '</div>'
               + '<div class="small-2 column noDisp" id="shift.' + whichRow + '.' + counter + '">'
               + '<h5 class="y-center float-left">AM Only:</h5> <input type="checkbox" class="y-center-2 float-center" id="am.' + whichRow + '.' + counter + '">'
               + '</div>'
               + '<div class="small-2 columns noDisp" id="daysDiv.' + whichRow + '.' + counter + '">'
               + '<h5 class="y-center float-left">Days: </h5><h5 class="small-1 columns y-center end" id="days.' + whichRow + '.' + counter + '"></h5>'
               + '</div>'
               + '<div class="small-2 columns noDisp end" id="guestDiv.' + whichRow + '.' + counter + '">'
               + '<input type="text" id="guest.' + whichRow + '.' + counter + '" placeholder="Guest">'
               + '</div>'
               + '<div class="small-2 columns noDisp end" id="raceDiv.' + whichRow + '.' + counter + '">'
               + '<h5 class="y-center float-left">Course Time: </h5> <h5 class="small-1 columns y-center end" id="race.' + whichRow + '.' + counter + '"></h5>'
               + '</div>';
          document.getElementById(team).appendChild(row);
     }

     static fade(direction, fadeWhat) {
          new FadeStuffClass(direction, fadeWhat).doFade();
     }

     static recountDays(amount, value, recountWhat) {
          if (amount == "half") {
               value = value - .5;
               recountWhat.innerText = value;
          } else {
               value = value + .5;
               recountWhat.innerText = value;
          }
     }

     static populateRaceCourse(whichShift, counter) {
          let raceDiv = "raceDiv." + whichShift + "." + counter;
          let raceSpan = "race." + whichShift + "." + counter;
          if (main.raceTimes[0]) {
               main.fade("in", raceDiv);
               document.getElementById(raceSpan).innerText = main.raceTimes.shift();
               document.getElementById(raceDiv).style.backgroundColor = "yellow";
          }
     }

     static handleFinalize() {
          document.getElementById("finalize").addEventListener("click", function () {
               let leader = prompt("Please enter your NSP ID: ");
               let correctLeader = false;
               for (let i = 0; i < main.leaders.length; i++) {
                    if (leader == main.leaders[i]) {
                         correctLeader = 1;
                         console.log("Finalizing...");
                    }
               }
               if (!correctLeader) {
                    alert("Invalid account to finalize shift.");
               }
          }, false);
     }
}

window.onload = function() {
     new LoadDataClass("../data/PatrolRoster.csv", function(finalData) {
          const STARTING_COUNT = 1;
          new main(STARTING_COUNT, finalData);
     });
};