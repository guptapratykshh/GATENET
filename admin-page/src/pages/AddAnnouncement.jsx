import React, { useState } from 'react';

const AddAnnouncement = () => {
  const [announcement, setAnnouncement] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Announcement added!');
    setAnnouncement('');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Add New Announcement</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Write your announcement..."
          value={announcement}
          onChange={(e) => setAnnouncement(e.target.value)}
          required
        />
        <button type="submit">Submit Announcement</button>
      </form>
    </div>
  );
};

export default AddAnnouncement;

