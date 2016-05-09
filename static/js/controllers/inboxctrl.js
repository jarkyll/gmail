var app = angular.module("app", []);

app.controller('InboxCtrl', ['$scope','inboxfact' , function($scope, inboxfact){
	$scope.title = "This is a title"
	inboxfact.getMessages()
		.success(function(jsonData, statuscode){
			// returns a sucess
			console.log("sucessful request", statuscode, jsonData)
		$scope.emails = jsonData;
		});

}]);