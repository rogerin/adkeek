var app = angular.module('adkeekWeb',['ngRoute', 'ui.bootstrap']) //, 'ngResource'
  .config(function($routeProvider, $httpProvider) {

    //$httpProvider.interceptors.push('meuInterceptor');

    $routeProvider.when('/', {
      templateUrl: 'home.html'
      //controller: 'ContatosController'
    }).when('/login', {
      templateUrl: 'app/users/login.html'
      //controller: 'ContatosController'
    }).when('/dasboard', {
      templateUrl: 'app/home.html'
      //controller: 'ContatosController'
    }).when('/users', {
      templateUrl: 'app/users/list.html',
      controller: 'UserCtrl'
    });



    $routeProvider.otherwise({redirectTo: '/'});
});