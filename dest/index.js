(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('lodash/fp')) :
  typeof define === 'function' && define.amd ? define(['lodash/fp'], factory) :
  (global.flMaps = factory(global.lodash_fp));
}(this, (function (lodash_fp) { 'use strict';

// Bug checking function that will throw an error whenever
// the condition sent to it is evaluated to false
/**
 * Processes the message and outputs the correct message if the condition
 * is false. Otherwise it outputs null.
 * @api private
 * @method processCondition
 * @param  {Boolean} condition - Result of the evaluated condition
 * @param  {String} errorMessage - Message explainig the error in case it is thrown
 * @return {String | null}  - Error message if there is an error, nul otherwise.
 */
function processCondition(condition, errorMessage) {
  if (!condition) {
    var completeErrorMessage = '';
    var re = /at ([^\s]+)\s\(/g;
    var stackTrace = new Error().stack;
    var stackFunctions = [];

    var funcName = re.exec(stackTrace);
    while (funcName && funcName[1]) {
      stackFunctions.push(funcName[1]);
      funcName = re.exec(stackTrace);
    }

    // Number 0 is processCondition itself,
    // Number 1 is assert,
    // Number 2 is the caller function.
    if (stackFunctions[2]) {
      completeErrorMessage = stackFunctions[2] + ': ' + completeErrorMessage;
    }

    completeErrorMessage += errorMessage;
    return completeErrorMessage;
  }

  return null;
}

/**
 * Throws an error if the boolean passed to it evaluates to false.
 * To be used like this:
 * 		assert(myDate !== undefined, "Date cannot be undefined.");
 * @api public
 * @method assert
 * @param  {Boolean} condition - Result of the evaluated condition
 * @param  {String} errorMessage - Message explainig the error in case it is thrown
 * @return void
 */
function assert(condition, errorMessage) {
  var error = processCondition(condition, errorMessage);
  if (typeof error === 'string') {
    throw new Error(error);
  }
}

/**
 * Logs a warning if the boolean passed to it evaluates to false.
 * To be used like this:
 * 		assert.warn(myDate !== undefined, "No date provided.");
 * @api public
 * @method warn
 * @param  {Boolean} condition - Result of the evaluated condition
 * @param  {String} errorMessage - Message explainig the error in case it is thrown
 * @return void
 */
assert.warn = function warn(condition, errorMessage) {
  var error = processCondition(condition, errorMessage);
  if (typeof error === 'string') {
    console.warn(error);
  }
};

/*
Point = {
  id: 213,
  location: { lat: 123, lng: 123}
  name: 'asdfasd',
  icon: 'asdfasdf.jpg',
  marker: null,
}

*/
const withoutIndex = lodash_fp.curry((idx, arr) => arr.slice(0, idx).concat(arr.slice(idx + 1, idx.length)));

/**
 * @public
 * @function comparePoints
 * @param {Array<Point>} - oldPoints
 * @param {Array<Point>} - newPoints
 */
const comparePoints = lodash_fp.curry((oldPoints, newPoints) => {
  // Elements in oldPoints but not in newPoints
  const pointsToDelete = oldPoints.filter(p => !newPoints.map(lodash_fp.get('id')).includes(p.id));

  // Elements in newPoints but not in oldPoints
  const pointsToCreate = newPoints.filter(p => !oldPoints.map(lodash_fp.get('id')).includes(p.id));

  // Elements in both arrays.
  const pointsToMove = oldPoints.filter(p => newPoints.map(lodash_fp.get('id')).includes(p.id));

  return {
    pointsToMove,
    pointsToCreate,
    pointsToDelete
  };
});

/**
 * @public
 * @function addMarker
 * @param {MapDriver} - mapDriver
 * @param {Point} - point
 * @return {Point} - a new point with a marker
 */
const addMarker = lodash_fp.curry((mapDriver, point) => {
  const marker = mapDriver.createMarker({
    lat: point.location.lat,
    lng: point.location.lng,
    icon: point.icon,
    optimized: false, // Info window receives a function to be called
    // when marker is clicked. Should return an HTMLElement.
    infoWindow: '<h1>Oh yeah!</h1>'
  });

  return Object.assign({ marker }, point);
});

const withoutPoint = lodash_fp.curry((mapDriver, allPoints, point) => {
  if (point.marker) {
    mapDriver.destroyMarker(point.marker);
  }

  const idx = allPoints.indexOf(point);
  assert(idx !== -1, 'Point is not part of array.');
  const newAllPoints = withoutIndex(idx, allPoints);
  return newAllPoints;
});

var index = {
  withoutIndex,
  comparePoints,
  addMarker,
  withoutPoint
};

return index;

})));

//# sourceMappingURL=index.js.map
