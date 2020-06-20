const express = require('express');
const router = express.Router();

// @desc    Login/Landing page
// @method  GET /
router.get('/', (req, res) => {
  res.render('login', {
    layout: 'login',
  });
});

// @desc    Dashboard
// @method  GET /dashboard
router.get('/dashboard', (req, res) => {
  res.render('dashboard');
});

module.exports = router;