webpackHotUpdate("static/development/pages/register.js",{

/***/ "./components/registration-form.js":
/*!*****************************************!*\
  !*** ./components/registration-form.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var yokui_css_positioning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yokui/css/positioning */ "./node_modules/yokui/css/positioning/index.js");
/* harmony import */ var yokui_css_positioning__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(yokui_css_positioning__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var yokui_react_alerts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! yokui/react/alerts */ "./node_modules/yokui/react/alerts/index.js");
/* harmony import */ var yokui_react_alerts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(yokui_react_alerts__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var yokui_react_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! yokui/react/forms */ "./node_modules/yokui/react/forms/index.js");
/* harmony import */ var yokui_react_forms__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(yokui_react_forms__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var yokui_react_inputs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! yokui/react/inputs */ "./node_modules/yokui/react/inputs/index.js");
/* harmony import */ var yokui_react_inputs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(yokui_react_inputs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var yokui_react_buttons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! yokui/react/buttons */ "./node_modules/yokui/react/buttons/index.js");
/* harmony import */ var yokui_react_buttons__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(yokui_react_buttons__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var yokui_react_flex_grids__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! yokui/react/flex-grids */ "./node_modules/yokui/react/flex-grids/index.js");
/* harmony import */ var yokui_react_flex_grids__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(yokui_react_flex_grids__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "/home/dwi/kerja/yuso-front3/mynext/components/registration-form.js";








/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(yokui_react_forms__WEBPACK_IMPORTED_MODULE_5__["Form"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    onSubmit: function onSubmit(_ref) {
      var initial = _ref.initial,
          current = _ref.current;
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("http://localhost:3030/users", current).then(function (result) {
        console.log(result);
      }).catch(function (error) {
        console.log(error);
      });
    },
    fields: {
      name: {
        label: 'Nama Lengkap',
        children: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(yokui_react_inputs__WEBPACK_IMPORTED_MODULE_6__["Input"], {
          type: "text",
          placeholder: "Sesuai identitas diri",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        })
      },
      email: {
        label: 'Email',
        children: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(yokui_react_inputs__WEBPACK_IMPORTED_MODULE_6__["Input"], {
          type: "email",
          placeholder: "Email untuk verifikasi",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        })
      },
      password: {
        label: 'Password',
        children: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(yokui_react_inputs__WEBPACK_IMPORTED_MODULE_6__["Input"], {
          type: "password",
          placeholder: "Minimal 6 karakter",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        })
      }
    }
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), function (_ref2) {
    var fields = _ref2.fields;
    var reqResult = false;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(yokui_react_flex_grids__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(yokui_react_flex_grids__WEBPACK_IMPORTED_MODULE_8__["FlexCol"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(yokui_react_flex_grids__WEBPACK_IMPORTED_MODULE_8__["FlexCol"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(yokui_react_alerts__WEBPACK_IMPORTED_MODULE_4__["ErrorAlert"], {
      withIcon: true,
      show: reqResult,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, "File 'abc.txt' failed to upload."), fields.name, fields.email, fields.password, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      class: "float-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(yokui_react_buttons__WEBPACK_IMPORTED_MODULE_7__["PrimaryButton"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      type: 'submit'
    }, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }), "Daftar"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(yokui_react_flex_grids__WEBPACK_IMPORTED_MODULE_8__["FlexCol"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    })));
  });
});

/***/ }),

/***/ "./node_modules/yokui/css/alerts/index.js":
/*!************************************************!*\
  !*** ./node_modules/yokui/css/alerts/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../common */ "./node_modules/yokui/css/common/index.js");
__webpack_require__(/*! ../iconography */ "./node_modules/yokui/css/iconography/index.js");
__webpack_require__(/*! ../typography */ "./node_modules/yokui/css/typography/index.js");
try {
  __webpack_require__(/*! ./alerts.css */ "./node_modules/yokui/css/alerts/alerts.css");
} catch (e) {
}

/***/ }),

/***/ "./node_modules/yokui/react/alerts/alerts.js":
/*!***************************************************!*\
  !*** ./node_modules/yokui/react/alerts/alerts.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* (c) Copyright 2019 Pivotal Software, Inc. All Rights Reserved. */


exports.__esModule = true;
exports.ErrorAlert = exports.WarningAlert = exports.InfoAlert = exports.SuccessAlert = void 0;

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _helpers = __webpack_require__(/*! ../helpers */ "./node_modules/yokui/react/helpers/index.js");

var _iconography = __webpack_require__(/*! ../iconography */ "./node_modules/yokui/react/iconography/index.js");

