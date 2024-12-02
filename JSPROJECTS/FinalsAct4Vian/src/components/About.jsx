import './About.css';
import imgAbout from './Games/Sources/Evt_fallen_empire_awakens.webp';


export default function About() {
    return (
        <main className="container">
            <div className="bg-cover about-banner" style={{ backgroundImage: imgAbout }}>
                <h1>About the Developer</h1>
                <div className="bio-content">
                    <p>This is written by: Vian Paolo P. Palacio</p>
                    
                </div>
            </div>
        </main>
    );
}