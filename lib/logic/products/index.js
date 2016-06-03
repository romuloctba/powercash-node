var request = require('request');
var CFG = require('../../../config.json')

module.exports = function(customerId){
  return {
    list: function(cb, options) {
      var url = CFG.apiURL+'customers/'+customerId+'/products';
      if(options){
        url = url + '?';
        console.log("options are ", options);
        if(options.name){
          url = url+'name='+options.name;
        }
      }
      console.log("url for employee.list ", url);
      request.get({url: url, headers: PowerCash.headers }, function (error, response, body) {
        return cb(error, body);
      })
    }

  }
}
