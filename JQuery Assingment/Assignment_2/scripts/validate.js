$(document).ready( function () {
    $('.showProfile').hide();
    captchaLoad();
    addFields();
    dynamicAdress();
    $("#reloadCaptcha").click(function(){
        captchaLoad();
    });
    // reset form
    $("#resetForm").click(function(){
        $("small").hide();
        removeUpload();
    });
    $(".removeImage").click(function(){
        removeUpload();
    });
    $(document).on("change","#imageInput",function(){
        readURL(this);
    });
    // checking values after submission
    $("#submitForm").click(function(){
        var addressArray = [];
        window.phoneNumberArray = [];

        // check for null values
        window.counter = 0;
        // isNull($('#firstNameInput'),'#firstNameErrorMsg');
        // isNull($('#lastNameInput'),'#lastNameErrorMsg');
        // isNull($('#emailInput'),'#emailErrorMsg');
        // isNull($('#panInput'),'#panErrorMsg');
        // isNull($('#aadharInput'),'#aadharErrorMsg');
        isNull($("#addressInput"),'.addressError');
        isNull($('#selectCountry'),'.selectCountryError');
        isNull($('#selectState'),'.selectStateError');
        // isNull($('#cityInput'),'.cityInputError');
        // isNull($('#phoneNumberInput'),'.phoneNumberError');
        isNull($('#captchaInput'),'.captchaErrorMsg');
        isNull($('#imageInput'),'.imageErrormsg');
        // isNull($('#pincodeInput'),('.pincodeInputError'));
        phoneNumberArray.push($('#phoneNumberInput').val());
        // addressArray.push($("#addressInput").val());
        // dynamicPhoneNumberError
        $('.phoneNumberInputDynamic').each(function() {
           if(regexChecker($(this),$(this).nextAll('small').first(),/^[0][1-9]\d{9}$|^[1-9]\d{9,11}$/)===true){
           }
           if((jQuery.inArray( $(this).val(), phoneNumberArray ))>=0){
            $(this).parents(".addLine").remove();
            }
            else{
                phoneNumberArray.push($(this).val());
            }
        });
        for(var i=1;i<=addressFieldCounter;i++){
            isNull($("#addressInput"+i),'#addressError'+i);
            isNull($('#selectCountry'+i),'#selectCountryError'+i);
            isNull($('#selectState'+i),'#selectStateError'+i);
            isNull($('#cityInput'+i),'#cityInputError'+i);
            isNull($('#pincodeInput'+i),('#pincodeInputError'+i));
            regexChecker($('#pincodeInput'+i),'#pincodeInputError'+i,/^[1-9]\d{5}$/);
            regexChecker($('#cityInput'+i),'#cityInputError'+i,/^[a-zA-Z][a-zA-Z\s-]+[a-zA-Z]$/);
            if((jQuery.inArray( $("#addressInput"+i).val(), addressArray ))>=0){
                $("#addressInput"+i).parents(".addLine").hide();
            }
            else{
                phoneNumberArray.push($("#addressInput"+i).val());
            }
        }
        // check for regex
        regexChecker($('#firstNameInput'),'#firstNameErrorMsg',/^[a-zA-Z]+$/);
        regexChecker($('#cityInput'),'.cityInputError',/^[a-zA-Z][a-zA-Z\s-]+[a-zA-Z]$/);
        regexChecker($('#lastNameInput'),'#lastNameErrorMsg',/^[a-zA-Z]+$/);
        regexChecker($('#phoneNumberInput'),'.phoneNumberError',/^[0][1-9]\d{9}$|^[1-9]\d{9,11}$/);
        regexChecker($('#emailInput'),'#emailErrorMsg',/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
        regexChecker($('#aadharInput'),'#aadharErrorMsg',/^[1-9]\d{11}$/);
        regexChecker($('#pincodeInput'),'.pincodeInputError',/^[1-9]\d{5}$/);
        regexChecker($('#panInput'),'#panErrorMsg',/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/);

        // check image type
        var fileExtension;
        fileExtension = $('#imageInput').val().replace(/^.*\./, '');
        if(fileExtension==="jpg" || fileExtension === "png" || fileExtension === "jpeg" || fileExtension === "PNG" ||  fileExtension === "JPG" ||  fileExtension === "JPEG"){
            $('.imageErrormsg').hide();
        }
        else{
            counter=1;
            $('#imageInput').val("");
            removeUpload();
            $('.imageErrormsg').show();

        }

        // Address validation
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
    if(!typeRegex.test(valueToCheck.val().trim())){
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
        counter=1;
    }
    else{
        $(errorMessage).hide();
    }
}
// after succesfull validation displaying result
function displayDetails(){
    $('#displayImage').attr('src', imagePath);
    $('.displayFirstName').text($('#firstNameInput').val());
    $('.displayLastName').text($('#lastNameInput').val());
    $('.displayEmailId').text($('#emailInput').val());
    $('.getPhoneNumber').text($('#phoneNumberInput').val());
    $('.displayAddress').text($("#addressInput").val());
    $('.displayCountry').text($('#selectCountry').val());
    $('.displayState').text($('#selectState').val());
    $('.displayCity').text($('#cityInput').val());
    $('.displayPincode').text($('#pincodeInput').val());
    $('.displayPanId').text($('#panInput').val());
    var getAadharNum = $('#aadharInput').val();
    $('.displayAadharId').text(getAadharNum.slice(0,4)+"-"+getAadharNum.slice(4,8)+"-"+getAadharNum.slice(8,12));

    for(i=1;i<=addressFieldCounter;i++){
        $(".dynamicAddress").append(`<div class="addLine"></div><p class="displayAddress`+i+`">address goes here</p>
        <p>
            <span class="displayCity`+i+`">City</span>
            <span> , </span>
            <span class="displayState`+i+`">State</span>
            <span> , </span>
            <span class="displayCountry`+i+`">Country</span>
            <span> - </span>
            <span class="displayPincode`+i+`">Pincode</span>
        </p>`);
        $('.displayAddress'+i).text($("#addressInput"+i).val());
        $('.displayCountry'+i).text($('#selectCountry'+i).val());
        $('.displayState'+i).text($('#selectState'+i).val());
        $('.displayCity'+i).text($('#cityInput'+i).val());
        $('.displayPincode'+i).text($('#pincodeInput'+i).val());
    }
    $('.phoneNumberInputDynamic').each(function() {
        $(".dynamicPhoneNumber").append(`<span class="getPhoneNumber">`+$(this).val()+`</span><br>`);
        });
}