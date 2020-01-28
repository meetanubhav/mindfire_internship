/*

  Language : JQuery , JavaScript
  Developer : Anubhav Gupta
  Included file in : index.html
  Purpose : Animation and Effects

*/
$(document).ready(function () {
    $('#firstName').click(function(){
        $('.firstName').show();
        $(this).attr('placeholder', '');
        $(this).css({'border':'1px solid teal'});
    });
    $('#lastName').click(function(){
        $('.lastName').show();
        $(this).attr('placeholder', '');
        $(this).css({'border':'1px solid teal'});
    });
    $('#emailInput').click(function(){
        $('.emailInput').show();
        $(this).attr('placeholder', '');
        $(this).css({'border':'1px solid teal'});
    });
    $('#passwordInput').click(function(){
        $('.passwordInput').show();
        $(this).attr('placeholder', '');
        $(this).css({'border':'1px solid teal'});
    });
    $('#confirmPasswordInput').click(function(){
        $('.confirmPasswordInput').show();
        $(this).attr('placeholder', '');
        $(this).css({'border':'1px solid teal'});
    });
    
});