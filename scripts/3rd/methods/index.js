define([
    './function/copyArray',
    './function/each',
    './function/iterator',
    './function/forEach',
    './function/getGuid',
    './function/interface',
    './function/noop',
    './function/types',
    './function/stringToArray',
    './object/assign',
    './object/hasOwnProperty',
    './object/toString'
  ],
  function (copyArray, each,iterator, forEach, getGuid, fnInterface, noop, types,stringToArray, assign, hasOwnProperty, toString) {
    return assign({
      copyArray: copyArray,
      each: each,
      iterator:iterator,
      forEach: forEach,
      getGuid: getGuid,
      interface: fnInterface,
      noop: noop,
      types: types,
      stringToArray:stringToArray,
      assign: assign,
      hasOwnProperty: hasOwnProperty,
      toString: toString
    }, types);
  });
/*
var array=[    
  './copyArray',
  './each',
  './forEach',
  './getGuid',
  './interface',
  './noop',
  './types',
  '../object/assign',
  '../object/hasOwnProperty',
  '../object/toString'
];
var exportArray=[];
for (var i = 0,size=array.length;i<size;i++) {
  var item=array[i];
  var args=item.split(/\W+/g);
  array[i]=args[args.length-1];
  exportArray.push(array[i]+':'+array[i]);
}
var fn='function ('+array.join(',')+') { return {'+exportArray.join(',')+'};}'
console.info(fn);
*/
