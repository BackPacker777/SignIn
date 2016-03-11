/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**  AUTHOR: hbates@northmen.org
	 *   VERSION: 1.00
	 *   CREATED: 2/25/2016
	 *   PURPOSE: Sign-In!
	 *   TODO: Finalize leadership stuff; Finalize overflow stuff; Finish shift finalization
	 */

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _LoadDataClass = __webpack_require__(1);

	var _LoadDataClass2 = _interopRequireDefault(_LoadDataClass);

	var _FadeStuffClass = __webpack_require__(2);

	var _FadeStuffClass2 = _interopRequireDefault(_FadeStuffClass);

	var _AddDivClass = __webpack_require__(3);

	var _AddDivClass2 = _interopRequireDefault(_AddDivClass);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var main = function () {
	     function main(counter, finalData) {
	          _classCallCheck(this, main);

	          main.patrollerData = finalData;
	          main.shiftPatrollers = [[]];
	          main.numPatrollers = 0;
	          main.raceTimes = ["7:00", "7:15", "7:30", "7:45", "8:00", "8:15", "8:30", "8:45"];
	          main.leaders = ["178647", "251542", "178651", "128105", "226122", "223304", "128072", "192354"];
	          main.setDate();
	          document.getElementById("when").innerText = main.setWhen();
	          main.fade("in", "masthead");
	          for (var i = 1; i <= 4; i++) {
	               main.handlePatroller("patrollerID." + i + "." + counter, i, counter);
	          }
	          main.handleFinalize();
	          //main.fade("in", "NSPLogo");
	     }

	     _createClass(main, null, [{
	          key: 'setDate',
	          value: function setDate() {
	               main.date = new Date();
	               var month = main.date.getMonth() + 1;
	               var day = main.date.getDate();
	               var year = main.date.getFullYear();
	               var weekDay = main.date.getDay();
	               var hour = main.date.getHours();
	               var minute = main.date.getMinutes();
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
	     }, {
	          key: 'setWhen',
	          value: function setWhen() {
	               var MAX_DAY_TIME = 11;
	               var MAX_AFTERNOON_TIME = 13;
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
	     }, {
	          key: 'handlePatroller',
	          value: function handlePatroller(patrollerDiv, teamNum, counter) {
	               var MAX_COUNTER = 4;
	               document.getElementById(patrollerDiv).addEventListener("change", function () {
	                    var patrollerID = document.getElementById(patrollerDiv).value;
	                    var daysDiv = "daysDiv." + teamNum + "." + counter;
	                    var radioDiv = "radioDiv." + teamNum + "." + counter;
	                    var name = "name." + teamNum + "." + counter;
	                    var days = "days." + teamNum + "." + counter;
	                    var found = false;
	                    for (var i = 0; i < main.patrollerData.length; i++) {
	                         var COLUMNS = 4;
	                         if (patrollerID == main.patrollerData[i][0]) {
	                              found = true;
	                              main.fade("out", patrollerDiv);
	                              main.fade("in", daysDiv);
	                              main.fade("in", radioDiv);
	                              document.getElementById(name).innerText = main.patrollerData[i][2] + " " + main.patrollerData[i][1];
	                              var daysNum = Number(main.patrollerData[i][3]) + 1;
	                              document.getElementById(days).innerText = " " + daysNum;
	                              main.determineShift(counter, teamNum);
	                              counter++;
	                              for (var j = 0; j < COLUMNS; j++) {
	                                   main.shiftPatrollers[main.numPatrollers][j] = main.patrollerData[i][j];
	                              }
	                              main.patrollerData[i].splice(0, MAX_COUNTER); //remove patroller from array if found.
	                              if (counter <= MAX_COUNTER) {
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
	     }, {
	          key: 'determineShift',
	          value: function determineShift(counter, whichShift) {
	               var DAY_START = 1;
	               var AFTERNOON_START = 11;
	               var NIGHT_START = 15;
	               var shift = "shift." + whichShift + "." + counter;
	               var guest = "guestDiv." + whichShift + "." + counter;
	               var days = "days." + whichShift + "." + counter;
	               var am = "am." + whichShift + "." + counter;
	               var row = "row." + whichShift + "." + counter;
	               //let hour = main.date.getHours();
	               var hour = 16;
	               if (hour > DAY_START && hour < AFTERNOON_START) {
	                    main.fade("in", shift);
	                    main.fade("in", guest);
	                    document.getElementById(am).addEventListener("change", function () {
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
	     }, {
	          key: 'addRow',
	          value: function addRow(counter, whichRow) {
	               var team = "team" + whichRow;
	               var row = document.createElement("div");
	               row.setAttribute('class', 'row fullWidth');
	               row.setAttribute('id', 'row.' + whichRow + '.' + counter);
	               row.innerHTML = '<div class="small-2 columns" id="patroller.' + whichRow + '.' + counter + '">' + '<input type="number" maxlength="5" id="patrollerID.' + whichRow + '.' + counter + '" placeholder="ID Number">' + '</div>' + '<div class="small-3 columns">' + '<h5 class="y-center" id="name.' + whichRow + '.' + counter + '"></h5>' + '</div>' + '<div class="small-1 columns noDisp" id="radioDiv.' + whichRow + '.' + counter + '">' + '<input type="number" maxlength="2" required="1" id="radioNum.' + whichRow + '.' + counter + '" placeholder="Radio" />' + '</div>' + '<div class="small-2 column noDisp" id="shift.' + whichRow + '.' + counter + '">' + '<h5 class="y-center float-left">AM Only:</h5> <input type="checkbox" class="y-center-2 float-center" id="am.' + whichRow + '.' + counter + '">' + '</div>' + '<div class="small-2 columns noDisp" id="daysDiv.' + whichRow + '.' + counter + '">' + '<h5 class="y-center float-left">Days: </h5><h5 class="small-1 columns y-center end" id="days.' + whichRow + '.' + counter + '"></h5>' + '</div>' + '<div class="small-2 columns noDisp end" id="guestDiv.' + whichRow + '.' + counter + '">' + '<input type="text" id="guest.' + whichRow + '.' + counter + '" placeholder="Guest">' + '</div>' + '<div class="small-2 columns noDisp end" id="raceDiv.' + whichRow + '.' + counter + '">' + '<h5 class="y-center float-left">Course Time: </h5> <h5 class="small-1 columns y-center end" id="race.' + whichRow + '.' + counter + '"></h5>' + '</div>';
	               document.getElementById(team).appendChild(row);
	          }
	     }, {
	          key: 'fade',
	          value: function fade(direction, fadeWhat) {
	               new _FadeStuffClass2.default(direction, fadeWhat).doFade();
	          }
	     }, {
	          key: 'recountDays',
	          value: function recountDays(amount, value, recountWhat) {
	               if (amount == "half") {
	                    value = value - .5;
	                    recountWhat.innerText = value;
	               } else {
	                    value = value + .5;
	                    recountWhat.innerText = value;
	               }
	          }
	     }, {
	          key: 'populateRaceCourse',
	          value: function populateRaceCourse(whichShift, counter) {
	               var raceDiv = "raceDiv." + whichShift + "." + counter;
	               var raceSpan = "race." + whichShift + "." + counter;
	               if (main.raceTimes[0]) {
	                    main.fade("in", raceDiv);
	                    document.getElementById(raceSpan).innerText = main.raceTimes.shift();
	                    document.getElementById(raceDiv).style.backgroundColor = "yellow";
	               }
	          }
	     }, {
	          key: 'handleFinalize',
	          value: function handleFinalize() {
	               document.getElementById("finalize").addEventListener("click", function () {
	                    var leader = prompt("Please enter your NSP ID: ");
	                    var correctLeader = false;
	                    for (var i = 0; i < main.leaders.length; i++) {
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
	     }]);

	     return main;
	}();

	window.onload = function () {
	     new _LoadDataClass2.default("../data/PatrolRoster.csv", function (finalData) {
	          var STARTING_COUNT = 1;
	          new main(STARTING_COUNT, finalData);
	     });
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	/*  AUTHOR: hbates@northmen.org
	 *  VERSION: 1.0.0
	 *  CREATED: 11.25.2015
	 */

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	     value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var LoadDataClass = function LoadDataClass(filePath, callback) {
	     _classCallCheck(this, LoadDataClass);

	     var request = new XMLHttpRequest();
	     request.open("GET", filePath, true);
	     request.send();
	     request.onload = function () {
	          var COLUMNS = 4;
	          var data = undefined,
	              middleData = undefined,
	              finalData = [];
	          if (request.readyState === 4 && request.status === 200) {
	               data = request.responseText.split(/\n/);
	          }
	          for (var i = 0; i < data.length; i++) {
	               middleData = data[i].split(/,/);
	               finalData[i] = []; //makes it an MD array
	               for (var j = 0; j < COLUMNS; j++) {
	                    finalData[i][j] = middleData[j];
	               }
	          }
	          callback(finalData);
	     };
	}

	/*     getPatroller(id) {
	          let lastName, firstName, days;
	          for (let i = 0; i < LoadDataClass.finalData.length; i++) {
	               if (LoadDataClass.finalData[i][0] == id) {
	                    lastName = LoadDataClass.finalData[i][1];
	                    firstName = LoadDataClass.finalData[i][2];
	                    days = LoadDataClass.finalData[i][3];
	                    break;
	               }
	          }
	          console.log(lastName);
	          return {lastName: lastName, firstName: firstName, days: days};
	     }*/
	;

	exports.default = LoadDataClass;

/***/ },
/* 2 */
/***/ function(module, exports) {

	/*  AUTHOR: hbates@northmen.org
	 *  VERSION: 1.0
	 *  CREATED: 12.01.2015
	 */

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var FadeStuffClass = function () {
	    function FadeStuffClass(direction, fadeWhat) {
	        _classCallCheck(this, FadeStuffClass);

	        this.direction = direction;
	        this.fadeWhat = fadeWhat;
	    }

	    _createClass(FadeStuffClass, [{
	        key: "doFade",
	        value: function doFade() {
	            //http://www.chrisbuttery.com/articles/fade-in-fade-out-with-javascript/
	            var div = document.getElementById(this.fadeWhat);
	            if (this.direction == "in") {
	                div.style.opacity = 0;
	                div.style.display = "block";
	                (function fade() {
	                    var val = parseFloat(div.style.opacity);
	                    if (!((val += .01) >= 1)) {
	                        div.style.opacity = val;
	                        requestAnimationFrame(fade);
	                    }
	                })();
	            } else if (this.direction == "out") {
	                div.style.opacity = 1;
	                (function fade() {
	                    if ((div.style.opacity -= .01) <= 0) {
	                        div.style.display = "none";
	                    } else {
	                        requestAnimationFrame(fade);
	                    }
	                })();
	            }
	        }
	    }]);

	    return FadeStuffClass;
	}();

	exports.default = FadeStuffClass;

/***/ },
/* 3 */
/***/ function(module, exports) {

	/*  AUTHOR: hbates@northmen.org
	 *  VERSION: 1.0
	 *  CREATED: 12.01.2015
	 */

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var AddDivClass = function () {
	    function AddDivClass(whichDiv) {
	        _classCallCheck(this, AddDivClass);

	        this.whichDiv = whichDiv;
	    }

	    _createClass(AddDivClass, [{
	        key: "addDiv",
	        value: function addDiv(counter) {
	            if (this.whichDiv == "sibling") {
	                var newSibRow = document.createElement("div");
	                newSibRow.className = "row";
	                newSibRow.id = "sibRow" + counter;
	                newSibRow.innerHTML = '<div class="small-2 columns">' + '<span class="label">Last Name</span><br>' + '<input name="sibLastName' + counter + '" id="sibLastName' + counter + '" placeholder="Last Name" type="text">' + '</div>' + '<div class="small-2 columns">' + '<span class="label">First Name</span><br>' + '<input name="sibFirstName' + counter + '" id="sibFirstName' + counter + '" placeholder="First Name" type="text">' + '</div>' + '<div class="small-2 columns">' + '<span class="label">DoB</span><br>' + '<input name="sibDob' + counter + '" id="sibDob' + counter + '" type="date">' + '</div>' + '<div class="small-1 columns">' + '<span class="label">Grade</span><br>' + '<input name="sibGrade' + counter + '" id="sibGrade' + counter + '" placeholder="Grade" type="number">' + '</div>' + '<div class="small-2 columns end">' + '<span class="label">School</span><br>' + '<select name="sibSchool' + counter + '" id="sibSchool' + counter + '" required>' + '<option>Choose</option>' + '<option value="1">Central</option>' + '<option value="2">Lincoln</option>' + '<option value="3">Ottawa</option>' + '<option value="4">Sheridan</option>' + '<option value="5">Middle School</option>' + '<option value="6">High School</option>' + '<option value="7">Montessori</option>' + '</select>' + '</div>';
	                document.getElementById("siblings").appendChild(newSibRow).style.display = 'none';
	            }
	        }
	    }]);

	    return AddDivClass;
	}();

	exports.default = AddDivClass;

/***/ }
/******/ ]);