var submit = document.querySelector(".start")
var stuff = document.querySelector(".stuff")
var more = document.querySelector(".more")
var level = document.querySelector(".level")
var points = document.querySelector(".points")
var count = 0
var xp = 0
if(localStorage.getItem("points") == undefined){
    localStorage.clear()
    localStorage.setItem("points", xp)

} 
localStorage.setItem("points", parseInt(localStorage.getItem("points")) + xp)

points.innerText = "Stats - " + localStorage.getItem("points") + " points"
submit.addEventListener("click", function(){
    submit.disabled = true
    var num1 = Math.floor((Math.random() * (10 - 0 + 0)) + 0);
    var num2 = Math.floor((Math.random() * (10 - 0 + 0)) + 0);

    var num3 = Math.random()
    if (num3 < 0.5){
        var symbol = "+"
        var answer = num1 + num2
    } else {
        var symbol = "-"
        var answer = num1 - num2
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
    textbox.addEventListener("keyup", function(event){
        if (event.keyCode == 13) {
            submit1.click();
        }
    })
    submit1.addEventListener("click", function(){
        while (gameOver == false) {
            submit.disabled = false
            var input = textbox.value
            if (input == "") {
                submit.disabled = true
                alert("Please submit an answer!")
                break
            }
            if (input == answer) {
                submit.innerText = "Next round"
                submit.classList.add("input-style")
                stuff.removeChild(text)
                stuff.removeChild(textbox)
                stuff.removeChild(submit1)
                alert("You got it correct!")
                count ++
                level.innerText = `Level: ${count}` 
                xp += 10 
                if(localStorage.getItem("points") == undefined){
                    localStorage.clear()
                    localStorage.setItem("points", xp)
                
                } 
                localStorage.setItem("points", parseInt(localStorage.getItem("points")) + xp)
                
                points.innerText = "Stats - " + localStorage.getItem("points") + " points"
            } else {

                alert(`You got it wrong. The correct answer was ${answer}.`)
                if(localStorage.getItem("points") == undefined){
                    localStorage.clear()
                    localStorage.setItem("points", xp)

                } 
                localStorage.setItem("points", parseInt(localStorage.getItem("points")))
                
                points.innerText = "Stats - " + localStorage.getItem("points") + " points"

                submit.parentNode.removeChild(submit)
                gameOver = true
            }
        }
    })
})
