// src/components/IdeaForm.tsx
import React, { useState } from 'react';

const IdeaForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add logic to submit idea to backend
    console.log({ title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="idea-form">
      <h2>Submit a New Idea</h2>
      <input
        type="text"
        placeholder="Idea Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">Submit Idea</button>
    </form>
  );
};

export default IdeaForm;