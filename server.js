const express = require('express');
const path = require('path');
const routes = require('./routes');

const cookieSession = require('cookie-session');

const app = express();
const port = 3000;

const FeedbackService = require('./services/FeedbackService');
const SpeaherService = require('./services/SpeakerService');
const feedbackService = new FeedbackService('./data/feedback.json');
const speakerService = new SpeaherService('./data/speakers.json');

app.set('trust proxy', 1);
app.use(
  cookieSession({
    name: 'session',
    keys: ['aaefijcereor34', 'hhvbdjfi834'],
  })
);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.locals.siteName = 'Roux Meetups';

// To server static files
app.use(express.static(path.join(__dirname, './static')));

app.use(async (req, res, next) => {
  try {
    const names = await speakerService.getNames();
    res.locals.speakerNames = names;
    return next();
  } catch (error) {
    return next(error);
  }
});

app.use(
  '/',
  routes({
    feedbackService,
    speakerService,
  })
); //Dedicated Routes

app.listen(port, () => {
  console.log(`Express Server Listning on port ${port}`);
});
