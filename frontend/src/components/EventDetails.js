import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './EventDetails.css';

function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/read/${id}`)
      .then(response => {
        setEvent(response.data);
      })
      .catch(error => {
        console.error('Error fetching event details:', error);
      });
  }, [id]);

  if (!event) return <div>Loading...</div>;

  return (
    <div className="event-details">
      <h2>{event.eventName}</h2>
      <p><strong>Type:</strong> {event.eventType}</p>
      <p><strong>Date:</strong> {new Date(event.eventDate).toLocaleDateString()}</p>
      <p><strong>Location:</strong> {event.eventLocation}</p>
      <p><strong>Registration Start Date:</strong> {new Date(event.registrationStartDate).toLocaleDateString()}</p>
      <p><strong>Registration End Date:</strong> {new Date(event.registrationEndDate).toLocaleDateString()}</p>
      <p><strong>Fee:</strong> {event.registrationFee}</p>
      <p><strong>Max Participants:</strong> {event.maxParticipants}</p>
      <p>{event.eventDescription}</p>
    </div>
  );
}

export default EventDetails;
