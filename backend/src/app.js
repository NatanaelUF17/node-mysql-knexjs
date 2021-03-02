const express = require('express');
const cors = require('cors');

require('dotenv').config();

const api = require('./api')

const app = express();

app.use(cors());
app.use(express.json());

// * This is the entry route of the app
app.get('/', (req, res, next) => {
    res.json({
        message: 'Welcome to the index of this API ✝'
    });
});

// * Here we are setting the route to access the API
app.use('/api/v1', api);

module.exports = app;
