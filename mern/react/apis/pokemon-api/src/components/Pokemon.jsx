import React, { useState } from 'react';

const Pokemon = ()=>{

    let [pokemonList, setPokemonList] = useState([]);

    const getPokemon = ()=>{

        fetch("https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0")
            .then(response =>{
                return response.json()
            })
            .then(convertResponse =>{
                console.log(convertResponse)
                setPokemonList(convertResponse.results)
            })
            .catch(err=> {
                console.log("ERROR!!!!!")
            })
        }

    return (
        <div>
            <button onClick={getPokemon}>Fetch Pokemon</button>
            {
                pokemonList.map((pokemon, index) => {
                    return(
                        <div key={index}>
                            <h3>{pokemon.name}</h3>
                        </div>
                    )
                })
            }
        </div>
    )

}

export default Pokemon;