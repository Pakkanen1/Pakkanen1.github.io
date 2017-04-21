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
        // $scope.currentImage = $scope.images[0];
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

        // Jos vaihdetaan kuvaa palautetaan kuva järkevään kokoon ja poistetaan varjo
        $("#current-image img").css({"max-width": "50%", "max-height": "50%"}, 'slow');
        $('#current-image img').css({"box-shadow": "none"});

        // Asetetaan katseltavaksi kuvaksi thumbnailin alla oleva kuva.
        $scope.currentImage = image;

    }; // setCurrentImage

    // Jos esikatselu avataan annetaan kuvalle sen alkuperäiset mitat
    // Lisätään myös varjoefekti ja himmennetään näkymää
    $scope.imgHighlight = function() {

        // Luo "dimming"-efektin
        $('#page-cover').css("opacity",0.6).fadeIn(300);
        $('#imagehidebtn').show();

        // Nostaa katseltavan kuvan "dimming"-efektin yläpuolelle
        $('#current-image').css(
          {
            "position":"absolute",
            "left": "50%",
            "transform": "translate(-50%, 0)",
            "z-index": "99999"
          });
        // Lisätään varjoefekti
        $('#current-image img').css({"box-shadow": "0px 12px 22px 1px #fff"});
        // Avausanimaatio
        $('#current-image img').animate({"max-width": "100%", "max-height": "100%"}, 'slow');

    }; //imgHighlight

    // Esikatselunappi oletuksena piiloon
    $('#imagehidebtn').hide();

    // Esikatselun sulkunapin toiminta
    $scope.closeImage = function() {

        $('#imagehidebtn').hide();
        // Poista näytön himmennys ja muut imgHighlightissa annetut css arvot
        $('#page-cover').css("opacity",0.6).fadeOut(300);
        $('#current-image').css({
          "position":"",
          "left": "",
          "transform": "",
          "z-index": "",
          "box-shadow": ""
        });

        // Palautetaan valittu kuva järkevään kokoon ja poistetaan highlight(varjo)
        $("#current-image img").css({"max-width": "50%", "max-height": "50%"}, 'slow');
        $('#current-image img').css({"box-shadow": "none"});

    }; //closeImage

    // Suoritetaan getImg, joka lähettää http GET-pyynnön
    $scope.getImg();

}); // Controller loppuu

// Kuvagallerian häivytysanimaatio
mainApp.animation('.repeatedthumbnail', function() {
  return {
    // Kun .repeatedthumbnail luokkaan lisätään elementti (thumbnail)
    // Animoidaan fadeIn kun thumnaileja tulee näkyviin
    enter: function(element, done) {
      element.css('display', 'none');
      $(element).fadeIn(1000, function() {
        done();
      });
    },
    // Fadeout kun ne poistuvat divistä
    leave: function(element, done) {
      $(element).fadeOut(1000, function() {
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
