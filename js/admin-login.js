//Luodaan kirjautumisen moduuli
var kirjautuminen = angular.module('kirjautuminen', ['ngRoute']);

//Määritellään reititys
kirjautuminen.config(function ($routeProvider) {
	$routeProvider
	//Jos yritetään ohjata admin-paneeliin
	.when('/admin-panel', {
		resolve: {
			//Tehdään tarkistus
			"check": function($location, $rootScope) {
				//Jos sisäänkirjaus ei ole true
				if(!$rootScope.loggedIn) {
					//Ohjataan reitille "/"
					$location.path('/');
				} //if
			} //check
		},
		//Jos sisäänkirjaus on ok, ohjataan admin-paneeliin
		templateUrl: 'admin-panel.html'
	}) //when "/admin-panel"
	//Jos ohjataan reitille "/"
	.when('/', {
		//Ohjataan kirjautumissivulle
		templateUrl: 'login.html'
	}) //when "/"
	//Muissa tapauksissa ohjataan reitille "/"
	.otherwise({
		redirectTo: '/'
	}); //otherwise
}); //Config loppuu

//Luodaan login-page diville controller
kirjautuminen.controller('LoginView', function($scope, $location, $rootScope) {
	//Kun kirjautumis-nappia painetaan
	$scope.submit = function() {
		
		//Jos annettu tunnus ja salasana täsmäävät
		if($scope.username == 'admin' && $scope.password == 'pass') {
			//Globaalisti kirjautunut sisään
			$rootScope.loggedIn = true;
			//Muutetaan polku admin-paneeliin
			$location.path('/admin-panel');
		} else {
			//Jos tunnus tai salasana on väärin, annetaan virhe
			alert("Väärä tunnus tai salasana");
		} //else
	}; // submit
}); //Controller loppuu