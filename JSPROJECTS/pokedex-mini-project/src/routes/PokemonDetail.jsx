import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import anime from 'animejs';
import './Pokedex.css';

const PokemonDetail = () => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPokemonDetail = async () => {
      try {
        const pokemonRes = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const speciesRes = await axios.get(pokemonRes.data.species.url);
        const evolutionRes = await axios.get(speciesRes.data.evolution_chain.url);

        const animatedSprite = pokemonRes.data.sprites.versions['generation-v']['black-white'].animated?.front_default 
          || pokemonRes.data.sprites.versions['generation-v']['black-white'].front_default 
          || pokemonRes.data.sprites.front_default;

        setPokemon({
          ...pokemonRes.data,
          sprites: {
            current: animatedSprite,
            evolution: evolutionRes.data.chain
          }
        });

        setLoading(false);

        anime({
          targets: '.pokemon-detail',
          translateY: [50, 0],
          opacity: [0, 1],
          duration: 800,
          easing: 'easeOutExpo'
        });
      } catch (error) {
        console.error("Error fetching Pokémon details:", error);
        setLoading(false);
      }
    };

    fetchPokemonDetail();
  }, [id]);

  const fetchEvolutionSprite = async (speciesUrl) => {
    const speciesRes = await axios.get(speciesUrl);
    return speciesRes.data.sprites.front_default; // Adjust if needed
  };

  const renderEvolutionChain = (evolution) => {
    if (!evolution) return null;

    return (
      <div className="evolution-chain">
        <div className="evolution">
          <img 
            src={fetchEvolutionSprite(evolution.species.url)} // Fetch the species for sprite
            alt={evolution.species.name}
            className="evolution-sprite"
          />
          <p className="text-capitalize">{evolution.species.name}</p>
        </div>
        {evolution.evolves_to.length > 0 && (
          <div className="evolution-line">
            {evolution.evolves_to.map((evo, index) => (
              <React.Fragment key={index}>
                {renderEvolutionChain(evo)}
                {index < evolution.evolves_to.length - 1 && <span className="arrow">→</span>}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    );
  };

  if (loading || !pokemon) {
    return <div className="loading-spinner">Loading...</div>;
  }

  return (
    <Container fluid className="pokemon-detail">
      <Card className="detail-card">
        <Card.Body>
          <Row>
            <Col md={6}>
              <img 
                src={pokemon.sprites.current} 
                alt={pokemon.name} 
                className="detail-sprite"
              />
              <h2 className="text-capitalize">{pokemon.name}</h2>
              <div className="stats">
                {pokemon.stats.map((stat, index) => (
                  <div key={index} className="stat-bar">
                    <span>{stat.stat.name}: {stat.base_stat}</span>
                    <div 
                      className="stat-fill" 
                      style={{width: `${(stat.base_stat / 255) * 100}%`}}
                    />
                  </div>
                ))}
              </div>
            </Col>
            <Col md={6}>
              <h3>Evolution Chain</h3>
              {renderEvolutionChain(pokemon.evolution)}
            </Col>
          </Row>
          <button 
            className="back-button"
            onClick={() => navigate('/pokedex')}
          >
            Back to List
          </button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PokemonDetail;
