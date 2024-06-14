// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import UpdateForm from './UpdateForm';
// import './Update.css';

// function Update() {
//   const [events, setEvents] = useState([]);
//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchEvents();
//   }, []);

//   const fetchEvents = () => {
//     axios.get('http://localhost:5000/read')
//       .then(response => {
//         setEvents(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching events:', error);
//       });
//   };

//   const handleUpdate = (event) => {
//     setSelectedEvent(event);
//   };

//   return (
//     <div className="container">
//       <h2>Update Event</h2>
//       <button className="back-button" onClick={() => navigate('/')}>Back</button>
//       <table>
//         <thead>
//           <tr>
//             <th>Event Name</th>
//             <th>Event Type</th>
//             <th>Event Date</th>
//             <th>Event Location</th>
//             <th>Reg Start Date</th>
//             <th>Reg End Date</th>
//             <th>Reg Fee</th>
//             <th>Max Participants</th>
//             <th>Description</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {events.map(event => (
//             <tr key={event._id}>
//               <td>{event.eventName}</td>
//               <td>{event.eventType}</td>
//               <td>{new Date(event.eventDate).toLocaleDateString()}</td>
//               <td>{event.eventLocation}</td>
//               <td>{new Date(event.registrationStartDate).toLocaleDateString()}</td>
//               <td>{new Date(event.registrationEndDate).toLocaleDateString()}</td>
//               <td>{event.registrationFee}</td>
//               <td>{event.maxParticipants}</td>
//               <td>{event.eventDescription}</td>
//               <td>
//                 <button className="update-button" onClick={() => handleUpdate(event)}>Update</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {selectedEvent && <UpdateForm event={selectedEvent} />}
//     </div>
//   );
// }

// export default Update;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import UpdateForm from './UpdateForm';
import './Update.css';

function Update() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
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

  const handleUpdate = (event) => {
    setSelectedEvent(event);
  };

  const handleUpdateSuccess = () => {
    fetchEvents();
    setSelectedEvent(null); // Optionally close the update form
  };

  return (
    <div className="container">
      <h2>Update Event</h2>
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
            <th>Actions</th>
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
                <button className="update-button" onClick={() => handleUpdate(event)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedEvent && <UpdateForm event={selectedEvent} onSuccess={handleUpdateSuccess} />}
    </div>
  );
}

export default Update;

