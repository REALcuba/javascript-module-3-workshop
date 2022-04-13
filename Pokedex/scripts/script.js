const root = document.getElementById("root")

const divSearchBox = document.createElement("div");
divSearchBox.id = "searchBox"
root.appendChild(divSearchBox)

 const searchText = document.createElement("input");
 searchText.id = "searchText"
 divSearchBox.appendChild(searchText)

 const searchButton = document.createElement("button");
  searchButton.id = "searchButton"
  searchButton.innerText = "Buscar"
  searchButton.addEventListener("click", searchPokemon)
  divSearchBox.appendChild(searchButton)
  
 const resultDiv = document.createElement("div")
  resultDiv.id = "result" 
  resultDiv.classList.add('hidden')
  root.appendChild(resultDiv)


 const pokemonName = document.createElement("p")
 pokemonName.id = "pokemonName"
 resultDiv.appendChild(pokemonName)

 const pokemonImg = document.createElement("img")
 pokemonImg.id = "pokemonImg"
 resultDiv.appendChild(pokemonImg)

function searchPokemon() {
    const pokemonName = searchText.value
    fetch("http://pokeapi.co/api/v2/pokemon/" + pokemonName)
    .then(res => res.json())
    .then(paintPokemon)
    .catch(paintError )
}
 function paintPokemon(pokemon) {
     pokemonImg.src = pokemon.sprites.other["official-artwork"].front_default
     pokemonName.innerText = pokemon.name
     pokemon.type.forEach(type => {
         resultDiv.appendChild(buildType(type.type.name))
     })
     resultDiv.classList.remove("hidden")
 }

