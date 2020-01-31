$(document).ready( function () {
    // $('#formInputField').hide();
    $('#showProfile').hide();
    captchaLoad();
    addFields();
    dynamicAdress();
    // $('#selectCountry').click(function() {
    //     stateList();
    // });
    $("#reloadCaptcha").click(function(){
        captchaLoad();
    });

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
        // console.log("pcf"+phoneFieldCounter);
        // console.log("adf"+addressFieldCounter)
        for(i=1;i<=phoneFieldCounter;i++){
            isNull($('#phoneNumberInput'+i),'#dynamicPhoneNumberError'+i);
            regexChecker($('#phoneNumberInput'+i),'#dynamicPhoneNumberRegexError'+i,2);
        }
        for(i=1;i<=addressFieldCounter;i++){
            isNull($("#addressInput"+i),'#addressError'+i);
            isNull($('#selectCountry'+i),'#selectCountryError'+i);
            isNull($('#selectState'+i),'#selectStateError'+i);
            isNull($('#cityInput'+i),'#cityInputError'+i);
            isNull($('#pincodeInput'+i),('#pincodeInputError'+i));
            regexChecker($('#pincodeInput'+i),'#regexPincodeErrorMsg'+i,5);
        }

        // check for regex
        regexChecker($('#firstNameInput'),'.regexErrorMessage',1);
        regexChecker($('#lastNameInput'),'.regexErrorMessageLastName',1);
        regexChecker($('#phoneNumberInput'),'.phoneNumberRegexError',2);
        regexChecker($('#emailInput'),'.regexEmailErrorMsg',3);
        regexChecker($('#aadharInput'),'.regexAadharErrorMsg',4);
        regexChecker($('#pincodeInput'),'.regexPincodeErrorMsg',5);
        regexChecker($('#panInput'),'.regexPanErrorMsg',6);


        // Address validation
        // checkAddress()
        console.log(counter);
        if(counter===1){
            captchaLoad();
            // console.log(calculatedoutput);
        }
        if(counter===0 && $('#captchaInput').val().trim()==calculatedoutput){
            // captchaLoad();
            // alert("validated");
            // var url = "resume.html?name=" + encodeURIComponent("Anubhav") + "&technology=" + encodeURIComponent("js");
            // // if ($("#newbox").is(':checked')) {                       
            // //     url = url + "&newbox=" + encodeURIComponent($("#newbox").val());
            // // }
            // window.location.href = url;
            $('#formInputField').hide();
            $('#showProfile').show();
            displayDetails();

        }
        
    });

});
function regexChecker(valueToCheck,errorMessageDisplay,typeValue){
    // For alpha values
    if(typeValue===1){
        if(!/^[a-zA-Z]+$/.test(valueToCheck.val())){
            $(errorMessageDisplay).show();
            counter=1;
        }
        else{
            $(errorMessageDisplay).hide();
        }
    }
    // For phone Number
    if(typeValue===2){
        if(!/^[0][1-9]\d{9}$|^[1-9]\d{9,11}$/.test(valueToCheck.val())){
            $(errorMessageDisplay).text("Only Numeric Type ( 10 - 12 digits )");
            counter=1;
        }
        else{
            $(errorMessageDisplay).text("");
        }
    }
    // For Email type
    if(typeValue===3){
        if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(valueToCheck.val())){
            $(errorMessageDisplay).text("Invalid Email Type");
            counter=1;
        }
        else{
            $(errorMessageDisplay).text("");
        }
    }
    // For Adhar Number
    if(typeValue===4){
        if(!/^[1-9]\d{15}$/.test(valueToCheck.val())){
            $(errorMessageDisplay).text("Only Numeric Type ( 16 digits )");
            counter=1;
        }
        else{
            $(errorMessageDisplay).text("");
        }
    }

    // For Pincode
    if(typeValue===5){
        if(!/^[1-9]\d{5}$/.test(valueToCheck.val())){
            $(errorMessageDisplay).text("Only Numeric Type ( 6 digits )");
            counter=1;
        }
        else{
            $(errorMessageDisplay).text("");
        }
    }
     // For Pan Number
     if(typeValue===6){
        if(!/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/.test(valueToCheck.val())){
            $(errorMessageDisplay).text("Only Alpha Numeric Type ( 10 digits )");
            counter=1;
        }
        else{
            $(errorMessageDisplay).text("");
        }
    }
}


// function checkAddress(){
//     var addressInputs = $(".addressInputFieldClass");
//     for(var i = 0; i < addressInputs.length; i++){
//         alert($(addressInputs[i]).val());
//     }
// }

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
function displayDetails(){
    $('#getImage').show();
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
        $(".getDynamicAddress").append(`<h3 class="getAddress`+i+`">address</h3>
                                        <div class="flexContainer">
                                            <h3 class="getCountry`+i+`">country</h3>
                                            <h3 class="getState`+i+`">state</h3>
                                            <h3 class="getCity`+i+`">city</h3>
                                        </div>
                                        <h3 class="getPincode`+i+`">pincode</h3>`);
        $('.getAddress'+i).text($("#addressInput"+i).val());
        $('.getCountry'+i).text($('#selectCountry'+i).val());
        $('.getState'+i).text($('#selectState'+i).val());
        $('.getCity'+i).text($('#cityInput'+i).val());
        $('.getPincode'+i).text($('#pincodeInput'+i).val());
    }


}