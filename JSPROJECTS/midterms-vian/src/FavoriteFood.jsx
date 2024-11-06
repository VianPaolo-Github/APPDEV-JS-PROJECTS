import PropType from 'react'
import {useState} from 'react'

export default function FavoriteFood(id ,name, color, rating){

    return(
        <>
                <p>Fruit ID: {PropType.id} </p><br/>
                <p>Name: {PropType.name} </p><br/>
                <p>Color: {PropType.color} </p><br/>
                <p>Rating: {PropType.rating} </p><br/> 
        </>
    )
}




