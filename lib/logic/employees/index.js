var request = require('request');
var CFG = require('../../../config.json')

module.exports = function(customerId){
  return {
    list: function(cb) {
      var options = { url: CFG.apiURL+'customers/'+customerId+'/employees', headers: PowerCash.headers };
      request.get(options, function (error, response, body) {
        return cb(error, body);
      })
    },
    get: function(id, cb){
      var options = { url: CFG.apiURL+'customers/'+customerId+'/employees/'+id, headers: PowerCash.headers };
      request.get(options, function (error, response, body) {
        return cb(error, body);
      })
    }

  }
}
