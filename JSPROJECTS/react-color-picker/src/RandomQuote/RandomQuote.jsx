import React, {useState} from 'react'
import './RandomQuote.css'
import * as Icon from 'react-bootstrap-icons';

const RandomQuote = () => {

    

    const [count, setCount] = useState(0)

    let quotes = [{text: "“Do not compare yourself to others. If you do so, you are insulting yourself.”", author: " - Adolf Hitler"},
    {text: "“I believe in one thing only, the power of human will.”", author: " - Joseph Stalin"},
    {text: "“Once all struggle is grasped, miracles are possible.”", author: " - Mao Zedong"},
    {text: "“The function of a citizen and a soldier are inseparable.”", author: " - Benito Mussolini"},
    {text: "“The only thing that matters is that we stand firm.”", author: " - Heinrich Himmler"},
    {text: "“To sum it all up, I must say that I regret nothing.”", author: " - Adolf Eichmann"}];

    async function loadQuotes(){
        const response = await fetch("https://type.fit/api/quotes");
        quotes = await response.json();
    }

    const random = () => {
        val = Math.floor(Math.random()*quotes.length);
        const select = quotes[val];
        setCount(c => c=val)
        setQuote(select)
    }

    const increment = () => {
        if (count >= quotes.length){
            return;
        } else {
            
            setCount(c => c+1)
            
        }
        
        const select = quotes[count];
        setQuote(select)
    }

    const decrement = () => {
        if (count <= 0){
            return;
        } else {
            setCount(c =>c-1);
        }
        
        const select = quotes[count];
        setQuote(select)
    }

    const [quote,setQuote] = useState({
        text:"Quote Generator",
        author:"Press buttons to test them"
    });

    loadQuotes();

    return(
        <>
        <div className = "container">
            <div className="quote">{quote.text} {count}</div>
            <div>
                <div className="line"></div>
                <div className="bottom">
                    <div className="author">{quote.author}</div>
                    <div className="icons">
                        <Icon.ArrowClockwise size={32} onClick={()=>{random()}} alt=""/>
                        <Icon.ArrowLeft size={32} onClick={()=>{decrement()}} alt=""/>
                        <Icon.ArrowRight size={32} onClick={()=>{increment()}} alt=""/>
                        <Icon.Github size={32} alt=""/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}


export default RandomQuote