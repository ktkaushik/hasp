
/**
 *
 */

var _ = require('underscore')
  , async = require('async');

module.exports = function (beforeFilters, afterFilters, actionHandler) {

  return function() {

    var _this = this,
        args = arguments;

    var wrapper = _.wrap(actionHandler, function(func) {
      async.series( beforeFilters );
      func.apply(this, args);
      async.series( afterFilters );
    });

    wrapper();
  };

};
