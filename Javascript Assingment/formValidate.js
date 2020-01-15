var regxStr = /^[A-Z]+$/;
console.log("Script 2 loaded");
function uc(mystr){
    mystr.value=mystr.value.toUpperCase();
}
function fname(){
    uc(document.getElementById("firstName"));
}
function lname(){
    uc(document.getElementById("lastName"));
}
