import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ComponentCard.css';

const MaintenanceUpdates = () => {
  const navigate = useNavigate();

  const handleAddUpdate = () => {
    // Navigate to the "Add Maintenance Task" page
    navigate('/add-maintenance-task');
  };

  const handleUpdateStatus = (taskId) => {
    // Navigate to the "Update Task Status" page (You can pass the task ID here to update a specific task)
    navigate(`/update-task-status/${taskId}`);
  };

  return (
    <div className="card">
      <h3>MAINTENANCE UPDATES</h3>

      {/* Example task list */}
      <div className="task">
        <p>Elevator Not Working <span className="status open">OPEN</span></p>
        <button onClick={() => handleUpdateStatus(1)}>Start Task</button>
      </div>
      <div className="task">
        <p>Power Outage <span className="status resolved">RESOLVED</span></p>
        <button onClick={() => handleUpdateStatus(2)}>Resolve Task</button>
      </div>

      <div className="button-container">
        <button onClick={handleAddUpdate}>+ Add an update</button>
      </div>
    </div>
  );
};

export default MaintenanceUpdates;

