




import ItemCard from './ItemCard';
import Image from 'react-bootstrap/Image';
import React from 'react';
import profilePic from './assets/profile-pic.png';
import webDesign from './assets/web-design.png';
import neuralNetworks from './assets/neural-networks.jpg';
import gameDev from './assets/game-dev.png';

export default function Body (){
  //used to pass info to functional components
    return(
      <>
        <Image className = "person-picture" src={profilePic} alt="person-logo" roundedCircle="true" />

        <p class = "">A proud combine enthusiast</p>
        <p class = "">Someone who loves to program for a job and draw as a hobby</p>
        <p class = "">Would like to help in game dev projects but prefers to get into more useful applications of software technology</p>
        

        <p class = "p-sized">My works!</p>
        <div className="d-flex justify-content-around mb-5"> 
          <ItemCard title="Web design" desc="Here are my react projects I made with Javascript" img={webDesign} link = "JSPROJECTS\projects-directory\index.html"/>
          <ItemCard title="Neural Network models" desc="These are my neural network models I trained" img={neuralNetworks}/>
          <ItemCard title="Experimental games" desc="I plan to add more than just an experimental space shooter" img={gameDev}/>
        </div>

        <p>Contact me! monocfyre@gmail.com</p>

      {/*<div className = "person">
        <img src="/profile-pic.png" alt="person-logo" className="person-picture"/>
        <p>This is <strong>{props.name}'s </strong> food</p>
        <p>{(props.food).toUpperCase()}</p>
        <p>Is it healthy? {props.isHealthy? "Yes" : "No"}</p>
        <p><strong>{props.name}</strong> is {props.age} years old!</p>
        </div>*/}

      </>
    )
}

