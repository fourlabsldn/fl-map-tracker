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
const goAround = curry((val, num) => ((num % (val * 2)) > (val - 1) ? (val - num % val) : (num % val)));

const createPoint = (pointInfo, trackInfo) => Object.assign(
  {},
  pointInfo,
  { location: { lat: trackInfo[0], lng: trackInfo[1] } }
);

// With every request we pass different coordinates
let reqNo = 0;
app.get('/routes', (req, res) => {
  reqNo++;
  const points = mapPoints.map((point, idx) => {
    const frameNo = goAround(tracks[0].length - 1, reqNo + idx);
    return createPoint(point, tracks[idx][frameNo]);
  });
  const response = { points };

  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.json(response);
});

http.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
