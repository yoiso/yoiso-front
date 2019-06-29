webpackHotUpdate("static/development/pages/login.js",{

/***/ "./components/login-form.js":
/*!**********************************!*\
  !*** ./components/login-form.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var yokui_css_positioning__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! yokui/css/positioning */ "./node_modules/yokui/css/positioning/index.js");
/* harmony import */ var yokui_css_positioning__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(yokui_css_positioning__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var yokui_react_alerts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! yokui/react/alerts */ "./node_modules/yokui/react/alerts/index.js");
/* harmony import */ var yokui_react_alerts__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(yokui_react_alerts__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var yokui_react_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! yokui/react/forms */ "./node_modules/yokui/react/forms/index.js");
/* harmony import */ var yokui_react_forms__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(yokui_react_forms__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var yokui_react_inputs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! yokui/react/inputs */ "./node_modules/yokui/react/inputs/index.js");
/* harmony import */ var yokui_react_inputs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(yokui_react_inputs__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var yokui_react_buttons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! yokui/react/buttons */ "./node_modules/yokui/react/buttons/index.js");
/* harmony import */ var yokui_react_buttons__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(yokui_react_buttons__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var yokui_react_flex_grids__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! yokui/react/flex-grids */ "./node_modules/yokui/react/flex-grids/index.js");
/* harmony import */ var yokui_react_flex_grids__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(yokui_react_flex_grids__WEBPACK_IMPORTED_MODULE_11__);




var _jsxFileName = "/home/dwi/kerja/yuso-front3/mynext/components/login-form.js";









var LoginForm = function LoginForm(props) {
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(yokui_react_forms__WEBPACK_IMPORTED_MODULE_8__["Form"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    onSubmit: function () {
      var _onSubmit = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(_ref) {
        var initial, current, response;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                initial = _ref.initial, current = _ref.current;
                _context.prev = 1;
                current.username = current.email;
                current.grant_type = 'password';
                current.client_id = 'client1';
                current.client_secret = 'secret';
                delete current.email;
                _context.next = 9;
                return axios__WEBPACK_IMPORTED_MODULE_5___default.a.post("https://yoiso.id-anime.net/v1/token", current);

              case 9:
                response = _context.sent;
                console.log(response);
                _context.next = 16;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](1);
                throw _context.t0.response;

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 13]]);
      }));

      function onSubmit(_x) {
        return _onSubmit.apply(this, arguments);
      }

      return onSubmit;
    }(),
    onSubmitError: function onSubmitError(error) {
      var message = error.data.message;
      var errorField = {};
      message.forEach(function (element) {
        if (element.property == 'name') {
          errorField['name'] = element.constraints.length;
        }

        if (element.property == 'email') {
          errorField['email'] = element.constraints.isEmail;
        }

        if (element.property == 'password') {
          errorField['password'] = element.constraints.length;
        }
      });
      return errorField;
    },
    fields: {
      email: {
        label: 'Email',
        children: react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(yokui_react_inputs__WEBPACK_IMPORTED_MODULE_9__["Input"], {
          type: "email",
          placeholder: "Email untuk verifikasi",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        })
      },
      password: {
        label: 'Password',
        children: react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(yokui_react_inputs__WEBPACK_IMPORTED_MODULE_9__["Input"], {
          type: "password",
          placeholder: "Minimal 6 karakter",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        })
      }
    }
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), function (_ref2) {
    var fields = _ref2.fields,
        state = _ref2.state;
    var errors = state.errors;
    var showAlert = false;

    if (_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(errors).length > 0) {
      showAlert = true;
    }

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(yokui_react_flex_grids__WEBPACK_IMPORTED_MODULE_11__["Grid"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(yokui_react_flex_grids__WEBPACK_IMPORTED_MODULE_11__["FlexCol"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(yokui_react_flex_grids__WEBPACK_IMPORTED_MODULE_11__["FlexCol"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(yokui_react_alerts__WEBPACK_IMPORTED_MODULE_7__["ErrorAlert"], {
      withIcon: true,
      show: showAlert,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, "Pendaftaran gagal. Periksa lagi."), fields.email, fields.password, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "float-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(yokui_react_buttons__WEBPACK_IMPORTED_MODULE_10__["PrimaryButton"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      type: 'submit'
    }, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }), "Masuk"))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(yokui_react_flex_grids__WEBPACK_IMPORTED_MODULE_11__["FlexCol"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    })));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

/***/ })

})
//# sourceMappingURL=login.js.d3bf74a7fac5b4d5215b.hot-update.js.map