//Luodaan yhteystietosivun moduuli
var yTiedot = angular.module('yTiedot', ['ngRoute']);

//Luodaan contact-info diville controller
yTiedot.controller('InfoView', function ($scope) {
	//Luodaan taulukko yhteyshenkilöistä
	$scope.contacts = [
		{name: "Teemu Ruonti", phone: "Puh. 123-456-789", email: "teemu.ruonti@liekkikämmen.com"},
		{name: "Antti Pakkanen", phone: "Puh. 444-555-666", email: "antti.pakkanen@liekkikämmen.com"},
		{name: "Arttu Seppä-Lassila", phone: "Puh. 404-112-313", email: "arttu.lassila@liekkikämmen.com"},
		{name: "Ilari Nikander", phone: "Puh. 936-825-714", email: "ilari.nikander@liekkikämmen.com"}
	]; //contacts
}); //Controller loppuu

//Luodaan animaatiot yhteystiedoille
$(document).ready(function() {
	//Aluksi piilotetaan kaikkien henkilöiden yhteystiedot
	$('#hlö').hide();

	//Klikataan Teemun nappia
	$('#teemu').click(function () {
		//Piilotetaan kaikkien henkilöiden yhteystiedot
		$('#hlö').hide();
		//Vieritetään alas Teemun yhteystiedot
		$('.teemu').slideDown(500);

	}); //click

	//Klikataan Antin nappia
	$('#antti').click(function () {
		//Piilotetaan kaikkien henkilöiden yhteystiedot
		$('#hlö').hide();
		//Vieritetään alas Antin yhteystiedot
		$('.antti').slideDown(500);

	}); //click

	//Klikataan Artun nappia
	$('#arttu').click(function () {
		//Piilotetaan kaikkien henkilöiden yhteystiedot
		$('#hlö').hide();
		//Vieritetään alas Artun yhteystiedot
		$('.arttu').slideDown(500);

	}); //click

	//Klikataan Ilarin nappia
	$('#ilari').click(function () {
		//Piilotetaan kaikkien henkilöiden yhteystiedot
		$('#hlö').hide();
		//Vieritetään alas Ilarin yhteystiedot
		$('.ilari').slideDown(500);

	}); //click

}); //ready loppuu

//Määritellään reititys
yTiedot.config(function ($routeProvider) {
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
yTiedot.controller('LoginView', function($scope, $location, $rootScope) {
	//Kun kirjautumis-nappia painetaan
	$scope.submit = function() {

		//Jos annettu tunnus ja salasana täsmäävät
		if($scope.username == 'admin' && $scope.password == 'pass') {
			//Globaalisti kirjautunut sisään
			$rootScope.loggedIn = true;
			//Muutetaan polku admin-paneeliin
      window.location.href= "./admin-panel.html"
		} else {
			//Jos tunnus tai salasana on väärin, annetaan virhe dialogi
			$( function (){
        $("#errordialog").dialog({
          resizable: false,
          height: "auto",
          width: 300,
          // Himmennetään loppunäyttö
          modal: true
        }); // dialog
      }); // anonyymi funktio

		} // else
	}; // submit
}); //Controller loppuu
