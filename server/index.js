const express = require('express');
const app = express();
const http = require('http').Server(app); // eslint-disable-line new-cap
const { curry } = require('lodash/fp');

const { mapPoints, tracks } = require('./tracks');

const PORT = 8080;

/**
 * Goes around a number as such: 0,1,2,3,2,1,0,1....
 * @param {int} val - Value to go around
 * @param {int} num - Number to wrap around value
 */
const goAround = curry((val, num) => ((num % (val * 2)) > (val - 1) ? (val - num % val) : (num % val)))

// Serve static files from root
app.use(express.static('static'));

// With every request we pass different coordinates
let reqNo = 0;
app.get('/routes', (req, res) => {
  const frameNo = goAround(tracks[0].length, reqNo++);
  const response = { points: [
    { info: mapPoints[0], location: tracks[0][frameNo] }
  ] };

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.json(response);
});

http.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
