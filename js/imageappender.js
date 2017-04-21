// Luodaan etusivun moduuli
var mainApp = angular.module('mainApp', ['ngAnimate', 'ngRoute']);

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
mainApp.controller('mainSearch', function($scope) {
	$scope.basicSearch = "";
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

//Määritellään reititys
mainApp.config(function ($routeProvider) {
	$routeProvider
	//Jos yritetään ohjata admin-paneeliin
	.when('/admin-panel', {
		resolve: {
			//Tehdään tarkistus
			"check": function($location, $rootScope) {
				//Jos sisäänkirjaus ei ole true
				if(!$rootScope.loggedIn) {
					//Ohjataan reitille "/"
					$location.path('/');
				} //if
			} //check
		},
		//Jos sisäänkirjaus on ok, ohjataan admin-paneeliin
		templateUrl: 'admin-panel.html'
	}) //when "/admin-panel"
  //Jos ohjataan reitille "/"
	.when('/', {
		//Ohjataan kirjautumissivulle
		templateUrl: 'login.html'
	}) //when "/"
	//Muissa tapauksissa ohjataan reitille "/"
	.otherwise({
		redirectTo: '/'
	}); //otherwise
}); //Config loppuu

//Luodaan login-page diville controller
mainApp.controller('LoginView', function($scope, $location, $rootScope) {
	//Kun kirjautumis-nappia painetaan
	$scope.submit = function() {

		//Jos annettu tunnus ja salasana täsmäävät
		if($scope.username == 'admin' && $scope.password == 'pass') {
			//Globaalisti kirjautunut sisään
			$rootScope.loggedIn = true;
			//Muutetaan polku admin-paneeliin
      window.location.href= "./admin-panel.html"
		} else {
			//Jos tunnus tai salasana on väärin, annetaan virhe
			alert("Väärä tunnus tai salasana");
		} //else
	}; // submit
}); //Controller loppuu
