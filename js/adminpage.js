// Luodaan adminApp moduuli admin-panel sivulle
var adminApp = angular.module("adminApp", []);

// Preview-imagen ja upload formin controller
adminApp.controller('ImgHandler', function($scope) {

  // Kun tiedosto muuttuu ajetaan tämä anonyymi funktio
  document.getElementById("fileToUpload").onchange = function () {
    var lukija = new FileReader();

    // Lukijan ladatessa tiedosto pässätään load-event parametrina
    // anonyymille funktiolle
    lukija.onload = function (e) {
        // Hae ladattu kuva ja aseta se HTML-sivulle
        document.getElementById("preimage").src = e.target.result;
        // Stailataan preview-kuvan leveys
        document.getElementById("preimage").style = "width: 200px";
    };

    // Luetaan kuvatiedosto tiedostopolun kautta.
    lukija.readAsDataURL(this.files[0]);
    
  };

  // Tagien listaajan muuttuja
  $scope.imgDesc = "";

});
