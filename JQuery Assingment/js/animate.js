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
    $('#joinButton').click(function(){
        // $('#testImg').fadeOut();
        $('nav').show();
        $('#animatedAfter').fadeIn(1000);  
        $('#animateBefore').hide()
    });
    // $('#animateBefore').hide();
    // $('#animatedAfter').hide();
    $('.imgEnd').delay(5000).attr("src", "http://cise-egypt.com/wp-content/uploads/2019/09/WELCOME-ST-IVES.jpg");
    
});