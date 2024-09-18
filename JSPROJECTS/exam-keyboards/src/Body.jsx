




import ItemCard from './ItemCard';
import Image from 'react-bootstrap/Image';
import React from 'react';
import profilePic from './assets/profile-pic.png';
import webDesign from './assets/web-design.png';
import neuralNetworks from './assets/neural-networks.jpg';
import gameDev from './assets/game-dev.png';
import { Google, Youtube, Linkedin, Instagram } from 'react-bootstrap-icons';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Body (){
  //used to pass info to functional components
    const firstText = [
      <li>'USB Cable'</li>,
      <li>'User Manual'</li>,
      <li>'Keycap Removal Tool'</li>,
      <li>'Warranty Card'</li>
    ];

    const secondText = [
      <li>'Switch Type: Cherry MX Red (Mechanical)'</li>,
      <li>'Key Layout: Full-size (104 keys)'</li>,
      <li>'Backlighting: RGB with customizable colors'</li>,
      <li>'Connectivity: Wired (USB 2.0)'</li>,
      <li>'Dimensions: 440 mm x 135 mm x 35 mm'</li>,
      <li>'Weight: 1.2 kg'</li>,
      <li>'Cable Length: 1.8 meters'</li>,
      <li>'Additional Features: Anti-ghosting, N-key rollover, dedicated media controls'</li>
    ];

    const thirdText = [
      <li>'KB-X1000 Keyboard'</li>,
      <li>'USB Cable'</li>,
      <li>'User Manual'</li>,
      <li>'Keyboard Removal Tool'</li>,
      <li>'Warranty Card'</li>
    ];

    const fourthText = [
      <li>Carefully remove the keyboard and accessories from the box.</li>
    ];

    const fifthText = [
      <li>Plug the USB cable into an available USB port on your computer.</li>,
      <li>The keyboard should be automatically recognized and ready for use. No additional drivers are 
      required.</li>
    ];

    const sixthText = [
      <li>Download the configuration software from the manufacturer’s website if you wish to customize 
      key functions or lighting.
      </li>,
      <li>Follow the on-screen instructions to install the software.
      Keycap Removal and Replacement:
      </li>,
      <li> Use the included keycap removal tool to gently pry off keycaps for cleaning or replacement.
      </li>,
      <li>Replace keycaps by aligning them over the switch and pressing down until they click into place.
      Using the Keyboard</li>
    ];

    const seventhText = [
      <li>Simply start typing; the keyboard is pre-configured with standard key mappings.</li>
    ]

    return(
      <>
        
        <p className = "text-box-p ">The KB-X1000 is a high-performance mechanical keyboard designed for gamers, 
professionals, and everyday users who demand precision and comfort. It features customizable RGB 
backlighting, durable mechanical switches, and programmable keys to enhance your typing and gaming 
experience</p>
        

        <p class = "p-sized">My works!</p>
        <div className="d-flex justify-content-around mb-5"> 
          <ItemCard title="Specifications" desc={firstText} img={webDesign}/>
          <ItemCard title="In the Box" desc={secondText} img={neuralNetworks}/>
          <ItemCard title="Key Features" desc={thirdText} img={gameDev}/>
          <ItemCard title="Unboxing" desc={fourthText} img={gameDev}/>
          <ItemCard title="Connecting the Keyboard" desc={fifthText} img={gameDev}/>
          <ItemCard title="Software Installation (Optional):" desc={sixthText} img={gameDev}/>
          <ItemCard title="Basic Typing:" desc={seventhText} img={gameDev}/>
        </div>

        <p className = "text-box-p ">Setup Instructions


Customizing Backlighting:
● Press Fn + F9 to cycle through preset lighting effects.
● Use the configuration software to create custom lighting profiles.
Programming Keys:
● Open the configuration software.
● Select the key you want to program.
● Assign a macro or function and save your changes.
Using Media Controls:
● Use the dedicated media keys (Play/Pause, Volume Up/Down, Mute) for easy media control.
Troubleshooting
</p>

<p className = "text-box-p ">
Keyboard Not Responding:
● Ensure the USB connection is secure.
● Try connecting the keyboard to a different USB port.
● Restart your computer if necessary.
</p>

<p className = "text-box-p ">
Backlighting Not Working:
● Check if the backlight is disabled or set to a minimal brightness level.
● Verify that the configuration software is properly installed.
</p>
<p className = "text-box-p ">
Key Not Registering:
● Confirm that no physical obstructions are affecting the key.
● Test the key in different applications to determine if the issue is software-related.
Maintenance and Care
</p>

<p className = "text-box-p ">
Cleaning:
● Disconnect the keyboard from the computer.
● Use a soft, dry cloth to clean the surface.
● For deeper cleaning, carefully remove keycaps and use compressed air to remove debris.
</p>

<p className = "text-box-p ">
Storage:
● Store the keyboard in a cool, dry place.
● Avoid exposure to liquids or extreme temperatures.
Warranty and Support
● Warranty Period: 2 years from the date of purchase.
● Customer Support: For assistance, contact customer support via the manufacturer’s website 
or call the support hotline at 1-800-555-1234.
Manufacturer’s Website: www.keyboardcompany.com
Customer Support Email: support@keyboardcompany.com
Support Hotline: 1-800-555-1234
</p>

        <p>
        “Thank you for choosing the KB-X1000. We hope you enjoy your new keyboard! Type Safe!”
        </p>
        

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

