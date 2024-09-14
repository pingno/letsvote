// src/components/IdeaCard.tsx
import React from 'react';
import VotingButton from './VotingButton';

const IdeaCard: React.FC = () => {
  return (
    <div className="idea-card">
      <h2>Idea Title</h2>
      <p>Description of the idea goes here...</p>
      <VotingButton />
    </div>
  );
};

export default IdeaCard;