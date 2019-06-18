webpackHotUpdate("static/development/pages/register.js",{

/***/ "./components/registration-form.js":
/*!*****************************************!*\
  !*** ./components/registration-form.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var yokui_css_positioning__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! yokui/css/positioning */ "./node_modules/yokui/css/positioning/index.js");
/* harmony import */ var yokui_css_positioning__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(yokui_css_positioning__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var yokui_react_alerts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! yokui/react/alerts */ "./node_modules/yokui/react/alerts/index.js");
/* harmony import */ var yokui_react_alerts__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(yokui_react_alerts__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var yokui_react_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! yokui/react/forms */ "./node_modules/yokui/react/forms/index.js");
/* harmony import */ var yokui_react_forms__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(yokui_react_forms__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var yokui_react_inputs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! yokui/react/inputs */ "./node_modules/yokui/react/inputs/index.js");
/* harmony import */ var yokui_react_inputs__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(yokui_react_inputs__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var yokui_react_buttons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! yokui/react/buttons */ "./node_modules/yokui/react/buttons/index.js");
/* harmony import */ var yokui_react_buttons__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(yokui_react_buttons__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var yokui_react_flex_grids__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! yokui/react/flex-grids */ "./node_modules/yokui/react/flex-grids/index.js");
/* harmony import */ var yokui_react_flex_grids__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(yokui_react_flex_grids__WEBPACK_IMPORTED_MODULE_13__);






var _jsxFileName = "/home/dwi/kerja/yuso-front3/mynext/components/registration-form.js";









var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Index, _React$Component);

  function Index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Index).call(this, props));
    _this.state.reqResult = false;
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Index, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(yokui_react_forms__WEBPACK_IMPORTED_MODULE_10__["Form"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        onSubmit: function onSubmit(_ref) {
          var initial = _ref.initial,
              current = _ref.current;
          axios__WEBPACK_IMPORTED_MODULE_7___default.a.post("http://localhost:3030/users", current).then(function (result) {
            console.log(result);
          }).catch(function (error) {
            console.log(error);
            reqResult = true;
          });
        },
        fields: {
          name: {
            label: 'Nama Lengkap',
            children: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(yokui_react_inputs__WEBPACK_IMPORTED_MODULE_11__["Input"], {
              type: "text",
              placeholder: "Sesuai identitas diri",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 32
              },
              __self: this
            })
          },
          email: {
            label: 'Email',
            children: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(yokui_react_inputs__WEBPACK_IMPORTED_MODULE_11__["Input"], {
              type: "email",
              placeholder: "Email untuk verifikasi",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 36
              },
              __self: this
            })
          },
          password: {
            label: 'Password',
            children: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(yokui_react_inputs__WEBPACK_IMPORTED_MODULE_11__["Input"], {
              type: "password",
              placeholder: "Minimal 6 karakter",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 40
              },
              __self: this
            })
          }
        }
      }, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }), function (_ref2) {
        var fields = _ref2.fields;
        var reqResult = _this2.state.reqResult;
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(yokui_react_flex_grids__WEBPACK_IMPORTED_MODULE_13__["Grid"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(yokui_react_flex_grids__WEBPACK_IMPORTED_MODULE_13__["FlexCol"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(yokui_react_flex_grids__WEBPACK_IMPORTED_MODULE_13__["FlexCol"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(yokui_react_alerts__WEBPACK_IMPORTED_MODULE_9__["ErrorAlert"], {
          withIcon: true,
          show: reqResult,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        }, "File 'abc.txt' failed to upload."), fields.name, fields.email, fields.password, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          class: "float-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(yokui_react_buttons__WEBPACK_IMPORTED_MODULE_12__["PrimaryButton"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          type: 'submit'
        }, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        }), "Daftar"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(yokui_react_flex_grids__WEBPACK_IMPORTED_MODULE_13__["FlexCol"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: this
        })));
      });
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ })

})
//# sourceMappingURL=register.js.b8bbb189214c73d5e3e4.hot-update.js.map