// Luodaan etusivun moduuli
var mainApp = angular.module('mainApp', ['ngAnimate']);

// Luodaan image-gallery diville controller
mainApp.controller('ImageView', function ($scope, $http) {
    // Luodaan string-muuttuja JSON-tietokannan polulle
    $scope.url = 'image_json/horadriccube.json';
    // Luodaan uusi taulukko, johon kuvaoliot myöhemmin lisätään
    $scope.images = []
    // Luodaan tyhjä olio johon varastoidaan kuva, joka on tällä hetkellä auki/katseltavana
    $scope.currentImage = {};

    // Suoritetaan funktio jonka parametrina data eli http-vastauksen rakenne
    // sekä status eli http-koodi (200, 404 jne.)
    $scope.handleLoadedImages = function (data, status) {
        // Asetetaan data eli http-vastauksen rakenne images-taulukkoon
        $scope.images = data;
        // Asetetaan aukiolevaksi kuvaksi images-taulukon ensimmäinen kuva
        $scope.currentImage = $scope.images[0];
        // Tarkistetaan saiko muuttuja oikeat arvot (eli taulukko täyttyi JSON-olioilla)
        console.log($scope.images);

    } // handleLoadedImages

    $scope.getImg = function () {
        // Lähetetään http GET-pyyntö url-polkuun
        // mikäli vastaus on myönteinen suoritetaan handleLoadedImages
        $http.get($scope.url).success($scope.handleLoadedImages);

    }; // getImg

    // Mikäli thumbnailia painetaan suoritetaan tämä funktio.
    $scope.setCurrentImage = function (image) {
        // Asetetaan katseltavaksi kuvaksi thumbnailin alla oleva kuva.
        $scope.currentImage = image;

    }; // setCurrentImage

    // Suoritetaan getImg, joka lähettää http GET-pyynnön
    $scope.getImg();

}); // Controller loppuu

// Etusivun hakupalkin controller
mainApp.controller('ImageSearch', function ($scope, $http) {
    $http.get('image_json/horadriccube.json').success(function (data) {
        $scope.images = data;
    });
});

mainApp.animation('.repeatedthumbnail', function() {
  return {
    enter: function(element, done) {
      element.css('display', 'none');
      $(element).fadeIn(1000, function() {
        done();
      });
    },
    leave: function(element, done) {
      $(element).fadeOut(1000, function() {
        done();
      });
    },
    move: function(element, done) {
      element.css('display', 'none');
      $(element).slideDown(500, function() {
        done();
      });
    }
  }
});