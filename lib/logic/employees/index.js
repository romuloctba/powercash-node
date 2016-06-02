var request = require('request');
var CFG = require('../../../config.json')

module.exports = function(customerId){
  return {
    list: function(cb) {
      request.get(CFG.apiURL+'/customers/'+customerId+'/employees', function (error, response, body) {
        return cb(error, body);
      })
    }

  }
}