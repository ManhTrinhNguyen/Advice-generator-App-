const id = document.querySelector(".id span")
const text = document.querySelector(".text")
const btn = document.querySelector("button")

function getAdvice () {
    fetch("https://api.adviceslip.com/advice")
    .then(res => res.json())
    .then(data => {
        text.textContent = data.slip.advice
        id.textContent = "#" + data.slip.id
    })

    
}

btn.addEventListener("click", () => {
    getAdvice()
})
