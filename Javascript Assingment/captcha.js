var num1 =0;
var num2=0;

function getNumbers(){
    window.num1 = Math.floor(Math.random() * 100)+1;
    window.num2 = Math.floor((Math.random() * 10) +1);
    if(num1 < num2)
        num1+=num2;
}

function reload_captcha(x){
  if(x==1){
  document.getElementById("captchaFailed").style.display = "None";
    document.getElementById("captchaInput").value="";
    document.getElementById("captcha_msg").textContent="";
  }
  if(x==0){
    document.getElementById("captchaFailed").style.display = "Block";
    document.getElementById("captcha_msg").textContent="Invalid! Re-enter";     
    document.getElementById("captcha_msg").style.color = "RED";
    document.getElementById("captchaInput").value="";
  }
    console.log("captcha reloaded");
   captcha_load();
}

function validate_captcha(){
    var val2 = document.getElementById("captchaInput").value;
    // console.log("input val = "+val2," &  Actual val = ",val1);
    document.getElementById("captcha_msg").textContent="Captcha Verified";
    document.getElementById("captcha_msg").style.color = "GREEN";
    if(val1 != val2){
        document.getElementById("captcha_msg").textContent="Invalid! Re-enter captcha";     
        document.getElementById("captcha_msg").style.color = "RED";
        document.getElementById("captchaInput").style.borderColor="RED";
        document.getElementById("captchaFailed").style.display = "Block";
        reload_captcha(0);
        
    }
    if(val1==val2){
      document.getElementById("submit").style.display = "Block";
      document.getElementById("captchaDiv").style.display = "None";
      document.getElementById("captchaVerified").style.display = "Block";
      document.getElementById("captchaFailed").style.display = "None";
      // captchaDiv
    }

}
function print(){
    document.getElementById('num1').textContent=num1;
    document.getElementById('num2').textContent=num2;
}
// operations
function add(){
    // console.log("addition");
    print();
    document.getElementById('operator').textContent = "+";
    val1= num1+num2;
  }
  function sub(){
    // console.log("substraction");
    print();
    document.getElementById('operator').textContent = "-";
    val1=num1-num2;
  }
  function mul(){
    // console.log("multiplication");
    print();
    document.getElementById('operator').textContent = "*";
    val1=num1*num2;
  }
  function div(){
    // console.log("division");
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