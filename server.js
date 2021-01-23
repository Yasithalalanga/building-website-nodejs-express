const express = require('express');
const path = require('path');
const routes = require('./routes');

const app = express();
const port = 3000;

const FeedbackService = require('./services/FeedbackService');
const SpeaherService = require('./services/SpeakerService');

const feedbackService = new FeedbackService('./data/feedback.json');
const speakerService = new SpeaherService('./data/speakers.json');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

// To server static files
app.use(express.static(path.join(__dirname, './static')));
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
