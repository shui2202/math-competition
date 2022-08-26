var submit = document.querySelector(".start")

submit.addEventListener("click", function(){
    var num1 = Math.floor((Math.random() * (10 - 0 + 0)) + 0);
    var num2 = Math.floor((Math.random() * (10 - 0 + 0)) + 0);
    var question = `What is ${num1} + ${num2}`
    var answer = num1 + num2
    var textbox = document.createElement("input")
})