var _buttons = __webpack_require__(/*! ../buttons */ "./node_modules/yokui/react/buttons/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Alert =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(Alert, _React$PureComponent);

  function Alert(props, context) {
    var _this;

    _this = _React$PureComponent.call(this, props, context) || this;

    _defineProperty(_assertThisInitialized(_this), "handleAlertDismiss", function () {
      var onDismiss = _this.props.onDismiss;
      if (_this.props.onDismiss) onDismiss();

      _this.setState({
        alertVisible: false
      });
    });

    _this.state = {
      alertVisible: true
    };
    return _this;
  }

  var _proto = Alert.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        alertIcon = _this$props.alertIcon,
        kind = _this$props.kind,
        children = _this$props.children,
        closeLabel = _this$props.closeLabel,
        dismissable = _this$props.dismissable,
        label = _this$props.label,
        __ignore = _this$props.onDismiss,
        show = _this$props.show,
        withIcon = _this$props.withIcon,
        others = _objectWithoutPropertiesLoose(_this$props, ["alertIcon", "kind", "children", "closeLabel", "dismissable", "label", "onDismiss", "show", "withIcon"]);

    var props = (0, _helpers.mergeProps)(others, {
      role: 'alert',
      className: (0, _classnames["default"])('pui-alert', "pui-alert-" + kind, {
        'pui-alert-dismissable': dismissable
      })
    });
    var visible = typeof show === 'undefined' ? this.state.alertVisible : show;
    if (!visible) return _react["default"].createElement("span", null);
    var iconColumn;

    if (withIcon) {
      iconColumn = _react["default"].createElement("div", {
        className: "col col-fixed col-middle pan"
      }, _react["default"].createElement(_iconography.Icon, {
        src: alertIcon
      }));
    }

    var dismissableColumn;

    if (dismissable) {
      dismissableColumn = _react["default"].createElement("div", {
        className: "col col-fixed col-middle pan"
      }, _react["default"].createElement(_buttons.DefaultButton, {
        className: 'pui-alert-close-btn',
        iconOnly: true,
        flat: true,
        'aria-label': closeLabel,
        onClick: this.handleAlertDismiss,
        icon: _react["default"].createElement(_iconography.Icon, {
          src: "close"
        })
      }));
    }

    return _react["default"].createElement("div", props, _react["default"].createElement("div", {
      className: "grid"
    }, iconColumn, _react["default"].createElement("div", {
      className: "col col-middle"
    }, _react["default"].createElement("div", null, label && _react["default"].createElement("span", {
      className: "em-high"
    }, label, ": "), children)), dismissableColumn));
  };

  return Alert;
}(_react["default"].PureComponent);

_defineProperty(Alert, "propTypes", {
  alertIcon: _propTypes["default"].string,
  closeLabel: _propTypes["default"].node,
  dismissable: _propTypes["default"].bool,
  kind: _propTypes["default"].oneOf(['success', 'danger', 'info', 'warning']),
  label: _propTypes["default"].string,
  onDismiss: _propTypes["default"].func,
  show: _propTypes["default"].bool,
  withIcon: _propTypes["default"].bool
});

_defineProperty(Alert, "defaultProps", {
  closeLabel: 'Close alert',
  dismissable: false,
  withIcon: false
});

var defAlert = function defAlert(props) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(_class, _React$Component);

    function _class() {
      return _React$Component.apply(this, arguments) || this;
    }

    var _proto2 = _class.prototype;

    _proto2.componentDidMount = function componentDidMount() {
      __webpack_require__(/*! ../../css/alerts */ "./node_modules/yokui/css/alerts/index.js");
    };

    _proto2.render = function render() {
      return _react["default"].createElement(Alert, _extends({}, props, this.props));
    };

    return _class;
  }(_react["default"].Component), _defineProperty(_class, "propTypes", {
    dismissable: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].func]),
    withIcon: _propTypes["default"].bool
  }), _temp;
};

var SuccessAlert = defAlert({
  kind: 'success',
  alertIcon: 'check_circle',
  label: 'Success'
});
exports.SuccessAlert = SuccessAlert;
var InfoAlert = defAlert({
  kind: 'info',
  alertIcon: 'info',
  label: 'Info'
});
exports.InfoAlert = InfoAlert;
var WarningAlert = defAlert({
  kind: 'warning',
  alertIcon: 'warning',
  label: 'Warning'
});
exports.WarningAlert = WarningAlert;
var ErrorAlert = defAlert({
  kind: 'danger',
  alertIcon: 'report',
  label: 'Error'
});
exports.ErrorAlert = ErrorAlert;

/***/ }),

/***/ "./node_modules/yokui/react/alerts/index.js":
/*!**************************************************!*\
  !*** ./node_modules/yokui/react/alerts/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* (c) Copyright 2019 Pivotal Software, Inc. All Rights Reserved. */


exports.__esModule = true;
exports.ErrorAlert = exports.WarningAlert = exports.InfoAlert = exports.SuccessAlert = void 0;

var _alerts = __webpack_require__(/*! ./alerts */ "./node_modules/yokui/react/alerts/alerts.js");

exports.SuccessAlert = _alerts.SuccessAlert;
exports.InfoAlert = _alerts.InfoAlert;
exports.WarningAlert = _alerts.WarningAlert;
exports.ErrorAlert = _alerts.ErrorAlert;

/***/ })

})
//# sourceMappingURL=register.js.354ae589a67f36139683.hot-update.js.map