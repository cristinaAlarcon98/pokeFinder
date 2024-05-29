/* fetch("https://pokeapi.co/api/v2/pokemon/1")
.then(response => {
    if(response.ok == false){
        throw new Error("Could not fetch resource")
    }
})
.then(data => console.log(data.id))
.catch(error =>
    console.error(error)
); */


async function fetchData(){

    try{
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error("could not fetch resource")
        }
        const data = await response.json();
        const pokemonImageUrl = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonImageUrl;
        imgElement.style.display="block";
    }
    catch{
        error => console.log(error)
    }
}


