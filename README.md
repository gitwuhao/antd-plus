# antd-plus
基于antd开发的UI设计器

### 前端未来
> 经历了近10年的发展，前端从刀耕火种到百花齐放，繁荣下孕育着一些趋势和变革。站在现在看未来，前端的边界在哪里，如何跨越这边界？如何看前后端分离？如何看全栈？前端工程师的未来是怎样的？

[原文](http://www.infoq.com/cn/news/2016/06/ali-front-end-engineer)

### 从 CLI 到 GUI
前人通过对计算机使用经验的总结开发出了图形界面，让后来者无需记忆各种指令从而提升对计算机的使用效率。

### 可视化开发

> 编程技术及生态发展的三个阶段
> - 最初的时候人们忙着补全各种API，代表着他们拥有的东西还很匮乏，需要在语言跟基础设施上继续完善
> - 然后就开始各种模式，标志他们做的东西逐渐变大变复杂，需要更好的组织了
> - 然后就是各类分层MVC，MVP，MVVM之类，可视化开发，自动化测试，团队协同系统等等，说明重视生产效率了，也就是所谓工程化

[原文](http://www.infoq.com/cn/articles/2015-review-frontend)

>前端一直是一个变化很快的职能，它太年轻，年轻意味着可能性和机会，也意味着不成熟和痛苦。我经常担心的事情就是，很可能走到最后，我们会发现，我们做了很多，却还是一无所获。所幸至今回顾，每年还是总有点不同，也算给行业贡献了些经验值吧。

## 设计思路

### 生产方式
不管是制造业，抑或者是建筑业，都有标准化和个性化两种生产方式，标准化满足大部分的基础需求，个性化满足高端体验式需求。

一部分拥有设计能力的人（设计师），负责个性化生产(原型)；

其它不具备设计能力的人（开发人员），负责标准化生产（流水线作业）；

设计师根据需求不断开发新的UI，开发人员用UI库中的UI生产具体业务需要的UI模块。

开发人员 通过可视化设计器让去组织UI模块， 通过UI的属性配置来满足部分个性化需求，以此来解决API文档维护和人员培训带来的成本。

## 组件配置

### 结构
```
[{
  "label": "表单",
  "key": "form",
  "children": [{
  "type": "text"
  }, {
  "type": "textare"
  }, {
  "type": "button"
  }, {
  "type": "number",
  "label": "number"
  }, {
  "type": "datepicker",
  "icon": "calendar"
  }, {
  "type": "checkbox"
  }, {
  "type": "checkbox.group",
  "children": ["checkbox"]
  }, {
  "type": "radio"
  }, {
  "type": "radio.button"
  }, {
  "type": "radio.group",
  "children": ["radio.button", "radio"]
  }, {
  "type": "select"
  }, {
  "type": "form",
  "children": ["text", "textare", "button", "number", "datepicker", "checkbox.group", "radio.group", "select"]
  }]
}, {
  "label": "栅格",
  "key": "layout",
  "children": [{
  "type": "row"
  }, {
  "type": "col"
  }]
}, {
  "label": "布局",
  "children": [{
  "type": "layout"
  }]
}]
```

### 属性
```
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
  "data": ["title", "type", "className", "multiple"],
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
}

```

## Links

- [主页](http://oilan.com.cn/antd-plus/)
- [ant](https://ant.design/)
