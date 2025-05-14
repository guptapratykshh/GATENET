import React, { useState } from 'react';

const UpdateTaskStatus = ({ task }) => {
  const [status, setStatus] = useState(task.status);

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save status update (You can integrate with an API or local storage here)
    console.log(`Updated Status for ${task.name}:`, status);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Update Task Status</h2>
      <p><strong>Task:</strong> {task.name}</p>
      <form onSubmit={handleSubmit}>
        <select value={status} onChange={handleStatusChange}>
          <option value="Open">Open</option>
          <option value="In Progress">In Progress</option>
          <option value="Resolved">Resolved</option>
        </select>
        <br /><br />
        <button type="submit">Update Status</button>
      </form>
    </div>
  );
};

export default UpdateTaskStatus;
