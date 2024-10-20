import React, { useEffect } from 'react';
import anime from 'animejs';
import './About.css';

const About = () => {
  useEffect(() => {
    // Anime.js animation
    anime({
      targets: '.about-title',
      translateY: [-50, 0],
      opacity: [0, 1],
      duration: 1000,
      easing: 'easeOutExpo',
    });

    anime({
      targets: '.about-lore',
      translateY: [20, 0],
      opacity: [0, 1],
      duration: 800,
      easing: 'easeOutExpo',
      delay: anime.stagger(200), // stagger the animation for each paragraph
    });

    anime({
      targets: '.about-footer',
      translateY: [50, 0],
      opacity: [0, 1],
      duration: 800,
      easing: 'easeOutExpo',
      delay: 600,
    });
  }, []);

  return (
    <div className="about-container">
      <h1 className="about-title">About Team Cyclone</h1>
      <p className="about-lore">
        The Existence of Pokémon has mostly appealed to human society as companions, protectors, and partners. Just like our pets but with extra features. There have been instances of these creatures being used for malefic purposes, like Dr. Fuji's attempts at creating the strongest Pokémon. Team Flare tried to convert them into batteries to fuel an ultimate weapon of their own, playing a game with everyone else. Team Galactic...did the most impressive feats so far to try reforming the world by harnessing legendary pokemon that resembled the diamond and pearl.
      </p>
      <p className="about-lore">
        But what are we? We do not want to play this game; we do not want these monsters that have, for far too long, caused humanity a stagnation with their special pets. We do not want to see humanity, which was once a conquering and powerful species, stoop so low to a carefree society that has forgotten about survival against destruction.
      </p>
      <p className="about-lore">
        Like kids who cling to their objects of lesser value in truth, like deranged fools who wish to still be on crutches when they can walk without them, these beings no longer serve their purpose as glorified fighting dogs but as specialized assets to bring humanity to a new age, a new way of thinking, and a new society.
      </p>
      <p className="about-lore">
        There are members within our ranks that see beyond this game, this enslavement of these beasts that's promoted—a world that dares to use these creatures as a means of keeping the world pacified until the cyclones of time punish them hard, where their so-called companions will not even save them.
      </p>
      <p className="about-lore">
        We are masters of that cyclone, ruling beyond hindrances like superstition and instinct, and we will show the world a beautiful existence without this game's constraints.
      </p>
      <p className="about-lore warning">
        Beware the rust of humanity's iron will to conquer challenges; beware the loss of mankind's will to thrive like water losing its purity from stagnation. You can either choose to break free and be one with the cyclone of change or be destroyed by it as time saps away the vigor of mankind to see opportunities outside its deceptive comfort zone.
      </p>
      <footer className="about-footer">
        <img src="src/assets/team-cyclone-glitch.png" alt="Team Cyclone" className="team-logo" />
      </footer>
    </div>
  );
};

export default About;
