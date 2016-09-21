const iconMaker = require('./iconMaker');


const mapPoints = [
  // { id: 1, name: 'John', icon: 'http://pixeljoint.com/files/icons/car__r1350137971.gif' },
  // { id: 4, name: 'Mark', icon: 'http://pixeljoint.com/files/icons/mini_car.gif' },
  { id: 2, name: 'Karl', icon: iconMaker('Karl') },
  { id: 3, name: 'Peter', icon: iconMaker('Peter') },
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
];

module.exports = {
  mapPoints,
  tracks,
};
