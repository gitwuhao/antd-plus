import rules from "./rules"
export default function() {
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
    "rule": [...rules]
  }
};
