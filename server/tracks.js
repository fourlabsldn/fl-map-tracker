const personMarker = require('./personMarker');
const vanMarker = require('./vanMarker');


const mapPoints = [
  { id: 1, name: 'John', icon: personMarker('John') },
  // { id: 4, name: 'Mark', icon: 'http://pixeljoint.com/files/icons/mini_car.gif' },
  { id: 2, name: 'Karl', icon: vanMarker('Karl') },
  { id: 3, name: 'Peter', icon: vanMarker('Peter') },
];

const tracks = [
  [
    [51.474231, -0.200629],
    [51.475263, -0.200700],
    [51.476606, -0.201086],
    [51.477308, -0.201601],
    [51.480455, -0.205378],
  ],
  [
    [51.468924, -0.210695],
    [51.470067, -0.208227],
    [51.471597, -0.205609],
    [51.472318, -0.202247],
    [51.472318, -0.202247],
  ],
  [
    [51.472381, -0.203807],
    [51.474217, -0.206557],
    [51.475747, -0.208799],
    [51.477003, -0.209700],
    [51.479449, -0.211706],
  ],
];

module.exports = {
  mapPoints,
  tracks,
};
