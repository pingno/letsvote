// src/components/UserProfile.tsx
import React from 'react';

const UserProfile: React.FC = () => {
  const userIdeas = [
    { title: 'Idea 1', votes: 10 },
    { title: 'Idea 2', votes: 20 },
  ]; // Example data, replace with actual API call later

  return (
    <div className="user-profile">
      <h2>Your Profile</h2>
      <h3>Your Submitted Ideas</h3>
      <ul>
        {userIdeas.map((idea, index) => (
          <li key={index}>
            {idea.title} - {idea.votes} votes
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfile;