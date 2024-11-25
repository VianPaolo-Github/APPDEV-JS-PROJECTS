import React, {useState} from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)
    const [counter, setCounter] = useState(1)
    const incrementCount = () => {
        setCount(c => c + 1)
    }

    const resetCount = () => {
        setCounter(c => c = 0)
    }

    const decrementCount = () => {
        setCount(c => c - 1)
    }

    return(
        <>
            <div className="container">
                <p className="counter-container">
                    Counter: <br />
                    {count}
                </p>
                &nbsp; 
            </div>            
            <button className="button-containter-decrement" onClick = {decrementCount}>Decrement</button>         
            <button className="button-containter-reset" onClick = {resetCount}>Reset</button>
            <button className="button-containter-increment" onClick = {incrementCount}>Increment</button>
        </>
    )
}