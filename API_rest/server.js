
var app = require('./app');
var port = process.env.PORT || 3001; // set our port
var router = require('./routes/router');
var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ctc'); // connect to our database

app.use('/api', router); //pasarle

app.listen(port);
console.log('Магия случается в порту ' + port);
