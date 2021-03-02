// * This is the users api entry with their routes 

const e = require('express');
const express = require('express');

const db = require('../data/db')

const router = express.Router();

// * This route is for get all users.
router.get('/', async (req, res, next) => {
    try {
        const users = await db('user').select('*');
        res.status(200).json(users);
    } catch (error) {
        if(error) {
            res.status(404).json({
                message: 'No users register'
            });
        } else {
            next(error);
        }
    }
});

// * This route is for get a specific user 
router.get('/:id', async (req, res, next) => {
    const { id } = req.params;
    
    try {
        const user = await db('user').where({ id: id });
        res.status(200).json(user);
    } catch (error) {
        if(error) {
            res.status(401).json({ 
                message: 'No user found' 
            });
        } else {
            next(error);
        }     
    }
});

// * This route is for post data to create an user
router.post('/', async (req, res, next) => {
    const { name, lastName } = req.body;

    try {
        const user = await db('user').insert({
            name, 
            lastName,
        });

        res.status(200).json(user);
    } catch (error) {
        if(error) {
            res.status(401).json({
                message: 'User already exists!'
            });
        } else {
            next(error);
        }
    }
});

// * This route is for put data to update an user
router.put('/:id', async (req, res, next) => {
    
    try {
        const { id } = req.params;
        const { name, lastName } = req.body;
        
        const updatedUser = await db('user').where({ id: id }).update({ 
            name,
            lastName,
        });
        
        res.status(200).json(updatedUser);

    } catch (error) {
        if(error) {
            res.status(404).json({
                message: 'Unable to update the user'
            });
        } else {
            next(error);
        }
    }
});

// * This route if for delete an specific user
router.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedUser = await db('user').where({ id: id }).delete();
        
        res.status(200).json(deletedUser);
    } catch (error) {
        if(error) {
            res.status(401).json({
                message: 'No user found to delete'
            });
        } else {
            next(error);
        }
    }
});

module.exports = router;

