//File : src/controller.js

(function(x){
  'use strict';

  x.Controller = function(controllerName,htmlElement){

    //Check if this controller is being generated by DOM or API
    if (arguments[1].tagName || arguments[1] == 'API_CALL'){

      this.htmlElement = htmlElement;
      this.controllerName = controllerName;

      return {
        appendModel : function(model){
          this[model.getModelName()] = model; 
        }
      };
      
    }else{

      if (x.controllers[controllerName] === undefined){
        //Controller dont exists
        x.controllers[controllerName] = new x.Controller(controllerName,'API_CALL');
      }


      arguments[1][arguments[1].length-1].apply(x.controllers[controllerName],x.core.checkDependencies(arguments[1]));
      // arguments[1][arguments[1].length-1].call(x.controllers[controllerName]);
      return x.controllers[controllerName];
    }
  };

})(this.x);