const index = require('./routes/index');
const express = require('express');
const hbs = require('hbs');
const app = express();

// middleware
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use('/', index);

app.listen(3000, () => console.log('listening...'));
