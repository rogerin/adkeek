app.controller('UserCtrl', ['$scope', '$http', '$modal', '$window', function ($scope, $http, $modal,$window) {
	$scope.users = {};
	$scope.registro = null;
$scope.users = [];
            
	
	$scope.init = function() {
		$http.get('/v1/users').
			success(function(data, status, headers, config) {
				$scope.users = data;
			}).
			error(function(data, status, headers, config) {
		
			});
	}

	$scope.sendNotification = function(user) {
		$window.console.log(user);
		
		
		$http.post('/v1/gcm', {user: user}).
			success(function(data, status, headers, config) {
				$window.console.log(data);
			}).
			error(function(data, status, headers, config) {
				$window.console.log(data);
			});
	}




	$scope.open = function () {
		$modal.open({
	      templateUrl: 'myModalContent.html'
	    });
	}
	//$scope.open();


}]);