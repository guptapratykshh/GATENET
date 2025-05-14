import React, { useEffect, useState } from 'react';

const PollResults = () => {
  const [polls, setPolls] = useState([]);

  useEffect(() => {
    const storedPolls = JSON.parse(localStorage.getItem('polls')) || [];
    setPolls(storedPolls);
  }, []);

  const togglePublish = (index) => {
    const updatedPolls = [...polls];
    updatedPolls[index].published = !updatedPolls[index].published;
    localStorage.setItem('polls', JSON.stringify(updatedPolls));
    setPolls(updatedPolls);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Poll Results</h2>
      {polls.length === 0 ? (
        <p>No polls found.</p>
      ) : (
        polls.map((poll, index) => (
          <div key={index} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
            <h4>{poll.question}</h4>
            <ul>
              {poll.options.map((opt, idx) => (
                <li key={idx}>{opt.text} - {opt.votes} votes</li>
              ))}
            </ul>
            <p>Status: <strong>{poll.published ? 'Published' : 'Unpublished'}</strong></p>
            <button onClick={() => togglePublish(index)}>
              {poll.published ? 'Unpublish' : 'Publish'} Result
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default PollResults;
