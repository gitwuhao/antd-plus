define(function () {
  return function (value, index) {
    return (value && Array.prototype.slice.call(value, index > 0 ? index : 0)) || [];
  };
});
