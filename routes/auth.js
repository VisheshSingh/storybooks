const express = require('express');
const router = express.Router();
const passport = require('passport');

// @desc    Auth with Google
// @method  GET /auth/google
router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

// @desc    Google auth callback
// @method  GET /auth/google/callback
router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/dashboard');
  }
);

// @desc    Logout user
// @method  GET /auth/logout
router.get('/logout', (req, res) => {
  req.logOut();
  res.redirect('/');
});

module.exports = router;
