// src/pages/AddReminder.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddReminder = () => {
  const [reminder, setReminder] = useState({
    title: '',
    description: '',
    dueDate: '',
    priority: 'Medium'
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setReminder({ ...reminder, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingReminders = JSON.parse(localStorage.getItem('reminders')) || [];
    localStorage.setItem('reminders', JSON.stringify([...existingReminders, reminder]));

    alert('Reminder added!');
    navigate('/');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Add New Reminder</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={reminder.title}
          onChange={handleChange}
          required
        /><br /><br />
        <textarea
          name="description"
          placeholder="Description"
          value={reminder.description}
          onChange={handleChange}
        /><br /><br />
        <input
          type="date"
          name="dueDate"
          value={reminder.dueDate}
          onChange={handleChange}
          required
        /><br /><br />
        <select name="priority" value={reminder.priority} onChange={handleChange}>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select><br /><br />
        <button type="submit">Add Reminder</button>
      </form>
    </div>
  );
};

export default AddReminder;
