import { Link } from "react-router-dom";
const games = [
    { id: 1, name: 'Teamfight Tactics', description: 'This is the number one auto Battling Game' },
    { id: 2, name: 'Valorant', description: 'This is the number one auto Shooting Game' },
    { id: 3, name: '2XKO', description: 'This is the number one auto Fighting Game' },
    { id: 4, name: 'League of Legends', description: 'This is the number one auto MOBA Game' },
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