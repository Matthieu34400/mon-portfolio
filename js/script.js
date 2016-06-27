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
                $('.progress-value').html('Chargement Terminé !');
            }
        };

        var animation = setInterval(function() {
            Telechargement();
        }, time);

});

$(document).ready(function()
{
   // On cache la zone de texte
    $('#bouton').hide();
    $('#bouton').show(function()
  {
    $('#bouton').show(100);
      return true;

   });
});
