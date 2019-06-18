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
    var fields = _ref2.fields,
        state = _ref2.state;
    console.log(state);
    var reqResult = false;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(yokui_react_flex_grids__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(yokui_react_flex_grids__WEBPACK_IMPORTED_MODULE_8__["FlexCol"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(yokui_react_flex_grids__WEBPACK_IMPORTED_MODULE_8__["FlexCol"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(yokui_react_alerts__WEBPACK_IMPORTED_MODULE_4__["ErrorAlert"], {
      withIcon: true,
      show: reqResult,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, "File 'abc.txt' failed to upload."), fields.name, fields.email, fields.password, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      class: "float-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(yokui_react_buttons__WEBPACK_IMPORTED_MODULE_7__["PrimaryButton"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      type: 'submit'
    }, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }), "Daftar"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(yokui_react_flex_grids__WEBPACK_IMPORTED_MODULE_8__["FlexCol"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    })));
  });
});

/***/ })

})
//# sourceMappingURL=register.js.83d53c11429565d6dadb.hot-update.js.map