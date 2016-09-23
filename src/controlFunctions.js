import { curry, differenceWith } from 'lodash/fp';
import Point from './Point';

/**
 * @public
 * @function addMarker
 * @param {MapDriver} - mapDriver
 * @param {Point} - point
 * @return {Point} - a new point with a marker
 */
const addMarker = curry((mapDriver, point) => {
  console.log('Creating markers');

  const marker = mapDriver.createMarker({
    lat: point.location.lat,
    lng: point.location.lng,
    icon: point.icon,
    optimized: false,        // Info window receives a function to be called
    // when marker is clicked. Should return an HTMLElement.
    infoWindow: '<h1>Oh yeah!</h1>',
  });

  return point.with('marker', marker);
});

const removeMarker = curry((mapDriver, point) => {
  mapDriver.destroyMarker(point.marker);
  return point.with('marker', null);
});

/**
 *
 * @method removeMissingPoints
 * @param  {MapDriver} mapDriver
 * @param  {Array<Points>} oldPoints
 * @param  {Array<Points>} newPoints
 * @return {Array<Points>} Returns newPoints
 */
const removeMissingPoints = curry((mapDriver, oldPoints, newPoints) => {
  // points in oldPoints but not in newPoints
  differenceWith(Point.isSame, oldPoints, newPoints).map(removeMarker(mapDriver));
  return newPoints;
});

/**
 * @method addNewPointsToMap
 * @param  {MapDriver} mapDriver
 * @param  {Array<Point>} oldPoints
 * @param  {Array<Point>} newPoints
 * @return {Array<Point>} newPoints with added points containing markers
 */
const addNewPointsToMap = curry((mapDriver, oldPoints, newPoints) => {
  // points in newPoints but not in oldPoints
  const pointsToAdd = differenceWith(Point.isSame, newPoints, oldPoints);

  return newPoints.map(p => {
    const toBeAdded = !!pointsToAdd.find(Point.isSame(p));
    return toBeAdded ? addMarker(mapDriver, p) : p;
  });
});

/**
 * @method moveChangedPoints
 * @param  {MapDriver} mapDriver
 * @param  {Array<Point>} oldPoints
 * @param  {Array<Point>} newPoints
 * @return {Array<Point>} newPoints with references to moved markers
 */
const moveChangedPoints = curry((mapDriver, oldPoints, newPoints) => {
  const newPointsWithMarkers = newPoints.map(p => {
    const oldEquivalent = oldPoints.find(Point.isSame(p));
    return oldEquivalent ? p.with('marker', oldEquivalent.marker) : p;
  });

  newPointsWithMarkers.forEach(p => (p.marker ? mapDriver.moveMarker(p.marker, p.location) : null));
  return newPointsWithMarkers;
});

export {
  removeMissingPoints,
  moveChangedPoints,
  addNewPointsToMap,
};
