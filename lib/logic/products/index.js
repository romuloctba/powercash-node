var request = require('request');
var CFG = require('../../../config.json')

module.exports = function(customerId){
  return {
    list: function(cb) {
      var url = CFG.apiURL+'customers/'+customerId+'/products';
      console.log("url for employee.list ", url);
      request.get(url, function (error, response, body) {
        return cb(error, body);
      })
    }

  }
}
