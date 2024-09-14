// src/components/IdeaList.tsx
import React from 'react';
import IdeaCard from './IdeaCard';

const IdeaList: React.FC = () => {
  const ideas = [
    { title: 'Idea 1', description: 'This is the first idea.' },
    { title: 'Idea 2', description: 'This is the second idea.' },
  ]; // Example data, replace with actual API call later

  return (
    <div className="idea-list">
      {ideas.map((idea, index) => (
        <IdeaCard key={index} title={idea.title} description={idea.description} />
      ))}
    </div>
  );
};

export default IdeaList;