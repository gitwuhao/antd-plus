  define(function() {
    var guid = 1000;
    return function() {
      return guid++;
    };
  });
