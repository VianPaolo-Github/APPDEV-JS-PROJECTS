import React, {useState} from 'react';

export default function ListOfGames(){
    //creating a list of mappings form original props


    const [games, setGames] = useState(["Trepang2","Stellaris","Stormworks","Half Life 2: Lambda Wars","Steins;Gate"]);
    
    function handleAddGame(){
        const newGame = document.getElementById
        ("gameInput").value;
        setGames(g =>[...g, newGame])
        document.getElementById("gameInput").value = "";
    }

    function handleRemoveGame(index){
        const newGame = games.filter((game, i) => i 
        !== index);
        setGames(newGame)
    }

    return(
        <>
        <div>
            <ul>
                {
                    games.map((game, index) => <li 
                    key = {index} onClick ={() =>
                    handleRemoveGame(index)}>{game}
                    </li>)
                }
            </ul>
            <input type="text" name="gameInput" 
            id="gameInput" />
            <button type="button" onClick=
            {handleAddGame}>Add Game</button>
        </div>
        </>
    )
}
