"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Counter = /*#__PURE__*/function (_React$Component) {
  _inherits(Counter, _React$Component);

  var _super = _createSuper(Counter);

  function Counter(props) {
    var _this;

    _classCallCheck(this, Counter);

    _this = _super.call(this, props);
    _this.addOne = _this.addOne.bind(_assertThisInitialized(_this));
    _this.minusOne = _this.minusOne.bind(_assertThisInitialized(_this));
    _this.reset = _this.reset.bind(_assertThisInitialized(_this));
    _this.state = {
      number: 0
    };
    return _this;
  }

  _createClass(Counter, [{
    key: "addOne",
    value: function addOne() {
      this.setState({
        number: this.state.number + 1
      });
      console.log("+1");
    }
  }, {
    key: "minusOne",
    value: function minusOne() {
      this.setState({
        number: this.state.number - 1
      });
      console.log("-1");
    }
  }, {
    key: "reset",
    value: function reset() {
      this.setState({
        number: 0
      });
      console.log("resetted");
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Number : ", this.state.number, " "), /*#__PURE__*/React.createElement("button", {
        onClick: this.addOne
      }, "+1"), /*#__PURE__*/React.createElement("button", {
        onClick: this.minusOne
      }, "-1"), /*#__PURE__*/React.createElement("button", {
        onClick: this.reset
      }, "Reset"));
    }
  }]);

  return Counter;
}(React.Component);

ReactDOM.render( /*#__PURE__*/React.createElement(Counter, null), document.getElementById("root")); // var root = document.getElementById("root");
// var template = 
// <div>
// <h1 id="header">Hello World Nigga!</h1>
// <div>Lorem, ipsum dolor.</div>
// <ul>
//     <li>Lorem, ipsum.</li>
//     <li>Lorem, ipsum.</li>
//     <li>Lorem, ipsum.</li>
// </ul>
// </div>;
// var product = {
//     name :  "iPhone 8",
//     price : 3000,
//     description : "a nice budget phone"
// };  
// function getDescription(description) {
//     if (description) {
//         return description;
//     }
//     else{
//         return "no description";
//     }
// }
// var template2 = <div id="product-details">
// <h2 id="product-name">name : {product.name}</h2>
// <p id="product-price">price : {product.price}₺</p>
// <p id="product-description">description : {getDescription(product.description)}</p>
// </div>;
// var number = 0;
// function addOne() {
//     number++;
//     renderApp();
//     console.log("add one");
// }
// function minusOne() {
//     number--;
//     renderApp();
//     console.log("minus one");
// }
// function renderApp() {
//     var template3 = (
//         <div>
//             <h1>Number : {number}</h1>
//             <button id="btnPlusOne" onClick={addOne}>+1</button>
//             <button id="btnMinusOne" onClick={minusOne}>-1</button>
//         </div>
//     );
//     ReactDOM.render(template3, root);
// }
// function tick() {
//     var element = (
//         <div>
//             <h2>
//                 time is : {new Date().toLocaleTimeString()}
//             </h2>
//         </div>
//     );
//     ReactDOM.render(element, root);
// }
// setInterval(tick, 1000);
// //renderApp();
// //ReactDOM.render(template, root);
// //ReactDOM.render(template2, root);
