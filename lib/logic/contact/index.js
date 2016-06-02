var request = require('request');
var CFG = require('../../config.json')

module.exports = function(customerId){
  return {
    create: function(contact, cb) {
      request.post(CFG.apiURL+'/customers/'+customerId+'/contacts', contact, function (error, response, body) {
        return cb(error, body);
      })
    },
    show: function()
  }
}
