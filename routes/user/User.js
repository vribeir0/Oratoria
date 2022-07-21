// const express = require('express');
// const { addUser, 
//         getAllUsers,
//         getUser,
//         updateUser,
//         deleteUser
//       } = require('../controllers/userController');

// const router = express.Router();

// router.post('/user', addUser);
// router.get('/users', getAllUsers);
// router.get('/user/:id', getUser);
// router.put('/user/:id', updateUser);
// router.delete('/user/:id', deleteUser);


// module.exports = router;
const router = require("express").Router();
const { addUser, 
        getAllUsers,
        getUser,
        updateUser,
        deleteUser
      } = require('../../controllers/userController');

router.get('/', getAllUsers);
router.post('/', addUser);
router.get('/:id', getUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;


