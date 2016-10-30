webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(823);


/***/ },

/***/ 823:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _struct = __webpack_require__(824);
	
	var _struct2 = _interopRequireDefault(_struct);
	
	var _property = __webpack_require__(825);
	
	var _property2 = _interopRequireDefault(_property);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },

/***/ 824:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getStructConfig;
	function getStructConfig() {
	  return [{
	    label: "表单",
	    key: "form",
	    children: [{
	      type: 'text'
	    }, {
	      type: 'textare'
	    }, {
	      type: 'button'
	    }, {
	      type: 'number',
	      label: 'number'
	    }, {
	      type: 'datepicker',
	      icon: 'calendar'
	    }, {
	      type: 'checkbox'
	    }, {
	      type: 'checkbox.group',
	      children: ['checkbox']
	    }, {
	      type: 'radio'
	    }, {
	      type: 'radio.button'
	    }, {
	      type: 'radio.group',
	      children: ['radio.button', 'radio']
	    }, {
	      type: 'select'
	    }, {
	      type: 'form',
	      children: ['text', 'textare', 'button', 'number', 'datepicker', 'checkbox.group', 'radio.group', 'select']
	    }]
	  }, {
	    label: "栅格",
	    key: "layout",
	    children: [{
	      type: 'row'
	    }, {
	      type: 'col'
	    }]
	  }, {
	    label: "表单",
	    children: [{
	      type: 'text'
	    }, {
	      type: 'button'
	    }, {
	      type: 'button'
	    }, {
	      type: 'button'
	    }, {
	      type: 'button'
	    }, {
	      type: 'button'
	    }, {
	      type: 'button'
	    }]
	  }, {
	    label: "表单",
	    children: [{
	      type: 'text'
	    }, {
	      type: 'button'
	    }, {
	      type: 'button'
	    }, {
	      type: 'button'
	    }, {
	      type: 'button'
	    }, {
	      type: 'button'
	    }, {
	      type: 'button'
	    }]
	  }];
	}
	
	window.getStructConfig = getStructConfig;

/***/ },

/***/ 825:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getPropertyConfig;
	
	var _propertys = __webpack_require__(826);
	
	var propertys = _interopRequireWildcard(_propertys);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function getPropertyConfig() {
	  return propertys;
	}
	
	window.getPropertyConfig = getPropertyConfig;

/***/ },

/***/ 826:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.form = exports.text = exports.select = exports.number = exports.checkbox = undefined;
	
	var _checkbox2 = __webpack_require__(827);
	
	var _checkbox3 = _interopRequireDefault(_checkbox2);
	
	var _number2 = __webpack_require__(828);
	
	var _number3 = _interopRequireDefault(_number2);
	
	var _select2 = __webpack_require__(830);
	
	var _select3 = _interopRequireDefault(_select2);
	
	var _text2 = __webpack_require__(832);
	
	var _text3 = _interopRequireDefault(_text2);
	
	var _form2 = __webpack_require__(833);
	
	var _form3 = _interopRequireDefault(_form2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.checkbox = _checkbox3.default;
	exports.number = _number3.default;
	exports.select = _select3.default;
	exports.text = _text3.default;
	exports.form = _form3.default;

/***/ },

/***/ 827:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  return {
	    "prop": [{
	      "label": "type",
	      "type": "enum",
	      "data": ["checkbox", "radio"]
	    }, {
	      "label": "label"
	    }, {
	      "label": "name"
	    }, {
	      "label": "value"
	    }, {
	      "label": "data",
	      "type": "json",
	      "data": [{
	        "value": "1",
	        "text": "option1"
	      }, {
	        "value": "2",
	        "text": "option2"
	      }]
	    }],
	    "event": [{
	      "label": "onChange",
	      "type": "boolean",
	      "value": false
	    }]
	  };
	};

/***/ },

/***/ 828:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  return {
	    "prop": [{
	      "label": "label"
	    }, {
	      "label": "name"
	    }, {
	      "label": "min",
	      "type": "number"
	    }, {
	      "label": "max",
	      "type": "number"
	    }, {
	      "label": "value",
	      "type": "number"
	    }, {
	      "label": "step"
	    }, {
	      "label": "disabled",
	      "type": "boolean"
	    }],
	    "event": [{
	      "label": "onChange",
	      "type": "boolean",
	      "value": false
	    }],
	    "rule": (0, _rules2.default)()
	  };
	};
	
	var _rules = __webpack_require__(829);
	
	var _rules2 = _interopRequireDefault(_rules);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },

