import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <aside className="sidebar">
        <div className="sidebar-header">GREENLANDS SOCIETY</div>
        <ul className="nav">
          <li>Voting & Polling</li>
          <li>Maintenance Requests</li>
          <li>Amenity Booking</li>
          <li>Society By Laws</li>
          <li>Settings</li>
        </ul>
      </aside>

      <main className="dashboard">
        <section className="card votes">
          <h3>ACTIVE VOTES</h3>
          <div className="vote-item">
            <div className="circle-loader"></div>
            <span>Security Enhancement</span>
          </div>
          <div className="vote-item">
            <div className="circle-loader"></div>
            <span>Parking Allocation</span>
          </div>
          <a href="#">SEE ALL LIVE POLLS</a>
        </section>

        <section className="card maintenance">
          <h3>MAINTENANCE UPDATES</h3>
          <div className="status-item">
            <span>Elevator Not Working</span>
            <span className="status open">OPEN</span>
          </div>
          <div className="status-item">
            <span>Power Outage</span>
            <span className="status resolved">RESOLVED</span>
          </div>
          <a href="#">SEE ALL UPDATES</a>
        </section>

        <section className="card notifications">
          <h3>RECENT NOTIFICATIONS</h3>
          <div className="dot-text">Reminder: AGM meeting to be held on 1 May, 2025</div>
          <div className="dot-text">Reminder: New poll created for Security Enhancement</div>
          <div className="dot-text">Reminder: Parking allocation form will not accept responses after 22 April, 2025 6:00 PM IST.</div>
          <a href="#">SEE ALL NOTIFICATIONS</a>
        </section>

        <section className="card bookings">
          <h3>BOOKED AMENITIES</h3>
          <div>April 22 – Clubhouse</div>
          <a href="#">SEE ALL BOOKINGS</a>
        </section>

        <section className="card announcements">
          <h3>ANNOUNCEMENTS</h3>
          <div>No New Announcements</div>
          <a href="#">SEE ALL ANNOUNCEMENTS</a>
        </section>
      </main>
    </div>
  );
};

export default App;