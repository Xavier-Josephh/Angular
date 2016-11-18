(function(){
	
	var myApp = angular.module('mgcrea.ngStrapDocs', ['mgcrea.ngStrap.tab','mgcrea.ngStrap.dropdown','smart-table']);
	myApp.controller('MainCtrl', ['$scope', function($scope) {
		$scope.tabs = [ {
			"title" : "Home",
			"content" : "Hello from Home tab"
		}, {
			"title" : "Profile",
			"content" : "Hello from Profile tab"
		}, {
			"title" : "About",
			"content" : "Hello from About tab",
			"disabled" : true
		}, {
			"title" : "Contact",
			"content" : "this is Contact tab"
		} ];
		
	}]);
	
	myApp.controller('btnctrl', ['$scope', function($scope) {
		$scope.dropdown = [ {
			"text" : 'Another action',
			"href" : "#anotherAction",
			"active" : true
		}, {
			"text" : "Display an alert",
			"click" : "$alert(\"Holy guacamole!\")"
		}, {
			"text" : " External link",
			"href" : "https://www.google.co.in/",
			"target" : "_self"
		}, {
			"divider" : true
		}, {
			"text" : "Separated link",
			"href" : "#separatedLink"
		} ];
		
	}]);
	
	
})();


