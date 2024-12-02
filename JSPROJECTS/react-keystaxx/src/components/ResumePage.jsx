import React from 'react';
import { useParams } from 'react-router-dom';
import teamMembers from '../data/teamMembers.jsx';


const ResumePage = () => {
    const { id } = useParams();
    const member = teamMembers.find(m => m.id === parseInt(id));

    if (!member) {
        return <div>Member not found!</div>;
    }

    return (
        <div className="app-container">
            <h1>{member.name}'s Resume</h1>
            <h2>Role: {member.role}</h2>
            <p>{member.qualifications}</p>
        </div>
    );
};

export default ResumePage;