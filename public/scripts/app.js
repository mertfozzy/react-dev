"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// ES5 Class : var person = function () { }
//ES6 Class :
var person = /*#__PURE__*/function () {
  function person(name, age) {
    _classCallCheck(this, person);

    this.name = name;
    this.age = age;
  }

  _createClass(person, [{
    key: "calculateAge",
    value: function calculateAge() {
      return new Date().getFullYear() - this.age;
    }
  }, {
    key: "greeting",
    value: function greeting(text) {
      this.text = text;
      return " ".concat(text, ", my name is ").concat(this.name, ". ");
    }
  }]);

  return person;
}(); //Objects :


var p = new person("Mert", 21);
var p2 = new person("Mercan", 20);
console.log(p.calculateAge());
console.log(p2.calculateAge());
console.log(p.greeting("Hello"));
