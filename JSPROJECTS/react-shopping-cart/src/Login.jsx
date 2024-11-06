import React, {useState} from "react"

import Shop from '/src/Shop.jsx'

export default function Login(){
    let accounts = [
        {id:1, username:"customer", password: "customer", role: "customer"},
        {id:2, username:"admin", password: "admin", role: "admin"}
    ]

    let items = [
        {id: 1, name: "Weed", price: 10},
        {id: 2, name: "Guns", price: 15},
        {id: 3, name: "Diddy Oil", price: 15}
      ]

    //LOGGING IN
    const [isLoggedIn, setIsLoggedIn] = useState
    (false)

    const [role, setRole] = useState('')

    const [enteredUsernames, setEnteredUsernames] = 
    useState("")
    const [enteredPasswords, setEnteredPasswords] = 
    useState("")

    function getUsername(event){
        setEnteredUsernames(event.target.value)
    }

    function getPassword(event){
        setEnteredPasswords(event.target.value)
    }

    function handleLogin(){
        accounts.map((account) => {
            if(account.username ===  enteredUsernames && 
                account.password ===  enteredPasswords){
                    setIsLoggedIn(true)
                    setRole(account.role)
                    renderShop
            }
        })
    }

    const renderLogin = () => {
        return(
            <>
                <div>
                    <h1>Login: </h1>
                    Username: <input type = "text"
                    placeholder = "Username" id =
                    "Username" onChange = {getUsername}/>
                    Password: <input type = "text"
                    placeholder = "Password" id =
                    "Password" onChange = {getPassword}/>

                    <button onClick = {handleLogin}>Login</button>
                </div>
            </>
        )
    }

    const renderShop = () => {
        return(
            <Shop isLoggedIn = {isLoggedIn} items = {items}></Shop>
        )
    }

    if(isLoggedIn === false){
        return renderLogin()
    } else {
        if(role === 'customer') {return renderShop()} else if (role === 'admin') {return <p>Admin page</p>} else {return renderLogin()}
    }
}