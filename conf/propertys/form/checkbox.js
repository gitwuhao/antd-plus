export default function() {
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
  }
}
