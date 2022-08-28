var submit = document.querySelector(".start")
var stuff = document.querySelector(".stuff")
var more = document.querySelector(".more")
var level = document.querySelector(".level")
var points = document.querySelector(".points")
var count = 0
var xp = 0
submit.addEventListener("click", function(){
    submit.disabled = true
    var num1 = Math.floor((Math.random() * (10 - 1 + 1)) + 1);
    var answer = Math.tan(num1)
    console.log(answer)
    var question = `What is the tangent of ${num1}?`
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
            submit.disabled = false
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
                xp += 10
            } else {
                alert("You got it wrong")
                localStorage.setItem("points", parseInt(localStorage.getItem("points")) + xp)
                points.innerText = "Stats - " + localStorage.getItem("points") + " points"
                gameOver = true
                submit1.disabled = true
            }
        }
    })
})

