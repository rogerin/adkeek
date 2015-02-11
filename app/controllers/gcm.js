module.exports = function(app){
	var User	= app.models.user;
	var gcm = require('node-gcm');
	var message = new gcm.Message();


	
	var GcmController = {


		apiSendPush: function(req,res){
			User.findById(req.body.user._id,function(err, user){
				if(err) {
					console.log("Erro ao listar usuarios: " + err);
				} else {
					//res.json(users);

					message.addData({
					    message: req.body.user.msg,
					    msgcnt: Math.floor((Math.random() * 1000) + 1),
						title: "adKeek para você!"
					});


					// Change the message variables
					message.collapseKey = 'demo';
					message.delayWhileIdle = true;
					message.timeToLive = 4;
					//message.dryRun = true;

					// Set up the sender with you API key
					var sender = new gcm.Sender('AIzaSyDsMk4Ncyyvw22AVmmnZMfSl6F674Nm89I');

					// Add the registration IDs of the devices you want to send to
					var registrationIds = [];

					// rogerio
					registrationIds.push('APA91bF1AjIQ2hIn6--t2OTEckIuhjDJoEdYarHiRRMaULRqYXL-FCqraKzE5MlRHdA0CUhv_ukvgUz5yEZaIyOkGsfd6dSilVFfDVw_OT5z9STkQP-HzAkplqLmO_VbKdQ5K5KC8fKplg3z2_iRuXHdJlr3-h-CVKoVxdM0GLlJKVHo4oEarLo');

					// joao
					registrationIds.push(user.registro_id);


					sender.send(message, registrationIds, function (err, result) {
					  if(err) {
					  	console.error('erro');
					  	res.json(err);
						}
					  else {
		 				console.log('nao erro');   
						res.json(result);
					  }
					});
				}
			});
		}

	};

	return GcmController;
}
