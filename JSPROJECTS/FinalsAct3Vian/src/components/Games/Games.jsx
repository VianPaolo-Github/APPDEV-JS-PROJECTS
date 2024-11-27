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
        reviews: [
            [true, "buy it. spend 500 hours learning it. get bored for a while, come back. remember nothing. spend 500 more hours relearning it. 12/10"],
            [false, "While the game itself is pretty fun, this is yet another game that expects you to pay $60 bucks for it while hiding most of the game behind $200 worth of DLCs, as as someone who owns SOME of those DLCs, their absence is sorely felt. Game is intended for whales only."],
            [true, "Great game—still no clue what I'm doing."],
           [true, "a great game made even better with mods. my only real quarrel is the amount of small dlcs that rack up the price of the game. it sucks because, sure, there is gonna be something in the dlc you want, but its not gonna be 80% of them which makes it a waste."],
           [true, "I've been playing 4X games for 30 years starting with the original Master of Orion. The variability in each game and the evolving updates just make this one of the best 4X games ever made. Such a fun, great game."]
        ] },
    { id: 2, name: 'Trepang2', 
        description: 'You play as an escaped soldier, who has no memories of their past life, but is infused with supernatural abilities. Revenge is on your mind, and you’ll stop at nothing to get what you want.', 
        picture:img2, 
        reviews: [
            [true, "An actual fun shooter for a change that has enough extra depth to preclude it from being qualified as a “boomer shooter.” Although I've yet to beat it, it's holding my interest in the way Back 4 Blood—which I started around the same time—hasn’t"],
            [true, "I'm not locked in here with You. You're locked in here with Me!"],
            [true, "Try playing on hardest mode. Enemies got eye behind their back and shoot bullet through their asses. 10/10 will die again."],
            [true, "F.E.A.R. has a spiritual successor. Play it."],
            [true, "A truly interesting game, you can see the love in what was being done from toe to tip. The gunplay is mostly good (other than ADS mode being a cheat you need to unlock, yuck!) and it offers a plethora of challenges, unlockables, and other stuff that people who need replayability will enjoy."]
        ] },
    { id: 3, name: 'Manhunt', 
        description: 'They just killed Cash. Now, they want to kill him again. America is full of run down, broken rust-belt towns where nobody cares and anything goes. In Carcer City, nothing matters anymore and all that’s left are cheap thrills. ', 
        picture: img3, 
        reviews: [
            [true, "Of all the horror games released on PS2 like the Resident Evil or Silent Hill series, Manhunt is the absolute greatest of all time! I praise this game for it's darkness and gloominess. You must survive the night walking through the streets of Carcer City, while avoiding hunters and dirty cops. Manhunt uses some of the same material from the GTA games released in the early 2000s (GTA III and Vice City), Carcer City is based in the same universe as GTA. There isn't much beautiful areas in the game"],
            [true, " had this game on PS2, loved it because it was Rockstar and it was dark and sinister, you had to hide and attack from the darkness, if not there was no chance of you defeating a group of goons, all about the stealth. The game got harder as you progressed so having/making guns as weapons made it harder to be stealth. "],
            [true, "Manhunt is hands down the most intense video game you'll ever play And more than likely, the most violent..I'm not a violent person but I love the game.. Hiding in the shadows and holding on out for the extra violent kill Actually has you holding your breath until you execute . "],
            [true, "You ever just be scrolling on Facebook, then bam… Decapitation video. Manhunt the video game was the slap in the face to parents of 2003, really passing off the mothers and fathers of young children. Manhunt produced by Rockstar games in a survival based horror game. Where you, a prisoner on death row, are given a second chance to redeem yourself, only in a much sinister way."],
            [true, "As someone who is not really into famous videogames, I have to say this game is big part of my childhood and probably one of the games that I have ever played. If you are a fan of horror, specially suspense you will love this game. I played it many times around the age of 10, I am now 23 and I replayed the game and still enjoyed it a lot. As I said, if you are fan of horror and suspense this game is a must try."]
        ] },
    { id: 4, name: 'Silent Hill', 
        description: 'The game follows Harry Mason as he searches for his missing adopted daughter in the eponymous fictional American town of Silent Hill. Stumbling upon a cult conducting a ritual to revive a deity it worships, he discovers her true origin.', 
        picture:img4, 
        reviews: [
           [true, "I'm prefacing this with I am a child (Gen Z) so this game isn't exactly the standards I'm used to with graphics and performance in gaming but this game is super impressive for its age. The characters are likable (between Harry and Cybil) despite them being annoying at times. The gameplay was confusing at first but upon playing through the first 15-30 minutes of combat, you get used to it super easily. "],
            [true, "This is the first survival horror game I played, I skipped resident evil and went straight into Silent Hill and boy im glad I did! Following Harry Mason's adventure finding his daughter after a road crash and falling into a mysterious town, Silent Hill is conideredone of Konami's greatest franchises. Konami even used its technical limitations as advantages, which were found as 'mist' and few enemies around, which proved to be helpful to create an atmosphere of suspense all the time."],
            [true, "Recently whipped out my PlayStation thanks to retrogamingcables.co.uk with the purchase of a ps pack a lunch scart cable which connected to my crt Sony Trinitron tv makes this game look amazing.Now I remember playing this when it first released and I was 17 at the time and this game freaked me out.Booted up a week ago and it has the same effect now as it did 20 years ago."],
            [true, "Giving this review purely from the aspect of a horror fan.... This game is a gold mine for retro horror!!! The PlayStation 1 was a part of my childhood and this game was one of the scariest video games I've ever experienced at the time so it holds a special place in my heart I 100% recommend this to absolutely everyone!!! Was this review helpful to you?"],
            [true, "The Very beginning is very scary giving you chills and even the heat pressure when this horror game came out.I feel like this was so fun to play especially when a new game+ is set with many different ending you can chose to pick at your choice depending what side you did.A very excellent decent story with good characters you can symphatize much.This is propably the best thing i ever seen at the ps1 so much."]
        ] },
    { id: 5, name: 'Ultrakill', 
        description: 'Mankind has gone extinct and the only beings left on earth are machines fueled by blood. But now that blood is starting to run out on the surface… Machines are racing to the depths of Hell in search of more. Use your many movement abilities to stay mobile and avoid the relentless attacks of the dead, demons and other machines. ', 
        picture: img5, 
        reviews: [
            [true, "This game is absolutely f*BEEP!* horrifying. The player and enemies all move at break-neck speeds, and things only get faster the farther into the game you go. So much faster that there's accessibility settings to slow down the entire game."],
            [true, "In my entire life of playing video games, I had never given any game a 10/10, specially, not one that isn't even finished, however, never in my entire life had I seen a game so masterfully mix convention, innovation, and an unshakable commitment to its 'yes fun allowed' philosophy."],
            [true, "i hope to see more games like this in the industry. the developer has made a really great game, a amazing soundtrack, and a good story while still being cheap. i would've paid 60$ for a game like this but honestly i believe its worth more than that. it has great controller support, and accessibility features making trash players like me still enjoy this game."],
            [true, "Loved this game! Exciting gameplay, regular updates, and incredibly creative side quests and secrets. There is always something to do. Only a 7/10, though, given the lack of robo ###."],
            [true, "An incredibly unique first-person shooter whose mechanics sometimes leave me scratching my head. (Like, how did you even come up with this?) Incredibly based and creative developer. Absolutely sick community, both in a good and in a BAD way."]
        ] },
];

export default function Games() {
    return (
        <main className="container">
            <h1>Games List</h1>
            <div className="game-list">
                {games.map((game) => (
                    <div className="game-card" key={game.id}>
                        <Link to={`/games/${game.id}`} state={{ game }}>
                            <div className="game-card-img" style={{ backgroundImage: `url(${game.picture})` }}></div>
                            <h3>{game.name}</h3>
                            
                        </Link>
                    </div>
                ))}
            </div>
        </main>
    );
}