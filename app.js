const index = require('./routes/index');
const express = require('express');
const app = express();

app.use('/', index);

app.listen(3000, () => console.log('listening...'));
