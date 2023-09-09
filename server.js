
const express = require ('express');
// reminder this is used to deal with file paths!
const path = require ('path');
const notes = require ('public/notes.html')
const app = express();




// 1) Notes make the public folder static/home page
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res) =>
  res.sendFile(path.join(__dirname, '/notes.html')));

app.get('public/notes.html', (req,res)=> res.json());
const PORT = process.env.PORT || 5002;

app.listen(PORT, () => console.log (`Server started on http://localhost:${PORT}`));

