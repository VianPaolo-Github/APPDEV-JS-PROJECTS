import React, {useState} from 'react'
import Login from './Login.jsx'

export default function Shop(props){
    let ShopItems = props.items
    const [cart, setCart] = useState([]) 
    
    function AddItem(item){
        setCart(c => [...c, item])
    }

    const renderItems = () => {
        return(
            ShopItems.map((item)=> {
                return(
                    <>
                        <li key = {item.id}>{item.name}</li>
                        <p>Price per item piece: ${item.price}</p>
                        <button onClick = {() => AddItem(item)}>Add to Cart!</button>
                    </>
                )
            })
        )
    }

    const renderCart = () => {
        return(
            cart.map((item) => {
                return(
                    <>
                        <li key= {item.id}>{item.name}</li>
                        <p>Price per piece: ${item.price}</p>
                        <br/>
                    </>
                )
            })
        )
    }
    if(props.isLoggedIn === false){return <Login></Login>}
    else{
        return(
            <>
                <h4>Le bong shop</h4>
                <ul>{renderItems()}</ul>
                <h4>Your cart</h4>
                {cart.length > 0 ? (<ul>{renderCart()}
                </ul>) : (<p>There are no items in the
                cart</p>)}
            </>
        )
    }
}