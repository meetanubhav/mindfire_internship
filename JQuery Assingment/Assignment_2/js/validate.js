$(document).ready( function () {
    captchaLoad();
    $("#reloadCaptcha").click(function(){
        captchaLoad();
    });

});
function printNumbers(x){
    var operatorSymbol = ["+", "-", "*", "/"];
    $('#captchaQuestion').text(generatedNumber1+'     '+operatorSymbol[x]+'     '+generatedNumber2+'  =  ');
    // if(generatedNumber1*generatedNumber2 > 100 || generatedNumber1+generatedNumber2 > 100){
    //     captchaLoad();
    // }
}
function getNumbers(){
    generatedNumber1 = Math.floor(Math.random() * 10)+10;
    generatedNumber2 = Math.floor((Math.random() * 10) +10);
    if(generatedNumber1 < generatedNumber2){
        generatedNumber1+=generatedNumber2;
    }
}
function add(){
    printNumbers(0);
    calculatedoutput= generatedNumber1+generatedNumber2;
    $('#forErrorMsg').hide();
}
function sub(){
    printNumbers(1);
    // var operatorSymbol = "-";
    // $('#operator').text("-");
    calculatedoutput=generatedNumber1-generatedNumber2;
    $('#forErrorMsg').hide();
}
function mul(){
    printNumbers(2);
    // $('#operator').text("*");
    // var operatorSymbol = "*";
    calculatedoutput=generatedNumber1*generatedNumber2;
    $('#forErrorMsg').hide();
}
function div(){
    printNumbers(3);
    $('#forErrorMsg').show();
    // $('#operator').text("/");
    // var operatorSymbol = "/";
    calculatedoutput=Math.floor(generatedNumber1/generatedNumber2);
}
function captchaLoad(){
    getNumbers();
    var selector = Math.floor((Math.random() * 4));

    switch(selector){
        case 0: add();
        break;
        case 1: sub();
        break;
        case 2: mul();
        break;
        case 3: div();
        break;
    }
}