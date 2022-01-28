const index = require('./routes/index');
app.use('/', index);

app.listen(3000, () => console.log('listening...'));
