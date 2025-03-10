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
            evolution: []
          }
        });

        // Fetch the evolution sprites
        await fetchEvolutionChainSprites(evolutionRes.data.chain);

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

    const fetchEvolutionChainSprites = async (evoChain) => {
      const ids = [];

      // Function to traverse the evolution chain and collect IDs
      const collectIds = (evo) => {
        ids.push(evo.species.url.split('/').slice(-2, -1)[0]); // Extract ID from URL
        evo.evolves_to.forEach(collectIds);
      };

      collectIds(evoChain);

      // Fetch animated sprites for all collected IDs
      const sprites = await Promise.all(ids.map(id => fetchPokemonAnimatedSprite(id)));

      // Update the state with the animated sprites
      setPokemon(prev => ({
        ...prev,
        sprites: {
          ...prev.sprites,
          evolution: sprites.filter(sprite => sprite !== null) // Filter out any null results
        }
      }));
    };

    // Function to fetch a Pokémon's animated sprite
    const fetchPokemonAnimatedSprite = async (id) => {
      try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        return {
          name: res.data.name,
          sprite: res.data.sprites.versions['generation-v']['black-white'].animated?.front_default || 
                  res.data.sprites.front_default || 
                  null
        };
      } catch (error) {
        console.warn(`Error fetching sprite for ID ${id}:`, error);
        return null; // Return null if there's an error
      }
    };

    fetchPokemonDetail();
  }, [id]);

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
                      style={{ width: `${(stat.base_stat / 255) * 100}%` }}
                    />
                  </div>
                ))}
              </div>
            </Col>
            <Col md={6}>
              <h3>Evolution Chain</h3>
              <div className="evolution-chain">
                {pokemon.sprites.evolution.map((evo, index) => (
                  <React.Fragment key={index}>
                    <div className="evolution">
                      <img 
                        src={evo.sprite || 'path/to/fallback-image.png'} // Use a fallback image
                        alt={evo.name} 
                        className="evolution-sprite"
                      />
                      <p className="text-capitalize">{evo.name}</p>
                    </div>
                    {index < pokemon.sprites.evolution.length - 1 && <span className="arrow">→</span>}
                  </React.Fragment>
                ))}
              </div>
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
