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
//SELECTION DE LA FLECHE GAUCHE
const arrow_left = document.querySelector(".arrow_left");

//AJOUT DE LECOUTEUR EVENEMENT
arrow_left.addEventListener("click", function() {
	console.log("la flèche gauche a etait cliqué");
	const dot_1 = document.querySelector(".dot_selected");
//ENLEVER LA COULEUR BLANCHE
dot_1.classList.remove("dot_selected");

//SELECTIONNER LELEMENT PRECEDENT
const dot_2 = dot_1.previousElementSibling;
//AJOUTER LA COULEUR BLANCHE
dot_2.classList.add("dot_selected");
});

//SELECTION DE LA FLECHE DROITE
const arrow_right = document.querySelector(".arrow_right");

//AJOUT DE LECOUTEUR EVENEMENT
arrow_right.addEventListener("click", function() {
	console.log("la flèche droite a etait cliqué");
	//SELECTIONNER LE POINT BLANC
const dot_1 = document.querySelector(".dot_selected");
//ENELEVER LA COULEUR BLANCHE
dot_1.classList.remove("dot_selected");

//SELECTIONNER LELEMENT SUIVANT
const dot_2 = dot_1.nextElementSibling;
//AJOUTER LA COULEUR BLANCHE
dot_2.classList.add("dot_selected");
});

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





