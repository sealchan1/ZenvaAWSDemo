// Modules

const express = require('express');
const routes = require('./routes/index');
const path = require('path');
//const bodyParser = require('body-parser');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
//app.use(bodyParser.urlencoded());
app.use(express.urlencoded( { extended: false }));

app.use((req, res, next) => {

    console.log('FIRST MIDDLEWARE!');
    req.timestamp = new Date().toString();
    next();
});

app.use('/', routes);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');


// Listen

app.listen(3000);
console.log('Running and listening on port 3000');