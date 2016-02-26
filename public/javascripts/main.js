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
        main.date = new Date();
        //document.getElementById("studentZip").addEventListener("change", function() {main.loadZipData("student")}, false); //http://stackoverflow.com/questions/2373995/javascript-addeventlistener-event-fires-on-page-load
        document.getElementById("date").innerText = main.setDate();
        document.getElementById("when").innerText = main.setWhen();
        main.counter = counter;
        main.fade("in", "masthead");
        //main.fade("in", "NSPLogo");
        //document.getElementById("ell").addEventListener("click", main.fadeEllHelp);
        /*document.getElementById("addSibling").addEventListener("click", function() {
            main.counter++;
            main.fadeSibling(main.counter);
        });*/
    }

    static setDate() {
        let month = main.date.getMonth() + 1;
        let day = main.date.getDate();
        let year = main.date.getFullYear();
        let weekDay = main.date.getDay();
        let hour = main.date.getHours();
        let minute = main.date.getMinutes();
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
        return weekDay + "\t" + month + "/" + day + "/" + year + "\t" + hour + ":" + minute;
    }

    static setWhen() {
        const MAX_DAY_TIME = 12;
        if (main.date.getHours() > 0 && main.date.getHours() < MAX_DAY_TIME) {
            return "Day Shift";
        } else {
            return "Night Shift";
        }
    }

    static loadPatrollerData(whichPerson) {
        new LoadDataClass().loadData("../data/patrollerDatabase.csv", function(finalData) {
            let zip = document.getElementById(whichPerson + "Zip").value;
            for (let i = 0; i < finalData.length; i++) {
                if (zip == finalData[i][0]) {
                    document.getElementById(whichPerson + "City").value = finalData[i][1];
                    document.getElementById(whichPerson + "State").value = finalData[i][2];
                }
            }
        });
    }

    static fade(direction, fadeWhat) {
        new FadeStuffClass(direction, fadeWhat).doFade();
    }

    static fadeSibling(counter) {
        new AddDivClass("sibling").addDiv(counter);
        main.fade("in", "sibRow" + counter);
    }
}

window.onload = function() {
    new main(0);
};