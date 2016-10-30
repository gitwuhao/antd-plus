define([
  '../object/toString',
  './each',
  './stringToArray'
], function (toString, each,stringToArray) {
  var class2type = {};

  function isEmptyValue(value) {
    return (value === null) || (value === undefined) || (value === '');
  };
 
  function isEmptyObject(obj) {
    var key;
    for (key in obj) {
      return false;
    }
    return true;
  };

  var isTypes = {
    isEmpty:function(value){
      return isEmptyValue(value) && isEmptyObject(value);
    },
    isEmptyValue:isEmptyValue,
    isEmptyObject:isEmptyObject,
  };

  function getType(obj) {
    if (obj == null) {
      return String(obj);
    }
    // Support: Safari <= 5.1 (functionish RegExp)
    return typeof obj === "object" || typeof obj === "function" ?
      class2type[toString.call(obj)] || "object" :
      typeof obj;
  }



  each(stringToArray("Boolean Number String Function Array Date RegExp Object Error"), function (i, name) {
    var typeValue = name.toLowerCase();
    class2type["[object " + name + "]"] = typeValue;

    isTypes['is' + name] = function (value) {
      return getType(value) === typeValue;
    };

  });



  return isTypes;
});
