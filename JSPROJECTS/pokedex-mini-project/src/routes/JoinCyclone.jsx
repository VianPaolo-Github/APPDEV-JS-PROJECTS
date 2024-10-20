import React, { useEffect } from 'react';
import anime from 'animejs';
import './JoinCyclone.css';

const JoinCyclone = () => {
  useEffect(() => {
    anime({
      targets: '.join-title',
      translateY: [-50, 0],
      opacity: [0, 1],
      duration: 1000,
      easing: 'easeOutExpo',
    });

    anime({
      targets: '.join-message',
      translateY: [20, 0],
      opacity: [0, 1],
      duration: 800,
      easing: 'easeOutExpo',
      delay: anime.stagger(200),
    });

    anime({
      targets: '.join-footer',
      translateY: [50, 0],
      opacity: [0, 1],
      duration: 800,
      easing: 'easeOutExpo',
      delay: 600,
    });
  }, []);

  return (
    <div className="join-container">
      <h1 className="join-title">Become the Cyclone</h1>
      <p className="join-message">
        So you decided to break free from the constraints of society? Congratulations. Team Cyclone invites you to challenge the status quo of mankind's long stagnation and decadence you see around you. Through this path you will harness the true power of Pokémon for an age rightfully so for humanity.
      </p>
      <p className="join-message">
        We are not just trainers; soldiers; farmers or people of the wood works; for we are visionaries. We will forge a new path, one where humanity rises above its limitations and embraces the chaos and power of the Cyclone. Join us in our quest to redefine what it means to have Pokémon under your control.
      </p>
      <p className="join-message">
        Embrace the untapped true power within you. Challenge your fears of what this society will do to you the moment you chose to work for something greater than this realm. Let the winds of change guide you to a future unbounded by human weakness.
      </p>
      <footer className="join-footer">
        <img src="src/assets/join-cyclone.png" alt="Join Team Cyclone" className="join-logo" />
        <p>Will you become a master of the storm? The choice is yours.</p>
      </footer>
    </div>
  );
};

export default JoinCyclone;
