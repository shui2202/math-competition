
var submit = document.querySelector(".start")
var stuff = document.querySelector(".stuff")
submit.addEventListener("click", function(){
    var num1 = Math.floor((Math.random() * (10 - 0 + 0)) + 0);
    var num2 = Math.floor((Math.random() * (10 - 0 + 0)) + 0);
    var question = `What is ${num1} + ${num2}`
    var answer = num1 + num2
    var textbox = document.createElement("input")
    var text = document.createElement("h3")
    text.innerText = question
    stuff.appendChild(text)
    stuff.appendChild(textbox)
})
