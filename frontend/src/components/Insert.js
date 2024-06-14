import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Insert.css'; // Import CSS file for styling

function Insert() {
  const [eventName, setEventName] = useState('');
  const [eventType, setEventType] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [registrationStartDate, setRegistrationStartDate] = useState('');
  const [registrationEndDate, setRegistrationEndDate] = useState('');
  const [registrationFee, setRegistrationFee] = useState('');
  const [maxParticipants, setMaxParticipants] = useState('');
  const [eventDescription, setEventDescription] = useState('');

  const navigate = useNavigate(); // Use the useNavigate hook

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      eventName,
      eventType,
      eventDate,
      eventLocation,
      registrationStartDate,
      registrationEndDate,
      registrationFee,
      maxParticipants,
      eventDescription,
    };

    axios.post('http://localhost:5000/insert', newEvent)
      .then(response => {
        console.log(response.data);
        alert('Event added!');
        // Clear the form fields
        setEventName('');
        setEventType('');
        setEventDate('');
        setEventLocation('');
        setRegistrationStartDate('');
        setRegistrationEndDate('');
        setRegistrationFee('');
        setMaxParticipants('');
        setEventDescription('');
      })
      .catch(error => {
        console.error('There was an error adding the event!', error);
      });
  };

  const handleBack = () => {
    navigate('/'); // Navigate to the Dashboard page
  };

  return (
    <div className="insert-container">
      <div className="form-container">
        <h2 className="form-heading">Add Event</h2>
        <form onSubmit={handleSubmit} className="insert-form">
          <div className="form-group">
            <label htmlFor="eventName">Event Name:</label>
            <input
              id="eventName"
              type="text"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="eventType">Event Type:</label>
            <input
              id="eventType"
              type="text"
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="eventDate">Event Date(s):</label>
            <input
              id="eventDate"
              type="date"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="eventLocation">Event Location:</label>
            <input
              id="eventLocation"
              type="text"
              value={eventLocation}
              onChange={(e) => setEventLocation(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="registrationStartDate">Registration Start Date:</label>
            <input
              id="registrationStartDate"
              type="date"
              value={registrationStartDate}
              onChange={(e) => setRegistrationStartDate(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="registrationEndDate">Registration End Date:</label>
            <input
              id="registrationEndDate"
              type="date"
              value={registrationEndDate}
              onChange={(e) => setRegistrationEndDate(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="registrationFee">Registration Fee:</label>
            <input
              id="registrationFee"
              type="number"
              value={registrationFee}
              onChange={(e) => setRegistrationFee(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="maxParticipants">Maximum Number of Participants:</label>
            <input
              id="maxParticipants"
              type="number"
              value={maxParticipants}
              onChange={(e) => setMaxParticipants(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="eventDescription">Event Description:</label>
            <textarea
              id="eventDescription"
              value={eventDescription}
              onChange={(e) => setEventDescription(e.target.value)}
            />
          </div>
          <div className="button-group">
            <button type="submit" className="insert-button">Insert</button>
            <button type="button" className="back-button" onClick={handleBack}>Back</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Insert;
