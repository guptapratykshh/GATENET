import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

// 👥 Member Management Pages
import AddMember from './pages/AddMember';
import UpdateMembers from './pages/UpdateMembers';
import DownloadExcel from './pages/DownloadExcel';

// 📢 Announcement Feature
import Announcements from './components/Announcements';
import AddAnnouncement from './pages/AddAnnouncement';

// 🗳️ Voting / Polls Feature
import CreatePoll from './pages/CreatePoll';
import PollResults from './pages/PollResults';

// 🏠 Book Amenities Feature
import BookedAmenities from './components/BookedAmenities';
import ViewBookedAmenities from './pages/ViewBookedAmenities';

// 🔔 Reminder Feature
import AddReminder from './pages/AddReminder';
import Reminder from './components/Reminders';

// 🛠️ Maintenance Feature
import MaintenanceUpdates from './pages/MaintenanceUpdates'; // main page with buttons
import AddTask from './pages/AddTask';
import UpdateTask from './pages/UpdateTask';
import ViewTasks from './pages/ViewTasks';

// Seed demo data for Bookings and Tasks if not present
const seedDemoData = () => {
  if (!localStorage.getItem('bookedAmenities')) {
    const demoBookings = [
      {
        amenityName: 'Tennis Court',
        userName: 'Alice Johnson',
        bookingTime: '2025-05-15 10:00 AM',
        status: 'Confirmed',
      },
      {
        amenityName: 'Swimming Pool',
        userName: 'Bob Smith',
        bookingTime: '2025-05-16 3:00 PM',
        status: 'Pending',
      },
      {
        amenityName: 'Conference Room',
        userName: 'Carol Lee',
        bookingTime: '2025-05-17 1:00 PM',
        status: 'Cancelled',
      },
    ];
    localStorage.setItem('bookedAmenities', JSON.stringify(demoBookings));
  }

  if (!localStorage.getItem('tasks')) {
    const demoTasks = [
      {
        id: 1,
        title: 'Fix broken elevator',
        description: 'Elevator in Tower A is not working',
        status: 'open',
      },
      {
        id: 2,
        title: 'Clean water tanks',
        description: 'Annual water tank cleaning due',
        status: 'in-progress',
      },
      {
        id: 3,
        title: 'Repair gym equipment',
        description: 'Treadmill needs belt replacement',
        status: 'resolved',
      },
    ];
    localStorage.setItem('tasks', JSON.stringify(demoTasks));
  }
};

const App = () => {
  useEffect(() => {
    seedDemoData();
  }, []);

  return (
    <Router>
      <div className="app">
        <Header />

        <Routes>
          {/* 🏠 Dashboard */}
          <Route path="/" element={<Dashboard />} />

          {/* 👥 Member Management */}
          <Route path="/add-member" element={<AddMember />} />
          <Route path="/update-members" element={<UpdateMembers />} />
          <Route path="/download-excel" element={<DownloadExcel />} />

          {/* 📢 Announcements */}
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/add-announcement" element={<AddAnnouncement />} />

          {/* 🗳️ Polls */}
          <Route path="/create-poll" element={<CreatePoll />} />
          <Route path="/poll-results" element={<PollResults />} />

          {/* 🏠 Amenities */}
          <Route path="/booked-amenities" element={<BookedAmenities />} />
          <Route path="/view-booked-amenities" element={<ViewBookedAmenities />} />

          {/* 🔔 Reminders */}
          <Route path="/reminders" element={<Reminder />} />
          <Route path="/add-reminder" element={<AddReminder />} />

          {/* 🛠️ Maintenance Updates */}
          <Route path="/maintenance-updates" element={<MaintenanceUpdates />} />
          <Route path="/maintenance-updates/add-task" element={<AddTask />} />
          <Route path="/maintenance-updates/update-task" element={<UpdateTask />} />
          <Route path="/maintenance-updates/view-tasks" element={<ViewTasks />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
