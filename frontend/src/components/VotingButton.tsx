// src/components/VotingButton.tsx
import React, { useState } from 'react';

const VotingButton: React.FC = () => {
  const [votes, setVotes] = useState(0);

  const handleUpvote = () => setVotes(votes + 1);
  const handleDownvote = () => setVotes(votes - 1);

  return (
    <div className="voting-buttons">
      <button onClick={handleUpvote}>Upvote</button>
      <span>{votes}</span>
      <button onClick={handleDownvote}>Downvote</button>
    </div>
  );
};

export default VotingButton;