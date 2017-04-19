// Luodaan adminApp moduuli admin-panel sivulle
var adminApp = angular.module("adminApp", []);

adminApp.controller('ImgHandler', function($scope) {

  $scope.files = [];
  $scope.form.image = $scope.files[0];

  $scope.preImg = $scope.file[0];


});
