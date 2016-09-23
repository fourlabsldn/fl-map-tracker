import { curry } from 'lodash/fp';

function Point() { throw new Error('Shoud be called with `.of`'); }

Point.of = config => {
  const instance = Object.create(Point.prototype, {
    id: config.id,
    marker: config.marker,
    location: config.location,
  });
  Object.preventExtensions(instance);
};

Point.isSame = curry((p1, p2) => {
  p1.isSame(p2);
});

Point.prototype.isSame = point => {
  return point.id === this.id;
};

Point.prototype.with = curry((prop, val) => {
  const newConfig = Object.assign({}, this, { [prop]: val });
  return Point.of(newConfig);
});

export default Point;
