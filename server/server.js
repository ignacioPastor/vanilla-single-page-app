const express = require('express');
const path = require('path');
const morgan = require('morgan');
const { getFileNameFromUrl } = require('./utils');

const port = process.env.PORT || 8080;
const app = express();

app.use(morgan('dev'));
// serve static assets normally
// app.use(express.static(`${__dirname}/../views`));

// Ignore views, they will be loaded by our SPA
app.get('/views/*', (req, res) => {
  res.send();
});

app.get('/js/*', (req, res) => {
  const myPath = `${__dirname}/../js/${getFileNameFromUrl(req.url)}`;
  res.sendFile(path.resolve(myPath));
});

app.get('/', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/../index.html`))
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
