document.querySelector("form").addEventListener("submit",amount);
// var userStack = JSON.parse(localStorage.getItem("DB")) || [];
function amount(Event){
    event.preventDefault(amount);
    var pack = document.querySelector("#num").value;
    var members = document.querySelector("#n").value;
var tp=pack*5;
var mp=members*30;
var total=tp+mp;

document.getElementById("Amount").innerHTML = tp;
document.getElementById("per_sankhya").innerHTML = mp;
document.getElementById("total").innerHTML = total;





}