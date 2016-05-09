var app = angular.module("app");


app.factory("inboxfact", ['$http', function($http){
	var exports = {};


	exports.getMessages = function(){
		return $http.get('json/emails.json')
			.error(function(data){
				console.log("Error!!!", data)
			});

	};

	return exports;

}]);