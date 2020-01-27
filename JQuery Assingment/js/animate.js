/*

  Language : JQuery , JavaScript
  Developer : Anubhav Gupta
  Included file in : index.html
  Purpose : Animation and Effects

*/
$(document).ready(function () {
    $('#animatedAfter').hide();
    $('#animateEnd').hide();
    $('nav').hide();
    $("#imgEnd").hide();
    $('#joinButton').click(function(){
        // $('#testImg').fadeOut();
        $('nav').show();
        $('#animatedAfter').fadeIn(1000);  
        $('#animateBefore').hide()
    });

    // test animations
    // $('#animateBefore').hide();
    // $('#animateEnd').hide();
    // $('#animatedAfter').show();
    
});