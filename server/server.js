const express = require('express');
const path = require('path');
const morgan = require('morgan');
const { getFileNameFromUrl } = require('./utils');

const port = process.env.PORT || 8080;
const app = express();

app.use(morgan('dev'));

// Serve main SPA single page
app.get('/', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/../index.html`))
});

// Serve secondary pages, both js and htmls views
app.get('/*', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/..${req.url}`));
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
