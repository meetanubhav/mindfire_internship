/*

  Language : JQuery , JavaScript
  Developer : Anubhav Gupta
  Included file in : index.html
  Purpose : Scripting

*/
$(document).ready(function () {
   
    // Regex Declaration
    var nameRegex = /^[a-zA-Z]+$/;
    var phoneNumberregex = /^[0-9]+$/;
    var passwordregex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,12}$/;
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    $('.usaState').hide();
    $('.indiaState').hide();

    // checking name type
    $("#firstName").blur(function(){
        if(!nameRegex.test(this.value))
        {
            $('#firstNameErrorMsg').show();
        }
        else{
            $('#firstNameErrorMsg').hide();
        }
      });

      $("#lastName").blur(function(){
        if(!nameRegex.test(this.value))
        {
            $('#lastNameErrorMsg').show();
        }
        else{
            $('#lastNameErrorMsg').hide();
        }
      });

    //   checking email
    $("#email").blur(function(){
        if(!emailRegex.test(this.value))
        {
            $('#emailErrorMsg').show();
        }
        else{
            $('#emailErrorMsg').hide();
        }
      });

    //   checking Phone Number
    $("#phoneNumber1").blur(function(){
        if(!phoneNumberregex.test(this.value) || this.value.length != 10)
        {
            $('#phoneErrorMsg1').show();
            $('#phoneErrorMsg2').show();
        }
        else{
            $('#phoneErrorMsg1').hide();
            $('#phoneErrorMsg2').hide();
        }
      });

    //   checking Password
    $("#password").blur(function(){
        if(!passwordregex.test(this.value))
        {
            $('#passwordErrorMsg').show();
            $('#passwordErrorMsg').text('Please enter a special character, number , alphabet and your password should be between 6-12')
        }
        else{
            $('#passwordErrorMsg').hide();
        }
    });

    // check for confirm password and password
    $("#confirmPassword").blur(function(){
        if($("#password").val() != $("#confirmPassword").val())
            {
                $('#confirmPasswordErrorMsg').show();
                $('#confirmPasswordErrorMsg').text('Password mismatch');
            }
            else{
                $('#confirmPasswordErrorMsg').hide();
            }
    });
   
    // check for date of birth
    $("#dateOfbirth").blur(function(){
        if($("#dateOfbirth").val() == "")
            {
                $('#dobErrorMsg').show();
                $('#dobErrorMsg').text('Enter Date Of Birth');
            }
            else{
                $('#dobErrorMsg').hide();
            }
    });

    // check for address    
    $("#address").blur(function(){
        if($("#address").val() == "")
            {
                $('#addressErrorMsg1').show();
                $('#addressErrorMsg1').text('Enter Address');
            }
            else{
                $('#addressErrorMsg1').hide();
            }
    });

    $("#country").change(function(){
        var countrySelected = $('#country').val();
        if(countrySelected=="INDIA"){
            $('.usaState').hide();
            $('.indiaState').show();
        }
        if(countrySelected=="USA"){
            $('.indiaState').hide();
            $('.usaState').show();
        }
    });
    
    

// $('#submit').click(function(){
//     validateForm();   
// });

window.validateForm = function(){
    
    // Declaration of values 
    var firstNameValue = $("#firstName").val();
    var lastNameValue = $("#lastName").val();
    var emailValue = $("#email").val();
    var phoneNumberValue = $("#phoneNumber1").val();
    secondaryphoneNumberValue = $("#phoneNumber2").val();
    var passwordValue = $("#password").val();
    var confirmPasswordValue = $("#confirmPassword").val();
    var dateOfBirthValue = $("#dateOfbirth").val();
    var genderValue = $("#gender").val();
    var addressValue = $("#address").val();
    var cityValue = $("#city").val();
    var stateValue = $("#state").val();
    var countryValue = $("#country").val();

    var passwordregex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,12}$/;

    var counter = 0;

    if(firstNameValue == ""){
        $('#firstNameErrorMsg').show();
        counter = 1;
    } 
    if(lastNameValue == ""){
        $('#lastNameErrorMsg').show();
        counter = 1;
    } 
    if(emailValue == ""){
        $('#emailErrorMsg').show();
        counter = 1;
    } 
    if(passwordValue == ""){
        $('#passwordErrorMsg').text("Enter Password");
        counter = 1;
    } 
    if(confirmPasswordValue == ""){
        $('#confirmPasswordErrorMsg').text("Enter Confirm Password");
        counter = 1;
    } 
    if($("#password").val() != $("#confirmPassword").val())
    {
        $('#confirmPasswordErrorMsg').show();
        $('#confirmPasswordErrorMsg').text('Password mismatch');
        counter+=1;
    }
    if(!passwordregex.test(passwordValue))
    {
        $('#passwordErrorMsg').show();
        $('#passwordErrorMsg').text('Please enter a special character, number , alphabet and your password should be between 6-12');
        counter+=1;
    }
    if(phoneNumberValue == ""){
        $('#phoneErrorMsg1').show();
        $('#phoneErrorMsg2').show();
        counter = 1;
    } 
    if($("#phoneNumber2").val()!=""){
        if(!phoneNumberregex.test(secondaryphoneNumberValue) || secondaryphoneNumberValue.length != 10)
        {
            $('#phoneErrorMsg1').show();
            $('#phoneErrorMsg2').show();
            counter = 1; 
        }
        else{
            $('#phoneErrorMsg1').hide();
            $('#phoneErrorMsg2').hide();
        }

    }
    if($("input[name='gender']:checked").val()==this.undefined){
        // $('#genderErrorMsg').show();
        $('#genderErrorMsg').text('Enter Gender');
        counter = 1;  
    }
    if(dateOfBirthValue==""){
        $('#dobErrorMsg').text('Enter Date Of Birth');
        counter = 1;  
    }
    if(addressValue==""){
        $('#addressErrorMsg1').text('Enter Address');
        counter = 1;  
    } 
    if(countryValue==""){
        $('#countryErrorMsg').text('Select Country');
        counter = 1;  
    } 
    if(stateValue==""){
        $('#stateErrorMsg').text('Select Country');
        counter = 1;  
    } 
    if(cityValue==""){
        // $('#cityErrorMsg').show();
        $('#cityErrorMsg').text('Enter City');
        counter = 1;  
    }    

    if(counter==0){
        return 1
    }
    else{
        return 0
    }

}


});