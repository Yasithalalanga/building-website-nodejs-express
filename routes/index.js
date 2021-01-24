const express = require('express');
const router = express.Router();

const speakersRoute = require('./speakers');
const feesbackRoutes = require('./feedback');

module.exports = (params) => {
  const { speakerService } = params;

  router.get('/', async (req, res) => {
    const topSpeakers = await speakerService.getList();
    const speakerArtWorks = await speakerService.getAllArtwork();
    res.render('layouts', {
      pageTitle: 'Welcome',
      template: 'index',
      topSpeakers,
      speakerArtWorks,
    });
  });

  router.use('/speakers', speakersRoute(params));
  router.use('/feedback', feesbackRoutes(params));

  return router;
};
