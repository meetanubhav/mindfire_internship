/*

  Language : JavaScript
  Developer : Anubhav Gupta
  Included file in : index.html
  Purpose : To validate form field inputs.

*/

// Declarations
var dateOfbirth =document.getElementById("dateOfbirth").value; 
var confirmPassword = document.getElementById("confirmPassword").value;
var password = document.getElementById("password").value;
var phoneNumberValue = document.getElementById("phoneNumber1").value;
var address = document.getElementById("address").value;
var firstName = document.getElementById("firstName").value;
var lastName = document.getElementById("lastName").value;

// error-message var declaration

var dispNameError = document.getElementById("nameErrorMsg"); 
var emailErrorMsg =  document.getElementById("emailErrorMsg");
var dispPhoneError1 = document.getElementById("phoneErrorMsg1");
var confirmPasswordErrorMsg = document.getElementById("confirmPasswordErrorMsg");
var phoneErrorMsg2 = document.getElementById("phoneErrorMsg2");
var cityErrorMsg = document.getElementById("cityErrorMsg");
var stateErrorMsg = document.getElementById("stateErrorMsg");
var countryErrorMsg = document.getElementById("countryErrorMsg");
var addressErrorMsg1 = document.getElementById("addressErrorMsg1");
var dobErrorMsg = document.getElementById("dobErrorMsg");


function changeToUpper(mystr){
    mystr.value=mystr.value.toUpperCase();
    // formProgress(10)
}
function inputFirstName(nameValue){
    dispNameError.style.display = "None";
    if(!/^[a-zA-Z]+$/.test(document.getElementById(nameValue).value))
    {
        dispNameError.style.display = "Block";
    }
    changeToUpper(document.getElementById(nameValue));
    
}
function inputLastName(nameValue){
    dispNameError.style.display = "None";
    if(!/^[a-zA-Z]+$/.test(document.getElementById(nameValue).value))
    {
        dispNameError.style.display = "Block";
    }
    changeToUpper(document.getElementById(nameValue));
    
}
function phoneNumber(){
    var phoneNumberValue = document.getElementById("phoneNumber1").value;
    dispPhoneError1.style.display = "None";
    phoneErrorMsg2.style.display = "None";
    if(!/^[0-9]+$/.test(phoneNumberValue))
    {
        dispPhoneError1.style.display = "Block";
    }
    if(phoneNumberValue.length!=10){
        phoneErrorMsg2.style.display = "Block";
    }
}
function ValidateEmail(mail) 
{
   emailErrorMsg.style.display = "None";
 if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById(mail).value))
  {
   emailErrorMsg.style.display = "Block";
  }
  changeToUpper(document.getElementById(mail))

}
function passwordLengthCheck(){
    if(!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,12}$/.test(password)){
        confirmPasswordErrorMsg.textContent="6 to 12 characters which contain at least one numeric digit and a special characterPassword should be greater than 6 digits";

    }
    else{
        confirmPasswordErrorMsg.textContent="";
    }
}
function passwordValidation(){
    if(password!=confirmPassword || confirmPassword==""){
        confirmPasswordErrorMsg.textContent="Password Mismatch";
    }   
    else{
        confirmPasswordErrorMsg.textContent="";
    }
}
function dateOfBirthValidation(){
    dobErrorMsg.style.display="None";
    if(dateOfbirth.length===0){
        dobErrorMsg.style.display="Block";
        dobErrorMsg.textContent="Fill up your Date of Birth";
        // counter+=1;
        // return 0
    }
    // counter=0;
    // return 1
}

function addressValidation(){
    addressErrorMsg1.style.display="None";
    if(address.length===0){
        addressErrorMsg1.style.display="Block";
        addressErrorMsg1.textContent="Fill up your Address";
    }
}

function validateForm(){
    var counter=0;
    var strFirstName ="";
    var changeconfirmPassword="";
    var passwordText="";
    if(firstName.length===0){
        dispNameError.style.display="Block";
        dispNameError.textContent="Fill up your Name";
        strFirstName = "First name & ";
        counter+=1;
    }
    if(lastName.length==0){
        dispNameError.style.display="Block";
        dispNameError.textContent="Type "+strFirstName+"Last Name";
        counter+=1;
    }
    if(document.getElementById("email").value.length===0){
       emailErrorMsg.style.display="Block";
       emailErrorMsg.textContent="Fill up your Email";
        counter+=1;
    }
    if(phoneNumber.length===0){
        dispPhoneError1.style.display="Block";
        dispPhoneError1.textContent="Fill up your Primary Phone Number";
        counter+=1;
    }
    if(password.length===0){
        passwordText = "Fill up your Password"
        counter+=1;
    }
    if(confirmPassword.length===0){
        changeconfirmPassword=" - Confirm Password"
        counter+=1;
    }   
    confirmPasswordErrorMsg.style.display="Block";
    confirmPasswordErrorMsg.textContent="Fill up your "+passwordText+changeconfirmPassword;
    
    if(dateOfbirth.length===0){
        dobErrorMsg.style.display="Block";
        dobErrorMsg.textContent="Fill up your Date of Birth";
        counter+=1;
    }


    if(document.querySelector('input[name="gender"]:checked')==null){
        document.getElementById("genderErrorMsg").style.display="Block";
        document.getElementById("genderErrorMsg").textContent="Select Gender";
        counter+=1;
    }
    if(address.length===0){
        addressErrorMsg1.style.display="Block";
        addressErrorMsg1.textContent="Fill up your Address";
    }
    if(document.querySelector('#city').value===""){
        cityErrorMsg.style.display="Block";
        cityErrorMsg.textContent="Select City";
        counter+=1;
    }
    if(document.querySelector('#state').value===""){
        stateErrorMsg.style.display="Block";
        stateErrorMsg.textContent="Select State";
        counter+=1;
    }
    if(document.querySelector('#country').value===""){
        countryErrorMsg.style.display="Block";
        countryErrorMsg.textContent="Select Country";
        counter+=1;
    }
    return !counter;
}
function submitOnSuccess(){
    alert("THANKS FOR SUBMITTING THE FORM");
    location.replace("index.html");
}