import { Link } from "react-router-dom";
import './Games.css'

const games = [
    { id: 1, name: 'Stellaris', 
        description: 'This is the number one auto Battling Game', 
        picture:'./src/components/Sources/U6bQiQY11_350x200_1x-0.jpg', 
        reviews: [] },
    { id: 2, name: 'Trepang2', 
        description: 'This is the number one auto Shooting Game', 
        picture:'./src/components/Sources/trepang2_euds.jpg', 
        reviews: [] },
    { id: 3, name: 'Manhunt', 
        description: 'This is the number one auto Fighting Game', 
        picture:'./src/components/Sources/Manhuntbox.jpg', 
        reviews: [] },
    { id: 4, name: 'Silent Hill', 
        description: 'This is the number one auto MOBA Game', 
        picture:'./src/components/Sources/Silent_Hill_video_game_cover.png', 
        reviews: [] },
    { id: 5, name: 'Ultrakill', 
        description: 'This is the number one auto MOBA Game', 
        picture:'./src/components/Sources/Ultrakill_cover.png', 
        reviews: [] },
];

export default function Games() {
    return (
        <>
            <h1>Games List:</h1>
            <ul>
                {games.map((game) => (
                    <li key={game.id}>
                        <Link to={`/games/${game.id}`}
                        state = {{game}}
                        >
                            <strong>{game.name}</strong> - {game.description}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}