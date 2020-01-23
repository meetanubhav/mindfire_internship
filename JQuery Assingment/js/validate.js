$(document).ready(function () {
    console.log("loaded");
    

$('#submit').click(function(){
    validateForm();   
});

function validateForm(){}
    // Regex Declaration
    var nameRegex = '/^[a-zA-Z]+$/';
    var phoneNumberregex = '/^[0-9]+$/';
    var passwordregex = '/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,12}$/';
    var emailRegex = '/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/';

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