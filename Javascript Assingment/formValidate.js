
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
function pno(x){
    document.getElementById("nameErrorMsg2").style.display = "None";
    document.getElementById("nameErrorMsg3").style.display = "None";
    if(!/^[0-9]+$/.test(document.getElementById(x).value))
    {
        document.getElementById("nameErrorMsg2").style.display = "Block";
        document.getElementById(x).value=""; 
        document.getElementById(x).focus();  
        // alert("Please enter only alphabets");
    }
    if(document.getElementById(x).value.length!=10){
        document.getElementById("nameErrorMsg3").style.display = "Block";
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
        alert("Please fill first name");
        counter+=1;
    }
    if(document.getElementById("lastName").value.length==0){
        alert("Please fill last name");
        counter+=1;
    }
    if(document.getElementById("email").value.length==0){
        alert("Please fill email");
        counter+=1;
    }
    if(document.getElementById("pno1").value.length==0){
        alert("Please fill Phone Number 1");
        counter+=1;
    }
    if(document.getElementById("password").value.length==0){
        alert("Password left blank");
        counter+=1;
    }
    if(document.getElementById("confirmPassword").value.length==0){
        alert("Confirm Password left blank");
        counter+=1;
    }   
    if(document.getElementById("password").value!=document.getElementById("confirmPassword").value){
        alert("Password Mismatch");
        counter+=1;
        document.getElementById("password").value="";
        document.getElementById("confirmPassword").value="";
    }
    if(document.getElementById("dob").value.length==0){
        alert("Please fill Date of Birth");
        counter+=1;
    }
    if(document.getElementById("gender").value=="select"){
        alert("Select your gender");
        counter+=1;
    }
    if(document.getElementById("addr_1").value.length==0){
        alert("Please fill Address 1");
        counter+=1;
    }
    if(document.getElementById("state1").value=="select"){
        alert("Select your state");
        counter+=1;
    }
    if(document.getElementById("country1").value=="select"){
        alert("Select your country");
        counter+=1;
    }
    if(counter==0){
        location.replace("index.html");
        alert("THANKS FOR SUBMITTING THE FORM")
    }
}