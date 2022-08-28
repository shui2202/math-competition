var submit = document.querySelector(".start")
var stuff = document.querySelector(".stuff")
var more = document.querySelector(".more")
var level = document.querySelector(".level")
var points = document.querySelector(".points")
var count = 0
var xp = 0

function prime(n) {
  if ((n === 2 || n === 3 || n === 5 || n === 7)) {
      return true
  }
  if (n === 1 || ((n > 7) && (n % 5 == 0 || n % 7 == 0 || n % 2 == 0 || n % 3 == 0))) {
      return false
  }
  if ((Number.isInteger(((n - 1) / 6))) || (Number.isInteger((n + 1) / 6))) {
      for (let i = 1; i < n; i++) {
          let factorsix = (i * 6)
          let five = n / (5 + factorsix), seven = n / (7 + factorsix)
          if (((five > 1) && Number.isInteger(five)) || ((seven > 1) && (Number.isInteger(seven)))) {
              return false;
          }
          if (factorsix > n) {
              break;
          }
      }
      return true
  }
  return false
}
if(localStorage.getItem("points") == undefined){
    localStorage.clear()
    localStorage.setItem("points", xp)

} 
localStorage.setItem("points", parseInt(localStorage.getItem("points")) + xp)

points.innerText = "Stats - " + localStorage.getItem("points") + " points"
submit.addEventListener("click", function(){
    var num1 = Math.floor((Math.random() * (100 - 1 + 1)) + 1);
    submit.disabled = true
    if (prime(num1) == false) {
      var answer = "no"
    } else{
      var answer = "yes"
    }
    var question = `Is ${num1} prime? (type your answer as yes/no)`
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
            var input = input.toLowerCase()
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
                alert("You got it wrong")
                if(localStorage.getItem("points") == undefined){
                    localStorage.clear()
                    localStorage.setItem("points", xp)

                } 
                localStorage.setItem("points", parseInt(localStorage.getItem("points")) + xp)
                
                points.innerText = "Stats - " + localStorage.getItem("points") + " points"
                submit.parentNode.removeChild(submit)
                gameOver = true
            }
        }
    })
})
