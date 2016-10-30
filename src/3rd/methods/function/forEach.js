define([
  '../object/hasOwnProperty',
  './each',
  './iterator',
  './types'
], function (hasOwnProperty, each,iterator, types) {

  

  return function (data, callback, thisArg) {
    if (!data || !callback) {
      return;
    }
    thisArg = thisArg || data;
    if (types.isArray(data)) {
      each(data, callback, thisArg);
    } else {
      iterator(data, callback, thisArg);
    }
  };
});
/*


*/
