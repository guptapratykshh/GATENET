import React, { useState } from 'react';
import './AddMember.css';

const AddMember = () => {
  const [formData, setFormData] = useState({
    name: '',
    flat: '',
    contact: '',
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMember = {
      Name: formData.name,
      Flat: formData.flat,
      Contact: formData.contact,
    };

    const existingData = JSON.parse(localStorage.getItem('membersExcel')) || [];
    const updatedData = [...existingData, newMember];
    localStorage.setItem('membersExcel', JSON.stringify(updatedData));

    setSuccessMessage('✅ Member added successfully!');
    setFormData({ name: '', flat: '', contact: '' });

    setTimeout(() => setSuccessMessage(''), 3000); // Auto-hide after 3 sec
  };

  return (
    <div className="add-member-container">
      <h2>Add New Society Member</h2>

      {successMessage && <div className="success-toast">{successMessage}</div>}

      <form onSubmit={handleSubmit}>
        <input 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          placeholder="Name" 
          required 
        />

        <input 
          name="flat" 
          value={formData.flat} 
          onChange={handleChange} 
          placeholder="Flat No." 
          required 
        />

        <input 
          name="contact" 
          value={formData.contact} 
          onChange={handleChange} 
          placeholder="Contact Number" 
          required 
        />

        <button type="submit">Add Member</button>
      </form>
    </div>
  );
};

export default AddMember;
