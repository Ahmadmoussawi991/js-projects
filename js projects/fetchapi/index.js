
async function fetchdata(){
    try{
        const pokename=document.getElementById("searchInput").value.toLowerCase()
        const response=await fetch(`https://pokeapi.co/api/v2/pokemon/${pokename}`)
        if(!response.ok){
            throw new Error("not good")
        }
        const data=await response.json()
        const pokemonimg=data.sprites.front_default
        const ele=document.getElementById("pokemonimg")
        ele.src=`${pokemonimg}`
        ele.style.display="block"

    }
    catch(err){
        console.log(err);
    }
}


