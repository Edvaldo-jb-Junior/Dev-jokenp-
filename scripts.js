
const myObserver = new IntersectionObserver((entries) => {
    entries.forEach( (entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("show")
        } else {
            entry.target.classList.remove("show")
        }
    })
})

const elements = document.querySelectorAll(".hidden")

elements.forEach((element) => myObserver.observe(element));


const result = document.querySelector(".resultes")
const humanScore = document.querySelector(".human-score")
const machineScore = document.querySelector(".machine-score")

let myScoreNumber = 0
let machineScoreNumber = 0

const playHuman = (humanChoice) => {

    
    playTheGame(humanChoice, playMachine())
}
const playMachine = () => {
   
    const choices =  ['stone', 'paper', 'scissors']
    const randonNumber = Math.floor(Math.random() * 3)

    return choices[randonNumber]
}

const playTheGame = (human, machine) =>{
   console.log('humano:' + human, 'maquina:'  + machine)

if(human === machine){
    result.innerHTML = "Deu empate!"

}else if((human === "stone" && machine === "scissors") ||
         (human === "paper" && machine === "stone")||
         (human === "scissors" && machine === "paper")
){ 
    myScoreNumber++
    humanScore.innerHTML = myScoreNumber
    result.innerHTML = "Você Ganhou!"

}else{
    machineScoreNumber++
    machineScore.innerHTML = machineScoreNumber
    result.innerHTML = "Você Perdeu!"
}
}

