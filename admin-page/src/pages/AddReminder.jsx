import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AddReminder.css';

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

    toast.success(' Reminder added successfully!', {
      position: 'top-right',
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    });

    setTimeout(() => {
      navigate('/');
    }, 2600); // Wait for toast before navigating
  };

  return (
    <div className="add-reminder-container">
      <h2>Add New Reminder</h2>
      <form className="add-reminder-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={reminder.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={reminder.description}
          onChange={handleChange}
        />
        <input
          type="date"
          name="dueDate"
          value={reminder.dueDate}
          onChange={handleChange}
          required
        />
       <select name="priority" value={reminder.priority} onChange={handleChange}>
  <option value="High">🔴 High</option>
  <option value="Medium">🟡 Medium</option>
  <option value="Low">🟢 Low</option>
</select>
        <button type="submit">Add Reminder</button>
      </form>

      {/* Toast container */}
      <ToastContainer />
    </div>
  );
};

export default AddReminder;
