/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function menuFunction() {
    document.getElementById("menuDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
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

$(document).ready(function(){
	$("#loginButton").click(function(){

	var currentvalue = $("#loginButton").val();

	if (currentvalue == "Kirjaudu") {
    		$("#loginButton").val("Piiloita");
        $("#login-window").stop().slideDown();
	} else if (currentvalue == "Piiloita") {
		    $("#loginButton").val("Kirjaudu");
        $("#login-window").stop().slideUp();
   }
 });
});