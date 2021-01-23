const express = require('express');
const router = express.Router();

module.exports = (params) => {
  const { speakerService } = params;

  router.get('/', async (req, res) => {
    const speakers = await speakerService.getList();
    return res.json(speakers);
  });

  router.get('/:shortname', (req, res) => {
    return res.send(`Detail Page of ${req.params.shortname}`);
  });

  return router;
};
