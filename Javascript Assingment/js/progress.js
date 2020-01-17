var percentValue=0;
function formProgress(progressStats){
    percentValue+=progressStats
    console.log(progressStats)
    document.getElementById("progressBar").style.width=percentValue+"%";
}
var fn=0,ln=0,em=0,db=0,pn=0,pw=0,cpw=0,gen=0,addr=0,cou=0,city=0,sta=0;
function checkProgress(){
    if(document.getElementById("firstName").value.length!==0 && fn===0){
        fn=1;
        formProgress(8)
    }
    if(document.getElementById("lastName").value.length!==0 && ln===0){
        ln=1;
        formProgress(8)}
    if(document.getElementById("email").value.length!==0 && em===0){
        em=1;
        formProgress(8)}
    if(document.getElementById("phoneNumber1").value.length!==0 && pn===0){
        pn=1;
        formProgress(8)}
    if(document.getElementById("password").value.length!==0 && pw===0){
        pw=1;
        formProgress(10)}
    if(document.getElementById("confirmPassword").value.length!==0 && cpw===0){
        cpw=1;
        formProgress(10)}
    if(document.getElementById("dob").value.length!==0 && db===0){
        db=1;
        formProgress(8)}
    if(document.getElementById("gender").value!=="select" && gen===0){
        gen=1;
        formProgress(8)}
    if(document.getElementById("address").value.length!==0 && addr===0){
        addr=1;
        formProgress(8)}
    if(document.getElementById("country").value!=="select" && cou===0){
        cou=1;
        formProgress(8)}
    if(document.getElementById("state").value!=="select" && sta===0){
        sta=1;
        formProgress(8)}
    if(document.getElementById("city").value!=="select" && city===0){
        city=1;
        formProgress(8)}
}