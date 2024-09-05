// src/pages/Home.tsx
import React from 'react';
import IdeaCard from '../components/IdeaCard';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Vote on Ideas</h1>
      {/* IdeaCard components will go here */}
      <IdeaCard />
      <IdeaCard />
      {/* Add more IdeaCards as needed */}
    </div>
  );
};

export default Home;