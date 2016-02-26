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

	    _createClass(main, null, [{
	        key: 'setDate',
	        value: function setDate() {
	            var month = main.date.getMonth() + 1;
	            var day = main.date.getDate();
	            var year = main.date.getFullYear();
	            var weekDay = main.date.getDay();
	            var hour = main.date.getHours();
	            var minute = main.date.getMinutes();
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
	    }, {
	        key: 'setWhen',
	        value: function setWhen() {
	            var MAX_DAY_TIME = 12;
	            if (main.date.getHours() > 0 && main.date.getHours() < MAX_DAY_TIME) {
	                return "Day Shift";
	            } else {
	                return "Night Shift";
	            }
	        }
	    }, {
	        key: 'loadPatrollerData',
	        value: function loadPatrollerData(whichPerson) {
	            new _LoadDataClass2.default().loadData("../data/patrollerDatabase.csv", function (finalData) {
	                var zip = document.getElementById(whichPerson + "Zip").value;
	                for (var i = 0; i < finalData.length; i++) {
	                    if (zip == finalData[i][0]) {
	                        document.getElementById(whichPerson + "City").value = finalData[i][1];
	                        document.getElementById(whichPerson + "State").value = finalData[i][2];
	                    }
	                }
	            });
	        }
	    }, {
	        key: 'fade',
	        value: function fade(direction, fadeWhat) {
	            new _FadeStuffClass2.default(direction, fadeWhat).doFade();
	        }
	    }, {
	        key: 'fadeSibling',
	        value: function fadeSibling(counter) {
	            new _AddDivClass2.default("sibling").addDiv(counter);
	            main.fade("in", "sibRow" + counter);
	        }
	    }]);

	    return main;
	}();

	window.onload = function () {
	    new main(0);
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

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var LoadDataClass = function () {
	    function LoadDataClass() {
	        _classCallCheck(this, LoadDataClass);
	    }

	    _createClass(LoadDataClass, [{
	        key: "loadData",
	        value: function loadData(filePath, callback) {
	            var request = new XMLHttpRequest();
	            request.open("GET", filePath, true);
	            request.send();
	            request.onload = function () {
	                var COLUMNS = 3;
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
	    }]);

	    return LoadDataClass;
	}();

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