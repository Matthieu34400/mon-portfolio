$(document).ready(function() {

        var MaBarreProgression = $('#MaBarreProgression'),
            max = MaBarreProgression.attr('max'),
            time = 100,
            value = MaBarreProgression.val();

        var Telechargement = function() {
            value += 4;
            addValue = MaBarreProgression.val(value);

            $('.progress-value').html('Chargement de la page... '+ value + '%');

            if (value == max) {
                clearInterval(animation);
                $('.progress-value').html('Chargement terminé !');
            }
        };

        var animation = setInterval(function() {
            Telechargement();
        }, time);

});

$(document).ready(function() {

	$("body").css("display", "none");

    $("body").fadeIn(3700);

	$("a.transition").click(function(event){
		event.preventDefault();
		linkLocation = "index2.html".href;
		$("body").fadeOut(3000, redirectPage);
	});

	function redirectPage() {
		window.location = linkLocation;
	}

});
