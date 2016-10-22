import attrs from "../attrs"
export default function() {
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
    },{
      "label": "allowClear",
      "tip": "支持清除, 单选模式有效",
      "type": "boolean",
      "value": false
    }, {
      "label": "enum",
      "type": "enum",
      "data": ["checkbox", "radio"]
    },{
      "label": "enum2",
      "type": "enum",
      "multiple":true,
      "tags":true,
      "value":["option1","optionN"],
      "data": ["option1", "option2","option3"]
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
    },{
      "label": "attributes",
      "type": "enum",
      "multiple":true,
      "value":["className","value"],
      "data":attrs(),
      "link":"https://facebook.github.io/react/docs/tags-and-attributes.html#html-attributes"
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
  }
}
