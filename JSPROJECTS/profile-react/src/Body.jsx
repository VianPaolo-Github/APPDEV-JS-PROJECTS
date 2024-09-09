




import PropTypes from 'prop-types';
import Image from 'react-bootstrap/Image';
import React from 'react';
import profilePic from './assets/profile-pic.png';

export default function Body (props){
  //used to pass info to functional components
    return(
      <>
      <Image src={profilePic} alt="Logo" roundedCircle="true" fluid />
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

Body.defaultProps = {
  name: "Guest",
  food: "Unknown",
  isHealthy: false,
  age: 0
}


Body.propTypes = {
  name: PropTypes.string,
  food: PropTypes.string,
  isHealthy: PropTypes.bool,
  age: PropTypes.number
}
