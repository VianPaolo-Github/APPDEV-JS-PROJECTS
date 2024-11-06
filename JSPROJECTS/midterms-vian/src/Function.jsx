
import {useState} from 'react'

function Equation(number) {
    output = 0;

    if(digit%2){
        output = (number + 1) * 2
    } else {
        output = (number + 1) + 1
    }
    return output;
}


export default function Function(){

    const [count, setCount] = useState(0);



    return(
        <>

        <p>Function value: {count}</p>

        <div className="couter-container">
        
            <button onClick={() => setCount(Equation(count))}>
                Update value
            </button>
        </div>
           
        </>
    )
}


