exports.ids = ["vendors~plone-volto-components-theme-View-EventView"];
exports.modules = {

/***/ "./node_modules/@plone/volto/src/components/theme/View/EventDatesInfo.jsx":
/*!********************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/theme/View/EventDatesInfo.jsx ***!
  \********************************************************************************/
/*! exports provided: datesForDisplay, When, Recurrence */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "datesForDisplay", function() { return datesForDisplay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "When", function() { return When; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Recurrence", function() { return Recurrence; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rrule__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rrule */ "rrule");
/* harmony import */ var rrule__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rrule__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/thomas_kindermann/Thomas-volto-project/node_modules/@plone/volto/src/components/theme/View/EventDatesInfo.jsx";







const datesForDisplay = (start, end) => {
  const mStart = moment__WEBPACK_IMPORTED_MODULE_3___default()(start);
  const mEnd = moment__WEBPACK_IMPORTED_MODULE_3___default()(end);

  if (!mStart.isValid() || !mEnd.isValid()) {
    return null;
  }

  const sameDay = mStart.isSame(mEnd, 'day');
  const sameTime = mStart.isSame(mEnd, 'minute');
  return {
    sameDay,
    sameTime,
    startDate: mStart.format('ll'),
    startTime: mStart.format('LT'),
    endDate: mEnd.format('ll'),
    endTime: mEnd.format('LT')
  };
};
const When = ({
  start,
  end,
  whole_day,
  open_end
}) => {
  const intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_4__["useIntl"])();
  moment__WEBPACK_IMPORTED_MODULE_3___default.a.locale(intl.locale);
  const datesInfo = datesForDisplay(start, end);

  if (!datesInfo) {
    return;
  } // TODO I18N INTL


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('event-when', {
      'same-day': datesInfo.sameDay,
      'same-time': datesInfo.sameTime,
      'whole-day': whole_day,
      'open-end': open_end
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, !datesInfo.sameDay ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "start-date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, datesInfo.startDate), !whole_day && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "start-time",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, datesInfo.startTime))), !open_end && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "\xA0to\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "end-date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }, datesInfo.endDate), !whole_day && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 21
    }
  }, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "end-time",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 21
    }
  }, datesInfo.endTime))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, whole_day && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "start-date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }, datesInfo.startDate), open_end && !whole_day && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "start-date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 15
    }
  }, datesInfo.startDate), "\xA0from\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "start-time",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 15
    }
  }, datesInfo.startTime)), !(whole_day || open_end) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "start-date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 15
    }
  }, datesInfo.startDate), "\xA0from\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "start-time",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 15
    }
  }, datesInfo.startTime), "\xA0to\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "end-time",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 15
    }
  }, datesInfo.endTime))));
};
When.propTypes = {
  start: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  end: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  whole_day: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  open_end: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
const Recurrence = ({
  recurrence,
  start
}) => {
  if (recurrence.indexOf('DTSTART') < 0) {
    var dtstart = rrule__WEBPACK_IMPORTED_MODULE_6__["RRule"].optionsToString({
      dtstart: new Date(start)
    });
    recurrence = dtstart + '\n' + recurrence;
  }

  const rrule = Object(rrule__WEBPACK_IMPORTED_MODULE_6__["rrulestr"])(recurrence, {
    unfold: true,
    forceset: true
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"], {
    items: rrule.all().map(date => datesForDisplay(date)).map(date => date.startDate),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 5
    }
  });
};
Recurrence.propTypes = {
  recurrence: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  start: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};

/***/ }),

/***/ "./node_modules/@plone/volto/src/components/theme/View/EventView.jsx":
/*!***************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/theme/View/EventView.jsx ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _plone_volto_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @plone/volto/helpers */ "./node_modules/@plone/volto/src/helpers/index.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _plone_volto_components_theme_View_EventDatesInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @plone/volto/components/theme/View/EventDatesInfo */ "./node_modules/@plone/volto/src/components/theme/View/EventDatesInfo.jsx");
var _jsxFileName = "/Users/thomas_kindermann/Thomas-volto-project/node_modules/@plone/volto/src/components/theme/View/EventView.jsx";

/**
 * EventView view component.
 * @module components/theme/View/EventView
 */






const messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_2__["defineMessages"])({
  what: {
    "id": "event_what",
    "defaultMessage": "What"
  },
  when: {
    "id": "event_when",
    "defaultMessage": "When"
  },
  allDates: {
    "id": "event_alldates",
    "defaultMessage": "All dates"
  },
  where: {
    "id": "event_where",
    "defaultMessage": "Where"
  },
  contactName: {
    "id": "event_contactname",
    "defaultMessage": "Contact Name"
  },
  contactPhone: {
    "id": "event_contactphone",
    "defaultMessage": "Contact Phone"
  },
  attendees: {
    "id": "event_attendees",
    "defaultMessage": "Attendees"
  },
  website: {
    "id": "event_website",
    "defaultMessage": "Website"
  },
  visitWebsite: {
    "id": "visit_external_website",
    "defaultMessage": "Visit external website"
  }
});
/**
 * EventView view component class.
 * @function EventView
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */

const EventView = ({
  intl,
  content
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Container"], {
  className: "view-wrapper event-view",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 3
  }
}, content.title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
  className: "documentFirstHeading",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 23
  }
}, content.title), content.description && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
  className: "documentDescription",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 7
  }
}, content.description), content.image && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Image"], {
  className: "document-image",
  src: content.image.scales.thumb.download,
  floated: "right",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 7
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Segment"], {
  floated: "right",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 75,
    columnNumber: 5
  }
}, content.subjects.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Header"], {
  dividing: true,
  sub: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 78,
    columnNumber: 11
  }
}, intl.formatMessage(messages.what)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["List"], {
  items: content.subjects,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 81,
    columnNumber: 11
  }
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Header"], {
  dividing: true,
  sub: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 84,
    columnNumber: 7
  }
}, intl.formatMessage(messages.when)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_plone_volto_components_theme_View_EventDatesInfo__WEBPACK_IMPORTED_MODULE_5__["When"], {
  start: content.start,
  end: content.end,
  whole_day: content.whole_day,
  open_end: content.open_end,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 87,
    columnNumber: 7
  }
}), content.recurrence && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Header"], {
  dividing: true,
  sub: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 95,
    columnNumber: 11
  }
}, intl.formatMessage(messages.allDates)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_plone_volto_components_theme_View_EventDatesInfo__WEBPACK_IMPORTED_MODULE_5__["Recurrence"], {
  recurrence: content.recurrence,
  start: content.start,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 98,
    columnNumber: 11
  }
})), content.location && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Header"], {
  dividing: true,
  sub: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 103,
    columnNumber: 11
  }
}, intl.formatMessage(messages.where)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 106,
    columnNumber: 11
  }
}, content.location)), content.contact_name && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Header"], {
  dividing: true,
  sub: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 111,
    columnNumber: 11
  }
}, intl.formatMessage(messages.contactName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 114,
    columnNumber: 11
  }
}, content.contact_email ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "mailto:".concat(content.contact_email),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 116,
    columnNumber: 15
  }
}, content.contact_name) : content.contact_name)), content.contact_phone && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Header"], {
  dividing: true,
  sub: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 127,
    columnNumber: 11
  }
}, intl.formatMessage(messages.contactPhone)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 130,
    columnNumber: 11
  }
}, content.contact_phone)), content.attendees.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Header"], {
  dividing: true,
  sub: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 135,
    columnNumber: 11
  }
}, intl.formatMessage(messages.attendees)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["List"], {
  items: content.attendees,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 138,
    columnNumber: 11
  }
})), content.event_url && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Header"], {
  dividing: true,
  sub: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 143,
    columnNumber: 11
  }
}, intl.formatMessage(messages.website)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 146,
    columnNumber: 11
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: content.event_url,
  target: "_blank",
  rel: "noopener noreferrer",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 147,
    columnNumber: 13
  }
}, intl.formatMessage(messages.visitWebsite))))), content.text && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  dangerouslySetInnerHTML: {
    __html: Object(_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_3__["flattenHTMLToAppURL"])(content.text.data)
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 159,
    columnNumber: 7
  }
}));
/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */


EventView.propTypes = {
  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    text: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
    }),
    attendees: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string).isRequired,
    contact_email: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    contact_name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    contact_phone: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    end: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    event_url: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    location: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    open_end: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    recurrence: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
    start: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    subjects: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string).isRequired,
    whole_day: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_2__["injectIntl"])(EventView));

/***/ })

};;
//# sourceMappingURL=vendors~plone-volto-components-theme-View-EventView.js.map