//Fonction qui permet de faire les transitions
$(document).ready(function() {

	  $("body").css("display", "none");
    $("body").fadeIn(3700);
    $("a.transition").click(function(event){
  		event.preventDefault();
  		$("body").fadeOut(3000, redirectPage);
	});

  function redirectPage() {
		window.location = linkLocation;
	}
});

function dropdown(etat) {
   var test = document.getElementById("menuderoulant").className;
	if(etat==1) {
	document.getElementById("menuderoulant").className=test.replace("hide","show");
	}
	else if(etat==0) {
	document.getElementById("menuderoulant").className=test.replace("show","hide");
	}
}
