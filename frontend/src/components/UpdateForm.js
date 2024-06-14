// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './UpdateForm.css'; // Ensure you have the correct styling

// function UpdateForm({ event }) {
//   const [updatedEvent, setUpdatedEvent] = useState({
//     eventName: '',
//     eventType: '',
//     eventDate: '',
//     eventLocation: '',
//     registrationStartDate: '',
//     registrationEndDate: '',
//     registrationFee: '',
//     maxParticipants: '',
//     eventDescription: '',
//   });

//   useEffect(() => {
//     if (event) {
//       setUpdatedEvent({
//         ...event,
//         eventDate: formatDate(event.eventDate),
//         registrationStartDate: formatDate(event.registrationStartDate),
//         registrationEndDate: formatDate(event.registrationEndDate),
//       });
//     }
//   }, [event]);

//   const formatDate = (date) => {
//     if (!date) return '';
//     const parsedDate = new Date(date);
//     return isNaN(parsedDate) ? '' : parsedDate.toISOString().substr(0, 10);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUpdatedEvent((prevEvent) => ({
//       ...prevEvent,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.put(`http://localhost:5000/update/${updatedEvent._id}`, updatedEvent)
//       .then((response) => {
//         alert('Event updated successfully!');
//         // You might want to add a callback here to refresh the event list in the parent component
//       })
//       .catch((error) => {
//         console.error('Error updating event:', error);
//       });
//   };

//   if (!event) {
//     return null; // Or some fallback UI
//   }

//   return (
//     <form onSubmit={handleSubmit} className="update-form">
//       <h3>Update Event</h3>
//       <div className="form-group">
//         <label htmlFor="eventName">Event Name:</label>
//         <input
//           type="text"
//           id="eventName"
//           name="eventName"
//           value={updatedEvent.eventName}
//           onChange={handleChange}
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="eventType">Event Type:</label>
//         <input
//           type="text"
//           id="eventType"
//           name="eventType"
//           value={updatedEvent.eventType}
//           onChange={handleChange}
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="eventDate">Event Date:</label>
//         <input
//           type="date"
//           id="eventDate"
//           name="eventDate"
//           value={updatedEvent.eventDate}
//           onChange={handleChange}
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="eventLocation">Event Location:</label>
//         <input
//           type="text"
//           id="eventLocation"
//           name="eventLocation"
//           value={updatedEvent.eventLocation}
//           onChange={handleChange}
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="registrationStartDate">Registration Start Date:</label>
//         <input
//           type="date"
//           id="registrationStartDate"
//           name="registrationStartDate"
//           value={updatedEvent.registrationStartDate}
//           onChange={handleChange}
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="registrationEndDate">Registration End Date:</label>
//         <input
//           type="date"
//           id="registrationEndDate"
//           name="registrationEndDate"
//           value={updatedEvent.registrationEndDate}
//           onChange={handleChange}
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="registrationFee">Registration Fee:</label>
//         <input
//           type="number"
//           id="registrationFee"
//           name="registrationFee"
//           value={updatedEvent.registrationFee}
//           onChange={handleChange}
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="maxParticipants">Maximum Participants:</label>
//         <input
//           type="number"
//           id="maxParticipants"
//           name="maxParticipants"
//           value={updatedEvent.maxParticipants}
//           onChange={handleChange}
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="eventDescription">Event Description:</label>
//         <textarea
//           id="eventDescription"
//           name="eventDescription"
//           value={updatedEvent.eventDescription}
//           onChange={handleChange}
//         />
//       </div>
//       <button type="submit" className="update-button">Update Event</button>
//     </form>
//   );
// }

// export default UpdateForm;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UpdateForm.css';

function UpdateForm({ event, onSuccess }) {
  const [updatedEvent, setUpdatedEvent] = useState({
    eventName: '',
    eventType: '',
    eventDate: '',
    eventLocation: '',
    registrationStartDate: '',
    registrationEndDate: '',
    registrationFee: '',
    maxParticipants: '',
    eventDescription: '',
  });

  useEffect(() => {
    if (event) {
      setUpdatedEvent({
        ...event,
        eventDate: formatDate(event.eventDate),
        registrationStartDate: formatDate(event.registrationStartDate),
        registrationEndDate: formatDate(event.registrationEndDate),
      });
    }
  }, [event]);

  const formatDate = (date) => {
    if (!date) return '';
    const parsedDate = new Date(date);
    return isNaN(parsedDate) ? '' : parsedDate.toISOString().substr(0, 10);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedEvent((prevEvent) => ({
      ...prevEvent,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/update/${updatedEvent._id}`, updatedEvent)
      .then((response) => {
        alert('Event updated successfully!');
        onSuccess(); // Call the success callback to refresh the event list
      })
      .catch((error) => {
        console.error('Error updating event:', error);
      });
  };

  if (!event) {
    return null; // Or some fallback UI
  }

  return (
    <form onSubmit={handleSubmit} className="update-form">
      <h3>Update Event</h3>
      <div className="form-group">
        <label htmlFor="eventName">Event Name:</label>
        <input
          type="text"
          id="eventName"
          name="eventName"
          value={updatedEvent.eventName}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="eventType">Event Type:</label>
        <input
          type="text"
          id="eventType"
          name="eventType"
          value={updatedEvent.eventType}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="eventDate">Event Date:</label>
        <input
          type="date"
          id="eventDate"
          name="eventDate"
          value={updatedEvent.eventDate}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="eventLocation">Event Location:</label>
        <input
          type="text"
          id="eventLocation"
          name="eventLocation"
          value={updatedEvent.eventLocation}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="registrationStartDate">Registration Start Date:</label>
        <input
          type="date"
          id="registrationStartDate"
          name="registrationStartDate"
          value={updatedEvent.registrationStartDate}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="registrationEndDate">Registration End Date:</label>
        <input
          type="date"
          id="registrationEndDate"
          name="registrationEndDate"
          value={updatedEvent.registrationEndDate}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="registrationFee">Registration Fee:</label>
        <input
          type="number"
          id="registrationFee"
          name="registrationFee"
          value={updatedEvent.registrationFee}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="maxParticipants">Maximum Participants:</label>
        <input
          type="number"
          id="maxParticipants"
          name="maxParticipants"
          value={updatedEvent.maxParticipants}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="eventDescription">Event Description:</label>
        <textarea
          id="eventDescription"
          name="eventDescription"
          value={updatedEvent.eventDescription}
          onChange={handleChange}
        />
      </div>
      <div className="button-container">
        <button type="submit" className="update-button">Update Event</button>
      </div>
    </form>
  );
}

export default UpdateForm;
