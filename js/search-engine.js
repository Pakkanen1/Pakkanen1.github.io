//Tähän tulee kaikki Vulkanuksen hakukoneeseen liittyvä toiminta
$(document).ready(function() {
	$('#search-button').click(function() {
		var hakuSana = $('input#basic-search').val();
		console.log(hakuSana);
	});	
});



//basic-search
//search-button