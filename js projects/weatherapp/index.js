const apikey="8cd37890358254846cba6f57682a56d7"
const container=document.querySelector(".container")
const weatherform=document.querySelector(".input")
let nameinput=document.querySelector(".in")
weatherform.addEventListener("submit",async event=>{
    event.preventDefault();
const city=nameinput.value
    if(city){
           try{
            const weatherdata=await getweatherdata(city)
            displayweatherinfo(weatherdata)
            }
            catch(error){
                console.log(error)
                displayerror(error)
            }
    }
    else{
        container.textContent=""
        displayerror("please enter a city")
    }
})

 
async function getweatherdata(city){
    const responce=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`)
   if(!responce.ok){
    container.textContent=""
    throw new Error("Could  not find the city you were looking for.")
   }
   return await responce.json()
}
function displayweatherinfo(data){
const{name:city,
    main:{temp,humidity},
    weather:[{description,id}]}=data;
    container.textContent=""
    container.style.display="flex"
    const nameofcountry=document.createElement("h1")
    const tempdisplay=document.createElement("p")
    const humdisplay=document.createElement("p")
    const descdisplay=document.createElement("p")
    const weatherimg=document.createElement("p")
    nameofcountry.textContent=city
    tempdisplay.textContent=((temp-273.15)*9/5 +32).toFixed(1)+"°F"
    humdisplay.textContent=humidity+"%"
    descdisplay.textContent=description
    weatherimg.textContent=getweatheremoji(id)
    nameofcountry.classList.add("nameofcountry")
    tempdisplay.classList.add("tempdisplay")
    humdisplay.classList.add("humdisplay")
    descdisplay.classList.add("descdisplay")
    weatherimg.classList.add("weatherimg")
    container.appendChild(nameofcountry)
    container.appendChild(tempdisplay)
    container.appendChild(humdisplay)
    container.appendChild(descdisplay)
    container.appendChild(weatherimg)

}
function getweatheremoji(weatherid){
 switch(true){
    case(weatherid>=200 && weatherid<300):
    return "⛈️"
    case(weatherid>=300 && weatherid<400):
    return "🌧️"
    case(weatherid>=500 && weatherid<600):
    return "🌧️"
    case(weatherid>=600 && weatherid<700):
    return "❄️"
    case(weatherid>=700 && weatherid<800):
    return "༄"
    case(weatherid===800):
    return "☀️"
    case(weatherid>=801 && weatherid<810):
    return "☁️"
 }
}
function displayerror(message){
    const errordisplay=document.createElement("p")
    errordisplay.textContent=message;
    errordisplay.classList.add("errordisplay")
    container.style.display="flex"
    container.appendChild(errordisplay)
}