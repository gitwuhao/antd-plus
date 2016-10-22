define([
  '../object/hasOwnProperty'
], function (hasOwnProperty) {

  return function iterator(data, callback, thisArg) {
    if (!data || !callback) {
      return;
    }
    for (var key in data) {
      if (hasOwnProperty.call(data, key) && callback.call(thisArg, key, data[key], data) === false) {
        return;
      }
    }
  };

});
/*


*/
