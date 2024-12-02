import './Home.css';
import imgAbout from './Games/Sources/Evt_fallen_empire_awakens.webp';

export default function Home() {
    return (
        <main className="container">
            <div className="bg-cover home-banner" style={{ backgroundImage: imgAbout }}>
                <h1>Welcome to my Game List</h1>
                
            </div>
        </main>
    );
}
