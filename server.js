const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

// To server static files
app.use(express.static(path.join(__dirname, './static')));

app.get('/', (req, res) => {
  res.render('pages/index', { pageTitle: 'Welcome' });
});

app.get('/speakers', (req, res) => {
  res.sendFile(path.join(__dirname, './static/speakers.html'));
});

app.listen(port, () => {
  console.log(`Express Server Listning on port ${port}`);
});
