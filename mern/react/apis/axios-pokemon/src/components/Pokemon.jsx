import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Pokemon = ()=>{

    let [pokemonList, setPokemonList] = useState([]);

    const getPokemon = ()=>{

        axios.get("https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0")
            .then(response =>{
                console.log(response.data.results)
                setPokemonList(response.data.results)
            })
            .catch(err=>{
                console.log("something went wrong", err)
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