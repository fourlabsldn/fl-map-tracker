const express = require('express');
const app = express();
const http = require('http').Server(app); // eslint-disable-line new-cap
const { curry } = require('lodash/fp');

const { mapPoints, tracks } = require('./tracks');

const PORT = 8080;
const goAround = curry((val, num) => ((num % val * 2) > (num - 1) ? (val - num % val) : (num % val)))

// Serve static files from root
app.use(express.static('static'));

let reqNo = 0;
app.get('/routes', (req, res) => {
  const frameNo = goAround(tracks[0].length, reqNo++);
  const response = {
    points: [
      {
        info: mapPoints[0],
        location: tracks[0][frameNo],
      },
    ],
  };

  res.json(response);
});

http.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
