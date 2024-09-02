let display=document.getElementById("display")
let timer=null
let elpasedtime=0
let starttime=0
let isrunning=false


function start(){
 if(!isrunning){
   starttime=Date.now()-elpasedtime
   timer=setInterval(update,10)
   isrunning=true
 }

}
function stop(){
    clearInterval(timer)
    isrunning=false
    let current=Date.now();
    elpasedtime=current-starttime;
}
function reset(){
    isrunning=false
    clearInterval(timer)
    starttime=0
    elpasedtime=0
    display.textContent=`00:00:00:00`
}
function update(){
    let current=Date.now();
    elpasedtime=current-starttime;
    let hours=Math.floor(elpasedtime/(1000*60*60)).toString().padStart(2,0)
    let minutes=Math.floor(elpasedtime/ (1000*60)%60).toString().padStart(2,0)
    let seconds=Math.floor(elpasedtime / 1000  % 60).toString().padStart(2,0)
    let milsec=Math.floor(elpasedtime % 1000/10).toString().padStart(2,0)
   
    display.textContent=`${hours}:${minutes}:${seconds}:${milsec}`
}