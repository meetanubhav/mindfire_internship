/*

  Language : JavaScript
  Developer : Anubhav Gupta
  Included file in : index.html
  Purpose : To validate form field inputs.

*/


function changeToUpper(mystr){
    mystr.value=mystr.value.toUpperCase();
    // formProgress(10)
}
function inputName(nameValue){
    document.getElementById("nameErrorMsg").style.display = "None";
    if(!/^[a-zA-Z]+$/.test(document.getElementById(nameValue).value))
    {
        document.getElementById("nameErrorMsg").style.display = "Block";
        document.getElementById(nameValue).value=""; 
        document.getElementById(nameValue).focus();
        // formProgress(-10)
    }
    changeToUpper(document.getElementById(nameValue));
    
}
function phoneNumber(phoneNumberValue){
    document.getElementById("phoneErrorMsg1").style.display = "None";
    document.getElementById("phoneErrorMsg2").style.display = "None";
    if(!/^[0-9]+$/.test(document.getElementById(phoneNumberValue).value))
    {
        document.getElementById("phoneErrorMsg1").style.display = "Block";
        document.getElementById(phoneNumberValue).value=""; 
        document.getElementById(phoneNumberValue).focus();  
        // alert("Please enter only alphabets");
    }
    if(document.getElementById(phoneNumberValue).value.length!=10){
        document.getElementById("phoneErrorMsg2").style.display = "Block";
        document.getElementById(phoneNumberValue).value=""; 
        document.getElementById(phoneNumberValue).focus();  
    }
    changeToUpper(document.getElementById(phoneNumberValue));
}
function ValidateEmail(mail) 
{
    document.getElementById("emailErrorMsg").style.display = "None";
 if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById(mail).value))
  {
    document.getElementById("emailErrorMsg").style.display = "Block";
    document.getElementById(mail).value=""; 
    document.getElementById(mail).focus();  
  }
  changeToUpper(document.getElementById(mail))

}
function passwordLengthCheck(){
    if(!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,12}$/.test(document.getElementById("password").value)){
        document.getElementById("confirmPasswordErrorMsg").textContent="6 to 12 characters which contain at least one numeric digit and a special characterPassword should be greater than 6 digits";
        document.getElementById("password").value="";
        document.getElementById("password").focus();

    }
    else{
        document.getElementById("confirmPasswordErrorMsg").textContent="";
    }
}
function passwordValidation(){
    // document.getElementById("confirmPasswordErrorMsg").textContent="";
    if(document.getElementById("password").value!=document.getElementById("confirmPassword").value){
        document.getElementById("confirmPasswordErrorMsg").textContent="Password Mismatch";
        // document.getElementById("PasswordErrorMsg").textContent="Password Mismatch";
        // document.getElementById("password").value="";
        document.getElementById("confirmPassword").value="";
        document.getElementById("password").focus();
    }   
    else{
        document.getElementById("confirmPasswordErrorMsg").textContent="";
    }
}
function dateOfBirthValidation(){
    document.getElementById("dobErrorMsg").style.display="None";
    if(document.getElementById("dateOfbirth").value.length===0){
        document.getElementById("dobErrorMsg").style.display="Block";
        document.getElementById("dobErrorMsg").textContent="Fill up your Date of Birth";
        document.getElementById("dateOfbirth").focus();
    }
}

function addressValidation(){
    document.getElementById("addressErrorMsg1").style.display="None";
    if(document.getElementById("address").value.length===0){
        document.getElementById("addressErrorMsg1").style.display="Block";
        document.getElementById("addressErrorMsg1").textContent="Fill up your Address";
        document.getElementById("address").focus();
    }
}

function validateForm(){
    var counter=0;
    var strFirstName ="";
    var changeconfirmPassword="";
    var passwordText="";
    if(document.getElementById("firstName").value.length===0){
        document.getElementById("nameErrorMsg").style.display="Block";
        document.getElementById("nameErrorMsg").textContent="Fill up your Name";
        strFirstName = "First name & ";
        document.getElementById("firstName").focus();
        counter+=1;
    }
    if(document.getElementById("lastName").value.length==0){
        document.getElementById("nameErrorMsg").style.display="Block";
        document.getElementById("nameErrorMsg").textContent="Type "+strFirstName+"Last Name";
        document.getElementById("lastName").focus();
        counter+=1;
    }
    if(document.getElementById("email").value.length===0){
        document.getElementById("emailErrorMsg").style.display="Block";
        document.getElementById("emailErrorMsg").textContent="Fill up your Email";
        counter+=1;
        document.getElementById("email").focus();
    }
    if(document.getElementById("phoneNumber1").value.length===0){
        document.getElementById("phoneErrorMsg1").style.display="Block";
        document.getElementById("phoneErrorMsg1").textContent="Fill up your Primary Phone Number";
        counter+=1;
        document.getElementById("phoneNumber1").focus();
    }
    if(document.getElementById("password").value.length===0){
        passwordText = "Fill up your Password"
        counter+=1;
        document.getElementById("password").focus();        
    }
    if(document.getElementById("confirmPassword").value.length===0){
        changeconfirmPassword=" - Confirm Password"
        counter+=1;
    }   
    document.getElementById("confirmPasswordErrorMsg").style.display="Block";
    document.getElementById("confirmPasswordErrorMsg").textContent="Fill up your "+passwordText+changeconfirmPassword;
    
    dateOfBirthValidation();


    if(document.querySelector('input[name="gender"]:checked')==null){
        document.getElementById("genderErrorMsg").style.display="Block";
        document.getElementById("genderErrorMsg").textContent="Select Gender";
        counter+=1;
    }
    addressValidation();
    if(document.getElementById("city").value==="select"){
        document.getElementById("cityErrorMsg").style.display="Block";
        document.getElementById("cityErrorMsg").textContent="Select City";
        counter+=1;
        document.getElementById("city").focus();
    }
    if(document.getElementById("state").value==="select"){
        document.getElementById("stateErrorMsg").style.display="Block";
        document.getElementById("stateErrorMsg").textContent="Select State";
        counter+=1;
        document.getElementById("state").focus();
    }
    if(document.getElementById("country").value==="select"){
        document.getElementById("countryErrorMsg").style.display="Block";
        document.getElementById("countryErrorMsg").textContent="Select Country";
        counter+=1;
        document.getElementById("country").focus();
    }
    if(counter==0){
        return 1;
        
    }
    if(counter>0){
        return 0;
    }
}
function submitOnSuccess(){
    location.replace("index.html");
    alert("THANKS FOR SUBMITTING THE FORM")
}