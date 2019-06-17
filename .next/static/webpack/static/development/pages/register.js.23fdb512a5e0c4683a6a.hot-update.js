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
/* harmony import */ var pivotal_ui_css_positioning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pivotal-ui/css/positioning */ "./node_modules/pivotal-ui/css/positioning/index.js");
/* harmony import */ var pivotal_ui_css_positioning__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pivotal_ui_css_positioning__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var yokui_react_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yokui/react/forms */ "./node_modules/yokui/react/forms/index.js");
/* harmony import */ var yokui_react_forms__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(yokui_react_forms__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var yokui_react_inputs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! yokui/react/inputs */ "./node_modules/yokui/react/inputs/index.js");
/* harmony import */ var yokui_react_inputs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(yokui_react_inputs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var yokui_react_buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! yokui/react/buttons */ "./node_modules/yokui/react/buttons/index.js");
/* harmony import */ var yokui_react_buttons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(yokui_react_buttons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var yokui_react_flex_grids__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! yokui/react/flex-grids */ "./node_modules/yokui/react/flex-grids/index.js");
/* harmony import */ var yokui_react_flex_grids__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(yokui_react_flex_grids__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "/home/dwi/kerja/yuso-front3/mynext/components/registration-form.js";






/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(yokui_react_forms__WEBPACK_IMPORTED_MODULE_3__["Form"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    onSubmit: function onSubmit(_ref) {
      var initial = _ref.initial,
          current = _ref.current;
      console.log(initial);
      console.log(current);
    },
    fields: {
      name: {
        label: 'Nama Lengkap',
        children: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(yokui_react_inputs__WEBPACK_IMPORTED_MODULE_4__["Input"], {
          type: "text",
          placeholder: "Sesuai identitas diri",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          },
          __self: this
        })
      },
      email: {
        label: 'Email',
        children: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(yokui_react_inputs__WEBPACK_IMPORTED_MODULE_4__["Input"], {
          type: "email",
          placeholder: "Email untuk verifikasi",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        })
      },
      password: {
        label: 'Password',
        children: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(yokui_react_inputs__WEBPACK_IMPORTED_MODULE_4__["Input"], {
          type: "password",
          placeholder: "Minimal 6 karakter",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        })
      }
    }
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), function (_ref2) {
    var fields = _ref2.fields;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(yokui_react_flex_grids__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(yokui_react_flex_grids__WEBPACK_IMPORTED_MODULE_6__["FlexCol"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(yokui_react_flex_grids__WEBPACK_IMPORTED_MODULE_6__["FlexCol"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, fields.name, fields.email, fields.password, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      class: "float-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(yokui_react_buttons__WEBPACK_IMPORTED_MODULE_5__["PrimaryButton"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      type: 'submit'
    }, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }), "Daftar"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(yokui_react_flex_grids__WEBPACK_IMPORTED_MODULE_6__["FlexCol"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    })));
  });
});

/***/ })

})
//# sourceMappingURL=register.js.23fdb512a5e0c4683a6a.hot-update.js.map