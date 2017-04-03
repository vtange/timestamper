(function() {
    //start of function
  var app = angular.module('timestamper', []);

app.controller('MainCtrl', ['$scope', '$http', '$window', function($scope, $http, $window){
	$scope.input = {};
	$scope.arrTimes = [];
	$scope.getJSON = function(){
		$scope.arrTimes = [];
		$http.post($window.location.href+"search",$scope.input).success(function(data){
			if(!data.unix||!data.natural)
			{
				$scope.result = {natural:"Bad input on search."};
			}
			$scope.result = data;
			var time = moment(data.natural);
			var tzs = [
		"US/Alaska",
		"America/Los_Angeles",
		"US/Central",
		"America/New_York",
		"America/Buenos_Aires",
		"America/Sao_Paulo",
		"Europe/London",
		"Europe/Warsaw",
		"Europe/Kiev",
		"Europe/Moscow",
		"Asia/Dhaka",
		"Asia/Hong_Kong",
		"Asia/Tokyo",
		"Australia/Sydney",
		"US/Hawaii"
	];
		tzs.forEach(function(tzName){
			$scope.arrTimes.push({timezoneName:tzName,date:time.tz(tzName).format()})
		});
		}).error(function(data){
			alert("error getting timestamp");
		});
	}

}]);//end of controller
  //end of function
})();
