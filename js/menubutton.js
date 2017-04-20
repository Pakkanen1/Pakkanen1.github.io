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
/*
function myFunction() {
    var x = document.getElementById('testihei');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
	

} */

$(document).ready(function(){
	$("#loginButton").click(function(){
		
	var currentvalue = $("#loginButton").val();
	
	if (currentvalue == "Kirjaudu") {
		$("#loginButton").val("Piiloita");
        $("#login-window").slideDown();
	} else if (currentvalue == "Piiloita") {
		$("#loginButton").val("Kirjaudu");
        $("#login-window").slideUp();
   }
 });
});