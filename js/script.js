document.querySelector("#bouton").onclick = function() {
if (window.getComputedStyle(document.querySelector('#section-contact')).display=='none'){
document.querySelector("#section-contact").style.display="block";
} else {
document.querySelector("#section-contact").style.display="none";
}
}
