
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
          <h2 animation="glow">I am the first image</h2>
          <p>This was from half life 2.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h2 animation="glow">I'm the second image</h2>
          <p>I like chezbagaz.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h2 animation="glow">I'm the third image</h2>
          <p>
            My developer has problems with working fast
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