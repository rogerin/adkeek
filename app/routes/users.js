module.exports = function (app) {


  var controller = app.controllers.users;

  app.route('/v1/users')
    .get(controller.apiListUsers);  

  app.route('/v1/user/login')
    .post(controller.apiLoginUsers);  




  app.route('/v1/user')
  	.post(controller.apiAddUser);


  app.route('/v1/user/:id')
	.put(controller.apiUpdateUser)
	.get(controller.apiListUser)
	.delete(controller.apiDeleteUser);

	
};