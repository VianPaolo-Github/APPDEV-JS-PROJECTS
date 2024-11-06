
import {useState} from 'react'

export default function Counter(){

    const [count, setCount] = useState(0);


    return(
        <>

        <p>Counter value: {count}</p>

        <div className="couter-container">
        
        <button onClick={() => setCount((count) => count - 2)}>
          subtract 2
        </button>

        <button onClick={() => setCount((count) => count + 2)}>
          add 2
        </button>
        </div>
           
        </>
    )
}


