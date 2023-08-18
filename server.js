// import express
const express = require('express');
const path = require('path');
// import the feedback router
const api = require('./');
const notes = require('./Develop/db/db.json');

const PORT = process.env.PORT || 3001;
//  init express app.
const app = express();
// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware to serve up static assets from the public folder
app.use(express.static('public'));

// Send all the requests that begin with /api to the index.js in the routes folder
app.use('/api', api);


// This view route is a GET route for the notes page
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);
// This is the wildcard route to direct users to a 404 page
app.get('*', (req, res) =>
    res.sendFile(path.join (_dirname, './public/pages/index.html'))
);


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);

// app.listen(process.env.PORT || 3001);
