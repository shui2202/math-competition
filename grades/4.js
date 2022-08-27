var submit = document.querySelector(".start")
var stuff = document.querySelector(".stuff")
var level = document.querySelector(".level")
var count = 0
submit.addEventListener("click", function(){
    var num1 = Math.floor((Math.random() * (9 - 1 + 1)) + 1);
    var num2 = Math.floor((Math.random() * (9 - 1 + 1)) + 1);
    var num3 = Math.random()
    if (num3 < 0.5){
        var symbol = "*"
        var answer = num1 * num2
    } else {
        var symbol = "/"
        var answer = num1 / num2
        while (Number.isInteger(answer) == false) {
            var num1 = Math.floor((Math.random() * (9 - 1 + 1)) + 1);
            var num2 = Math.floor((Math.random() * (9 - 1 + 1)) + 1);
            var answer = num1 / num2
        }
    }
    var question = `What is ${num1} ${symbol} ${num2}`
    var textbox = document.createElement("input")
    var text = document.createElement("h3")
    var submit1 = document.createElement("button")
    text.innerText = question
    submit1.innerText = "Submit"
    text.classList.add("paragraph-styling")
    textbox.classList.add("input-style")
    submit1.classList.add("input-style")
    stuff.appendChild(text)
    stuff.appendChild(textbox)
    stuff.appendChild(submit1)
    gameOver = false
    submit1.addEventListener("click", function(){
        while (gameOver == false) {
            var input = textbox.value
            if (input == answer) {
                submit.innerText = "Next round"
                submit.classList.add("input-style")
                stuff.removeChild(text)
                stuff.removeChild(textbox)
                stuff.removeChild(submit1)
                alert("You got it correct!")
                count ++
                level.innerText = `Level: ${count}`   
            } else {
                alert("You got it wrong")
                var returnToHome = document.createElement("a")
                returnToHome.innerText = "Return to homepage"
                returnToHome.href = "/index.html"
                returnToHome.classList.add("return")
                stuff.appendChild(returnToHome)
                gameOver = true
            }
        }
    })
})
