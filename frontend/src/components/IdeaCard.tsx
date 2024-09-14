// src/components/IdeaCard.tsx
import React from 'react';
import VotingButton from './VotingButton';

interface IdeaCardProps {
  title: string;
  description: string;
}

const IdeaCard: React.FC<IdeaCardProps> = ({ title, description }) => {
  return (
    <div className="idea-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <VotingButton />
    </div>
  );
};

export default IdeaCard;