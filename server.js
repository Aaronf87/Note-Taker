
const express = require ('express');
// reminder this is used to deal with file paths!
const path = require ('path');
// const notes = require ('public/notes.html')
const app = express();




// 1) Notes make the public folder static/home page
app.use(express.static(path.join(__dirname, 'public')));

app.get('/notes', (req,res) =>{

  res.sendFile(path.join(__dirname, '/public/notes.html'));
  
});

app.get('/api/notes', (req,res)=> {
  
  res.sendFile(path.join(__dirname, '/db/db.json'));
  
});

//ROUTE FOR DEFAULT HOMEPAGE
app.get('*', (req,res)=> {
  
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

// SET UP POST ROUTE
// POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).
// unique id = uuid
app.post('/api/notes', (req,res)=> {
  console.log(req.body);
  res.sendFile(path.join(__dirname, '/db/db.json'));
});


const PORT = process.env.PORT || 5003;

app.listen(PORT, () => console.log (`Server started on http://localhost:${PORT}`));

