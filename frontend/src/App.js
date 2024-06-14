import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Insert from './components/Insert';
import Delete from './components/Delete';
import Update from './components/Update';
import UpdateForm from './components/UpdateForm';
import EventDetails from './components/EventDetails';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/insert" element={<Insert />} />
            <Route path="/delete" element={<Delete />} />
            <Route path="/update" element={<Update />} />
            <Route path="/event/:id" component={EventDetails} />
            <Route path="/update-form" element={<UpdateForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
