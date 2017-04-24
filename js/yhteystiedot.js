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
	
	//Laitetaan Teemun yhteystieto -nappulan arvo muuttujaan currentvalue
	var currentvalue = $("#teemu").val();
	

//Jos nappulan arvo on "teemu", tiedot on piilossa ja klikkaamalla tiedot tulevat näkyville.	
	if (currentvalue == "teemu"){
	
		//Piilotetaan kaikkien muiden henkilöiden yhteystiedot
		$('#hlö').hide();
		//Annetaan muille nappuloille niiden oletusarvot, jotta uuteen nappulaan siirtyminen sulkematta vanhaa ei aiheuta toimintavirhettä.
		$('#ilari').val("ilari");
		$('#arttu').val("arttu");
		$('#antti').val("antti");
		
		//Vieritetään alas Teemun yhteystiedot
		$('.teemu').slideDown(500);
		//Nappulan arvoksi annetaan "ruonti"
		$('#teemu').val("ruonti");
	}
		//Jos nappulaa painetaan uudestaan, nappulan arvon ollessa "ruonti", tiedot menevät piiloon
	else if (currentvalue == "ruonti"){
		//Vieritetään ylös Teemun yhteystiedot
		$('.teemu').slideUp(500);
		//Nappulan arvoksi annetaan "teemu"
		$('#teemu').val("teemu");
	}	
	}); //click
	
	//Klikataan Antin nappia
	$('#antti').click(function () {
	
	//Laitetaan Antin yhteystieto -nappulan arvo muuttujaan currentvalue
	var currentvalue = $("#antti").val();
	
	//Jos nappulan arvo on "antti", tiedot on piilossa ja klikkaamalla tiedot tulevat näkyville.
	if (currentvalue == "antti"){
	
		//Piilotetaan kaikkien henkilöiden yhteystiedot
		$('#hlö').hide();
		//Annetaan muille nappuloille niiden oletusarvot
		$('#ilari').val("ilari");
		$('#arttu').val("arttu");
		$('#teemu').val("teemu");
		//Vieritetään alas Antin yhteystiedot
		$('.antti').slideDown(500);
		//Nappulan arvoksi annetaan "pakkanen"
		$('#antti').val("pakkanen");
	}
	
	//Jos nappulaa painetaan uudestaan, nappulan arvon ollessa "pakkanen", tiedot menevät piiloon
	else if (currentvalue == "pakkanen"){
	//Vieritetään ylös Antin yhteystiedot
		$('.antti').slideUp(500);
		//Nappulan arvoksi annetaan "antti"
		$('#antti').val("antti");
	}
	}); //click
	
	//Klikataan Artun nappia
		$('#arttu').click(function () {
	
	//Laitetaan Artun yhteystieto -nappulan arvo muuttujaan currentvalue
	var currentvalue = $("#arttu").val();
	
//Jos nappulan arvo on "arttu", tiedot on piilossa ja klikkaamalla tiedot tulevat näkyville.	
	if (currentvalue == "arttu"){
	
		//Piilotetaan kaikkien henkilöiden yhteystiedot
		$('#hlö').hide();
		//Annetaan muille nappuloille niiden oletusarvot
		$('#ilari').val("ilari");
		$('#antti').val("antti");
		$('#teemu').val("teemu");
		//Vieritetään alas Artun yhteystiedot
		$('.arttu').slideDown(500);
		//Nappulan arvoksi annetaan "seppal"
		$('#arttu').val("seppal");
	}
	//Jos nappulaa painetaan uudestaan, nappulan arvon ollessa "seppal", tiedot menevät piiloon
	else if (currentvalue == "seppal"){
	//Vieritetään ylös Artun yhteystiedot
		$('.arttu').slideUp(500);
	//Nappulan arvoksi annetaan "arttu"
		$('#arttu').val("arttu");
	}
	}); //click
	
	//Klikataan Ilarin nappia
		$('#ilari').click(function () {
	
	//Laitetaan Ilarin yhteystieto -nappulan arvo muuttujaan currentvalue
	var currentvalue = $("#ilari").val();
	
	
	//Jos nappulan arvo on "ilari", tiedot on piilossa ja klikkaamalla tiedot tulevat näkyville.
	if (currentvalue == "ilari"){
	
		//Piilotetaan kaikkien henkilöiden yhteystiedot
		$('#hlö').hide();
		
		//Annetaan muille nappuloille niiden oletusarvot
		$('#antti').val("antti");
		$('#arttu').val("arttu");
		$('#teemu').val("teemu");
		//Vieritetään alas Ilarin yhteystiedot
		$('.ilari').slideDown(500);
		//Nappulan arvoksi annetaan "nikander"
		$('#ilari').val("nikander");
	}
	//Jos nappulaa painetaan uudestaan, nappulan arvon ollessa "nikander", tiedot menevät piiloon
	else if (currentvalue == "nikander"){
	//Vieritetään ylös Ilarin yhteystiedot
		$('.ilari').slideUp(500);
	//Nappulan arvoksi annetaan "ilari"
		$('#ilari').val("ilari");
	}
	}); //click
	}); //Luodaan animaatiot loppuu
	


 //ready loppuu

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
