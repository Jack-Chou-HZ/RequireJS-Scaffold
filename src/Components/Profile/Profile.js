"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

// Filename:
//   profile.jsx
// Date:
//   Sep, 2021
// Author:
//   Jack Chou (@jack_sparrow_hz)
// Description:
//   This is the Profile component which holds all questions
// configed for the current user.
//   It read profile from database and displays it on the monitor component.
define(['react', 'react-dom', 'antd', 'prop-types.min'], function (React, ReactDOM, AntD, PropTypes) {
  var Profile = /*#__PURE__*/function (_React$Component) {
    _inherits(Profile, _React$Component);

    var _super = _createSuper(Profile);

    function Profile(props) {
      var _this;

      _classCallCheck(this, Profile);

      _this = _super.call(this, props);
      _this.state = {
        answers: []
      };
      _this.getProfile = _this.constructProfile.bind(_assertThisInitialized(_this));
      _this.onTabsChangedHandler = _this.onTabsChangedHandler.bind(_assertThisInitialized(_this));
      _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
      _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
      _this.handleReset = _this.handleReset.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(Profile, [{
      key: "componentDidMount",
      value: function componentDidMount() {}
    }, {
      key: "handleChange",
      value: function handleChange(event) {
        console.log(event.target);
        var _event$target = event.target,
            name = _event$target.name,
            value = _event$target.value;
        var question = {};
        question[name] = value;
        this.setState({
          answers: _objectSpread(_objectSpread({}, this.state.answers), question)
        });
      }
    }, {
      key: "handleSubmit",
      value: function handleSubmit(event) {
        console.log('state and props');
        console.log(this.state);
        console.log(this.props);
        event.preventDefault(); // invoke service to update database

        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
          if (xhr.readyState === XMLHttpRequest.DONE) {
            var status = xhr.status;

            if (status === 0 || status >= 200 && status < 400) {
              console.log('Success: profile saved!');
            } else {
              throw new Error('Error: answers not saved!');
            }
          }
        };

        xhr.open('POST', '/saveprofile', true);
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.send(this.state.answers || []);
      }
    }, {
      key: "handleReset",
      value: function handleReset(event) {
        this.setState({
          answers: []
        });
        event.preventDefault();
      } // construct profile based on component props

    }, {
      key: "constructProfile",
      value: function constructProfile() {
        var _this2 = this;

        var Tabs = AntD.Tabs;
        var TabPane = Tabs.TabPane;
        var defaultQuestions = this.props.defaultQuestions;

        if (defaultQuestions) {
          return /*#__PURE__*/React.createElement("form", {
            onSubmit: this.handleSubmit,
            className: "profile"
          }, /*#__PURE__*/React.createElement(Tabs, {
            defaultActiveKey: "0",
            onChange: this.onTabsChangedHandler
          }, /*#__PURE__*/React.createElement(TabPane, {
            tab: 'Physical status',
            key: "0"
          }, defaultQuestions.map(function (item, index) {
            return /*#__PURE__*/React.createElement("div", {
              className: "question",
              key: index
            }, /*#__PURE__*/React.createElement("div", {
              className: "ask"
            }, /*#__PURE__*/React.createElement("label", null, item.questionText)), /*#__PURE__*/React.createElement("div", {
              className: "answer"
            }, /*#__PURE__*/React.createElement("input", {
              type: "number",
              name: "answer",
              min: 0,
              max: 100,
              value: _this2.state.answers[item.seq] || '',
              onChange: _this2.handleChange
            }), /*#__PURE__*/React.createElement("input", {
              type: "text",
              name: "comments",
              className: "answer-comment",
              value: _this2.state.answers[item.seq] || '',
              onChange: _this2.handleChange
            })));
          }))), /*#__PURE__*/React.createElement("div", {
            className: "button"
          }, /*#__PURE__*/React.createElement("input", {
            type: "submit",
            value: "Save"
          }), /*#__PURE__*/React.createElement("input", {
            type: "button",
            value: "Never mind",
            onClick: this.handleSubmit
          })));
        } else {
          return /*#__PURE__*/React.createElement("h2", null, "Loading initial questions...");
        }
      }
    }, {
      key: "onTabsChangedHandler",
      value: function onTabsChangedHandler() {}
    }, {
      key: "render",
      value: function render() {
        return this.constructProfile(this.props.userId);
      }
    }]);

    return Profile;
  }(React.Component); // define property types


  Profile.propTypes = {
    userId: PropTypes.number,
    defaultQuestions: PropTypes.array
  };
  return Profile;
});