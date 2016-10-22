export default function getStructConfig() {
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
      children: ['text','textare', 'button', 'number', 'datepicker', 'checkbox.group', 'radio.group', 'select']
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

window.getStructConfig=getStructConfig;