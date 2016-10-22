import rules from "./rules"
export default function() {
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
    "rule": rules()
  }
}
