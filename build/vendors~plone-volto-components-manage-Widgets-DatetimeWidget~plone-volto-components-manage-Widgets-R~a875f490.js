exports.ids = ["vendors~plone-volto-components-manage-Widgets-DatetimeWidget~plone-volto-components-manage-Widgets-R~a875f490"];
exports.modules = {

/***/ "./node_modules/@plone/volto/src/components/manage/Widgets/DatetimeWidget.jsx":
/*!************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Widgets/DatetimeWidget.jsx ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dates__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dates */ "react-dates");
/* harmony import */ var react_dates__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dates__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rc_time_picker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rc-time-picker */ "rc-time-picker");
/* harmony import */ var rc_time_picker__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rc_time_picker__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _plone_volto_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @plone/volto/components */ "./node_modules/@plone/volto/src/components/index.js");
/* harmony import */ var _plone_volto_icons_left_key_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @plone/volto/icons/left-key.svg */ "./node_modules/@plone/volto/src/icons/left-key.svg");
/* harmony import */ var _plone_volto_icons_left_key_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_left_key_svg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _plone_volto_icons_right_key_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @plone/volto/icons/right-key.svg */ "./node_modules/@plone/volto/src/icons/right-key.svg");
/* harmony import */ var _plone_volto_icons_right_key_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_right_key_svg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @plone/volto/icons/clear.svg */ "./node_modules/@plone/volto/src/icons/clear.svg");
/* harmony import */ var _plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var rc_time_picker_assets_index_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rc-time-picker/assets/index.css */ "./node_modules/rc-time-picker/assets/index.css");
/* harmony import */ var rc_time_picker_assets_index_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(rc_time_picker_assets_index_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_dates_initialize__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-dates/initialize */ "react-dates/initialize");
/* harmony import */ var react_dates_initialize__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_dates_initialize__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_dates_lib_css_datepicker_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-dates/lib/css/_datepicker.css */ "./node_modules/react-dates/lib/css/_datepicker.css");
/* harmony import */ var react_dates_lib_css_datepicker_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_dates_lib_css_datepicker_css__WEBPACK_IMPORTED_MODULE_15__);


var _jsxFileName = "/Users/thomas_kindermann/Thomas-volto-project/node_modules/@plone/volto/src/components/manage/Widgets/DatetimeWidget.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * DatetimeWidget component.
 * @module components/manage/Widgets/DatetimeWidget
 */














const messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_4__["defineMessages"])({
  date: {
    "id": "Date",
    "defaultMessage": "Date"
  },
  time: {
    "id": "Time",
    "defaultMessage": "Time"
  }
});

const PrevIcon = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
  style: {
    color: '#000',
    left: '22px',
    padding: '5px',
    position: 'absolute',
    top: '15px'
  } // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
  ,
  tabIndex: "0",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_plone_volto_components__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
  name: _plone_volto_icons_left_key_svg__WEBPACK_IMPORTED_MODULE_10___default.a,
  size: "30px",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 5
  }
}));

const NextIcon = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
  style: {
    color: '#000',
    right: '22px',
    padding: '5px',
    position: 'absolute',
    top: '15px'
  } // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
  ,
  tabIndex: "0",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_plone_volto_components__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
  name: _plone_volto_icons_right_key_svg__WEBPACK_IMPORTED_MODULE_11___default.a,
  size: "30px",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 5
  }
}));

const defaultTimeDateOnly = {
  hour: 12,
  minute: 0,
  second: 0
};
/**
 * DatetimeWidget component class
 * @class DatetimeWidget
 * @extends Component
 */

