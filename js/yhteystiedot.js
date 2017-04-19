var yTiedot = angular.module('yTiedot', []);

yTiedot.controller('InfoView', function ($scope) {
	
	$scope.contacts = [
		{name: "Teemu Ruonti", phone: "123-456-789", email: "teemu.ruonti@whatever.com"},
		{name: "Antti Pakkanen", phone: "123-456-789", email: "antti.pakkanen@whatever.com"},
		{name: "Arttu Seppä-Lassila", phone: "123-456-789", email: "arttu.lassila@whatever.com"},
		{name: "Ilari Nikander", phone: "123-456-789", email: "ilari.nikander@whatever.com"}
	];
	
});