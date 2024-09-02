let time=document.getElementById("time")
function update(){
    const date=new Date()
    let hours=date.getHours()
    const mid=hours>=12?"PM":"AM"
    hours=hours%12||12
    hours=hours.toString().padStart(2,0)
    let min=date.getMinutes().toString().padStart(2,0)
    let sec=date.getSeconds().toString().padStart(2,0)
time.textContent=`${hours}:${min}:${sec}:${mid}`
}
setInterval(update,1000)

