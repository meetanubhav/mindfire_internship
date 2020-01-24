/*

  Language : JavaScript
  Developer : Anubhav Gupta
  Included file in : index.html
  Purpose : To generate , validate and authenticate captcha.

*/
$(document).ready(function(){
    captcha_load();
    $("#reloadCaptcha").click(function(){
        reloadCaptcha(1);
    });
    $("#submit").click(function(){
        var ValidationCheck = validateForm();
        console.log(ValidationCheck);
        if(ValidationCheck==1){
            validate_captcha()
        }
        if(ValidationCheck==0){
            reloadCaptcha(0);
        };
    });
    $("#submitForm").click(function(){
        $("#animatedAfter").hide();
        $("#animateEnd").show();
    });
});


    var num1 =Math.floor(Math.random() * 100);
    var num2=Math.floor((Math.random() * 10) +1);
    if(num1 < num2)
            num1+=num2;

    function getNumbers(){
        num1 = Math.floor(Math.random() * 100);
        num2 = Math.floor((Math.random() * 10) +1);
        if(num1 < num2)
            num1+=num2;
    }

    function reloadCaptcha(x){
        console.log()
    if(x===1){
    $("#captchaFailed").hide();
        $("#captchaInput").val("");
        $("#captcha_msg").text("");
    }
    if(x===0){
        $("#captchaFailed").show();
        $("#captcha_msg").text("Invalid! Re-enter");     
        $("#captcha_msg").css({"color": "RED"});
        $("#captchaInput").css({"borderColor": "RED"});
        $("#captchaInput").val("");
    }
        console.log("captcha reloaded");
    captcha_load();
    }

function validate_captcha(){
    var val2 = $("#captchaInput").val();
    var val2 = parseInt(val2, 10);
    console.log("input val = "+val2," &  Actual val = ",val1);
    console.log(typeof val2);
    $("#captcha_msg").text("Captcha Verified");
    $("#captcha_msg").css({"color": "GREEN"});
    $("#captchaFailed").hide();
    // $("#submitForm").show();
    if(val1 != val2){
        $("#captcha_msg").text("Invalid! Re-enter captcha");     
        $("#captcha_msg").css({"color": "RED"});
        $("#captchaInput").css({"borderColor": "RED"});
        $("#captchaFailed").show();
        reloadCaptcha(0);
        
    }
    if(val1===val2){
    $("#submitForm").show();
    $("#captchaDiv").hide();
    $("#captchaVerified").show();
    $("#captchaFailed").hide();
    $("#confirmPasswordErrorMsg").text("");
    $("#addressErrorMsg1").text("");
    $("#cityErrorMsg").text("");
    $("#stateErrorMsg").text("");
    $("#countryErrorMsg").text("");
    $("#genderErrorMsg").text("");
    $("#dobErrorMsg").text("");
    }

}
function print(){
    $('#forErrorMsg').text("");
    $('#num1').text(num1);
    $('#num2').text(num2);
}
// operations
function add(){
    // console.log("addition");
    print();
    $('#operator').text("+");
    val1= num1+num2;
}
function sub(){
    // console.log("substraction");
    print();
    $('#operator').text("-");
    val1=num1-num2;
}
function mul(){
    // console.log("multiplication");
    print();
    $('#operator').text("*");
    val1=num1*num2;
}
function div(){
    // console.log("division");
    print();
    $('#forErrorMsg').text("For division type result in interger format");
    $('#operator').text("/");
    val1=Math.floor(num1/num2);
}

function captcha_load(){
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