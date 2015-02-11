module.exports = function(app){
	var mongoose = require('mongoose');
	var Schema = mongoose.Schema;
	var pass = require('./../../config/password');

	function configPass (v) {
	  return pass.hash(v);
	}

	
	var user = new Schema(
	{
		nome: 				{ type: String,	default: ""},
		registro_id: 		{ type: String, default: ""},
		email: 				{ type: String, unique: true },
		password: 			{ type: String, set: configPass},
		is_admin: 			{ type: Boolean, default: false },
		created_at: 		{ type: Date, default: Date.now },
		update_at: 			{ type: Date, default: "" }

	});

	return mongoose.model('User', user);
}