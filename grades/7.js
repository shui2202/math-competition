var submit = document.querySelector(".start")
var stuff = document.querySelector(".stuff")
var more = document.querySelector(".more")
var level = document.querySelector(".level")
var points = document.querySelector(".points")
var count = 0
var xp = 0

submit.addEventListener("click", function(){
    submit.disabled = true
    var radius = Math.floor((Math.random() * (7 - 2 + 2)) + 2);
    var question = `What is the area of a circle with the radius of ${radius}`
    var answer = (radius * radius) * 3.14
    console.log(answer)
    var textbox = document.createElement("input")
    var text = document.createElement("h3")
    var submit1 = document.createElement("button")
    var circle_draw = document.createElement("div")
    circle_draw.innerHTML= "<svg><circle cx=200 cy=80 r=50 stroke=blue stroke-width=4 fill=black/><svg/>"
    text.innerText = question
    submit1.innerText = "Submit"
    text.classList.add("paragraph-styling")
    textbox.classList.add("input-style")
    submit1.classList.add("input-style")
    stuff.appendChild(text)
    stuff.appendChild(textbox)
    stuff.appendChild(submit1)
    stuff.appendChild(circle_draw)
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
