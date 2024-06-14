import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Read() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/read')
      .then(response => {
        setEvents(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the events!', error);
      });
  }, []);

  return (
    <div>
      <h2>Read Events</h2>
      <ul>
        {events.map(event => (
          <li key={event._id}>
            <strong>{event.name}</strong> - {event.date}
            <p>{event.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Read;
