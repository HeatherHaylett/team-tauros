const { Router } = require('express');
const db = require('../db');

const loginRouter = Router();

// POST /api/login
// when a user signs in through google, add the details to the database
loginRouter.post('/', (req, res) => {
  db.addUser(req)
  .then(() => res.send(201))
  .catch((error) => {
    console.log(error);
    res.sendStatus(500);
  });
});

// GET /api/login
// 
loginRouter.get('/', (req, res) => {
  db.getRooms()
    .then((parties) => {
      res.send(parties);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

module.exports = {
  loginRouter,
};