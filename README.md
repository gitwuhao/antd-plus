# antd-plus
基于antd开发的UI设计器


## 组件配置

### 结构
```js
[{
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
    label: "布局",
    children: [{
      type: 'layout'
    }]
  }]
```


### 属性
```js
 {
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
      "data": ["title","type","className","multiple"],
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
```



## Links

- [主页](http://oilan.com.cn/antd-plus/)
- [ant](https://ant.design/)

