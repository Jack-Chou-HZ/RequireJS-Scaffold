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

define(['react', 'react-dom', 'react-router-dom'], function (React, ReactDOM, ReactRouterDOM) {
  var Link = ReactRouterDOM.Link;

  var About = /*#__PURE__*/function (_React$Component) {
    _inherits(About, _React$Component);

    var _super = _createSuper(About);

    function About(props) {
      var _this;

      _classCallCheck(this, About);

      _this = _super.call(this, props);
      _this.state = {};
      return _this;
    }

    _createClass(About, [{
      key: "render",
      value: function render() {
        return /*#__PURE__*/React.createElement("article", {
          className: "about"
        }, /*#__PURE__*/React.createElement("h1", null, "What is MyEnergy?"), /*#__PURE__*/React.createElement("p", null, "\xA0\xA0\xA0\xA0", /*#__PURE__*/React.createElement("i", null, "MyEnergy"), " is like a mirror.", /*#__PURE__*/React.createElement("br", null), "\xA0\xA0\xA0\xA0 You can see from it how you are doing everyday.", /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement("p", null, "\xA0\xA0\xA0\xA0", /*#__PURE__*/React.createElement("i", null, "MyEnergy"), " is also like your personal assistant.", /*#__PURE__*/React.createElement("br", null), "\xA0\xA0\xA0\xA0 You tell her to keep an eye on what matters, and she will remind you of them everyday. You can even tell her how you're doing everyday, she'll record it.", /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement("p", null, "\xA0\xA0\xA0\xA0 After a period of time, when ", /*#__PURE__*/React.createElement("i", null, "MyEnergy"), " has accumulated some data, you can review how you were doing, what could be done better.", /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement("label", {
          className: "float-right"
        }, /*#__PURE__*/React.createElement(Link, {
          to: "/monitor"
        }, "Login"), " or ", /*#__PURE__*/React.createElement(Link, {
          to: "/signup"
        }, "Signup")));
      }
    }]);

    return About;
  }(React.Component);

  return About;
});