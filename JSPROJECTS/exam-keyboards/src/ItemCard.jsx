import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import React from 'react';

export default function ItemCard(prop){

 

    return (
          <>
          <Card bg='dark'
          key='dark'
          text='white'
          style={{ width: '500px', display: 'block', float: 'left', clear: 'left' }}
          className="mb-2">
            
            <Card.Body>
              <Card.Title>{prop.title}</Card.Title>
              <Card.Text>
                {prop.desc}
              </Card.Text>
              
            </Card.Body>
          </Card>
          </>  
      );
    
}

ItemCard.defaultProps = {
    title: "Title",
    desc: "Unknown",
    img: "holder.js/100px180",
    link: '#'
  }
  
  
ItemCard.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string,
    img: PropTypes.string,
    link: PropTypes.string
  }