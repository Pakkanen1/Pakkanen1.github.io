//JS-tiedostossa pelkkää JavaScriptiä

//Funktion suoritus kiinnitetään tapahtumaan. Ei välitön funktion kutsu - kutsu vasta tapahtuman yhteydessä.
window.onload = attachBanhammer;



function attachBanhammer() {
	var demo = document.querySelector("#demo"); //tekstikentän muuttuja
	var banBtn = document.querySelector("#banbutton"); //banninappulan muuttuja

	 //oikeusnappulan muuttuja
	var remBtn = document.querySelector("#remauthbutton");

	banBtn.addEventListener("click", function() {
		demo.textContent = "Bännäsit jonkun!";
	});
	remBtn.addEventListener("click", function() {
		detachBanhammer();
	});

	function detachBanhammer() {
		banBtn.removeEventListener("click", function() {
			demo.textContent = "Sinulta on otettu bännioikeudet pois!";
		});
	} //detachBanhammer
} // attachBanhammer


/*
function infinitePara() {
  var parametrit = arguments;
  for(var i=0; i<parametrit.length;i++){
    console.log(parametrit[i]);
  }
}

infinitePara("tähän", "funktioon", "saa", "pistää", "loputtomasti", "parametrejä", "eikä", "ole", "väliä", "jos", "on numeroita ja kirjaimia sekaisin", 1,2,3);



function huoneValinta() {
var huoneTyyppi = document.getElementById('room').value;
var alennusKoodi = document.getElementById('ale30-10-0').value;
var tulostus = huoneHinta(huoneTyyppi, alennusKoodi);
alert("Huoneen hinta on:" + tulostus);
}
  function huoneHinta (huoneTyyppi, alennusKoodi) {

    if (huoneTyyppi === "standard") {
      huoneTyyppi = 100;
    } else {
      huoneTyyppi = 1000;
    }

    var loppuHinta = huoneTyyppi;

    if (alennusKoodi === "ale30") {
      loppuHinta = loppuHinta * 0.70;
    } else if (alennusKoodi === "ale10") {
      loppuHinta *= 0.90;
    }

    return loppuHinta;
  }

/*


window.onload = callFunctions;

function callFunctions() {
  var vuosi = prompt("Anna vuosiluku:", "");

  var funktioMuuttujassa = function isKarkausvuosi (vuosi) {
    if (vuosi%4 === 0 && vuosi%100 != 0 || vuosi%400 === 0) {
      var teksti = vuosi + " on karkausvuosi!"
      return teksti;
    } else {
      var teksti = vuosi + " ei ole karkausvuosi!"
      return teksti;
    }
  };

  document.getElementById('k1-h1-1').innerHTML = funktioMuuttujassa(vuosi);
}



/*


function gasPrompt(){
	var ysiVitone = "1,589 €"
	var ysiKasi = "1,689 €"
	var diisseli = "1,458 €"
	var invalidGas = "Antamallasi laadulle ei ole hintaa."
	var gasType = prompt("Valitse polttoaine: 98, 95 tai D", "")
	if (gasType == "98") {
		document.getElementById('k1-h1-1').innerHTML = ysiKasi;
	} else if (gasType == "95") {
		document.getElementById('k1-h1-1').innerHTML = ysiVitone;
	} else if (gasType == "D"){
		document.getElementById('k1-h1-1').innerHTML = diisseli;
	} else {
		document.getElementById('k1-h1-1').innerHTML = invalidGas;
	}
}



window.onload = changeParaText;

function changeParaText() {

    var teksti = "Vaihdettu kappaleen sisältö"

    document.getElementById('k1-h1-1').innerHTML = teksti;
}



function fibonakki(){
	var nakki = 0;
	var makkara = 1;
	var temp;
	var fiboTeksti = "";
	for (i=1; i < 11; i++) {
		temp = nakki;
		nakki = nakki + makkara;
		makkara = temp;
		fiboTeksti += "<br>" + i + ". Fibonaccin numero on: " + temp;
		document.getElementById('k1-h1-1').innerHTML = fiboTeksti;
	}
}

function whileFibo() {
	var nakki = 0;
	var makkara = 1;
	var temp;
	var fiboTeksti = "";
	i = 1;
	while (i<10) {
		temp = nakki;
		nakki = nakki + makkara;
		makkara = temp;
		fiboTeksti += "<br>" + i + ". Fibonaccin numero on: " + temp;
		document.getElementById('k1-h1-1').innerHTML = fiboTeksti;
		i++;
	}
}
*/
