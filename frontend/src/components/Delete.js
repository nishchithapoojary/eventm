import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Delete.css';

function Delete() {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = () => {
    axios.get('http://localhost:5000/read')
      .then(response => {
        setEvents(response.data);
      })
      .catch(error => {
        console.error('Error fetching events:', error);
      });
  };

  const handleDelete = (eventId) => {
    axios.delete(`http://localhost:5000/delete/${eventId}`)
      .then(response => {
        console.log(response.data);
        // Remove the deleted event from the events list
        setEvents(events.filter(event => event._id !== eventId));
      })
      .catch(error => {
        console.error('Error deleting event:', error);
      });
  };

  return (
    <div class="container">
      <h2>Delete Event</h2>
      <button className="back-button" onClick={() => navigate('/')}>Back</button>
      <table>
        <thead>
          <tr>
            <th>Event Name</th>
            <th>Event Type</th>
            <th>Event Date</th>
            <th>Event Location</th>
            <th>Reg Start Date</th>
            <th>Reg End Date</th>
            <th>Reg Fee</th>
            <th>Max Participants</th>
            <th>Description</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {events.map(event => (
            <tr key={event._id}>
              <td>{event.eventName}</td>
              <td>{event.eventType}</td>
              <td>{new Date(event.eventDate).toLocaleDateString()}</td>
              <td>{event.eventLocation}</td>
              <td>{new Date(event.registrationStartDate).toLocaleDateString()}</td>
              <td>{new Date(event.registrationEndDate).toLocaleDateString()}</td>
              <td>{event.registrationFee}</td>
              <td>{event.maxParticipants}</td>
              <td>{event.eventDescription}</td>
              <td>
                <button onClick={() => handleDelete(event._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Delete;
