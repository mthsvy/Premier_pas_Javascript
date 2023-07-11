//TABLEAU
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//COMPTEUR DIMAGE POUR PARCOURIR LE TABLEAU DIMAGE		
let counter_image = 0;

//----------------------------------------------------- AJOUT DES POINTS SOUS LIMAGE ----------------------
//SELECTION DE LEMPLACEMENT POUR AJOUTER LES POINT SOUS LIMAGE
const dots = document.querySelector(".dots");

//CREATION DE LA BOUCLE AUTANT DE FOIS QUIL Y A DELEMENT DANS LE TABLEAU SLIDES,TAILLE=SLIDES.LENGTH
for (let i = 0; i< slides.length; i++) {
	let dot = document.createElement("div");
	dot.classList.add("dot");	
	dots.appendChild(dot);	
	
	//SI LE POINT CORRESPOND A LA PREMIERE IMAGE DU TABLEAU(i=0) ALORS ON LE MET BLANC
	if (i === 0) {
		dot.classList.add("dot_selected");
	}
}

//----------------------------------------------------- DEFILEMENT DES IMAGES EN FONCTION DU CLICK SUR LES FLECHES ----------------------
// CREATION DE LA FLECHE GAUCHE
const img_left = document.createElement("img");
img_left.src = "./assets/images/arrow_left.png";
img_left.alt = "flèche gauche";

// AJOUT DE LA CLASSE
img_left.classList.add("arrow", "arrow_left");

// SELECTION DU PARENT
const parent_arrow = document.querySelector("#banner");

// AJOUT DE LENFANT AU PARENT
banner.appendChild(img_left);

//SELECTION DE LA FLECHE GAUCHE
const arrow_left = document.querySelector(".arrow_left");

//AJOUT DE LECOUTEUR D'EVENEMENT FLECHE GAUCHE
arrow_left.addEventListener("click", function() {	

	//SELECTIONNER LE POINT BLANC
	const dot_1 = document.querySelector(".dot_selected");	

	//SELECTIONNER LELEMENT PRECEDENT
	let dot_2;
	if (dot_1 === dot_1.parentElement.firstElementChild ){
		dot_2 = dot_1.parentElement.lastElementChild;		
	} else {
		dot_2 = dot_1.previousElementSibling;
	}	
	
	//RECULE DE 1 LE CAROUSSEL	
	counter_image--;

	//FAIRE UNE BOUCLE SUR LE CAROUSSEL
	if (counter_image == -1) {
		counter_image = slides.length -1;
	}
	defilementCarrousel(counter_image,dot_1,dot_2);
});

//SELECTION DE LA FLECHE DROITE
const img_right = document.createElement("img");
img_right.src = "./assets/images/arrow_right.png";
img_right.alt = "flèche droite";

// AJOUT DE LA CLASSE
img_right.classList.add("arrow", "arrow_right");

// AJOUT DE LENFANT AU PARENT
banner.appendChild(img_right);

// SELECTION DE LA CLASSE ARROW RIGHT POUR SEN SERVIR DANS LECOUTEUR 
const arrow_right = document.querySelector(".arrow_right");

//AJOUT DE LECOUTEUR EVENEMENT FLECHE DROITE
arrow_right.addEventListener("click", function() {	

	//SELECTIONNER LE POINT BLANC
	const dot_1 = document.querySelector(".dot_selected");	

	//SELECTIONNER LELEMENT SUIVANT	
	let dot_2;
	if (dot_1 === dot_1.parentElement.lastElementChild ){
		dot_2 = dot_1.parentElement.firstElementChild;		
	} else {
		dot_2 = dot_1.nextElementSibling;
	}	
	//AVANCE DE 1 LE CAROUSSEL
	counter_image++;

	//FAIRE UNE BOUCLE SUR LE CAROUSSEL
	if (counter_image == slides.length) {
		counter_image = 0;
	}

	defilementCarrousel(counter_image,dot_1,dot_2);
});

function defilementCarrousel(counter,dot_1,dot_2){

	//ENLEVER LA COULEUR BLANCHE
	dot_1.classList.remove("dot_selected");

	//AJOUTER LA COULEUR BLANCHE
	dot_2.classList.add("dot_selected");

	//JE SELECTIONNE LIMAGE A MODIFIER
	const image = document.querySelector(".banner-img");

	//JE MODIFIE LA SRC DE LIMAGE QUE JE VEUX MODIFIER
	image.src = "./assets/images/slideshow/" + slides[counter].image;

	//JE SELECTIONNE LE TEXTE A MODIFIER
	const tagline = document.querySelector("#banner p");

	//MODIFIER LE TEXTE
	tagline.innerHTML = slides[counter].tagLine;		
}





	










 


 









