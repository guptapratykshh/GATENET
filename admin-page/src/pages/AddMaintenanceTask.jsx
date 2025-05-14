import React, { useState } from 'react';

const AddMaintenanceTask = () => {
  const [newTask, setNewTask] = useState({
    name: '',
    description: '',
    priority: 'Medium',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save task (You can integrate with an API or local storage here)
    console.log('New Task Added:', newTask);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Add New Maintenance Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Task Name"
          value={newTask.name}
          onChange={handleInputChange}
          required
        />
        <br /><br />
        <textarea
          name="description"
          placeholder="Description"
          value={newTask.description}
          onChange={handleInputChange}
          required
        />
        <br /><br />
        <select
          name="priority"
          value={newTask.priority}
          onChange={handleInputChange}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <br /><br />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddMaintenanceTask;
