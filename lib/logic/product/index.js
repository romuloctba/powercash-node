var request = require('request');
var CFG = require('../../../config.json')

module.exports = function(customerId){
  return {
    list: function(cb) {
      var url = CFG.apiURL+'customers/'+customerId+'/products';
      request.get({url: url, headers: auth }, function (error, response, body) {
        return cb(error, body);
      })
    }

  }
}