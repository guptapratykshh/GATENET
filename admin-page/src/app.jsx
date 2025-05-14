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


import React from 'react';
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

const App = () => {
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
