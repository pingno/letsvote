// src/pages/Home.tsx
import React from 'react';
import IdeaForm from '../components/IdeaForm';
import IdeaList from '../components/IdeaList';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Vote on Ideas</h1>
      <IdeaForm />
      <IdeaList />
    </div>
  );
};

export default Home;