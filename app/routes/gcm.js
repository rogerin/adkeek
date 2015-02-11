module.exports = function (app) {


  var controller = app.controllers.gcm;

  app.route('/v1/gcm')
  	.post(controller.apiSendPush);  
	
};