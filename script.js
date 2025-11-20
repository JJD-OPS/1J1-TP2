// Créer un jeu éducatif utilisant une interface utilisateur
// Utiliser des variables incorporant les images pour les cartes à jouer

let oCanvasHTML = document.querySelector("canvas");
let oContexte = oCanvasHTML.getContext("2d");

let nLargeur = oCanvasHTML.width;
let nHauteur = oCanvasHTML.height;

let sTitre = "Cardseek: Bataille de cartes";
let sEtat = "intro";
// Charger les images de cartes à jouer;
let oImageJoueur = new Image();
oImageJoueur.src = "./assets/images/Batman.png";

let oImageJoueur2 = new Image();
oImageJoueur2.src = "./assets/images/Spectre.png";

let oImageJoueur3 = new Image();
oImageJoueur3.src = "./assets/images/Doctor Manhattan.png";

let oImageJoueur4 = new Image();
oImageJoueur4.src = "./assets/images/Green Lantern.png";

let oImageJoueur5 = new Image();
oImageJoueur5.src = "./assets/images/Wally West.png";

let oImageEnnemi = new Image();
oImageEnnemi.src = "./assets/images/Brainiac.png";

let oImageFond = new Image();
oImageFond.src = "./assets/images/menu__fond.png";

// Charger les musiques;
let oMusiqueIntro = new Audio();
oMusiqueIntro.src = "./assets/audio/intro__musique.mp3";
let oMusique__Millieu = new Audio();
oMusique__Millieu.src = "./assets/audio/bataille__cartes.mp3";
let oMusique__Fin = new Audio();
oMusique__Fin.src = "./assets/audio/musique__fin.mp3";

// Fonction d'initialisation du jeu
function initialiser() {
  setInterval(EcranIntro, 1000 / 60);
  console.log(oCanvasHTML);

  oCanvasHTML.addEventListener("click", clicCanvas);
  // Dessiner les images des cartes à jouer sur le canvas
  oContexte.drawImage(oImageJoueur, 300, 500, oCanvasHTML.width /2, oCanvasHTML.height /2);
  oContexte.drawImage(oImageJoueur2, 300, 500, oCanvasHTML.width/2, oCanvasHTML.height/2);
  oContexte.drawImage(oImageJoueur3, 0,0, oCanvasHTML.width / 2, oCanvasHTML.height / 2);
}

function clicCanvas(evenement) {

  if (sEtat == "intro") {
    oMusiqueIntro.play();
    // faire jouer la musique en boucle
    oMusiqueIntro.loop = true;
    sEtat = "jeu";
    console.log("Clic détecté, démarrage du jeu...");
  }
}

// Afficher l'écran d'accueil avec la musique d'intro et l'image de fond, le titre du jeu et une invite à cliquer pour commencer;
// Interaction utilisateur pour démarrer le jeu;
function EcranIntro() {
  setTimeout(clicCanvas, 3000 / 60);
  oContexte.drawImage(oImageFond, 0, 0, oCanvasHTML.width, oCanvasHTML.height);

  oContexte.textAlign = "center";
  oContexte.font = "50px Pacifico";
  oContexte.fillStyle = "white";
  oContexte.fillText(sTitre, 300, 52);

  oContexte.fillText("Cliquez pour commencer", 500, 560);

};



window.addEventListener("load", initialiser);
