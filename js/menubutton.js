//Vasemman yläreunan navigaatio pudotusvalikko
//Kun käyttäjä klikkaa nappulaa, vaihdellaan valikon näkymisen ja piiloutumisen välillä
function menuFunction() {
    document.getElementById("menuDropdown").classList.toggle("show");
}

//Suljetaan menu jos käyttäjä klikkaa sen ulkopuolelle.
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

//Oikean yläreunan kirjautumisruutu
$(document).ready(function(){
	$("#loginButton").click(function(){
//Katsotaan onko nappulassa teksti "Kirjaudu" vai "Piiloita"
	var currentvalue = $("#loginButton").val();

//Jos nappulassa on teksti "Kirjaudu", login ikkuna slaidaa alas ja nappulan tekstiksi tulee "Piiloita"
	if (currentvalue == "Kirjaudu") {
		$("#loginButton").val("Piiloita");
        $("#login-window").slideDown();

//Jos nappulassa on teksti "Piiloita", login ikkuna slaidaa ylös ja nappulan tekstiksi tulee "Kirjaudu"
	} else if (currentvalue == "Piiloita") {
		$("#loginButton").val("Kirjaudu");
        $("#login-window").slideUp();
   }
 });
});
