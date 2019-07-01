webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./components/dashboard-frame.js":
/*!***************************************!*\
  !*** ./components/dashboard-frame.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-float */ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var yokui_react_siteframe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yokui/react/siteframe */ "./node_modules/yokui/react/siteframe/index.js");
/* harmony import */ var yokui_react_siteframe__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(yokui_react_siteframe__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var yokui_react_iconography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! yokui/react/iconography */ "./node_modules/yokui/react/iconography/index.js");
/* harmony import */ var yokui_react_iconography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(yokui_react_iconography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var yokui_react_flex_grids__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! yokui/react/flex-grids */ "./node_modules/yokui/react/flex-grids/index.js");
/* harmony import */ var yokui_react_flex_grids__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(yokui_react_flex_grids__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var yokui_react_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! yokui/react/table */ "./node_modules/yokui/react/table/index.js");
/* harmony import */ var yokui_react_table__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(yokui_react_table__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "/home/dwi/kerja/yuso-front3/mynext/components/dashboard-frame.js";





/* harmony default export */ __webpack_exports__["default"] = (function () {
  var data1 = [{
    account: 'Gaji',
    type: 'debit',
    amount: '3000000,00'
  }, {
    account: 'Sepatu',
    type: 'credit',
    amount: '345000,00'
  }];
  var tableDatas = [];
  var total = 0;
  var totalDebit = 0;
  var totalCredit = 0;

  for (var i = 0; i < data1.length; i++) {
    var tableData = {
      akun: data1[i].account
    };

    if (data1[i].type === 'debit') {
      tableData.debit = _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_1___default()(data1[i].amount).toLocaleString('id');
      totalDebit += _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_1___default()(data1[i].amount);
    }

    if (data1[i].type === 'credit') {
      tableData.kredit = _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_1___default()(data1[i].amount).toLocaleString('id');
      totalCredit += _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_1___default()(data1[i].amount);
    }

    tableDatas.push(tableData);
  }

  console.log(tableDatas);
  total = totalDebit - totalCredit;
  total = total.toLocaleString('id');
  var columns = ['akun', 'debit', 'kredit'];
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      position: 'relative',
      height: '100vh'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(yokui_react_siteframe__WEBPACK_IMPORTED_MODULE_3__["Siteframe"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    headerProps: {
      companyName: 'Antaraksi',
      productName: 'yoiso'
    }
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(yokui_react_flex_grids__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    className: "grid-show mbxl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(yokui_react_flex_grids__WEBPACK_IMPORTED_MODULE_5__["FlexCol"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    breakpoint: 'sm'
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "tes")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(yokui_react_flex_grids__WEBPACK_IMPORTED_MODULE_5__["FlexCol"], {
    grow: 4,
    style: {
      backgroundColor: 'white',
      height: '100vh'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(yokui_react_table__WEBPACK_IMPORTED_MODULE_6__["Table"], {
    columns: columns,
    data: tableDatas,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Jumlah: ", total)))));
});

/***/ })

})
//# sourceMappingURL=dashboard.js.cc543c531ed238bf5f75.hot-update.js.map