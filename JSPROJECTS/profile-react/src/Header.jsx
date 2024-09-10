
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from './assets/Superportal.png';
import img2 from './assets/Combine_Homeworld_2.png';
import img3 from './assets/Combine_Homeworld.png';



export default function Header (){

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

    return(

      
      <>
      <header>

      <Carousel className="carousel-object" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h2 animation="glow">First slide label</h2>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h2 animation="glow">Second slide label</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h2 animation="glow">Third slide label</h2>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>

        <h1>
          Hi, I am Vian Paolo P. Palacio!
        </h1>

      </header>



      </>
      
    )
  
  }