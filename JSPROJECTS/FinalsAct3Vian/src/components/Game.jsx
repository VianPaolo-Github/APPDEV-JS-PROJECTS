import { useNavigate, useLocation } from 'react-router-dom';
import "./Game.css"


export default function Game(){
    const navigate = useNavigate();
    const location = useLocation();
    const { game } = location.state || {}; // Get game details passed via state

    
    if (!game) {
        navigate('/games');
        return null;
    }

    return (
        <main className="container">
            <div className="game-details">
                <h1>{game.name}</h1>
                <div className="game-info">
                    <div className="game-image">
                        <img src={game.picture} alt={game.name} style={{ maxWidth: '100%', maxHeight: '400px', objectFit: 'contain' }} />
                    </div>
                    <div className="game-description">
                        <h2>Description:</h2>
                        <p>{game.description}</p>
                    </div>
                    <div className="game-reviews">
                        <h2>Reviews:</h2>
                        <ul>
                            {game.reviews.map((review, index) => (
                                <li key={index}>
                                    <strong>{review[0] ? '👍' : '👎'}:</strong> {review[1]}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <button onClick={() => navigate('/games')} className="back-button">
                ← Back to Game List
                </button>
            </div>
        </main>
    );
}