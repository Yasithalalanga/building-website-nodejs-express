const express = require('express');
const router = express.Router();

const speakersRoute = require('./speakers');
const feesbackRoutes = require('./feedback');

module.exports = (params) => {
  router.get('/', (req, res) => {
    res.render('pages/index', { pageTitle: 'Welcome' });
  });

  router.use('/speakers', speakersRoute(params));
  router.use('/feedback', feesbackRoutes(params));

  return router;
};
