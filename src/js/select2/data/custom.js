define([
  './array',
  '../utils',
  'jquery'
], function (ArrayAdapter, Utils, $) {
  function CustomAdaptor ($element, options) {
    this.customOptions = (options.get('custom'));

    if (this.customOptions.processResults != null) {
      this.processResults = this.customOptions.processResults;
    }

    CustomAdaptor.__super__.constructor.call(this, $element, options);
  }

  Utils.Extend(CustomAdaptor, ArrayAdapter);

  CustomAdaptor.prototype.processResults = function (results) {
    return {results: results};
  };

  CustomAdaptor.prototype.query = function (params, callback) {
    var matches = [];
    var self = this;

    console.log(params.term);

    if(self.customOptions.query) {
      matches = self.customOptions.query(params.term);
    }

    callback(self.processResults(matches, params));

   };

  return CustomAdaptor;
});
