$(document).ready(function () {

    // Regex Declaration
    var nameRegex = /^[a-zA-Z]+$/;
    var phoneNumberregex = /^[0-9]+$/;
    var passwordregex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,12}$/;
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    // checking name type
    $("#firstName").blur(function(){
        if(!nameRegex.test(this.value))
        {
            $('#firstNameErrorMsg').css({"display": "block"});
        }
        else{
            $('#firstNameErrorMsg').css({"display": "none"});
        }
      });

      $("#lastName").blur(function(){
        if(!nameRegex.test(this.value))
        {
            $('#lastNameErrorMsg').css({"display": "block"});
        }
        else{
            $('#lastNameErrorMsg').css({"display": "none"});
        }
      });

    //   checking email
    $("#email").blur(function(){
        if(!emailRegex.test(this.value))
        {
            $('#emailErrorMsg').css({"display": "block"});
        }
        else{
            $('#emailErrorMsg').css({"display": "none"});
        }
      });

    //   checking Phone Number
    $("#phoneNumber1").blur(function(){
        if(!phoneNumberregex.test(this.value) || this.value.length < 10)
        {
            $('#phoneErrorMsg1').css({"display": "block"});
        }
        else{
            $('#phoneErrorMsg1').css({"display": "none"});
        }
      });

    //   checking Password
    // $("#password").blur(function(){
    //     if(!passwordregex.test(this.value))
    //     {
    //         $('#passwordErrorMsg').css({"display": "block"});
    //         $('#passwordErrorMsg').text('Please enter a special character, number , alphabet and your password should be between 6-12')
    //     }
    //     else{
    //         $('#passwordErrorMsg').css({"display": "none"});
    //     }
    // });

    // check for confirm password and password
    $("#confirmPassword").blur(function(){
        if($("#password").val() != $("#confirmpassword").val())
            {
                $('#confirmPasswordErrorMsg').css({"display": "block"});
                $('#confirmPasswordErrorMsg').text('Password mismatch');
                // $('#confirmPasswordErrorMsg').css({"display": "none"});
            }
            // else{
                
            //     alert('success');
            // }
    });
   
    

$('#submit').click(function(){
    validateForm();   
});

function validateForm(){
    
    // Declaration of values 
    var firstNameValue = $("#firstName").val();
    var lastNameValue = $("#lastName").val();
    var emailValue = $("#email").val();
    var phoneNumberValue = $("#firstName").val();
    var passwordValue = $("#password").val();
    var confirmPasswordValue = $("#confirmpassword").val();
    var dateOfBirthValue = $("#dateOfbirth").val();
    var genderValue = $("#gender").val();
    var addressValue = $("#address").val();
    var cityValue = $("#city").val();
    var stateValue = $("#state").val();
    var countryValue = $("#country").val();

    var errorMessage = new Array("First Name", "Last Name", "Email", "Password", "Confirm Password","Primary Phone Number");

    if(firstNameValue == ""){
        $('#firstName').after('<span class="text-danger"> Please enter your ' + errorMessage[0] + '</span>');
    } 
    if(lastNameValue == ""){
        $('#lastName').after('<span class="text-danger"> Please enter your ' + errorMessage[1] + '</span>');
    } 
    if(emailValue == ""){
        $('#email').after('<span class="text-danger"> Please enter your ' + errorMessage[2] + '</span>');
    } 
    if(passwordValue == ""){
        $('#password').after('<span class="text-danger"> Please enter your ' + errorMessage[3] + '</span>');
    } 
    if(confirmPasswordValue == ""){
        $('#confirmPassword').after('<span class="text-danger"> Please enter your ' + errorMessage[4] + '</span>');
    } 
    if(phoneNumberValue == ""){
        $('#phoneNumber1').after('<span class="text-danger"> Please enter your ' + errorMessage[5] + '</span>');
    } 

}


});