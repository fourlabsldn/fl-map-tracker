import {
  removeMissingPoints,
  moveChangedPoints,
  addNewPointsToMap,
} from './controlFunctions';
import MapDriver from 'fl-google-maps-driver';
import { map, get } from 'lodash/fp';
import Point from './Point';

/**
 * Gets a new set of points from a server endpoint
 * @method loadPointsFromServer
 * @param {String} url - Server endpoint
 * @return {Promise<Array>} Array of points
 */
function loadPointsFromServer(url) {
  return fetch(url, { mode: 'cors' })
    .then(r => r.json())
    .then(get('points'));
}

// All of pointOptions values must be function that will take
// the point info as parameter.
export default function MapTracker({
    google,
    mapSelector,
    pointsUrl,
    mapOptions,
    pointOptions = {}, // { click, hover, infoWindow };
  }) {
  let points = [];
  const mapDriver = new MapDriver(google, mapSelector, mapOptions);

  function loadPoints() {
    loadPointsFromServer(pointsUrl)
    .then(map(Point.of))
    .then(moveChangedPoints(mapDriver, points))
    .then(addNewPointsToMap(mapDriver, pointOptions, points))
    .then(removeMissingPoints(mapDriver, points))
    .then(newPoints => (points = newPoints));
  }

  function fitPoints() {
    mapDriver.focusMarkers(mapDriver.getMarkers());
  }

  return { loadPoints, fitPoints };
}
