const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch(err => {
        console.error('Failed to connect to MongoDB', err);
    });

const eventSchema = new mongoose.Schema({
    eventName: { type: String, required: true },
    eventType: { type: String, required: true },
    eventDate: { type: Date, required: true },
    eventLocation: { type: String, required: true },
    registrationStartDate: { type: Date, required: true },
    registrationEndDate: { type: Date, required: true },
    registrationFee: { type: Number, required: true },
    maxParticipants: { type: Number, required: true },
    eventDescription: { type: String, required: true },
});

const Event = mongoose.model('Event', eventSchema);

app.post('/insert', (req, res) => {
    const newEvent = new Event(req.body);
    newEvent.save()
        .then(() => res.json('Event added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

app.get('/read', (req, res) => {
    Event.find()
        .then(events => res.json(events))
        .catch(err => res.status(400).json('Error: ' + err));
});

app.get('/read/:id', (req, res) => {
    Event.findById(req.params.id)
        .then(event => {
            if (event) {
                res.json(event);
            } else {
                res.status(404).json('Event not found');
            }
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

app.delete('/delete/:id', (req, res) => {
    Event.findByIdAndDelete(req.params.id)
        .then(event => {
            if (event) {
                res.json('Event deleted!');
            } else {
                res.status(404).json('Event not found');
            }
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

app.put('/update/:id', (req, res) => {
    Event.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(event => {
            if (event) {
                res.json(event);
            } else {
                res.status(404).json('Event not found');
            }
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
