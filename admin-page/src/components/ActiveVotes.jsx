// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../styles/ComponentCard.css';

// const ActiveVotes = () => {
//   const navigate = useNavigate();

//   const handleCreatePoll = () => {
//     navigate('/create-poll');
//   };

//   const handleViewResults = () => {
//     navigate('/poll-results');
//   };

//   return (
//     <div className="card">
//       <h3>ACTIVE VOTES</h3>
//       <div className="button-container">
//         <button className="poll-button" onClick={handleCreatePoll}>
//           ➕<br />Create a new poll
//         </button>
//         <button className="poll-button" onClick={handleViewResults}>
//           ✅<br />View/Publish poll results
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ActiveVotes;
import { useNavigate } from 'react-router-dom';

const ActiveVotes = () => {
  const navigate = useNavigate();

  return (
    <div className="card">
      <h3>ACTIVE VOTES</h3>
      <div className="button-container">
        <button className="poll-button" onClick={() => navigate('/create-poll')}>
          ➕<br />Create a new poll
        </button>
        <button className="poll-button" onClick={() => navigate('/poll-results')}>
          ✅<br />View / Publish Poll Results
        </button>
      </div>
    </div>
  );
};
export default ActiveVotes;