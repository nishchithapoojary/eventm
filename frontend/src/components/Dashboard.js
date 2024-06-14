import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Dashboard.css';

function Dashboard() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  const handleDropdownToggle = () => {
    setDropdownVisible(!dropdownVisible);
  };

  useEffect(() => {
    axios.get('http://localhost:5000/read')
      .then(response => {
        console.log('Fetched events:', response.data);
        setEvents(response.data);
      })
      .catch(error => {
        console.error('Error fetching events:', error);
      });
  }, []);

  const handleEventClick = (eventId) => {
    navigate(`/event/${eventId}`);
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h2>Event Management</h2>
        <hr />
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li className="dropdown" onClick={handleDropdownToggle}>
            Manage
            <ul className={dropdownVisible ? "dropdown-content active" : "dropdown-content"}>
              <li><Link to="/insert">Insert</Link></li>
              <li><Link to="/update">Update</Link></li>
              <li><Link to="/delete">Delete</Link></li>
            </ul>
          </li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/logout">Log Out</Link></li>
        </ul>
      </div>
      <div className="content">
        <h2>Registered Events</h2>
        <div className="events-grid">
          {events.map(event => (
            <div key={event._id} className="event-box" onClick={() => handleEventClick(event._id)}>
              <h3>{event.eventName}</h3>
              <p><strong>Type:</strong> {event.eventType}</p>
              <p><strong>Date:</strong> {new Date(event.eventDate).toLocaleDateString()}</p>
              <p><strong>Location:</strong> {event.eventLocation}</p>
              <p><strong>Registration Start:</strong> {new Date(event.registrationStartDate).toLocaleDateString()}</p>
              <p><strong>Registration End:</strong> {new Date(event.registrationEndDate).toLocaleDateString()}</p>
              <p><strong>Fee:</strong> ${event.registrationFee}</p>
              <p><strong>Max Participants:</strong> {event.maxParticipants}</p>
              <p>{event.eventDescription}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
