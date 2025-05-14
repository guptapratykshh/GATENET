import React, { useState } from 'react';

const CreatePoll = () => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '']);

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  const addOption = () => {
    setOptions([...options, '']);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const poll = { question, options, votes: Array(options.length).fill(0) };

    const existingPolls = JSON.parse(localStorage.getItem('polls')) || [];
    existingPolls.push(poll);
    localStorage.setItem('polls', JSON.stringify(existingPolls));

    alert('Poll created successfully!');

    // ❌ Do NOT navigate to results immediately
    // ✅ Reset form
    setQuestion('');
    setOptions(['', '']);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Create New Poll</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Poll Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          required
        />
        <br /><br />
        {options.map((option, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder={`Option ${index + 1}`}
              value={option}
              onChange={(e) => handleOptionChange(index, e.target.value)}
              required
            />
          </div>
        ))}
        <button type="button" onClick={addOption}>Add Option</button>
        <br /><br />
        <button type="submit">Create Poll</button>
      </form>
    </div>
  );
};

export default CreatePoll;
