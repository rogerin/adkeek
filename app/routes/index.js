module.exports = function (app) {


	app.get('/', function(req, res) {
		var login = '';
		if(req.user) {
			login = req.user.login;
		} 
		res.render('index', { "usuarioLogado" : login});
	});

	app.get('/teste', function(req, res) {
		var teste = [
			{nome:"rogerio"}
		];
		res.json(teste);
	});

	app.post('/gcm', function(req, res) {
		//var teste = [
		//	{nome:"rogerio"}
		//];
		//res.json(teste);
		console.log(req.body);
		res.end();
	});






	/*
  var controller = app.controllers.contato;

  app.route('/contatos')
  	.get(verificaAutenticacao, controller.listaContatos)
  	.post(verificaAutenticacao, controller.salvaContato)

  app.route('/contatos/:id')
	.get(verificaAutenticacao, controller.obtemContato)
	.delete(verificaAutenticacao, controller.removeContato);

	*/
};