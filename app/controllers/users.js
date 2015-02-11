module.exports = function(app){
	var User	= app.models.user; 
	

	var UserController = {


		apiListUsers: function(req,res){
			User.find({},{nome: 1, email: 1, registro_id: 1, created_at:1},function(err, users){
				if(err) {
					console.log("Erro ao listar usuarios: " + err);
				} else {
					res.json(users);
				}
			});
		},
		apiAddUser: function(req,res){
			console.log(req.body);
			var u = new User;
			u.nome				= req.body.nome;
			u.email 			= req.body.email;
			u.password 			= req.body.password;
			u.save(function(err, user){
				if(err) {
					//req.flash('info', 'Erro:' + err);
					//res.redirect('/');
					var result = {
						result: false,
						error: err
					}
					res.json(result);
				} else {
					var result = {
						result: true,
						user: user
					}
					res.json(result);
				}
			});
		},
		apiListUser: function(req,res){},
		apiDeleteUser: function(req,res){},
		apiUpdateUser: function(req,res){

			
			User.findById(req.params.id, function(err, u){

				u.registro_id				= req.body.registro_id;

				u.save(function(err, user){
					if(err) {
					//req.flash('info', 'Erro:' + err);
					//res.redirect('/');
						var result = {
							result: false,
							error: err
						}
						res.json(result);
					} else {
						var result = {
							result: true,
							user: user
						}
						res.json(result);
					}
				})
			});

			
		},


		apiLoginUsers: function(req, res){
			var result = {
				result: true
			};
			res.json(result);
		},


		index: function(req,res){
			User.find(function(err, users){
				if(err) {
					console.log("Erro ao listar usuarios: " + err);
				} else {
					res.json(users);
				}
			});
		},
		cadastrar: function(req,res){
			res.render('user/cadastrar',	{
												menu: 'usuario',
												user: req.user
											}
			);
		},
		add: function(req,res){
			var u = new User;


			u.nome				= req.body.nome;
			u.email 			= req.body.email;
			u.password 			= req.body.password;
			
			u.save(function(err, user){
				if(err) {
					//req.flash('info', 'Erro:' + err);
					//res.redirect('/');
					res.json(err);
				} else {
					res.json(user);
				}
			});

		},
		visualizar: function(req,res) {
			User.findById(req.params.id, function(err, result){
				if(err) { console.log(err) }
				else {
					res.render('user/visualizar', 	{
														menu: 'usuario',
														usuario: result,
														user: req.user
													}
					)
				}
			});
			
		},
		editar: function(req,res) {
			User.findById(req.params.id, function(err, result){
				if(err) { console.log(err) }
				else {
					res.render('user/editar', 	{
														menu: 'config',
														usuario: result,
														user: req.user,
														itens: [ 'Selecione o sexo', 'M', 'F']
													}
					)
				}
			});
			
		},
		update: function(req, res){
			User.findById(req.body._id, function(err, u){

				u.nome				= req.body.nome;
				


				u.email 			= req.body.email;
					
				u.password 			= req.body.password;


				u.save(function(err, user){
					if(err) { console.log(err);}
					else {
						req.flash('info', 'Usuário editado com sucesso!');
						res.render('user/visualizar', 	{
														menu: 'config',
														usuario: user,
														user: req.user
													}
						)
					}
				})
			});
		}
	};

	return UserController;
}