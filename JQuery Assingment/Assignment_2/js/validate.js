$(document).ready( function () {
    captchaLoad();
    $("#reloadCaptcha").click(function(){
        captchaLoad();
    });

    // Regex Declaration
    var nameRegex = /^[a-zA-Z]+$/;
    var phoneNumberregex = /^[0-9]+$/;
    var passwordregex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,12}$/;
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    // hide elements
    $('.usaState').hide();
    $('.indiaState').hide();
    $('.chinaState').hide();
    $('.odishaCity').hide();
    $('.jharkhandCity').hide();
    $('.chinaState').hide();
    $('.californiaCity').hide();
    $('.floridaCity').hide();
    $('.yunnanCity').hide();
    $('.beijingCity').hide();

    $("#firstNameInput").blur(function(){
        if(!nameRegex.test(this.value))
        {
            $('#firstNameErrorMsg').show();
        }
        else{
            $('#firstNameErrorMsg').hide();
        }
      });
});