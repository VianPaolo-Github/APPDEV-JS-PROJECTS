import { Link } from "react-router-dom";
import './Games.css'

import img1 from './Sources/U6bQiQY11_350x200_1x-0.jpg';
import img2 from './Sources/trepang2_euds.jpg';
import img3 from './Sources/Manhuntbox.jpg';
import img4 from './Sources/Silent_Hill_video_game_cover.png';
import img5 from './Sources/Ultrakill_cover.png';


const games = [
    { id: 1, name: 'Stellaris', 
        description: 'Explore a vast galaxy full of wonder! Paradox Development Studio, makers of the Crusader Kings and Europa Universalis series presents Stellaris, an evolution of the grand strategy genre with space exploration at its core.', 
        picture: img1, 
        reviews: [] },
    { id: 2, name: 'Trepang2', 
        description: 'You play as an escaped soldier, who has no memories of their past life, but is infused with supernatural abilities. Revenge is on your mind, and you’ll stop at nothing to get what you want.', 
        picture:img2, 
        reviews: [] },
    { id: 3, name: 'Manhunt', 
        description: 'They just killed Cash. Now, they want to kill him again. America is full of run down, broken rust-belt towns where nobody cares and anything goes. In Carcer City, nothing matters anymore and all that’s left are cheap thrills. ', 
        picture: img3, 
        reviews: [] },
    { id: 4, name: 'Silent Hill', 
        description: 'The game follows Harry Mason as he searches for his missing adopted daughter in the eponymous fictional American town of Silent Hill. Stumbling upon a cult conducting a ritual to revive a deity it worships, he discovers her true origin.', 
        picture:img4, 
        reviews: [] },
    { id: 5, name: 'Ultrakill', 
        description: 'Mankind has gone extinct and the only beings left on earth are machines fueled by blood. But now that blood is starting to run out on the surface… Machines are racing to the depths of Hell in search of more. Use your many movement abilities to stay mobile and avoid the relentless attacks of the dead, demons and other machines. ', 
        picture: img5, 
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
                            <strong>{game.name}</strong>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}