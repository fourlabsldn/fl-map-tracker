import { curry } from 'lodash/fp';

function Point() { throw new Error('Shoud be called with `.of`'); }

Point.of = config => {
  const instance = Object.create(Point.prototype);
  Object.assign(instance, {
    id: config.id,
    marker: config.marker,
    location: config.location,
    icon: config.icon,
  });
  Object.preventExtensions(instance);

  return instance;
};

Point.isSame = curry(function (p1, p2) { // eslint-disable-line prefer-arrow-callback
  return p1.isSame(p2);
});

Point.prototype.isSame = function (point) { // eslint-disable-line prefer-arrow-callback
  return point.id === this.id;
};

Point.prototype.with = curry(function (prop, val) { // eslint-disable-line prefer-arrow-callback
  const newConfig = Object.assign({}, this, { [prop]: val });
  return Point.of(newConfig);
});

export default Point;