class DatetimeWidget extends react__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  /**
   * Constructor
   * @method constructor
   * @param {Object} props Component properties
   * @constructs DatetimeWidget
   */
  constructor(props) {
    var _datetime;

    super(props); //  Used to set a server timezone or UTC as default

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "onDateChange", date => {
      if (date) this.setState(prevState => ({
        datetime: prevState.datetime ? prevState.datetime.set(_objectSpread({
          year: date.year(),
          month: date.month(),
          date: date.date()
        }, this.state.dateOnly ? defaultTimeDateOnly : {})) : moment__WEBPACK_IMPORTED_MODULE_5___default()().set(_objectSpread({
          year: date.year(),
          month: date.month(),
          date: date.date()
        }, this.state.dateOnly ? defaultTimeDateOnly : {})),
        isDefault: false
      }), () => this.onDateTimeChange());
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "onTimeChange", time => {
      this.setState(prevState => ({
        datetime: prevState.datetime ? prevState.datetime.set({
          hours: time.hours(),
          minutes: time.minutes(),
          seconds: 0
        }) : moment__WEBPACK_IMPORTED_MODULE_5___default()().set({
          hours: time.hours(),
          minutes: time.minutes(),
          seconds: 0
        }),
        isDefault: false
      }), () => this.onDateTimeChange());
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "onDateTimeChange", () => {
      const dateValue = this.state.dateOnly ? this.state.datetime.format('YYYY-MM-DD') : this.state.datetime.toISOString();
      this.props.onChange(this.props.id, dateValue);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "onResetDates", () => {
      this.setState(prevState => ({
        datetime: null,
        isDefault: false
      }), this.props.onChange(this.props.id, null));
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "onFocusChange", ({
      focused
    }) => this.setState({
      focused
    }));

    moment__WEBPACK_IMPORTED_MODULE_5___default.a.defineLocale(this.props.intl.locale, moment__WEBPACK_IMPORTED_MODULE_5___default.a.localeData(this.props.intl.locale)._config); // copy locale to moment-timezone

    let datetime = null;

    if (this.props.value) {
      // check if datetime has timezone, otherwise assumes it's UTC
      datetime = this.props.value.match(/T(.)*(-|\+|Z)/g) ? // Since we assume UTC everywhere, then transform to local (momentjs default)
      moment__WEBPACK_IMPORTED_MODULE_5___default()(this.props.value) : // This might happen in old Plone versions dates
      moment__WEBPACK_IMPORTED_MODULE_5___default()("".concat(this.props.value, "Z"));
    }

    this.state = {
      focused: false,
      isDefault: ((_datetime = datetime) === null || _datetime === void 0 ? void 0 : _datetime.toISOString()) === moment__WEBPACK_IMPORTED_MODULE_5___default()().utc().toISOString(),
      datetime,
      dateOnly: this.props.dateOnly || this.props.widget === 'date'
    };
  }
  /**
   * Update date storage
   * @method onDateChange
   * @param {Object} date updated momentjs Object for date
   * @returns {undefined}
   */


  render() {
    const {
      id,
      noPastDates,
      resettable,
      intl
    } = this.props;
    const {
      datetime,
      isDefault,
      focused
    } = this.state;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_plone_volto_components__WEBPACK_IMPORTED_MODULE_9__["FormFieldWrapper"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, this.props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 7
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "date-time-widget-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_8___default()('ui input date-input', {
        'default-date': isDefault
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_dates__WEBPACK_IMPORTED_MODULE_6__["SingleDatePicker"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      date: datetime,
      disabled: this.props.isDisabled,
      onDateChange: this.onDateChange,
      focused: focused,
      numberOfMonths: 1
    }, noPastDates ? {} : {
      isOutsideRange: () => false
    }, {
      onFocusChange: this.onFocusChange,
      noBorder: true,
      displayFormat: moment__WEBPACK_IMPORTED_MODULE_5___default.a.localeData(intl.locale).longDateFormat('L'),
      navPrev: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PrevIcon, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 24
        }
      }),
      navNext: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(NextIcon, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 24
        }
      }),
      id: "".concat(id, "-date"),
      placeholder: intl.formatMessage(messages.date),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 13
      }
    }))), !this.state.dateOnly && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_8___default()('ui input time-input', {
        'default-date': isDefault
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(rc_time_picker__WEBPACK_IMPORTED_MODULE_7___default.a, {
      disabled: this.props.isDisabled,
      defaultValue: datetime,
      value: datetime,
      onChange: this.onTimeChange,
      allowEmpty: false,
      showSecond: false,
      use12Hours: intl.locale === 'en',
      id: "".concat(id, "-time"),
      format: moment__WEBPACK_IMPORTED_MODULE_5___default.a.localeData(intl.locale).longDateFormat('LT'),
      placeholder: intl.formatMessage(messages.time),
      focusOnOpen: true,
      placement: "bottomRight",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 15
      }
    })), resettable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
      disabled: this.props.isDisabled || !datetime,
      onClick: () => this.onResetDates(),
      className: "item ui noborder button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_plone_volto_components__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
      name: _plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_12___default.a,
      size: "24px",
      className: "close",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 15
      }
    }))));
  }

}
/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */


DatetimeWidget.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  description: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  required: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  error: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string),
  dateOnly: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  noPastDates: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  value: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  wrapped: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  resettable: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};
/**
 * Default properties.
 * @property {Object} defaultProps Default properties.
 * @static
 */

DatetimeWidget.defaultProps = {
  description: null,
  required: false,
  error: [],
  dateOnly: false,
  noPastDates: false,
  value: null,
  resettable: true
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_4__["injectIntl"])(DatetimeWidget));

/***/ }),

/***/ "./node_modules/rc-time-picker/assets/index.css":
/*!******************************************************!*\
  !*** ./node_modules/rc-time-picker/assets/index.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ "./node_modules/react-dates/lib/css/_datepicker.css":
/*!**********************************************************!*\
  !*** ./node_modules/react-dates/lib/css/_datepicker.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ })

};;
//# sourceMappingURL=vendors~plone-volto-components-manage-Widgets-DatetimeWidget~plone-volto-components-manage-Widgets-R~a875f490.js.map