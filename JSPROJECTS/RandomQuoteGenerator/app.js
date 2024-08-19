const quotes = [
    "“Do not compare yourself to others. If you do so, you are insulting yourself.” - Adolf Hitler",
    "“I believe in one thing only, the power of human will.” - Joseph Stalin",
    "“Once all struggle is grasped, miracles are possible.” - Mao Zedong",
    "“The function of a citizen and a soldier are inseparable.” - Benito Mussolini",
    "“The only thing that matters is that we stand firm.” - Heinrich Himmler",
    "“To sum it all up, I must say that I regret nothing.” - Adolf Eichmann"
]
const btn = document.getElementById("btn")
const quote = document.querySelector(".quote")

btn.addEventListener("click", () => {
    console.log(document.body)
    const randomNumber = getRandomNumber()
    //document.body.style.backgroundquote = quotes[randomNumber]
    quote.textContent = quotes[randomNumber]
})
getRandomNumber = () => {
    return Math.floor(Math.random()*quotes.length)
}