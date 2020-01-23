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
function inputFirstName(nameValue){
    document.getElementById("firstNameErrorMsg").style.display = "None";
    if(!/^[a-zA-Z]+$/.test(document.getElementById(nameValue).value))
    {
        document.getElementById("firstNameErrorMsg").style.display = "Block";
    }
    changeToUpper(document.getElementById(nameValue));
    
}
function inputLastName(nameValue){
    document.getElementById("lastNameErrorMsg").style.display = "None";
    if(!/^[a-zA-Z]+$/.test(document.getElementById(nameValue).value))
    {
        document.getElementById("lastNameErrorMsg").style.display = "Block";
    }
    changeToUpper(document.getElementById(nameValue));
    
}
function phoneNumber(phoneNumberValue){
    document.getElementById("phoneErrorMsg1").style.display = "None";
    document.getElementById("phoneErrorMsg2").style.display = "None";
    if(!/^[0-9]+$/.test(document.getElementById(phoneNumberValue).value))
    {
        document.getElementById("phoneErrorMsg1").style.display = "Block";
    }
    if(document.getElementById(phoneNumberValue).value.length!=10){
        document.getElementById("phoneErrorMsg2").style.display = "Block";
    }
    changeToUpper(document.getElementById(phoneNumberValue));
}
function ValidateEmail(mail) 
{
    document.getElementById("emailErrorMsg").style.display = "None";
 if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById(mail).value))
  {
    document.getElementById("emailErrorMsg").style.display = "Block";
  }
  changeToUpper(document.getElementById(mail))

}
function passwordLengthCheck(){
    if(!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,12}$/.test(document.getElementById("password").value)){
        document.getElementById("confirmPasswordErrorMsg").textContent="6 to 12 characters which contain at least one numeric digit and a special characterPassword should be greater than 6 digits";

    }
    else{
        document.getElementById("confirmPasswordErrorMsg").textContent="";
    }
}
function passwordValidation(){
    // document.getElementById("confirmPasswordErrorMsg").textContent="";
    if(document.getElementById("password").value!=document.getElementById("confirmPassword").value){
        document.getElementById("confirmPasswordErrorMsg").textContent="Password Mismatch";
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
    }
}

function addressValidation(){
    document.getElementById("addressErrorMsg1").style.display="None";
    if(document.getElementById("address").value.length===0){
        document.getElementById("addressErrorMsg1").style.display="Block";
        document.getElementById("addressErrorMsg1").textContent="Fill up your Address";
    }
}

function validateForm(){
    var counter=0;
    var strFirstName ="";
    var changeconfirmPassword="";
    var passwordText="";
    if(document.getElementById("firstName").value.length===0){
        document.getElementById("firstNameErrorMsg").style.display="Block";
        document.getElementById("firstNameErrorMsg").textContent="Fill up your First Name";
        strFirstName = "First name & ";
        counter+=1;
    }
    if(document.getElementById("lastName").value.length==0){
        document.getElementById("lastNameErrorMsg").style.display="Block";
        document.getElementById("lastNameErrorMsg").textContent="Fill up your Last Name";
        counter+=1;
    }
    if(document.getElementById("email").value.length===0){
        document.getElementById("emailErrorMsg").style.display="Block";
        document.getElementById("emailErrorMsg").textContent="Fill up your Email";
        counter+=1;
    }
    if(document.getElementById("phoneNumber1").value.length===0){
        document.getElementById("phoneErrorMsg1").style.display="Block";
        document.getElementById("phoneErrorMsg1").textContent="Fill up your Primary Phone Number";
        counter+=1;
    }
    if(document.getElementById("password").value.length===0){
        passwordText = "Password"
        counter+=1;
    }
    if(document.getElementById("confirmPassword").value.length===0){
        changeconfirmPassword=" - Confirm Password"
        counter+=1;
    }   
    document.getElementById("confirmPasswordErrorMsg").style.display="Block";
    document.getElementById("confirmPasswordErrorMsg").textContent="Fill up your "+passwordText+changeconfirmPassword;
    
    // dateOfBirthValidation();
    if(document.getElementById("dateOfbirth").value.length===0){
        document.getElementById("dobErrorMsg").style.display="Block";
        document.getElementById("dobErrorMsg").textContent="Fill up your Date of Birth";
        counter+=1;
    }


    if(document.querySelector('input[name="gender"]:checked')==null){
        document.getElementById("genderErrorMsg").style.display="Block";
        document.getElementById("genderErrorMsg").textContent="Select Gender";
        counter+=1;
    }
    // addressValidation();
    if(document.getElementById("address").value.length===0){
        document.getElementById("addressErrorMsg1").style.display="Block";
        document.getElementById("addressErrorMsg1").textContent="Fill up your Address";
        counter+=1;
    }
    if(document.getElementById("city").value==="    "){
        document.getElementById("cityErrorMsg").style.display="Block";
        document.getElementById("cityErrorMsg").textContent="Select City";
        counter+=1;
    }
    if(document.getElementById("state").value===""){
        document.getElementById("stateErrorMsg").style.display="Block";
        document.getElementById("stateErrorMsg").textContent="Select State";
        counter+=1;
    }
    if(document.getElementById("country").value===""){
        document.getElementById("countryErrorMsg").style.display="Block";
        document.getElementById("countryErrorMsg").textContent="Select Country";
        counter+=1;
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