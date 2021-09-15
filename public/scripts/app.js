"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// ES5 Class : var Person = function () { }
//ES6 Class :
var Person = /*#__PURE__*/function () {
  function Person(name, age) {
    _classCallCheck(this, Person);

    this.name = name;
    this.age = age;
  }

  _createClass(Person, [{
    key: "calculateAge",
    value: function calculateAge() {
      return new Date().getFullYear() - this.age;
    }
  }, {
    key: "greeting",
    value: function greeting(text) {
      this.text = text;
      return "".concat(text, ", my name is ").concat(this.name, ". ");
    }
  }]);

  return Person;
}(); //burada Student classı Persondan özellik aldı


var Student = /*#__PURE__*/function (_Person) {
  _inherits(Student, _Person);

  var _super = _createSuper(Student);

  function Student(name, age, studentID) {
    var _this;

    _classCallCheck(this, Student);

    _this = _super.call(this, name, age); //name ve age Persondan geldiği için tekrar this kullanmak gerekmiyor

    _this.studentID = studentID; //studentID yeni bir parametre olduğu için belirtiliyor

    return _this;
  }

  return Student;
}(Person);

var Teacher = /*#__PURE__*/function (_Person2) {
  _inherits(Teacher, _Person2);

  var _super2 = _createSuper(Teacher);

  function Teacher(name, age, department) {
    var _this2;

    _classCallCheck(this, Teacher);

    _this2 = _super2.call(this, name, age, department);
    _this2.department = department;
    return _this2;
  }

  _createClass(Teacher, [{
    key: "loginTeacher",
    value: function loginTeacher() {
      return "Welcome ".concat(this.name, ", your department is : ").concat(this.department, ".");
    }
  }]);

  return Teacher;
}(Person); //Objects :


var p = new Student("Mert", 21, 1804010005);
var p2 = new Person("Mercan", 20);
var p3 = new Teacher("Serra", 21, "Computer Science");
console.log(p.calculateAge());
console.log(p2.calculateAge());
console.log(p.greeting("Hello"));
console.log(p2.greeting("Merhaba"));
console.log(p3.loginTeacher());
