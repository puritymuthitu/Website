const option1 = document.getElementById("option1")
const option2 = document.getElementById("option2")
const option3 = document.getElementById("option3")
const alert = document.getElementById("option1")

$(document).ready(function(){
    $("#generate equation").click(function(){
var num1 = Math.floor(Math.random() *21)
var num2 = Math.floor(Math.random() *21)
var dummyAnswer1 = Math.floor(Math.random() *21)
var dummyAnswer2 = Math.floor(Math.random() *21)
var allAnswers = [];
var switchAnswers = [];

answer = num1 + num2;

document.getElementById("num1").innerHTML = num1;
document.getElementById("num2").innerHTML = num2;

allAnswers = [answer, dummyAnswer1, dummyAnswer2];

for(i = allAnswers.length;i--;){
    switchAnswers.push(allAnswers.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);

}
option1.innerHTML = switchAnswers[0];
option2.innerHTML = switchAnswers[1];
option3.innerHTML = switchAnswers[2];
}

option1.addEventAlertWarning("click", function(){
    if (option1.innerHTML == answer)
    generate_equation();
} 
else{
    'alert warning'();
})

option2.addEventAlertWarning("click", function(){
    if (option2.innerHTML == answer)
    generate_equation();
    else
    alert.warning();
})

option3.addEventAlertWarning("click", function(){
    if (option3.innerHTML == answer)
    generate_equation();
    else
    alert.warning();
})
});
generate_equation();