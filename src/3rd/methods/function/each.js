define(function () {
  return function (array, callback, thisArg) {
    if (!array || !callback) {
      return;
    }

    var len = array.length >>> 0;
    var k = 0;
    var next=function(){
      k++;
      return array[k];
    };
    // 7. Repeat, while k < len
    while (k < len) {

      // a. Let Pk be ToString(k).
      //    This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the HasProperty
      //    internal method of O with argument Pk.
      //    This step can be combined with c
      // c. If kPresent is true, then
      if (k in array) {

        // i. Let kValue be the result of calling the Get internal
        // method of O with argument Pk.
        var kValue = array[k];

        // ii. Call the Call internal method of callback with T as
        // the this value and argument list containing kValue, k, and O.
        if (callback.call(thisArg, k, kValue, array,next) === false) {
          return;
        }
      }
      // d. Increase k by 1.
      k++;
    }
    // 8. return undefined
  };
});
