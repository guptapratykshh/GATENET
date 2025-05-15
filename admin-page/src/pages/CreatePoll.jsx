import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './CreatePoll.css'; // Import custom styles

const CreatePoll = () => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '']);

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  const addOption = () => {
    if (options.length >= 6) {
      toast.warning('Maximum 6 options allowed');
      return;
    }
    setOptions([...options, '']);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (question.trim() === '' || options.filter(opt => opt.trim() !== '').length < 2) {
      toast.error('Poll question and at least 2 valid options are required');
      return;
    }

    const poll = {
      question,
      options,
      votes: Array(options.length).fill(0),
    };

    const existingPolls = JSON.parse(localStorage.getItem('polls')) || [];
    existingPolls.push(poll);
    localStorage.setItem('polls', JSON.stringify(existingPolls));

    toast.success('Poll created successfully!');
    setQuestion('');
    setOptions(['', '']);
  };

  return (
    <div className="create-poll-container">
      <h2>Create a New Poll</h2>
      <form onSubmit={handleSubmit} className="poll-form">
        <input
          type="text"
          placeholder="Enter your question..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="poll-input question"
          required
        />

        {options.map((option, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Option ${index + 1}`}
            value={option}
            onChange={(e) => handleOptionChange(index, e.target.value)}
            className="poll-input option"
            required
          />
        ))}

        <button type="button" onClick={addOption} className="add-option-btn">
          + Add Option
        </button>

        <button type="submit" className="submit-btn">
          Create Poll
        </button>
      </form>
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};

export default CreatePoll;
