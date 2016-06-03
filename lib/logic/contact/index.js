var request = require('request');
var CFG = require('../../../config.json')

module.exports = function(customerId){
  return {
    create: function(contact, cb) {
      var postObj = {
        name      : contact.name,
        email     : contact.email,
        notes     : contact.notes,
        branch    : contact.branch,
        rejects   : contact.rejects,
        employee  : contact.employee,
        location  : contact.location,
        customer  : contact.customer,
        keyFields : contact.keyFields,
        influence : contact.influence,
        occupation: contact.occupation
      }
      request.post({url: CFG.apiURL+'/customers/'+customerId+'/contacts', headers: PowerCash.headers }, postObj, function (error, response, body) {
        return cb(error, body);
      })
    }

  }
}
