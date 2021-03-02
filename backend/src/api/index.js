// * This is the entry point of the API

const express = require('express');

const users = require('./users');

const router = express.Router();

// * This is the entry route for the API
router.get('/', (req, res) => {
    res.json({
        message: 'Welcome to my API mortal 😈'
    });
});

// * Here we bring the routes that we are going to use inside the API
router.use('/users', users);

module.exports = router;