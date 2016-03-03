/**  AUTHOR: hbates@northmen.org
 *   VERSION: 1.00
 *   CREATED: 2/25/2016
 *   PURPOSE: Sign-In!
 */

"use strict";

import LoadDataClass from './LoadDataClass';
import FadeStuffClass from './FadeStuffClass';
import AddDivClass from './AddDivClass';

class main {
     constructor(counter) {
          main.counter1 = counter;
          main.counter2 = counter;
          main.counter3 = counter;
          main.counter4 = counter;
          main.date = new Date();
          document.getElementById("date").innerText = main.setDate();
          document.getElementById("when").innerText = main.setWhen();
          main.fade("in", "masthead");
          new LoadDataClass("../data/PatrolRoster.csv", function(finalData) {
               document.getElementById("patrollerID.1." + main.counter1).addEventListener("change", function() {
                    let patrollerDiv = "patrollerID.1." + main.counter1;
                    main.loadPatroller(main.counter1, finalData, patrollerDiv, 1);
                    main.determineShift(main.counter1, 1);
                    main.addRow(main.counter1, 1);
               }, false);
               document.getElementById("patrollerID.2." + main.counter2).addEventListener("change", function() {
                    let patrollerDiv = "patrollerID.2." + main.counter2;
                    main.loadPatroller(main.counter2, finalData, patrollerDiv, 2);
                    main.determineShift(main.counter2, patrollerDiv, 2);
                    main.addRow(main.counter1, patrollerDiv, 1);
               }, false);
               document.getElementById("patrollerID.3." + main.counter3).addEventListener("change", function() {
                    let patrollerDiv = "patrollerID.3." + main.counter3;
                    main.loadPatroller(main.counter3, finalData, patrollerDiv, 3);
                    main.determineShift(main.counter3, patrollerDiv, 3);
                    main.addRow(main.counter1, patrollerDiv, 1);
               }, false);
               document.getElementById("patrollerID.4." + main.counter4).addEventListener("change", function() {
                    let patrollerDiv = "patrollerID.4." + main.counter4;
                    main.loadPatroller(main.counter4, finalData, patrollerDiv, 4);
                    main.determineShift(main.counter4, patrollerDiv, 4);
                    main.addRow(main.counter1, patrollerDiv, 1);
               }, false);
          });
          //main.fade("in", "NSPLogo");
     }

     static setDate() {
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
          return weekDay + "\t" + month + "/" + day + "/" + year + "\t ~ " + hour + ":" + minute;
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

     static loadPatroller(counter, finalData, whichPatroller, whichName) {
          let patrollerID = document.getElementById(whichPatroller).value;
          for (let i = 0; i < finalData.length; i++) {
               if (patrollerID == finalData[i][0]) {
                    document.getElementById("name." + whichName + "." + counter).innerText = finalData[i][2] + " " + finalData[i][1];
                    let days = Number(finalData[i][3]) + 1;
                    document.getElementById("days." + whichName + "." + counter).innerText = " " + days;
               }
          }
     }

     static determineShift(counter, whichShift) {
          let shift = "shift." + whichShift + "." + counter;
          let guest = "guest." + whichShift + "." + counter;
          let days = "days." + whichShift + "." + counter;
          document.getElementById(shift).addEventListener("change", function() {
               if (document.getElementById("am").checked) {
                    main.fade("out", guest);
                    main.recountDays("half", Number(document.getElementById(days).innerText), document.getElementById(days));
               } else {
                    main.fade("in", guest);
                    main.recountDays("full", Number(document.getElementById(days).innerText), document.getElementById(days));
               }
          });
     }

     static addRow(counter, whichRow) {
          console.log(counter);
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
}

window.onload = function() {
    new main(1);
};