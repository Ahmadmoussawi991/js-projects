const choices=['rock','paper','scissor']
let p=document.getElementById('p')
let c=document.getElementById('c')
let ps=document.getElementById('ps')
let cs=document.getElementById('cs')
let r=document.getElementById('win')
let playerscore=0
let computerscore=0
function playGame(playerchoice){
let computerchoice=choices[Math.floor(Math.random()*3)]
let result=""
if(playerchoice===computerchoice){
result="It is a Tie!"
}
else{
switch(playerchoice){
    case 'rock':
        result=(computerchoice==="scissor")?"You Win!":"You Lose!"
        break;
    case 'paper':
            result=(computerchoice==="rock")?"You Win!":"You Lose!"
            break;
    case  'scissor':
        result=(computerchoice==="paper")?"You Win!":"You Lose!"
        break;
}
}
p.textContent=`Player : ${playerchoice}`
c.textContent=`Computer : ${computerchoice}`
r.textContent=`${result}`
r.classList.remove("green","red")
switch(result){
    case "You Win!":
        playerscore++
        r.classList.add("green")
        break;
        case  "You Lose!":
            computerscore++
            r.classList.add("red")
            break;
}
if(playerscore>computerscore){
    ps.classList.add("green")
    cs.classList.add("red")
}
else if(computerscore>playerscore){
    ps.classList.add("red")
    cs.classList.add("green")
}
else if(computerscore==playerscore){
    ps.classList.remove("green")
    cs.classList.remove("red")
}
ps.textContent=`Player Score: ${playerscore}`
cs.textContent=`Computer Score: ${computerscore}`
}