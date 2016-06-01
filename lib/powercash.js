"use strict";

var request = require('request');


var PowerCash = function(authorization, options){

    if( !(this instanceof PowerCash) ){
        return new PowerCash(authorization, options);
    }

    if (typeof authorization !== Object) {
      throw new Error('Authorization object not provided. Please provide { type: , name:, key: }');
    }

    if(options == undefined || typeof options.customerId !== String) {
      throw new Error('Customer Code not provided. Please provide options.customerId');
    }

    function metodo(){
      console.log("Metodo do PowerCash");
      console.log("authorization ", authorization);
      console.log("options ", options);
    }
    //list public API calls
    this.metodo = metodo;
    return this;
}

module.exports = PowerCash;
