define(function() {
  return function(action) {
    var factory = function(name, data) {
    	if (process.env.NODE_ENV !== 'production') {
	      if (factory.isDisable) {
	        return;
	      }
	      console.debug(`[${action}] => ${name}`, data || '');
      }
    }
    factory.disable = function() {
      factory.isDisable = true;
    };
    return factory;
  };
});
/*


*/
