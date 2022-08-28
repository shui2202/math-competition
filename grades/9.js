var submit = document.querySelector(".start")
var stuff = document.querySelector(".stuff")
var level = document.querySelector(".level")
var count = 0
submit.addEventListener("click", function(){
    submit.disabled = true
    var x1 = Math.floor((Math.random() * (5 - 1 + 1)) + 1);
    var x2 = Math.floor((Math.random() * (5 - 1 + 1)) + 1);
    var y1 = Math.floor((Math.random() * (5 - 1 + 1)) + 1);
    var y2 = Math.floor((Math.random() * (5 - 1 + 1)) + 1);
    var sub1 = (x2-x1) * (x2-x1)
    var sub2 = (y2-y1) * (y2-y1)
    var answer = Math.sqrt(sub1 + sub2)
    console.log(answer)
    var question = `What is the distance between (${x1}, ${y1}) and (${x2}, ${y2})?(Calculators allowed)`
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
            if (input == "") {
                alert("Please submit an answer!")
                submit.disabled = true
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

