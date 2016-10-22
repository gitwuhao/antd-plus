export default function() {
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
  }]
}
