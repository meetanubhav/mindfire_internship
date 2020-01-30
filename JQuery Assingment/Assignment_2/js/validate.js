$(document).ready( function () {
    captchaLoad();
    addFields();
    dynamicAdress();

    // var firstNameInputValue = $('#firstNameInput').val();
    // var lastNameInputValue = $('#lastNameInput').val();
    // var emailInputValue = $('#emailInput').val();
    // var passwordInputValue = $('#passwordInput').val();
    // var confirmPasswordInputValue = $('#confirmPasswordInput').val();
    // var panInputValue = $('#panInput').val();
    // var aadharInputValue = $('#aadharInput').val();

    $("#reloadCaptcha").click(function(){
        captchaLoad();
    });

    // Regex Declaration
    // var nameRegex = /^[a-zA-Z]+$/;
    var phoneNumberregex = /^[0-9]+$/;
    var passwordregex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,12}$/;
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


    $("#submitForm").click(function(){
        // check for null values
        window.counter = 0;
        IsNull($('#firstNameInput'),'#firstNameErrorMsg');
        IsNull($('#lastNameInput'),'#lastNameErrorMsg');
        IsNull($('#emailInput'),'#emailErrorMsg');
        IsNull($('#passwordInput'),'#passwordErrorMsg');
        IsNull($('#confirmPasswordInput'),'#confirmPasswordErrorMsg');
        IsNull($('#panInput'),'#panErrorMsg');
        IsNull($('#aadharInput'),'#aadharErrorMsg');
        IsNull($("#addressInput"),'.addressError');
        IsNull($('#selectCountry'),'.selectCountryError');
        IsNull($('#selectState'),'.selectStateError');
        IsNull($('#selectCity'),'.selectCityError');
        IsNull($('#phoneNumberInput'),'.phoneNumberError');

        // check for regex
        nameTypeRegex($('#firstNameInput'),'.regexErrorMessage');
        nameTypeRegex($('#lastNameInput'),'.regexErrorMessageLastName')

        // Address validation
        // checkAddress()
        console.log(counter);
        
    });

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

   
});
function nameTypeRegex(valueToCheck,errorMessageDisplay){
    var nameRegex = /^[a-zA-Z]+$/;
    if(!nameRegex.test(valueToCheck.val())){
        $(errorMessageDisplay).show();
        // window.scrollTo(0, 0); 
    }
    else{
        $(errorMessageDisplay).hide();
    }
}

// function checkAddress(){
//     var addressInputs = $(".addressInputState");
//     for(var i = 0; i < addressInputs.length; i++){
//         alert($(addressInputs[i]).val());
//     }
// }

function IsNull(checkNullValue,errorMessage){
    if(checkNullValue.val()===""){
        $(errorMessage).show();
        // $(checkNullValue).css({'border':'1px solid red'});
        counter=1;
        window.scrollTo(0, 0); 
    }
    else{
        $(errorMessage).hide();
        // $(checkNullValue).css({'border':'none'});
        // $(checkNullValue).css({'border-bottom':'2px solid teal'});
    }
}