var num1 =0;
var num2=0;

function getNumbers(){
    window.num1 = Math.floor(Math.random() * 100)+1;
    window.num2 = Math.floor((Math.random() * 10) +1);
    if(num1 < num2)
        num1+=num2;
}

function reload_captcha(){
    document.getElementById("captchaInput").value="";
    document.getElementById("captcha_msg").textContent="";
    console.log("captcha reloaded");
   captcha_load();
}

function validate_captcha(){
    var val2 = document.getElementById("captchaInput").value;
    console.log("input val = "+val2," &  Actual val = ",val1);
    document.getElementById("captcha_msg").textContent="Captcha Verified";
    document.getElementById("captcha_msg").style.color = "GREEN";
    if(val1 != val2){
        // alert("Wrong Captcha");
        // location.reload();
        document.getElementById("captcha_msg").textContent="Wrong Input! Re-enter captcha";     
        document.getElementById("captcha_msg").style.color = "RED";
        
    }

}
function print(){
    document.getElementById('num1').textContent=num1;
    document.getElementById('num2').textContent=num2;
}
// operations
function add(){
    // getNumbers();
    console.log("addition");
    print();
    document.getElementById('operator').textContent = "+";
    val1= num1+num2;
  }
  function sub(){
    console.log("substraction");
    print();
    document.getElementById('operator').textContent = "-";
    val1=num1-num2;
  }
  function mul(){
    console.log("multiplication");
    print();
    document.getElementById('operator').textContent = "*";
    val1=num1*num2;
  }
  function div(){
    console.log("division");
    print();
    document.getElementById('operator').textContent = "/";
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
  