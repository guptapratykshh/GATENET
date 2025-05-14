// AnnouncementCard.js
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AddAnnouncement.css'; // Optional custom styles

const AnnouncementCard = () => {
  const [announcement, setAnnouncement] = useState('');

  const handleAddAnnouncement = () => {
    if (!announcement.trim()) {
      toast.error('Please enter an announcement first!');
      return;
    }

    toast.success(`📢 Announcement added: ${announcement}`, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: {
        backgroundColor: '#e6ffed',
        color: '#1a3e2b',
        fontSize: '16px',
        fontWeight: '500',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      },
    });

    setAnnouncement('');
  };

  return (
    <div className="announcement-wrapper">
      <h2>Add New Announcement</h2>
      <textarea
        className="announcement-textarea"
        rows="3"
        placeholder="Type your announcement..."
        value={announcement}
        onChange={(e) => setAnnouncement(e.target.value)}
      />
      <button className="announce-btn" onClick={handleAddAnnouncement}>
        Add Announcement
      </button>
      <ToastContainer />
    </div>
  );
};

export default AnnouncementCard;
