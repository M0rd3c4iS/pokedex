const pokemonName = document.querySelector('.pokemon_Name')


const fetchpokemon = async (pokemon) => {
    const APIresponse = await fetch (`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    const data = await APIresponse.json()

    return data
  }

    const pokemonSummary = async (pokemon) =>{

    const data  = await fetchpokemon(pokemon)

    pokemonName.innerHTML = data.name 
    
    }
    pokemonSummary(1)