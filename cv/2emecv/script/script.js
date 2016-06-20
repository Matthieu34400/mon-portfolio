/*Créer une fonction qui fabrique une div en carré de 200px avec une bordure de 1px en noir*/
function createCarre() {
	var div = document.createElement("div");
	div.style.width = "200px";
	div.style.height = "200px";
	div.style.border= "1px solid black";
	return div;
}
function createColorizedCarre(color) {
	var div = document.createElement("div");
	div.style.width = "200px";
	div.style.height = "200px";
	div.style.border = "2px solid "+color;
	return div;
}


window.onload = function () {
	/*On affecte la valeur cyan à la propriété bgColor de la balise body*/
	document.body.style.backgroundColor = "cyan";
	//on duplique la valeur de la propriété style de la balise
	var styleBody = document.body.style;
	//on utilise la variable comme référence vers document.body.style
	styleBody.backgroundColor="cyan";

	var carre = createCarre();
	carre.style.borderColor = "red";
	document.body.appendChild(carre);
	
	document.body.appendChild(createColorizedCarre("yellow"));

}
