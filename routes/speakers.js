const express = require('express');
const router = express.Router();

module.exports = (params) => {
  const { speakerService } = params;

  router.get('/', async (req, res) => {
    const speakers = await speakerService.getList();
    const speakerArtWorks = await speakerService.getAllArtwork();
    res.render('layouts', {
      pageTitle: 'Speakers',
      template: 'speakers',
      speakers,
      speakerArtWorks,
    });
  });

  router.get('/:shortname', async (req, res) => {
    const speaker = await speakerService.getSpeaker(req.params.shortname);
    const speakerArtWorks = await speakerService.getArtworkForSpeaker(req.params.shortname);
    res.render('layouts', {
      pageTitle: 'Speaker',
      template: 'speaker-detail',
      speaker,
      speakerArtWorks,
    });
  });

  return router;
};
