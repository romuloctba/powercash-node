var request = require('request');
var CFG = require('../../../config.json')

module.exports = function(customerId){
  return {
    list: function(contact, cb) {
      request.get(CFG.apiURL+'/customers/'+customerId+'/employees', function (error, response, body) {
        return cb(error, body);
      })
    },
    show: function()
  }
}