/***/ 829:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  return [{
	    "label": "required",
	    "type": "boolean",
	    "value": false
	  }, {
	    "label": "type",
	    "type": "enum",
	    "data": ["string", "number", "boolean", "method", "regexp", "integer", "float", "array", "object", "enum", "date", "url", "hex", "email"]
	  }, {
	    "label": "length",
	    "type": "number"
	  }, {
	    "label": "message",
	    "type": "string"
	  }];
	};

/***/ },

/***/ 830:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  return {
	    "prop": [{
	      "label": "label"
	    }, {
	      "label": "name"
	    }, {
	      "label": "multiple",
	      "tip": "支持多选",
	      "type": "boolean",
	      "value": false
	    }, {
	      "label": "allowClear",
	      "tip": "支持清除, 单选模式有效",
	      "type": "boolean",
	      "value": false
	    }, {
	      "label": "enum",
	      "type": "enum",
	      "data": ["checkbox", "radio"]
	    }, {
	      "label": "enum2",
	      "type": "enum",
	      "multiple": true,
	      "tags": true,
	      "value": ["option1", "optionN"],
	      "data": ["option1", "option2", "option3"]
	    }, {
	      "label": "data",
	      "type": "json",
	      "value": [{
	        "value": "1",
	        "text": "option1"
	      }, {
	        "value": "2",
	        "text": "option2"
	      }]
	    }, {
	      "label": "attributes",
	      "type": "enum",
	      "multiple": true,
	      "value": ["className", "value"],
	      "data": (0, _attrs2.default)(),
	      "link": "https://facebook.github.io/react/docs/tags-and-attributes.html#html-attributes"
	    }],
	    "event": [{
	      "label": "onChange",
	      "type": "boolean",
	      "value": false
	    }, {
	      "label": "onSelect",
	      "type": "boolean",
	      "value": false
	    }, {
	      "label": "onDeselect",
	      "type": "boolean",
	      "value": false
	    }],
	    "method": [{
	      "label": "getPopupContainer",
	      "type": "boolean",
	      "value": false
	    }]
	  };
	};
	
	var _attrs = __webpack_require__(831);
	
	var _attrs2 = _interopRequireDefault(_attrs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },

/***/ 831:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  return "accept acceptCharset accessKey action allowFullScreen allowTransparency alt\nasync autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\ncharSet checked cite classID className colSpan cols content contentEditable\ncontextMenu controls coords crossOrigin data dateTime default defer dir\ndisabled download draggable encType form formAction formEncType formMethod\nformNoValidate formTarget frameBorder headers height hidden high href hrefLang\nhtmlFor httpEquiv icon id inputMode integrity is keyParams keyType kind label\nlang list loop low manifest marginHeight marginWidth max maxLength media\nmediaGroup method min minLength multiple muted name noValidate nonce open\noptimum pattern placeholder poster preload profile radioGroup readOnly rel\nrequired reversed role rowSpan rows sandbox scope scoped scrolling seamless\nselected shape size sizes span spellCheck src srcDoc srcLang srcSet start step\nstyle summary tabIndex target title type useMap value width wmode wrap".split(/\s+/g);
	};

/***/ },

/***/ 832:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  return {
	    "prop": [{
	      "label": "label"
	    }, {
	      "label": "name"
	    }, {
	      "label": "value"
	    }, {
	      "label": "addonBefore",
	      "type": "node"
	    }, {
	      "label": "addonAfter",
	      "type": "node"
	    }, {
	      "label": "disabled",
	      "type": "boolean"
	    }],
	    "event": [{
	      "label": "onChange",
	      "type": "boolean",
	      "value": false
	    }, {
	      "label": "onPressEnter",
	      "type": "boolean",
	      "value": false
	    }],
	    "rule": [].concat(_toConsumableArray(_rules2.default))
	  };
	};
	
	var _rules = __webpack_require__(829);
	
	var _rules2 = _interopRequireDefault(_rules);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	;

/***/ },

/***/ 833:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  return {
	    "prop": [{
	      "label": "label"
	    }, {
	      "label": "name"
	    }, {
	      "label": "value"
	    }, {
	      "label": "data",
	      "type": "json",
	      "data": [{
	        "value": "1",
	        "text": "option1"
	      }, {
	        "value": "2",
	        "text": "option2"
	      }]
	    }],
	    "event": [{
	      "label": "onChange",
	      "type": "boolean",
	      "value": false
	    }]
	  };
	};

/***/ }

});
//# sourceMappingURL=conf.395ef9b476838f9e5750.js.map