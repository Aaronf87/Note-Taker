
const express = require ('express');
// reminder this is used to deal with file paths!
const path = require ('path');
// const notes = require ('public/notes.html')
const app = express();

app.get('db/db.json', (req,res)=> res.json(db));

// 1) Notes make the public folder static
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => console.log (`Server started on http://localhost:${PORT}`));

