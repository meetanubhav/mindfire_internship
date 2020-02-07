$(document).ready( function () {
    $('.showProfile').hide();
    captchaLoad();
    addFields();
    dynamicAdress();
    $("#reloadCaptcha").click(function(){
        captchaLoad();
    });

    // checking values after submission
    $("#submitForm").click(function(){
        // check for null values
        window.counter = 0;
        isNull($('#firstNameInput'),'#firstNameErrorMsg');
        isNull($('#lastNameInput'),'#lastNameErrorMsg');
        isNull($('#emailInput'),'#emailErrorMsg');
        isNull($('#panInput'),'#panErrorMsg');
        isNull($('#aadharInput'),'#aadharErrorMsg');
        isNull($("#addressInput"),'.addressError');
        isNull($('#selectCountry'),'.selectCountryError');
        isNull($('#selectState'),'.selectStateError');
        isNull($('#cityInput'),'.cityInputError');
        isNull($('#phoneNumberInput'),'.phoneNumberError');
        isNull($('#captchaInput'),'.captchaErrorMsg');
        isNull($('#imageInput'),'.imageErrormsg');
        isNull($('#pincodeInput'),('.pincodeInputError'));
        // isNull($('.phoneNumberInputDynamic'),'.phoneNumberError')
        for(i=1;i<=phoneFieldCounter;i++){
            isNull($('#phoneNumberInput'+i),'#dynamicPhoneNumberError'+i);
            regexChecker($('#phoneNumberInput'+i),'#dynamicPhoneNumberError'+i,/^[0][1-9]\d{9}$|^[1-9]\d{9,11}$/);
        }
        for(i=1;i<=addressFieldCounter;i++){
            isNull($("#addressInput"+i),'#addressError'+i);
            isNull($('#selectCountry'+i),'#selectCountryError'+i);
            isNull($('#selectState'+i),'#selectStateError'+i);
            isNull($('#cityInput'+i),'#cityInputError'+i);
            isNull($('#pincodeInput'+i),('#pincodeInputError'+i));
            regexChecker($('#pincodeInput'+i),'.pincodeInputError'+i,/^[1-9]\d{5}$/);
            regexChecker($('#cityInput'+i),'#cityInputError'+i,/^[a-zA-Z]+$/);
        }

        // check for regex
        regexChecker($('#firstNameInput'),'#firstNameErrorMsg',/^[a-zA-Z]+$/);
        regexChecker($('#cityInput'),'.cityInputError',/^[a-zA-Z]+$/);
        regexChecker($('#lastNameInput'),'#lastNameErrorMsg',/^[a-zA-Z]+$/);
        regexChecker($('#phoneNumberInput'),'.phoneNumberError',/^[0][1-9]\d{9}$|^[1-9]\d{9,11}$/);
        regexChecker($('#emailInput'),'#emailErrorMsg',/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
        regexChecker($('#aadharInput'),'#aadharErrorMsg',/^[1-9]\d{11}$/);
        regexChecker($('#pincodeInput'),'.pincodeInputError',/^[1-9]\d{5}$/);
        regexChecker($('#panInput'),'#panErrorMsg',/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/);

        // check image type
        var fileName, fileExtension;
        fileName = $('#imageInput').val();
        fileExtension = fileName.replace(/^.*\./, '');
        console.log (fileExtension);
        if(fileExtension=="jpg" || fileExtension == "png" || fileExtension == "jpeg"){
            counter=0;
            $('.imageErrormsg').show();
        }
        else{
            counter=1;
            $('#imageInput').val("");
            removeUpload();
            $('.imageErrormsg').hide();

        }


        // Address validation
        // checkAddress()
        if(counter===1){
            captchaLoad();
        }
        if(parseInt($('#captchaInput').val().trim())!==calculatedoutput){
            captchaLoad();
            $('.captchaErrorMsg').show();
            $('#captchaInput').val("");
        }
        if(counter===0 && parseInt($('#captchaInput').val().trim())===calculatedoutput){
            $('.flexContainer').hide();
            $('.showProfile').show();
            displayDetails();

        }
        
    });

});
function regexChecker(valueToCheck,errorMessageDisplay,typeRegex){
    // For alpha values
    if(!typeRegex.test(valueToCheck.val())){
        $(errorMessageDisplay).show();
        counter=1;
    }
    else{
        $(errorMessageDisplay).hide();
    }
}
function isNull(checkNullValue,errorMessage){
    if(checkNullValue.val().trim()===""){
        $(errorMessage).show();
        // $(checkNullValue).css({'border':'1px solid red'});
        counter=1;
        // window.scrollTo(0, 0); 
    }
    else{
        $(errorMessage).hide();
        // $(checkNullValue).css({'border':'none'});
        // $(checkNullValue).css({'border-bottom':'2px solid teal'});
    }
}
// after succesfull validation displaying result
function displayDetails(){
    $('#getImage').attr('src', imagePath);
    $('.getFirstName').text($('#firstNameInput').val());
    $('.getLastName').text($('#lastNameInput').val());
    $('.getEmailId').text($('#emailInput').val());
    $('.getPhoneNumber').text($('#phoneNumberInput').val());
    $('.getAddress').text($("#addressInput").val());
    $('.getCountry').text($('#selectCountry').val());
    $('.getState').text($('#selectState').val());
    $('.getCity').text($('#cityInput').val());
    $('.getPincode').text($('#pincodeInput').val());
    $('.getPanNumber').text($('#panInput').val());
    $('.getAadharNumber').text($('#aadharInput').val());

    for(i=1;i<=addressFieldCounter;i++){
        $(".dynamicAddress").append(`<div class="addLine"></div><p class="getAddress`+i+`">address goes here</p>
        <p>
            <span class="getCity`+i+`">City</span>
            <span> , </span>
            <span class="getState`+i+`">State</span>
            <span> , </span>
            <span class="getCountry`+i+`">Country</span>
            <span> - </span>
            <span class="getPincode`+i+`">Pincode</span>
        </p>`);
        $('.getAddress'+i).text($("#addressInput"+i).val());
        $('.getCountry'+i).text($('#selectCountry'+i).val());
        $('.getState'+i).text($('#selectState'+i).val());
        $('.getCity'+i).text($('#cityInput'+i).val());
        $('.getPincode'+i).text($('#pincodeInput'+i).val());
    }
    for(i=1;i<=phoneFieldCounter;i++){
        $(".dynamicPhoneNumber").append(`<span class="getPhoneNumber`+i+`">span Phone number</span><br>`);
        $('.getPhoneNumber'+i).text($('#phoneNumberInput'+i).val());
    }


}