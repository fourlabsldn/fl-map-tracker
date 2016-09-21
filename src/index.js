import { get, curry } from 'lodash/fp';
import assert from 'fl-assert'
/*
Point = {
  id: 213,
  location: { lat: 123, lng: 123}
  name: 'asdfasd',
  icon: 'asdfasdf.jpg',
  marker: null,
}

*/
const withoutIndex = curry((idx, arr) => arr.slice(0, idx).concat(arr.slice(idx + 1, idx.length)));

/**
 * @public
 * @function comparePoints
 * @param {Array<Point>} - oldPoints
 * @param {Array<Point>} - newPoints
 */
const comparePoints = curry((oldPoints, newPoints) => {
  // Elements in oldPoints but not in newPoints
  const pointsToDelete = oldPoints.filter(p => !newPoints.map(get('id')).includes(p.id));

  // Elements in newPoints but not in oldPoints
  const pointsToCreate = newPoints.filter(p => !oldPoints.map(get('id')).includes(p.id));

  // Elements of newPoints in oldPoints.
  const pointsToMove = newPoints
    .filter(p => !!oldPoints.map(get('id')).includes(p.id))
    .map(p => {
      const oldPoint = oldPoints.find(oldP => oldP.id === p.id);
      return Object.assign({}, oldPoint, p);
    });

  return {
    pointsToMove,
    pointsToCreate,
    pointsToDelete,
  };
});

/**
 * @public
 * @function addMarker
 * @param {MapDriver} - mapDriver
 * @param {Point} - point
 * @return {Point} - a new point with a marker
 */
const addMarker = curry((mapDriver, point) => {
  const marker = mapDriver.createMarker({
    lat: point.location.lat,
    lng: point.location.lng,
    icon: point.icon,
    optimized: false,        // Info window receives a function to be called
    // when marker is clicked. Should return an HTMLElement.
    infoWindow: '<h1>Oh yeah!</h1>',
  });

  return Object.assign({ marker }, point);
});

const withoutPoint = curry((mapDriver, allPoints, point) => {
  if (point.marker) {
    mapDriver.destroyMarker(point.marker);
  }

  const idx = allPoints.indexOf(point);
  assert(idx !== -1, 'Point is not part of array.');
  const newAllPoints = withoutIndex(idx, allPoints);
  return newAllPoints;
});

export default {
  withoutIndex,
  comparePoints,
  addMarker,
  withoutPoint,
};
