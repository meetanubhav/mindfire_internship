// Declarations
var strFirstName ="";

function uc(mystr){
    mystr.value=mystr.value.toUpperCase();
}

function fname(x){
    document.getElementById("nameErrorMsg").style.display = "None";
    if(!/^[a-zA-Z]+$/.test(document.getElementById(x).value))
    {
        document.getElementById("nameErrorMsg").style.display = "Block";
        document.getElementById(x).value=""; 
        document.getElementById(x).focus();  
    }
    uc(document.getElementById(x));
}
function phoneNumber(x){
    document.getElementById("phoneErrorMsg1").style.display = "None";
    document.getElementById("phoneErrorMsg2").style.display = "None";
    if(!/^[0-9]+$/.test(document.getElementById(x).value))
    {
        document.getElementById("phoneErrorMsg1").style.display = "Block";
        document.getElementById(x).value=""; 
        document.getElementById(x).focus();  
        // alert("Please enter only alphabets");
    }
    if(document.getElementById(x).value.length!=10){
        document.getElementById("phoneErrorMsg2").style.display = "Block";
        document.getElementById(x).value=""; 
        document.getElementById(x).focus();  
    }
    uc(document.getElementById(x));
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

  }
function validateForm(){
    var counter=0;
    if(document.getElementById("firstName").value.length==0){
        document.getElementById("nameErrorMsg").style.display="Block";
        document.getElementById("nameErrorMsg").textContent="Fill up your Name";
        var strFirstName = "First name & ";
        counter+=1;
    }
    if(document.getElementById("lastName").value.length==0){
        document.getElementById("nameErrorMsg").style.display="Block";
        document.getElementById("nameErrorMsg").textContent="Type "+strFirstName+"Last Name";
        counter+=1;
    }
    if(document.getElementById("email").value.length==0){
        document.getElementById("emailErrorMsg").style.display="Block";
        document.getElementById("emailErrorMsg").textContent="Fill up your Email";
        counter+=1;
    }
    if(document.getElementById("phoneNumber1").value.length==0){
        document.getElementById("phoneErrorMsg1").style.display="Block";
        document.getElementById("phoneErrorMsg1").textContent="Fill up your Phone Number 1";
        counter+=1;
    }
    if(document.getElementById("password").value.length==0){
        document.getElementById("passwordErrorMsg").style.display="Block";
        document.getElementById("passwordErrorMsg").textContent="Fill up your Password";
        counter+=1;
    }
    if(document.getElementById("confirmPassword").value.length==0){
        document.getElementById("confirmPasswordErrorMsg").style.display="Block";
        document.getElementById("confirmPasswordErrorMsg").textContent="Fill up your Confirm Password";
        counter+=1;
    }   
    if(document.getElementById("password").value!=document.getElementById("confirmPassword").value){
        document.getElementById("confirmPasswordErrorMsg").textContent="Password Mismatch";
        document.getElementById("PasswordErrorMsg").textContent="Password Mismatch";
        counter+=1;
        document.getElementById("password").value="";
        document.getElementById("confirmPassword").value="";
    }
    if(document.getElementById("dob").value.length==0){
        document.getElementById("dobErrorMsg").style.display="Block";
        document.getElementById("dobErrorMsg").textContent="Fill up your Date of Birth";
        counter+=1;
    }
    if(document.getElementById("gender").value=="select"){
        document.getElementById("genderErrorMsg").style.display="Block";
        document.getElementById("genderErrorMsg").textContent="Select Gender";
        counter+=1;
    }
    if(document.getElementById("address1").value.length==0){
        document.getElementById("addressErrorMsg1").style.display="Block";
        document.getElementById("addressErrorMsg1").textContent="Fill up your Address 1";
        counter+=1;
    }
    if(document.getElementById("city").value=="select"){
        document.getElementById("cityErrorMsg").style.display="Block";
        document.getElementById("cityErrorMsg").textContent="Select City";
        counter+=1;
    }
    if(document.getElementById("state").value=="select"){
        document.getElementById("stateErrorMsg").style.display="Block";
        document.getElementById("stateErrorMsg").textContent="Select State";
        counter+=1;
    }
    if(document.getElementById("country").value=="select"){
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