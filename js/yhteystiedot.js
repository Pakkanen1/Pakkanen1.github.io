var yTiedot = angular.module('yTiedot', []);

yTiedot.controller('InfoView', function ($scope) {
	
	$scope.contacts = [
		{name: "Teemu Ruonti", phone: "123-456-789", email: "teemu.ruonti@whatever.com"},
		{name: "Antti Pakkanen", phone: "123-456-789", email: "antti.pakkanen@whatever.com"},
		{name: "Arttu Seppä-Lassila", phone: "123-456-789", email: "arttu.lassila@whatever.com"},
		{name: "Ilari Nikander", phone: "123-456-789", email: "ilari.nikander@whatever.com"}
	];
});

$(document).ready(function() {
	
	$('#hlö').hide();
	
	$('#teemu').click(function () {
		
		$('#hlö').hide();
		$('.teemu').slideDown(500);
		
	});
	
	$('#antti').click(function () {
		
		$('#hlö').hide();
		$('.antti').slideDown(500);
		
	});
	
	$('#arttu').click(function () {
		
		$('#hlö').hide();
		$('.arttu').slideDown(500);
		
	});
	
	$('#ilari').click(function () {
		
		$('#hlö').hide();
		$('.ilari').slideDown(500);
		
	});
});