// Tähän tulee kaikki sisäänkirjautumiseen littyvät toiminnot
$(document).ready(function() {
	//Kirjautuminen piilossa aluksi.
	$('#login-window').hide();
	
	//Kirjautumisnappia painetaan
	$('#login-button').click(function() {
		//Kirjautumisikkuna joko vieritetään esiin tai pois, estetään stopilla ettei animaatiot kasaannu
		$('#login-window').stop().slideToggle();
		
	}); //click loppuu
	
}); //ready loppuu