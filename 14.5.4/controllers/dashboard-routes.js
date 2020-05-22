const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

module.exports = router;

router.get('/', (req, res) => {
  res.render('dashboard', { loggedIn: true });
});