import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Container, Table, Pagination } from 'react-bootstrap';
import { useNavigate, Routes, Route } from 'react-router-dom';
import anime from 'animejs';
import PokemonDetail from './PokemonDetail';
import './Pokedex.css';
import axiosRetry from 'axios-retry';

axiosRetry(axios, { retries: 3, retryDelay: axiosRetry.exponentialDelay });

const PokemonList = () => {
  const [pokemon, setPokemon] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const pokemonPerPage = 20;

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1000`);
        const results = response.data.results;
    
        const detailedPokemon = await Promise.all(
          results.map(async (p) => {
            const details = await axios.get(p.url);
            return {
              id: details.data.id,
              name: details.data.name,
              sprite: details.data.sprites.versions['generation-v']['black-white'].animated?.front_default 
                || details.data.sprites.versions['generation-v']['black-white'].front_default 
                || details.data.sprites.front_default,
              types: details.data.types
            };
          })
        );
    
        setPokemon(detailedPokemon);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Pokemon:", error);
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);

  // Animation effect when Pokémon data is updated
  useEffect(() => {
    if (!loading && pokemon.length > 0) {
      anime({
        targets: '.pokemon-row',
        scale: [0, 1],
        opacity: [0, 1],
        delay: anime.stagger(50)
      });
    }
  }, [loading, pokemon]);

  const totalPages = Math.ceil(pokemon.length / pokemonPerPage);
  const indexOfLastPokemon = currentPage * pokemonPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage;
  const currentPokemon = pokemon.slice(indexOfFirstPokemon, indexOfLastPokemon);

  const handlePaginationClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Container fluid className="pokedex-container">
      <header className="text-center mb-5">
        <h1 className="display-4 mb-3">Known Pokémon</h1>
      </header>

      {loading ? (
        <div className="loading-spinner">
          <div className="spinner-border text-purple" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <Table striped bordered hover responsive className="w-100">
            <thead>
              <tr>
                <th> </th>
                <th>Name</th>
                <th>Image</th>
                <th>Types</th>
              </tr>
            </thead>
            <tbody>
              {currentPokemon.map((p) => (
                <tr 
                  key={p.id} 
                  className="pokemon-row" 
                  onClick={() => navigate(`/pokedex/${p.id}`)}
                >
                  <td>{p.id}</td>
                  <td>{p.name}</td>
                  <td>
                    <img 
                      src={p.sprite} 
                      alt={p.name} 
                      className="pokemon-sprite" 
                      style={{ width: '50px', height: 'auto' }} 
                    />
                  </td>
                  <td>
                    {p.types.map((type, index) => (
                      <span key={index} className={`type-badge ${type.type.name}`}>
                        {type.type.name}
                      </span>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          {/* Pagination Component */}
          <div className="pagination-container d-flex justify-content-center">
            <Pagination>
              <Pagination.First
                onClick={() => handlePaginationClick(1)}
                disabled={currentPage === 1}
              />
              <Pagination.Prev
                onClick={() => handlePaginationClick(currentPage - 1)}
                disabled={currentPage === 1}
              />

              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter((number) => 
                  number === 1 || 
                  number === totalPages || 
                  (number >= currentPage - 1 && number <= currentPage + 1)
                )
                .map((number) => (
                  <Pagination.Item
                    key={number}
                    active={number === currentPage}
                    onClick={() => handlePaginationClick(number)}
                  >
                    {number}
                  </Pagination.Item>
                ))}

              <Pagination.Next
                onClick={() => handlePaginationClick(currentPage + 1)}
                disabled={currentPage === totalPages}
              />
              <Pagination.Last
                onClick={() => handlePaginationClick(totalPages)}
                disabled={currentPage === totalPages}
              />
            </Pagination>
          </div>
        </>
      )}
    </Container>
  );
};

const Pokedex = () => {
  return (
    <Routes>
      <Route index element={<PokemonList />} />
      <Route path=":id" element={<PokemonDetail />} />
    </Routes>
  );
};

export default Pokedex;
