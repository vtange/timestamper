(function() {
    //start of function
  var app = angular.module('timestamper', []);

app.controller('MainCtrl', ['$scope', '$http', '$window', function($scope, $http, $window){
	$scope.getJSON = function(){
		//$window.location.href is self
		$window.open($window.location.href+$scope.userInputTime)
		
		// doesn't work, only gets more data
		//$http.get(baseUrl+$scope.userInputTime)
	}

}]);//end of controller
  //end of function
})();
