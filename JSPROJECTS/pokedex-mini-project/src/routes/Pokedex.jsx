import PokemonList from "./pokemon-resources/PokemonList.jsx";
import React, { useState, useEffect } from "react";
import axios from 'axios'
import Card from 'react-bootstrap/Card';

const Pokedex = () => {

    

    const [htmlContent, setHtmlContent] = useState([]);
    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/")
            .then(res => {
                const content = res.data.results.map(
                    p => `
                        <div style="width: 18rem;">
                          <h5>${p.name}</h5>
                          <img src="holder.js/100px180" alt="${p.image}" />
                          <p>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                          </p>
                          <a href="#">Card Link</a>
                          <a href="#">Another Link</a>
                        </div>
                    `
                ).join('');
                setHtmlContent(content);
            });
    }, []);

    return (
    <>
        <h1>Pokedex</h1>
        <PokemonList pokemon={results.innerHTML}/>   
    </>
    
    );
  };

export default Pokedex;