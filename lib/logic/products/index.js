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
        if(options.page){
          url = url+'page='+options.page;
        }
        if(options.limit){
          url = url+'limit='+options.limit;
        }
      }
      console.log("url for employee.list ", url);
      request.get({url: url, headers: PowerCash.headers }, function (error, response, body) {
        return cb(error, body);
      })
    },
    get: function(id, cb, options){
      var url = CFG.apiURL+'customers/'+customerId+'/products/'+id;
      console.log("url for employee.list ", url);

      request.get({url: url, headers: PowerCash.headers }, function (error, response, body) {
        return cb(error, body);
      })

    }

  }
}
