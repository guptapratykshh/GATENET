// import React, { useState } from 'react';

// const CreatePoll = () => {
//   const [question, setQuestion] = useState('');
//   const [options, setOptions] = useState(['', '']);

//   const handleOptionChange = (index, value) => {
//     const updatedOptions = [...options];
//     updatedOptions[index] = value;
//     setOptions(updatedOptions);
//   };

//   const addOption = () => {
//     setOptions([...options, '']);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const poll = { question, options, votes: Array(options.length).fill(0) };

//     const existingPolls = JSON.parse(localStorage.getItem('polls')) || [];
//     existingPolls.push(poll);
//     localStorage.setItem('polls', JSON.stringify(existingPolls));

//     alert('Poll created successfully!');

//     // ❌ Do NOT navigate to results immediately
//     // ✅ Reset form
//     setQuestion('');
//     setOptions(['', '']);
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h2>Create New Poll</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Poll Question"
//           value={question}
//           onChange={(e) => setQuestion(e.target.value)}
//           required
//         />
//         <br /><br />
//         {options.map((option, index) => (
//           <div key={index}>
//             <input
//               type="text"
//               placeholder={`Option ${index + 1}`}
//               value={option}
//               onChange={(e) => handleOptionChange(index, e.target.value)}
//               required
//             />
//           </div>
//         ))}
//         <button type="button" onClick={addOption}>Add Option</button>
//         <br /><br />
//         <button type="submit">Create Poll</button>
//       </form>
//     </div>
//   );
// };

// export default CreatePoll;
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
