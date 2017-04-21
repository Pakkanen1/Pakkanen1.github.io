//Luodaan yhteystietosivun moduuli
var yTiedot = angular.module('yTiedot', []);

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