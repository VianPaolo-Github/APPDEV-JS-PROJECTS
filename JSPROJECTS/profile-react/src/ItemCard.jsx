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
          style={{ width: '18rem' }}
          className="mb-2">
            <Card.Img variant="top" src={prop.img} />
            <Card.Body>
              <Card.Title>{prop.title}</Card.Title>
              <Card.Text>
                {prop.desc}
              </Card.Text>
              <a href={prop.link}><Button variant="primary">Click to view</Button></a>
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