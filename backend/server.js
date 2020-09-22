require('dotenv').config()
const express = require('express')
const app = express()
const { PORT } = require('./.env')
const db = require('./db')
const path = require('path');
const bodyParser = require('body-parser');

const DIST_DIR = path.join(__dirname, '../dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');
const datamuse = 'https://api.datamuse.com/words?';
const { User, Entry } = require('./models');

app.use(bodyParser.json());
app.use(express.static(DIST_DIR));

// app.get(`${datamuse}ml=ringing+in+the+ears&max=4`, (req, res) => {
//   res.status(200).send('YOOOOO');
// })


app.get('/signup', (req, res) => {
  res.status(200).send('get signup!');
  // res.render('signup');
})

app.post('/signup', (req, res) => {
  const { username, password } = req.body;
  res.send(req.body);
})


app.listen(PORT, () => {
  console.log(`!! CONNECTED TO SERVER @ PORT ${PORT} !!`);
});