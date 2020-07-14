const express = require('express')
const app = express()
const port = 3001

var user = require('./src/User.js');

// var mysql = require('mysql');
// var session = require('express-session');
// var bodyParser = require('body-parser');
// var path = require('path');

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('login'));

app.post('/', (req,res) => {
  let body = [];
  req.on('data', chunk => {
    body.push(chunk.toString());
    // body += chunk.toString();
  });
  req.on('end', () => {
    console.log(body.username)
    console.log(body);
  });
  // body = body.split('&');
  console.log(body);
  var user_name = "test"
  var password = "test123"
  var response = user.login(user_name, password)
  console.log(response)
  if (response === true) {
  res.redirect('homepage');
  } else {
    res.redirect('/');
  };
});

app.get('/signup', (req, res) => res.render('signup'));

app.post('/signup', (req, res) => {
  console.log(req.body);
  res.redirect('/');
});

app.get('/homepage', (req, res) => res.render('homepage'));

app.get('/addspace', (req, res) => res.render('addspace'));

app.post('/addspace', (req, res) => { 
  console.log(req.body);
  res.redirect('homepage');
});

app.get('/space', (req, res) => res.render('space'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
