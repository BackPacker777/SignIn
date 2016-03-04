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
	 *   TODO: Remove patroller from array after sign in; Add up to three (3) rows per team as sign ins occur
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
	     function main(counter) {
	          _classCallCheck(this, main);

	          main.counter1 = counter;
	          main.counter2 = counter;
	          main.counter3 = counter;
	          main.counter4 = counter;
	          main.date = new Date();
	          main.setDate();
	          main.refreshTime();
	          document.getElementById("when").innerText = main.setWhen();
	          main.fade("in", "masthead");
	          new _LoadDataClass2.default("../data/PatrolRoster.csv", function (finalData) {
	               document.getElementById("patrollerID.1." + main.counter1).addEventListener("change", function () {
	                    var patrollerDiv = "patrollerID.1." + main.counter1;
	                    main.loadPatroller(main.counter1, finalData, patrollerDiv, 1);
	                    main.determineShift(main.counter1, 1);
	                    main.addRow(main.counter1, 1);
	               }, false);
	               document.getElementById("patrollerID.2." + main.counter2).addEventListener("change", function () {
	                    var patrollerDiv = "patrollerID.2." + main.counter2;
	                    main.loadPatroller(main.counter2, finalData, patrollerDiv, 2);
	                    main.determineShift(main.counter2, 2);
	                    main.addRow(main.counter1, 2);
	               }, false);
	               document.getElementById("patrollerID.3." + main.counter3).addEventListener("change", function () {
	                    var patrollerDiv = "patrollerID.3." + main.counter3;
	                    main.loadPatroller(main.counter3, finalData, patrollerDiv, 3);
	                    main.determineShift(main.counter3, 3);
	                    main.addRow(main.counter1, 3);
	               }, false);
	               document.getElementById("patrollerID.4." + main.counter4).addEventListener("change", function () {
	                    var patrollerDiv = "patrollerID.4." + main.counter4;
	                    main.loadPatroller(main.counter4, finalData, patrollerDiv, 4);
	                    main.determineShift(main.counter4, 4);
	                    main.addRow(main.counter1, 3);
	               }, false);
	          });
	          //main.fade("in", "NSPLogo");
	     }

	     _createClass(main, null, [{
	          key: 'setDate',
	          value: function setDate() {
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
	          }
	     }, {
	          key: 'refreshTime',
	          value: function refreshTime() {
	               window.setInterval(main.setDate(), 10000);
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
	          key: 'loadPatroller',
	          value: function loadPatroller(counter, finalData, whichPatroller, whichName) {
	               var patrollerID = document.getElementById(whichPatroller).value;
	               for (var i = 0; i < finalData.length; i++) {
	                    if (patrollerID == finalData[i][0]) {
	                         document.getElementById("name." + whichName + "." + counter).innerText = finalData[i][2] + " " + finalData[i][1];
	                         var days = Number(finalData[i][3]) + 1;
	                         document.getElementById("days." + whichName + "." + counter).innerText = " " + days;
	                    }
	               }
	          }
	     }, {
	          key: 'determineShift',
	          value: function determineShift(counter, whichShift) {
	               var DAY_START = 5;
	               var AFTERNOON_START = 11;
	               var NIGHT_START = 15;
	               var shift = "shift." + whichShift + "." + counter;
	               var guest = "guestDiv." + whichShift + "." + counter;
	               var days = "days." + whichShift + "." + counter;
	               //let hour = main.date.getHours();
	               var hour = 16;
	               if (hour > DAY_START && hour < AFTERNOON_START) {
	                    main.fade("in", shift);
	                    main.fade("in", guest);
	                    main.recountDays("half", Number(document.getElementById(days).innerText), document.getElementById(days));
	               } else if (hour > NIGHT_START) {
	                    main.fade("in", guest);
	               } else {
	                    document.getElementById(shift).addEventListener("change", function () {
	                         if (document.getElementById("am").checked) {
	                              main.fade("out", guest);
	                              main.recountDays("half", Number(document.getElementById(days).innerText), document.getElementById(days));
	                         } else {
	                              main.fade("in", guest);
	                              main.recountDays("full", Number(document.getElementById(days).innerText), document.getElementById(days));
	                         }
	                    });
	               }
	          }
	     }, {
	          key: 'addRow',
	          value: function addRow(counter, whichRow) {
	               console.log(counter);
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
	     }]);

	     return main;
	}();

	window.onload = function () {
	     new main(1);
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