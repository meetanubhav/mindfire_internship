
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
        // alert("Please enter only alphabets");
    }
    // if(/^[a-zA-Z]+$/.test(document.getElementById(x).value)){} 
    uc(document.getElementById(x));
}