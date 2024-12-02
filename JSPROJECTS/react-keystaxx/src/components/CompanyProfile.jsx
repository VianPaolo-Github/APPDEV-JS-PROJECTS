import React, { useEffect } from 'react';
import anime from 'animejs';
import { Link } from 'react-router-dom';

import teamMembers from '../data/teamMembers.jsx';

;

const CompanyProfile = () => {
    useEffect(() => {
        // Animation code
        anime({
            targets: '.card',
            translateY: [100, 0], // Start from below and move to original position
            opacity: [0, 1], // Fade in effect
            duration: 800,
            easing: 'easeOutExpo',
            delay: anime.stagger(200), // Stagger animations for each card
        });
    }, []);

    return (
        <div className="app-container">
            <h1>Meet Our Team</h1>
            <div className="team-container">
                {teamMembers.map(member => (
                    <Link key={member.id} to={`/resume/${member.id}`} className="card">
                        <img src={member.image} alt={member.name} />
                        <h2>{member.name}</h2>
                        <p>{member.role}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CompanyProfile;