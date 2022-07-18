'use strict'

const { restart } = require('nodemon');
const firebase = require('../db');
const User = require('../models/user');
const firestore = firebase.firestore();

const addUser = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('users').doc().set(data);
        res.status(201).send('Registered successfully');

    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAllUsers = async (req, res, next) => {
    try {
        const users = await firestore.collection('users');
        const data = await users.get();
        const usersArray = [];

        if (data.empty) {
            res.status(404).send('No data registered');
        } else {
            data.forEach(doc => {
                const user = new User (
                    doc.id,
                    doc.data().firstName,
                    doc.data().lastName,
                    doc.data().email,
                    doc.data().password,
                    doc.data().birthday
                );
                usersArray.push(user);
            });
            res.send(usersArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getUser = async(req,res,next) => {
    try {
        const id = req.params.id;
        const user = await firestore.collection('users').doc(id);
        const data = await user.get();

        if(!data.exists) {
            res.status(404).send('User not found');
        } else {
            res.send(data.data());
        }

    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateUser = async(req,res,next) => {
    try {
        const id = req.params.id;
        const user = await firestore.collection('users').doc(id);
        const data = req.body;

        await user.update(data);
        res.send('User updated successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteUser = async(req,res,next) => {
    try {
        const id = req.params.id;

        await firestore.collection('users').doc(id).delete();
        res.send('User deleted successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }

}
module.exports = {
    addUser,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser
}