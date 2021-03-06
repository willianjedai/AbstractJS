//File : src/core/coreMethods/x.core.addController.js

(function(x){
	'use strict';

	x.core.addController = function(controllerName,htmlElement){

		if (x.controllers[controllerName] === undefined){
			x.controllers[controllerName] = new x.Controller(controllerName,htmlElement);
		}
		x.core.mapper.map(htmlElement,x.controllers[controllerName]);
		
		return x.controllers[controllerName];
	};

})(this.x);