define([
  './array',
  '../utils',
  'jquery'
], function (ArrayAdapter, Utils, $) {
  function QueryAdaptor ($element, options) {
    this.queryOptions = (options.get('customQuery'));

    if (this.queryOptions.processResults != null) {
      this.processResults = this.queryOptions.processResults;
    }

    QueryAdaptor.__super__.constructor.call(this, $element, options);
  }

  Utils.Extend(QueryAdaptor, ArrayAdapter);

  QueryAdaptor.prototype.processResults = function (results) {
    return {results: results};
  };

  QueryAdaptor.prototype.query = function (params, callback) {
    var matches = [];
    var self = this;

    if(self.queryOptions.query) {
      matches = self.queryOptions.query(params.term);
    }

    callback(self.processResults(matches, params));

   };

  return QueryAdaptor;
});
