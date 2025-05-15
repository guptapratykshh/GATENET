// import React from 'react';
// import Header from './components/Header';
// import Dashboard from './components/Dashboard';

// const App = () => {
//   return (
//     <div className="app">
//       <Header />
//       <Dashboard />
//     </div>
//   );
// };

// export default App;


// 
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

// 📦 Member Management Pages
import AddMember from './pages/AddMember';
import UpdateMembers from './pages/UpdateMembers';
import DownloadExcel from './pages/DownloadExcel';

// 📢 Announcement Feature
import Announcements from './components/Announcements';   // List of announcements
import AddAnnouncement from './pages/AddAnnouncement';    // Admin creates an announcement

// 🗳️ Voting / Polls Feature
import CreatePoll from './pages/CreatePoll';              // Admin creates a new poll
import PollResults from './pages/PollResults';            // Admin views & publishes poll results

// 🏠 Book Amenities Feature
import BookedAmenities from './components/BookedAmenities';  // Admin can see the booked amenities
import ViewBookedAmenities from './pages/ViewBookedAmenities'; // Admin views all booked amenities

// 🔔 Reminder Feature
import AddReminder from './pages/AddReminder';  // Admin creates a reminder
import Reminder from './components/Reminders';   // View reminders

const seedDemoBookings = () => {
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
};

const App = () => {
  useEffect(() => {
    seedDemoBookings();
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

          {/* 📢 Announcement Management */}
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/add-announcement" element={<AddAnnouncement />} />

          {/* 🗳️ Voting Management */}
          <Route path="/create-poll" element={<CreatePoll />} />
          <Route path="/poll-results" element={<PollResults />} />

          {/* 🏠 Book Amenities */}
          <Route path="/booked-amenities" element={<BookedAmenities />} />
          <Route path="/view-booked-amenities" element={<ViewBookedAmenities />} />

          {/* 🔔 Reminder Section */}
          <Route path="/reminders" element={<Reminder />} />
          <Route path="/add-reminder" element={<AddReminder />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
