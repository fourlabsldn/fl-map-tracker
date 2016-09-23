(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.MapTracker = factory());
}(this, (function () { 'use strict';

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _mapping = createCommonjsModule(function (module, exports) {
/** Used to map aliases to their real names. */
exports.aliasToReal = {

  // Lodash aliases.
  'each': 'forEach',
  'eachRight': 'forEachRight',
  'entries': 'toPairs',
  'entriesIn': 'toPairsIn',
  'extend': 'assignIn',
  'extendAll': 'assignInAll',
  'extendAllWith': 'assignInAllWith',
  'extendWith': 'assignInWith',
  'first': 'head',

  // Methods that are curried variants of others.
  'conforms': 'conformsTo',
  'matches': 'isMatch',
  'property': 'get',

  // Ramda aliases.
  '__': 'placeholder',
  'F': 'stubFalse',
  'T': 'stubTrue',
  'all': 'every',
  'allPass': 'overEvery',
  'always': 'constant',
  'any': 'some',
  'anyPass': 'overSome',
  'apply': 'spread',
  'assoc': 'set',
  'assocPath': 'set',
  'complement': 'negate',
  'compose': 'flowRight',
  'contains': 'includes',
  'dissoc': 'unset',
  'dissocPath': 'unset',
  'dropLast': 'dropRight',
  'dropLastWhile': 'dropRightWhile',
  'equals': 'isEqual',
  'identical': 'eq',
  'indexBy': 'keyBy',
  'init': 'initial',
  'invertObj': 'invert',
  'juxt': 'over',
  'omitAll': 'omit',
  'nAry': 'ary',
  'path': 'get',
  'pathEq': 'matchesProperty',
  'pathOr': 'getOr',
  'paths': 'at',
  'pickAll': 'pick',
  'pipe': 'flow',
  'pluck': 'map',
  'prop': 'get',
  'propEq': 'matchesProperty',
  'propOr': 'getOr',
  'props': 'at',
  'symmetricDifference': 'xor',
  'symmetricDifferenceBy': 'xorBy',
  'symmetricDifferenceWith': 'xorWith',
  'takeLast': 'takeRight',
  'takeLastWhile': 'takeRightWhile',
  'unapply': 'rest',
  'unnest': 'flatten',
  'useWith': 'overArgs',
  'where': 'conformsTo',
  'whereEq': 'isMatch',
  'zipObj': 'zipObject'
};

/** Used to map ary to method names. */
exports.aryMethod = {
  '1': [
    'assignAll', 'assignInAll', 'attempt', 'castArray', 'ceil', 'create',
    'curry', 'curryRight', 'defaultsAll', 'defaultsDeepAll', 'floor', 'flow',
    'flowRight', 'fromPairs', 'invert', 'iteratee', 'memoize', 'method', 'mergeAll',
    'methodOf', 'mixin', 'nthArg', 'over', 'overEvery', 'overSome','rest', 'reverse',
    'round', 'runInContext', 'spread', 'template', 'trim', 'trimEnd', 'trimStart',
    'uniqueId', 'words', 'zipAll'
  ],
  '2': [
    'add', 'after', 'ary', 'assign', 'assignAllWith', 'assignIn', 'assignInAllWith',
    'at', 'before', 'bind', 'bindAll', 'bindKey', 'chunk', 'cloneDeepWith',
    'cloneWith', 'concat', 'conformsTo', 'countBy', 'curryN', 'curryRightN',
    'debounce', 'defaults', 'defaultsDeep', 'defaultTo', 'delay', 'difference',
    'divide', 'drop', 'dropRight', 'dropRightWhile', 'dropWhile', 'endsWith', 'eq',
    'every', 'filter', 'find', 'findIndex', 'findKey', 'findLast', 'findLastIndex',
    'findLastKey', 'flatMap', 'flatMapDeep', 'flattenDepth', 'forEach',
    'forEachRight', 'forIn', 'forInRight', 'forOwn', 'forOwnRight', 'get',
    'groupBy', 'gt', 'gte', 'has', 'hasIn', 'includes', 'indexOf', 'intersection',
    'invertBy', 'invoke', 'invokeMap', 'isEqual', 'isMatch', 'join', 'keyBy',
    'lastIndexOf', 'lt', 'lte', 'map', 'mapKeys', 'mapValues', 'matchesProperty',
    'maxBy', 'meanBy', 'merge', 'mergeAllWith', 'minBy', 'multiply', 'nth', 'omit',
    'omitBy', 'overArgs', 'pad', 'padEnd', 'padStart', 'parseInt', 'partial',
    'partialRight', 'partition', 'pick', 'pickBy', 'propertyOf', 'pull', 'pullAll',
    'pullAt', 'random', 'range', 'rangeRight', 'rearg', 'reject', 'remove',
    'repeat', 'restFrom', 'result', 'sampleSize', 'some', 'sortBy', 'sortedIndex',
    'sortedIndexOf', 'sortedLastIndex', 'sortedLastIndexOf', 'sortedUniqBy',
    'split', 'spreadFrom', 'startsWith', 'subtract', 'sumBy', 'take', 'takeRight',
    'takeRightWhile', 'takeWhile', 'tap', 'throttle', 'thru', 'times', 'trimChars',
    'trimCharsEnd', 'trimCharsStart', 'truncate', 'union', 'uniqBy', 'uniqWith',
    'unset', 'unzipWith', 'without', 'wrap', 'xor', 'zip', 'zipObject',
    'zipObjectDeep'
  ],
  '3': [
    'assignInWith', 'assignWith', 'clamp', 'differenceBy', 'differenceWith',
    'findFrom', 'findIndexFrom', 'findLastFrom', 'findLastIndexFrom', 'getOr',
    'includesFrom', 'indexOfFrom', 'inRange', 'intersectionBy', 'intersectionWith',
    'invokeArgs', 'invokeArgsMap', 'isEqualWith', 'isMatchWith', 'flatMapDepth',
    'lastIndexOfFrom', 'mergeWith', 'orderBy', 'padChars', 'padCharsEnd',
    'padCharsStart', 'pullAllBy', 'pullAllWith', 'rangeStep', 'rangeStepRight',
    'reduce', 'reduceRight', 'replace', 'set', 'slice', 'sortedIndexBy',
    'sortedLastIndexBy', 'transform', 'unionBy', 'unionWith', 'update', 'xorBy',
    'xorWith', 'zipWith'
  ],
  '4': [
    'fill', 'setWith', 'updateWith'
  ]
};

/** Used to map ary to rearg configs. */
exports.aryRearg = {
  '2': [1, 0],
  '3': [2, 0, 1],
  '4': [3, 2, 0, 1]
};

/** Used to map method names to their iteratee ary. */
exports.iterateeAry = {
  'dropRightWhile': 1,
  'dropWhile': 1,
  'every': 1,
  'filter': 1,
  'find': 1,
  'findFrom': 1,
  'findIndex': 1,
  'findIndexFrom': 1,
  'findKey': 1,
  'findLast': 1,
  'findLastFrom': 1,
  'findLastIndex': 1,
  'findLastIndexFrom': 1,
  'findLastKey': 1,
  'flatMap': 1,
  'flatMapDeep': 1,
  'flatMapDepth': 1,
  'forEach': 1,
  'forEachRight': 1,
  'forIn': 1,
  'forInRight': 1,
  'forOwn': 1,
  'forOwnRight': 1,
  'map': 1,
  'mapKeys': 1,
  'mapValues': 1,
  'partition': 1,
  'reduce': 2,
  'reduceRight': 2,
  'reject': 1,
  'remove': 1,
  'some': 1,
  'takeRightWhile': 1,
  'takeWhile': 1,
  'times': 1,
  'transform': 2
};

/** Used to map method names to iteratee rearg configs. */
exports.iterateeRearg = {
  'mapKeys': [1]
};

/** Used to map method names to rearg configs. */
exports.methodRearg = {
  'assignInAllWith': [1, 2, 0],
  'assignInWith': [1, 2, 0],
  'assignAllWith': [1, 2, 0],
  'assignWith': [1, 2, 0],
  'differenceBy': [1, 2, 0],
  'differenceWith': [1, 2, 0],
  'getOr': [2, 1, 0],
  'intersectionBy': [1, 2, 0],
  'intersectionWith': [1, 2, 0],
  'isEqualWith': [1, 2, 0],
  'isMatchWith': [2, 1, 0],
  'mergeAllWith': [1, 2, 0],
  'mergeWith': [1, 2, 0],
  'padChars': [2, 1, 0],
  'padCharsEnd': [2, 1, 0],
  'padCharsStart': [2, 1, 0],
  'pullAllBy': [2, 1, 0],
  'pullAllWith': [2, 1, 0],
  'rangeStep': [1, 2, 0],
  'rangeStepRight': [1, 2, 0],
  'setWith': [3, 1, 2, 0],
  'sortedIndexBy': [2, 1, 0],
  'sortedLastIndexBy': [2, 1, 0],
  'unionBy': [1, 2, 0],
  'unionWith': [1, 2, 0],
  'updateWith': [3, 1, 2, 0],
  'xorBy': [1, 2, 0],
  'xorWith': [1, 2, 0],
  'zipWith': [1, 2, 0]
};

/** Used to map method names to spread configs. */
exports.methodSpread = {
  'assignAll': { 'start': 0 },
  'assignAllWith': { 'afterRearg': true, 'start': 1 },
  'assignInAll': { 'start': 0 },
  'assignInAllWith': { 'afterRearg': true, 'start': 1 },
  'defaultsAll': { 'start': 0 },
  'defaultsDeepAll': { 'start': 0 },
  'invokeArgs': { 'start': 2 },
  'invokeArgsMap': { 'start': 2 },
  'mergeAll': { 'start': 0 },
  'mergeAllWith': { 'afterRearg': true, 'start': 1 },
  'partial': { 'start': 1 },
  'partialRight': { 'start': 1 },
  'without': { 'start': 1 },
  'zipAll': { 'start': 0 }
};

/** Used to identify methods which mutate arrays or objects. */
exports.mutate = {
  'array': {
    'fill': true,
    'pull': true,
    'pullAll': true,
    'pullAllBy': true,
    'pullAllWith': true,
    'pullAt': true,
    'remove': true,
    'reverse': true
  },
  'object': {
    'assign': true,
    'assignAll': true,
    'assignAllWith': true,
    'assignIn': true,
    'assignInAll': true,
    'assignInAllWith': true,
    'assignInWith': true,
    'assignWith': true,
    'defaults': true,
    'defaultsAll': true,
    'defaultsDeep': true,
    'defaultsDeepAll': true,
    'merge': true,
    'mergeAll': true,
    'mergeAllWith': true,
    'mergeWith': true,
  },
  'set': {
    'set': true,
    'setWith': true,
    'unset': true,
    'update': true,
    'updateWith': true
  }
};

/** Used to track methods with placeholder support */
exports.placeholder = {
  'bind': true,
  'bindKey': true,
  'curry': true,
  'curryRight': true,
  'partial': true,
  'partialRight': true
};

/** Used to map real names to their aliases. */
exports.realToAlias = (function() {
  var hasOwnProperty = Object.prototype.hasOwnProperty,
      object = exports.aliasToReal,
      result = {};

  for (var key in object) {
    var value = object[key];
    if (hasOwnProperty.call(result, value)) {
      result[value].push(key);
    } else {
      result[value] = [key];
    }
  }
  return result;
}());

/** Used to map method names to other names. */
exports.remap = {
  'assignAll': 'assign',
  'assignAllWith': 'assignWith',
  'assignInAll': 'assignIn',
  'assignInAllWith': 'assignInWith',
  'curryN': 'curry',
  'curryRightN': 'curryRight',
  'defaultsAll': 'defaults',
  'defaultsDeepAll': 'defaultsDeep',
  'findFrom': 'find',
  'findIndexFrom': 'findIndex',
  'findLastFrom': 'findLast',
  'findLastIndexFrom': 'findLastIndex',
  'getOr': 'get',
  'includesFrom': 'includes',
  'indexOfFrom': 'indexOf',
  'invokeArgs': 'invoke',
  'invokeArgsMap': 'invokeMap',
  'lastIndexOfFrom': 'lastIndexOf',
  'mergeAll': 'merge',
  'mergeAllWith': 'mergeWith',
  'padChars': 'pad',
  'padCharsEnd': 'padEnd',
  'padCharsStart': 'padStart',
  'propertyOf': 'get',
  'rangeStep': 'range',
  'rangeStepRight': 'rangeRight',
  'restFrom': 'rest',
  'spreadFrom': 'spread',
  'trimChars': 'trim',
  'trimCharsEnd': 'trimEnd',
  'trimCharsStart': 'trimStart',
  'zipAll': 'zip'
};

/** Used to track methods that skip fixing their arity. */
exports.skipFixed = {
  'castArray': true,
  'flow': true,
  'flowRight': true,
  'iteratee': true,
  'mixin': true,
  'rearg': true,
  'runInContext': true
};

/** Used to track methods that skip rearranging arguments. */
exports.skipRearg = {
  'add': true,
  'assign': true,
  'assignIn': true,
  'bind': true,
  'bindKey': true,
  'concat': true,
  'difference': true,
  'divide': true,
  'eq': true,
  'gt': true,
  'gte': true,
  'isEqual': true,
  'lt': true,
  'lte': true,
  'matchesProperty': true,
  'merge': true,
  'multiply': true,
  'overArgs': true,
  'partial': true,
  'partialRight': true,
  'propertyOf': true,
  'random': true,
  'range': true,
  'rangeRight': true,
  'subtract': true,
  'zip': true,
  'zipObject': true,
  'zipObjectDeep': true
};
});

/**
 * The default argument placeholder value for methods.
 *
 * @type {Object}
 */
var placeholder$1 = {};

var mapping = _mapping;
var mutateMap = mapping.mutate;
var fallbackHolder = placeholder$1;

/**
 * Creates a function, with an arity of `n`, that invokes `func` with the
 * arguments it receives.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} n The arity of the new function.
 * @returns {Function} Returns the new function.
 */
function baseArity(func, n) {
  return n == 2
    ? function(a, b) { return func.apply(undefined, arguments); }
    : function(a) { return func.apply(undefined, arguments); };
}

/**
 * Creates a function that invokes `func`, with up to `n` arguments, ignoring
 * any additional arguments.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @param {number} n The arity cap.
 * @returns {Function} Returns the new function.
 */
function baseAry(func, n) {
  return n == 2
    ? function(a, b) { return func(a, b); }
    : function(a) { return func(a); };
}

/**
 * Creates a clone of `array`.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the cloned array.
 */
function cloneArray(array) {
  var length = array ? array.length : 0,
      result = Array(length);

  while (length--) {
    result[length] = array[length];
  }
  return result;
}

/**
 * Creates a function that clones a given object using the assignment `func`.
 *
 * @private
 * @param {Function} func The assignment function.
 * @returns {Function} Returns the new cloner function.
 */
function createCloner(func) {
  return function(object) {
    return func({}, object);
  };
}

/**
 * Creates a function that wraps `func` and uses `cloner` to clone the first
 * argument it receives.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} cloner The function to clone arguments.
 * @returns {Function} Returns the new immutable function.
 */
function wrapImmutable(func, cloner) {
  return function() {
    var length = arguments.length;
    if (!length) {
      return;
    }
    var args = Array(length);
    while (length--) {
      args[length] = arguments[length];
    }
    var result = args[0] = cloner.apply(undefined, args);
    func.apply(undefined, args);
    return result;
  };
}

/**
 * The base implementation of `convert` which accepts a `util` object of methods
 * required to perform conversions.
 *
 * @param {Object} util The util object.
 * @param {string} name The name of the function to convert.
 * @param {Function} func The function to convert.
 * @param {Object} [options] The options object.
 * @param {boolean} [options.cap=true] Specify capping iteratee arguments.
 * @param {boolean} [options.curry=true] Specify currying.
 * @param {boolean} [options.fixed=true] Specify fixed arity.
 * @param {boolean} [options.immutable=true] Specify immutable operations.
 * @param {boolean} [options.rearg=true] Specify rearranging arguments.
 * @returns {Function|Object} Returns the converted function or object.
 */
function baseConvert$1(util, name, func, options) {
  var setPlaceholder,
      isLib = typeof name == 'function',
      isObj = name === Object(name);

  if (isObj) {
    options = func;
    func = name;
    name = undefined;
  }
  if (func == null) {
    throw new TypeError;
  }
  options || (options = {});

  var config = {
    'cap': 'cap' in options ? options.cap : true,
    'curry': 'curry' in options ? options.curry : true,
    'fixed': 'fixed' in options ? options.fixed : true,
    'immutable': 'immutable' in options ? options.immutable : true,
    'rearg': 'rearg' in options ? options.rearg : true
  };

  var forceCurry = ('curry' in options) && options.curry,
      forceFixed = ('fixed' in options) && options.fixed,
      forceRearg = ('rearg' in options) && options.rearg,
      placeholder = isLib ? func : fallbackHolder,
      pristine = isLib ? func.runInContext() : undefined;

  var helpers = isLib ? func : {
    'ary': util.ary,
    'assign': util.assign,
    'clone': util.clone,
    'curry': util.curry,
    'forEach': util.forEach,
    'isArray': util.isArray,
    'isFunction': util.isFunction,
    'iteratee': util.iteratee,
    'keys': util.keys,
    'rearg': util.rearg,
    'spread': util.spread,
    'toInteger': util.toInteger,
    'toPath': util.toPath
  };

  var ary = helpers.ary,
      assign = helpers.assign,
      clone = helpers.clone,
      curry = helpers.curry,
      each = helpers.forEach,
      isArray = helpers.isArray,
      isFunction = helpers.isFunction,
      keys = helpers.keys,
      rearg = helpers.rearg,
      spread = helpers.spread,
      toInteger = helpers.toInteger,
      toPath = helpers.toPath;

  var aryMethodKeys = keys(mapping.aryMethod);

  var wrappers = {
    'castArray': function(castArray) {
      return function() {
        var value = arguments[0];
        return isArray(value)
          ? castArray(cloneArray(value))
          : castArray.apply(undefined, arguments);
      };
    },
    'iteratee': function(iteratee) {
      return function() {
        var func = arguments[0],
            arity = arguments[1],
            result = iteratee(func, arity),
            length = result.length;

        if (config.cap && typeof arity == 'number') {
          arity = arity > 2 ? (arity - 2) : 1;
          return (length && length <= arity) ? result : baseAry(result, arity);
        }
        return result;
      };
    },
    'mixin': function(mixin) {
      return function(source) {
        var func = this;
        if (!isFunction(func)) {
          return mixin(func, Object(source));
        }
        var pairs = [];
        each(keys(source), function(key) {
          if (isFunction(source[key])) {
            pairs.push([key, func.prototype[key]]);
          }
        });

        mixin(func, Object(source));

        each(pairs, function(pair) {
          var value = pair[1];
          if (isFunction(value)) {
            func.prototype[pair[0]] = value;
          } else {
            delete func.prototype[pair[0]];
          }
        });
        return func;
      };
    },
    'nthArg': function(nthArg) {
      return function(n) {
        var arity = n < 0 ? 1 : (toInteger(n) + 1);
        return curry(nthArg(n), arity);
      };
    },
    'rearg': function(rearg) {
      return function(func, indexes) {
        var arity = indexes ? indexes.length : 0;
        return curry(rearg(func, indexes), arity);
      };
    },
    'runInContext': function(runInContext) {
      return function(context) {
        return baseConvert$1(util, runInContext(context), options);
      };
    }
  };

  /*--------------------------------------------------------------------------*/

  /**
   * Casts `func` to a function with an arity capped iteratee if needed.
   *
   * @private
   * @param {string} name The name of the function to inspect.
   * @param {Function} func The function to inspect.
   * @returns {Function} Returns the cast function.
   */
  function castCap(name, func) {
    if (config.cap) {
      var indexes = mapping.iterateeRearg[name];
      if (indexes) {
        return iterateeRearg(func, indexes);
      }
      var n = !isLib && mapping.iterateeAry[name];
      if (n) {
        return iterateeAry(func, n);
      }
    }
    return func;
  }

  /**
   * Casts `func` to a curried function if needed.
   *
   * @private
   * @param {string} name The name of the function to inspect.
   * @param {Function} func The function to inspect.
   * @param {number} n The arity of `func`.
   * @returns {Function} Returns the cast function.
   */
  function castCurry(name, func, n) {
    return (forceCurry || (config.curry && n > 1))
      ? curry(func, n)
      : func;
  }

  /**
   * Casts `func` to a fixed arity function if needed.
   *
   * @private
   * @param {string} name The name of the function to inspect.
   * @param {Function} func The function to inspect.
   * @param {number} n The arity cap.
   * @returns {Function} Returns the cast function.
   */
  function castFixed(name, func, n) {
    if (config.fixed && (forceFixed || !mapping.skipFixed[name])) {
      var data = mapping.methodSpread[name],
          start = data && data.start;

      return start  === undefined ? ary(func, n) : spread(func, start);
    }
    return func;
  }

  /**
   * Casts `func` to an rearged function if needed.
   *
   * @private
   * @param {string} name The name of the function to inspect.
   * @param {Function} func The function to inspect.
   * @param {number} n The arity of `func`.
   * @returns {Function} Returns the cast function.
   */
  function castRearg(name, func, n) {
    return (config.rearg && n > 1 && (forceRearg || !mapping.skipRearg[name]))
      ? rearg(func, mapping.methodRearg[name] || mapping.aryRearg[n])
      : func;
  }

  /**
   * Creates a clone of `object` by `path`.
   *
   * @private
   * @param {Object} object The object to clone.
   * @param {Array|string} path The path to clone by.
   * @returns {Object} Returns the cloned object.
   */
  function cloneByPath(object, path) {
    path = toPath(path);

    var index = -1,
        length = path.length,
        lastIndex = length - 1,
        result = clone(Object(object)),
        nested = result;

    while (nested != null && ++index < length) {
      var key = path[index],
          value = nested[key];

      if (value != null) {
        nested[path[index]] = clone(index == lastIndex ? value : Object(value));
      }
      nested = nested[key];
    }
    return result;
  }

  /**
   * Converts `lodash` to an immutable auto-curried iteratee-first data-last
   * version with conversion `options` applied.
   *
   * @param {Object} [options] The options object. See `baseConvert` for more details.
   * @returns {Function} Returns the converted `lodash`.
   */
  function convertLib(options) {
    return _.runInContext.convert(options)(undefined);
  }

  /**
   * Create a converter function for `func` of `name`.
   *
   * @param {string} name The name of the function to convert.
   * @param {Function} func The function to convert.
   * @returns {Function} Returns the new converter function.
   */
  function createConverter(name, func) {
    var oldOptions = options;
    return function(options) {
      var newUtil = isLib ? pristine : helpers,
          newFunc = isLib ? pristine[name] : func,
          newOptions = assign(assign({}, oldOptions), options);

      return baseConvert$1(newUtil, name, newFunc, newOptions);
    };
  }

  /**
   * Creates a function that wraps `func` to invoke its iteratee, with up to `n`
   * arguments, ignoring any additional arguments.
   *
   * @private
   * @param {Function} func The function to cap iteratee arguments for.
   * @param {number} n The arity cap.
   * @returns {Function} Returns the new function.
   */
  function iterateeAry(func, n) {
    return overArg(func, function(func) {
      return typeof func == 'function' ? baseAry(func, n) : func;
    });
  }

  /**
   * Creates a function that wraps `func` to invoke its iteratee with arguments
   * arranged according to the specified `indexes` where the argument value at
   * the first index is provided as the first argument, the argument value at
   * the second index is provided as the second argument, and so on.
   *
   * @private
   * @param {Function} func The function to rearrange iteratee arguments for.
   * @param {number[]} indexes The arranged argument indexes.
   * @returns {Function} Returns the new function.
   */
  function iterateeRearg(func, indexes) {
    return overArg(func, function(func) {
      var n = indexes.length;
      return baseArity(rearg(baseAry(func, n), indexes), n);
    });
  }

  /**
   * Creates a function that invokes `func` with its first argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */
  function overArg(func, transform) {
    return function() {
      var length = arguments.length;
      if (!length) {
        return func();
      }
      var args = Array(length);
      while (length--) {
        args[length] = arguments[length];
      }
      var index = config.rearg ? 0 : (length - 1);
      args[index] = transform(args[index]);
      return func.apply(undefined, args);
    };
  }

  /**
   * Creates a function that wraps `func` and applys the conversions
   * rules by `name`.
   *
   * @private
   * @param {string} name The name of the function to wrap.
   * @param {Function} func The function to wrap.
   * @returns {Function} Returns the converted function.
   */
  function wrap(name, func) {
    name = mapping.aliasToReal[name] || name;

    var result,
        wrapped = func,
        wrapper = wrappers[name];

    if (wrapper) {
      wrapped = wrapper(func);
    }
    else if (config.immutable) {
      if (mutateMap.array[name]) {
        wrapped = wrapImmutable(func, cloneArray);
      }
      else if (mutateMap.object[name]) {
        wrapped = wrapImmutable(func, createCloner(func));
      }
      else if (mutateMap.set[name]) {
        wrapped = wrapImmutable(func, cloneByPath);
      }
    }
    each(aryMethodKeys, function(aryKey) {
      each(mapping.aryMethod[aryKey], function(otherName) {
        if (name == otherName) {
          var spreadData = mapping.methodSpread[name],
              afterRearg = spreadData && spreadData.afterRearg;

          result = afterRearg
            ? castFixed(name, castRearg(name, wrapped, aryKey), aryKey)
            : castRearg(name, castFixed(name, wrapped, aryKey), aryKey);

          result = castCap(name, result);
          result = castCurry(name, result, aryKey);
          return false;
        }
      });
      return !result;
    });

    result || (result = wrapped);
    if (result == func) {
      result = forceCurry ? curry(result, 1) : function() {
        return func.apply(this, arguments);
      };
    }
    result.convert = createConverter(name, func);
    if (mapping.placeholder[name]) {
      setPlaceholder = true;
      result.placeholder = func.placeholder = placeholder;
    }
    return result;
  }

  /*--------------------------------------------------------------------------*/

  if (!isObj) {
    return wrap(name, func);
  }
  var _ = func;

  // Convert methods by ary cap.
  var pairs = [];
  each(aryMethodKeys, function(aryKey) {
    each(mapping.aryMethod[aryKey], function(key) {
      var func = _[mapping.remap[key] || key];
      if (func) {
        pairs.push([key, wrap(key, func)]);
      }
    });
  });

  // Convert remaining methods.
  each(keys(_), function(key) {
    var func = _[key];
    if (typeof func == 'function') {
      var length = pairs.length;
      while (length--) {
        if (pairs[length][0] == key) {
          return;
        }
      }
      func.convert = createConverter(key, func);
      pairs.push([key, func]);
    }
  });

  // Assign to `_` leaving `_.prototype` unchanged to allow chaining.
  each(pairs, function(pair) {
    _[pair[0]] = pair[1];
  });

  _.convert = convertLib;
  if (setPlaceholder) {
    _.placeholder = placeholder;
  }
  // Assign aliases.
  each(keys(_), function(key) {
    each(mapping.realToAlias[key] || [], function(alias) {
      _[alias] = _[key];
    });
  });

  return _;
}

var _baseConvert = baseConvert$1;

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity$1(value) {
  return value;
}

var identity_1 = identity$1;

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject$2(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject$2;

var isObject$1 = isObject_1;

/** `Object#toString` result references. */
var funcTag = '[object Function]';
var genTag = '[object GeneratorFunction]';

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto$1.toString;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction$1(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject$1(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

var isFunction_1 = isFunction$1;

/** Detect free variable `global` from Node.js. */
var freeGlobal$1 = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal$1;

var freeGlobal = _freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root$2 = freeGlobal || freeSelf || Function('return this')();

var _root = root$2;

var root$1 = _root;

/** Used to detect overreaching core-js shims. */
var coreJsData$1 = root$1['__core-js_shared__'];

var _coreJsData = coreJsData$1;

var coreJsData = _coreJsData;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked$1(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

var _isMasked = isMasked$1;

/** Used for built-in method references. */
var funcProto$1 = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource$1(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

var _toSource = toSource$1;

var isFunction = isFunction_1;
var isMasked = _isMasked;
var isObject = isObject_1;
var toSource = _toSource;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype;
var objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative$1(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

var _baseIsNative = baseIsNative$1;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue$1(object, key) {
  return object == null ? undefined : object[key];
}

var _getValue = getValue$1;

var baseIsNative = _baseIsNative;
var getValue = _getValue;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative$1(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

var _getNative = getNative$1;

var getNative = _getNative;
var root = _root;

/* Built-in method references that are verified to be native. */
var WeakMap$1 = getNative(root, 'WeakMap');

var _WeakMap = WeakMap$1;

var WeakMap = _WeakMap;

/** Used to store function metadata. */
var metaMap$1 = WeakMap && new WeakMap;

var _metaMap = metaMap$1;

var identity = identity_1;
var metaMap = _metaMap;

/**
 * The base implementation of `setData` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to associate metadata with.
 * @param {*} data The metadata.
 * @returns {Function} Returns `func`.
 */
var baseSetData$1 = !metaMap ? identity : function(func, data) {
  metaMap.set(func, data);
  return func;
};

var _baseSetData = baseSetData$1;

var isObject$4 = isObject_1;

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */
function baseCreate$1(proto) {
  return isObject$4(proto) ? objectCreate(proto) : {};
}

var _baseCreate = baseCreate$1;

var baseCreate = _baseCreate;
var isObject$3 = isObject_1;

/**
 * Creates a function that produces an instance of `Ctor` regardless of
 * whether it was invoked as part of a `new` expression or by `call` or `apply`.
 *
 * @private
 * @param {Function} Ctor The constructor to wrap.
 * @returns {Function} Returns the new wrapped function.
 */
function createCtor$1(Ctor) {
  return function() {
    // Use a `switch` statement to work with class constructors. See
    // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
    // for more details.
    var args = arguments;
    switch (args.length) {
      case 0: return new Ctor;
      case 1: return new Ctor(args[0]);
      case 2: return new Ctor(args[0], args[1]);
      case 3: return new Ctor(args[0], args[1], args[2]);
      case 4: return new Ctor(args[0], args[1], args[2], args[3]);
      case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
      case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
      case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
    }
    var thisBinding = baseCreate(Ctor.prototype),
        result = Ctor.apply(thisBinding, args);

    // Mimic the constructor's `return` behavior.
    // See https://es5.github.io/#x13.2.2 for more details.
    return isObject$3(result) ? result : thisBinding;
  };
}

var _createCtor = createCtor$1;

var createCtor = _createCtor;
var root$3 = _root;

/** Used to compose bitmasks for function metadata. */
var BIND_FLAG$1 = 1;

/**
 * Creates a function that wraps `func` to invoke it with the optional `this`
 * binding of `thisArg`.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createBind$1(func, bitmask, thisArg) {
  var isBind = bitmask & BIND_FLAG$1,
      Ctor = createCtor(func);

  function wrapper() {
    var fn = (this && this !== root$3 && this instanceof wrapper) ? Ctor : func;
    return fn.apply(isBind ? thisArg : this, arguments);
  }
  return wrapper;
}

var _createBind = createBind$1;

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply$1(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

var _apply = apply$1;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax$1 = Math.max;

/**
 * Creates an array that is the composition of partially applied arguments,
 * placeholders, and provided arguments into a single array of arguments.
 *
 * @private
 * @param {Array} args The provided arguments.
 * @param {Array} partials The arguments to prepend to those provided.
 * @param {Array} holders The `partials` placeholder indexes.
 * @params {boolean} [isCurried] Specify composing for a curried function.
 * @returns {Array} Returns the new array of composed arguments.
 */
function composeArgs$1(args, partials, holders, isCurried) {
  var argsIndex = -1,
      argsLength = args.length,
      holdersLength = holders.length,
      leftIndex = -1,
      leftLength = partials.length,
      rangeLength = nativeMax$1(argsLength - holdersLength, 0),
      result = Array(leftLength + rangeLength),
      isUncurried = !isCurried;

  while (++leftIndex < leftLength) {
    result[leftIndex] = partials[leftIndex];
  }
  while (++argsIndex < holdersLength) {
    if (isUncurried || argsIndex < argsLength) {
      result[holders[argsIndex]] = args[argsIndex];
    }
  }
  while (rangeLength--) {
    result[leftIndex++] = args[argsIndex++];
  }
  return result;
}

var _composeArgs = composeArgs$1;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax$2 = Math.max;

/**
 * This function is like `composeArgs` except that the arguments composition
 * is tailored for `_.partialRight`.
 *
 * @private
 * @param {Array} args The provided arguments.
 * @param {Array} partials The arguments to append to those provided.
 * @param {Array} holders The `partials` placeholder indexes.
 * @params {boolean} [isCurried] Specify composing for a curried function.
 * @returns {Array} Returns the new array of composed arguments.
 */
function composeArgsRight$1(args, partials, holders, isCurried) {
  var argsIndex = -1,
      argsLength = args.length,
      holdersIndex = -1,
      holdersLength = holders.length,
      rightIndex = -1,
      rightLength = partials.length,
      rangeLength = nativeMax$2(argsLength - holdersLength, 0),
      result = Array(rangeLength + rightLength),
      isUncurried = !isCurried;

  while (++argsIndex < rangeLength) {
    result[argsIndex] = args[argsIndex];
  }
  var offset = argsIndex;
  while (++rightIndex < rightLength) {
    result[offset + rightIndex] = partials[rightIndex];
  }
  while (++holdersIndex < holdersLength) {
    if (isUncurried || argsIndex < argsLength) {
      result[offset + holders[holdersIndex]] = args[argsIndex++];
    }
  }
  return result;
}

var _composeArgsRight = composeArgsRight$1;

/**
 * Gets the number of `placeholder` occurrences in `array`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} placeholder The placeholder to search for.
 * @returns {number} Returns the placeholder count.
 */
function countHolders$1(array, placeholder) {
  var length = array.length,
      result = 0;

  while (length--) {
    if (array[length] === placeholder) {
      ++result;
    }
  }
  return result;
}

var _countHolders = countHolders$1;

/**
 * The function whose prototype chain sequence wrappers inherit from.
 *
 * @private
 */
function baseLodash$1() {
  // No operation performed.
}

var _baseLodash = baseLodash$1;

var baseCreate$2 = _baseCreate;
var baseLodash = _baseLodash;

/** Used as references for the maximum length and index of an array. */
var MAX_ARRAY_LENGTH = 4294967295;

/**
 * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
 *
 * @private
 * @constructor
 * @param {*} value The value to wrap.
 */
function LazyWrapper$1(value) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__dir__ = 1;
  this.__filtered__ = false;
  this.__iteratees__ = [];
  this.__takeCount__ = MAX_ARRAY_LENGTH;
  this.__views__ = [];
}

// Ensure `LazyWrapper` is an instance of `baseLodash`.
LazyWrapper$1.prototype = baseCreate$2(baseLodash.prototype);
LazyWrapper$1.prototype.constructor = LazyWrapper$1;

var _LazyWrapper = LazyWrapper$1;

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop$1() {
  // No operation performed.
}

var noop_1 = noop$1;

var metaMap$2 = _metaMap;
var noop = noop_1;

/**
 * Gets metadata for `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {*} Returns the metadata for `func`.
 */
var getData$2 = !metaMap$2 ? noop : function(func) {
  return metaMap$2.get(func);
};

var _getData = getData$2;

/** Used to lookup unminified function names. */
var realNames$1 = {};

var _realNames = realNames$1;

var realNames = _realNames;

/** Used for built-in method references. */
var objectProto$2 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

/**
 * Gets the name of `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {string} Returns the function name.
 */
function getFuncName$1(func) {
  var result = (func.name + ''),
      array = realNames[result],
      length = hasOwnProperty$1.call(realNames, result) ? array.length : 0;

  while (length--) {
    var data = array[length],
        otherFunc = data.func;
    if (otherFunc == null || otherFunc == func) {
      return data.name;
    }
  }
  return result;
}

var _getFuncName = getFuncName$1;

var baseCreate$3 = _baseCreate;
var baseLodash$3 = _baseLodash;

/**
 * The base constructor for creating `lodash` wrapper objects.
 *
 * @private
 * @param {*} value The value to wrap.
 * @param {boolean} [chainAll] Enable explicit method chain sequences.
 */
function LodashWrapper$1(value, chainAll) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__chain__ = !!chainAll;
  this.__index__ = 0;
  this.__values__ = undefined;
}

LodashWrapper$1.prototype = baseCreate$3(baseLodash$3.prototype);
LodashWrapper$1.prototype.constructor = LodashWrapper$1;

var _LodashWrapper = LodashWrapper$1;

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray$1 = Array.isArray;

var isArray_1 = isArray$1;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike$1(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike$1;

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray$1(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

var _copyArray = copyArray$1;

var LazyWrapper$3 = _LazyWrapper;
var LodashWrapper$2 = _LodashWrapper;
var copyArray = _copyArray;

/**
 * Creates a clone of `wrapper`.
 *
 * @private
 * @param {Object} wrapper The wrapper to clone.
 * @returns {Object} Returns the cloned wrapper.
 */
function wrapperClone$1(wrapper) {
  if (wrapper instanceof LazyWrapper$3) {
    return wrapper.clone();
  }
  var result = new LodashWrapper$2(wrapper.__wrapped__, wrapper.__chain__);
  result.__actions__ = copyArray(wrapper.__actions__);
  result.__index__  = wrapper.__index__;
  result.__values__ = wrapper.__values__;
  return result;
}

var _wrapperClone = wrapperClone$1;

var LazyWrapper$2 = _LazyWrapper;
var LodashWrapper = _LodashWrapper;
var baseLodash$2 = _baseLodash;
var isArray = isArray_1;
var isObjectLike = isObjectLike_1;
var wrapperClone = _wrapperClone;

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

/**
 * Creates a `lodash` object which wraps `value` to enable implicit method
 * chain sequences. Methods that operate on and return arrays, collections,
 * and functions can be chained together. Methods that retrieve a single value
 * or may return a primitive value will automatically end the chain sequence
 * and return the unwrapped value. Otherwise, the value must be unwrapped
 * with `_#value`.
 *
 * Explicit chain sequences, which must be unwrapped with `_#value`, may be
 * enabled using `_.chain`.
 *
 * The execution of chained methods is lazy, that is, it's deferred until
 * `_#value` is implicitly or explicitly called.
 *
 * Lazy evaluation allows several methods to support shortcut fusion.
 * Shortcut fusion is an optimization to merge iteratee calls; this avoids
 * the creation of intermediate arrays and can greatly reduce the number of
 * iteratee executions. Sections of a chain sequence qualify for shortcut
 * fusion if the section is applied to an array of at least `200` elements
 * and any iteratees accept only one argument. The heuristic for whether a
 * section qualifies for shortcut fusion is subject to change.
 *
 * Chaining is supported in custom builds as long as the `_#value` method is
 * directly or indirectly included in the build.
 *
 * In addition to lodash methods, wrappers have `Array` and `String` methods.
 *
 * The wrapper `Array` methods are:
 * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
 *
 * The wrapper `String` methods are:
 * `replace` and `split`
 *
 * The wrapper methods that support shortcut fusion are:
 * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
 * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
 * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
 *
 * The chainable wrapper methods are:
 * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
 * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
 * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
 * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
 * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
 * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
 * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
 * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
 * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
 * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
 * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
 * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
 * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
 * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
 * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
 * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
 * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
 * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
 * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
 * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
 * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
 * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
 * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
 * `zipObject`, `zipObjectDeep`, and `zipWith`
 *
 * The wrapper methods that are **not** chainable by default are:
 * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
 * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
 * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
 * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
 * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
 * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
 * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
 * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
 * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
 * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
 * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
 * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
 * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
 * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
 * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
 * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
 * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
 * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
 * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
 * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
 * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
 * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
 * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
 * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
 * `upperFirst`, `value`, and `words`
 *
 * @name _
 * @constructor
 * @category Seq
 * @param {*} value The value to wrap in a `lodash` instance.
 * @returns {Object} Returns the new `lodash` wrapper instance.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * var wrapped = _([1, 2, 3]);
 *
 * // Returns an unwrapped value.
 * wrapped.reduce(_.add);
 * // => 6
 *
 * // Returns a wrapped value.
 * var squares = wrapped.map(square);
 *
 * _.isArray(squares);
 * // => false
 *
 * _.isArray(squares.value());
 * // => true
 */
function lodash$1(value) {
  if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper$2)) {
    if (value instanceof LodashWrapper) {
      return value;
    }
    if (hasOwnProperty$2.call(value, '__wrapped__')) {
      return wrapperClone(value);
    }
  }
  return new LodashWrapper(value);
}

// Ensure wrappers are instances of `baseLodash`.
lodash$1.prototype = baseLodash$2.prototype;
lodash$1.prototype.constructor = lodash$1;

var wrapperLodash = lodash$1;

var LazyWrapper = _LazyWrapper;
var getData$1 = _getData;
var getFuncName = _getFuncName;
var lodash = wrapperLodash;

/**
 * Checks if `func` has a lazy counterpart.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
 *  else `false`.
 */
function isLaziable$1(func) {
  var funcName = getFuncName(func),
      other = lodash[funcName];

  if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
    return false;
  }
  if (func === other) {
    return true;
  }
  var data = getData$1(other);
  return !!data && func === data[0];
}

var _isLaziable = isLaziable$1;

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 500;
var HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut$1(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

var _shortOut = shortOut$1;

var baseSetData$2 = _baseSetData;
var shortOut = _shortOut;

/**
 * Sets metadata for `func`.
 *
 * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
 * period of time, it will trip its breaker and transition to an identity
 * function to avoid garbage collection pauses in V8. See
 * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
 * for more details.
 *
 * @private
 * @param {Function} func The function to associate metadata with.
 * @param {*} data The metadata.
 * @returns {Function} Returns `func`.
 */
var setData$2 = shortOut(baseSetData$2);

var _setData = setData$2;

/** Used to match wrap detail comments. */
var reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/;
var reSplitDetails = /,? & /;

/**
 * Extracts wrapper details from the `source` body comment.
 *
 * @private
 * @param {string} source The source to inspect.
 * @returns {Array} Returns the wrapper details.
 */
function getWrapDetails$1(source) {
  var match = source.match(reWrapDetails);
  return match ? match[1].split(reSplitDetails) : [];
}

var _getWrapDetails = getWrapDetails$1;

/** Used to match wrap detail comments. */
var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;

/**
 * Inserts wrapper `details` in a comment at the top of the `source` body.
 *
 * @private
 * @param {string} source The source to modify.
 * @returns {Array} details The details to insert.
 * @returns {string} Returns the modified source.
 */
function insertWrapDetails$1(source, details) {
  var length = details.length;
  if (!length) {
    return source;
  }
  var lastIndex = length - 1;
  details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
  details = details.join(length > 2 ? ', ' : ' ');
  return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
}

var _insertWrapDetails = insertWrapDetails$1;

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant$1(value) {
  return function() {
    return value;
  };
}

var constant_1 = constant$1;

var getNative$2 = _getNative;

/* Built-in method references that are verified to be native. */
var nativeDefineProperty$1 = getNative$2(Object, 'defineProperty');

var _nativeDefineProperty = nativeDefineProperty$1;

var constant = constant_1;
var identity$2 = identity_1;
var nativeDefineProperty = _nativeDefineProperty;

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString$1 = !nativeDefineProperty ? identity$2 : function(func, string) {
  return nativeDefineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

var _baseSetToString = baseSetToString$1;

var baseSetToString = _baseSetToString;
var shortOut$2 = _shortOut;

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString$1 = shortOut$2(baseSetToString);

var _setToString = setToString$1;

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach$1(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

var _arrayEach = arrayEach$1;

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex$1(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

var _baseFindIndex = baseFindIndex$1;

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN$1(value) {
  return value !== value;
}

var _baseIsNaN = baseIsNaN$1;

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf$1(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

var _strictIndexOf = strictIndexOf$1;

var baseFindIndex = _baseFindIndex;
var baseIsNaN = _baseIsNaN;
var strictIndexOf = _strictIndexOf;

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf$1(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

var _baseIndexOf = baseIndexOf$1;

var baseIndexOf = _baseIndexOf;

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes$1(array, value) {
  var length = array ? array.length : 0;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

var _arrayIncludes = arrayIncludes$1;

var arrayEach = _arrayEach;
var arrayIncludes = _arrayIncludes;

/** Used to compose bitmasks for function metadata. */
var BIND_FLAG$4 = 1;
var BIND_KEY_FLAG$3 = 2;
var CURRY_FLAG$3 = 8;
var CURRY_RIGHT_FLAG$2 = 16;
var PARTIAL_FLAG$2 = 32;
var PARTIAL_RIGHT_FLAG$2 = 64;
var ARY_FLAG$2 = 128;
var REARG_FLAG = 256;
var FLIP_FLAG$1 = 512;

/** Used to associate wrap methods with their bit flags. */
var wrapFlags = [
  ['ary', ARY_FLAG$2],
  ['bind', BIND_FLAG$4],
  ['bindKey', BIND_KEY_FLAG$3],
  ['curry', CURRY_FLAG$3],
  ['curryRight', CURRY_RIGHT_FLAG$2],
  ['flip', FLIP_FLAG$1],
  ['partial', PARTIAL_FLAG$2],
  ['partialRight', PARTIAL_RIGHT_FLAG$2],
  ['rearg', REARG_FLAG]
];

/**
 * Updates wrapper `details` based on `bitmask` flags.
 *
 * @private
 * @returns {Array} details The details to modify.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @returns {Array} Returns `details`.
 */
function updateWrapDetails$1(details, bitmask) {
  arrayEach(wrapFlags, function(pair) {
    var value = '_.' + pair[0];
    if ((bitmask & pair[1]) && !arrayIncludes(details, value)) {
      details.push(value);
    }
  });
  return details.sort();
}

var _updateWrapDetails = updateWrapDetails$1;

var getWrapDetails = _getWrapDetails;
var insertWrapDetails = _insertWrapDetails;
var setToString = _setToString;
var updateWrapDetails = _updateWrapDetails;

/**
 * Sets the `toString` method of `wrapper` to mimic the source of `reference`
 * with wrapper details in a comment at the top of the source body.
 *
 * @private
 * @param {Function} wrapper The function to modify.
 * @param {Function} reference The reference function.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @returns {Function} Returns `wrapper`.
 */
function setWrapToString$2(wrapper, reference, bitmask) {
  var source = (reference + '');
  return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
}

var _setWrapToString = setWrapToString$2;

var isLaziable = _isLaziable;
var setData$1 = _setData;
var setWrapToString$1 = _setWrapToString;

/** Used to compose bitmasks for function metadata. */
var BIND_FLAG$3 = 1;
var BIND_KEY_FLAG$2 = 2;
var CURRY_BOUND_FLAG = 4;
var CURRY_FLAG$2 = 8;
var PARTIAL_FLAG$1 = 32;
var PARTIAL_RIGHT_FLAG$1 = 64;

/**
 * Creates a function that wraps `func` to continue currying.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {Function} wrapFunc The function to create the `func` wrapper.
 * @param {*} placeholder The placeholder value.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to prepend to those provided to
 *  the new function.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createRecurry$2(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
  var isCurry = bitmask & CURRY_FLAG$2,
      newHolders = isCurry ? holders : undefined,
      newHoldersRight = isCurry ? undefined : holders,
      newPartials = isCurry ? partials : undefined,
      newPartialsRight = isCurry ? undefined : partials;

  bitmask |= (isCurry ? PARTIAL_FLAG$1 : PARTIAL_RIGHT_FLAG$1);
  bitmask &= ~(isCurry ? PARTIAL_RIGHT_FLAG$1 : PARTIAL_FLAG$1);

  if (!(bitmask & CURRY_BOUND_FLAG)) {
    bitmask &= ~(BIND_FLAG$3 | BIND_KEY_FLAG$2);
  }
  var newData = [
    func, bitmask, thisArg, newPartials, newHolders, newPartialsRight,
    newHoldersRight, argPos, ary, arity
  ];

  var result = wrapFunc.apply(undefined, newData);
  if (isLaziable(func)) {
    setData$1(result, newData);
  }
  result.placeholder = placeholder;
  return setWrapToString$1(result, func, bitmask);
}

var _createRecurry = createRecurry$2;

/**
 * Gets the argument placeholder value for `func`.
 *
 * @private
 * @param {Function} func The function to inspect.
 * @returns {*} Returns the placeholder value.
 */
function getHolder$2(func) {
  var object = func;
  return object.placeholder;
}

var _getHolder = getHolder$2;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex$1(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

var _isIndex = isIndex$1;

var copyArray$2 = _copyArray;
var isIndex = _isIndex;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMin = Math.min;

/**
 * Reorder `array` according to the specified indexes where the element at
 * the first index is assigned as the first element, the element at
 * the second index is assigned as the second element, and so on.
 *
 * @private
 * @param {Array} array The array to reorder.
 * @param {Array} indexes The arranged array indexes.
 * @returns {Array} Returns `array`.
 */
function reorder$1(array, indexes) {
  var arrLength = array.length,
      length = nativeMin(indexes.length, arrLength),
      oldArray = copyArray$2(array);

  while (length--) {
    var index = indexes[length];
    array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
  }
  return array;
}

var _reorder = reorder$1;

/** Used as the internal argument placeholder. */
var PLACEHOLDER = '__lodash_placeholder__';

/**
 * Replaces all `placeholder` elements in `array` with an internal placeholder
 * and returns an array of their indexes.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {*} placeholder The placeholder to replace.
 * @returns {Array} Returns the new array of placeholder indexes.
 */
function replaceHolders$2(array, placeholder) {
  var index = -1,
      length = array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (value === placeholder || value === PLACEHOLDER) {
      array[index] = PLACEHOLDER;
      result[resIndex++] = index;
    }
  }
  return result;
}

var _replaceHolders = replaceHolders$2;

var composeArgs = _composeArgs;
var composeArgsRight = _composeArgsRight;
var countHolders = _countHolders;
var createCtor$3 = _createCtor;
var createRecurry$1 = _createRecurry;
var getHolder$1 = _getHolder;
var reorder = _reorder;
var replaceHolders$1 = _replaceHolders;
var root$5 = _root;

/** Used to compose bitmasks for function metadata. */
var BIND_FLAG$2 = 1;
var BIND_KEY_FLAG$1 = 2;
var CURRY_FLAG$1 = 8;
var CURRY_RIGHT_FLAG$1 = 16;
var ARY_FLAG$1 = 128;
var FLIP_FLAG = 512;

/**
 * Creates a function that wraps `func` to invoke it with optional `this`
 * binding of `thisArg`, partial application, and currying.
 *
 * @private
 * @param {Function|string} func The function or method name to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to prepend to those provided to
 *  the new function.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [partialsRight] The arguments to append to those provided
 *  to the new function.
 * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createHybrid$2(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
  var isAry = bitmask & ARY_FLAG$1,
      isBind = bitmask & BIND_FLAG$2,
      isBindKey = bitmask & BIND_KEY_FLAG$1,
      isCurried = bitmask & (CURRY_FLAG$1 | CURRY_RIGHT_FLAG$1),
      isFlip = bitmask & FLIP_FLAG,
      Ctor = isBindKey ? undefined : createCtor$3(func);

  function wrapper() {
    var length = arguments.length,
        args = Array(length),
        index = length;

    while (index--) {
      args[index] = arguments[index];
    }
    if (isCurried) {
      var placeholder = getHolder$1(wrapper),
          holdersCount = countHolders(args, placeholder);
    }
    if (partials) {
      args = composeArgs(args, partials, holders, isCurried);
    }
    if (partialsRight) {
      args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
    }
    length -= holdersCount;
    if (isCurried && length < arity) {
      var newHolders = replaceHolders$1(args, placeholder);
      return createRecurry$1(
        func, bitmask, createHybrid$2, wrapper.placeholder, thisArg,
        args, newHolders, argPos, ary, arity - length
      );
    }
    var thisBinding = isBind ? thisArg : this,
        fn = isBindKey ? thisBinding[func] : func;

    length = args.length;
    if (argPos) {
      args = reorder(args, argPos);
    } else if (isFlip && length > 1) {
      args.reverse();
    }
    if (isAry && ary < length) {
      args.length = ary;
    }
    if (this && this !== root$5 && this instanceof wrapper) {
      fn = Ctor || createCtor$3(fn);
    }
    return fn.apply(thisBinding, args);
  }
  return wrapper;
}

var _createHybrid = createHybrid$2;

var apply = _apply;
var createCtor$2 = _createCtor;
var createHybrid$1 = _createHybrid;
var createRecurry = _createRecurry;
var getHolder = _getHolder;
var replaceHolders = _replaceHolders;
var root$4 = _root;

/**
 * Creates a function that wraps `func` to enable currying.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {number} arity The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createCurry$1(func, bitmask, arity) {
  var Ctor = createCtor$2(func);

  function wrapper() {
    var length = arguments.length,
        args = Array(length),
        index = length,
        placeholder = getHolder(wrapper);

    while (index--) {
      args[index] = arguments[index];
    }
    var holders = (length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder)
      ? []
      : replaceHolders(args, placeholder);

    length -= holders.length;
    if (length < arity) {
      return createRecurry(
        func, bitmask, createHybrid$1, wrapper.placeholder, undefined,
        args, holders, undefined, undefined, arity - length);
    }
    var fn = (this && this !== root$4 && this instanceof wrapper) ? Ctor : func;
    return apply(fn, this, args);
  }
  return wrapper;
}

var _createCurry = createCurry$1;

var apply$2 = _apply;
var createCtor$4 = _createCtor;
var root$6 = _root;

/** Used to compose bitmasks for function metadata. */
var BIND_FLAG$5 = 1;

/**
 * Creates a function that wraps `func` to invoke it with the `this` binding
 * of `thisArg` and `partials` prepended to the arguments it receives.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} partials The arguments to prepend to those provided to
 *  the new function.
 * @returns {Function} Returns the new wrapped function.
 */
function createPartial$1(func, bitmask, thisArg, partials) {
  var isBind = bitmask & BIND_FLAG$5,
      Ctor = createCtor$4(func);

  function wrapper() {
    var argsIndex = -1,
        argsLength = arguments.length,
        leftIndex = -1,
        leftLength = partials.length,
        args = Array(leftLength + argsLength),
        fn = (this && this !== root$6 && this instanceof wrapper) ? Ctor : func;

    while (++leftIndex < leftLength) {
      args[leftIndex] = partials[leftIndex];
    }
    while (argsLength--) {
      args[leftIndex++] = arguments[++argsIndex];
    }
    return apply$2(fn, isBind ? thisArg : this, args);
  }
  return wrapper;
}

var _createPartial = createPartial$1;

var composeArgs$2 = _composeArgs;
var composeArgsRight$2 = _composeArgsRight;
var replaceHolders$3 = _replaceHolders;

/** Used as the internal argument placeholder. */
var PLACEHOLDER$1 = '__lodash_placeholder__';

/** Used to compose bitmasks for function metadata. */
var BIND_FLAG$6 = 1;
var BIND_KEY_FLAG$4 = 2;
var CURRY_BOUND_FLAG$1 = 4;
var CURRY_FLAG$4 = 8;
var ARY_FLAG$3 = 128;
var REARG_FLAG$1 = 256;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMin$1 = Math.min;

/**
 * Merges the function metadata of `source` into `data`.
 *
 * Merging metadata reduces the number of wrappers used to invoke a function.
 * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
 * may be applied regardless of execution order. Methods like `_.ary` and
 * `_.rearg` modify function arguments, making the order in which they are
 * executed important, preventing the merging of metadata. However, we make
 * an exception for a safe combined case where curried functions have `_.ary`
 * and or `_.rearg` applied.
 *
 * @private
 * @param {Array} data The destination metadata.
 * @param {Array} source The source metadata.
 * @returns {Array} Returns `data`.
 */
function mergeData$1(data, source) {
  var bitmask = data[1],
      srcBitmask = source[1],
      newBitmask = bitmask | srcBitmask,
      isCommon = newBitmask < (BIND_FLAG$6 | BIND_KEY_FLAG$4 | ARY_FLAG$3);

  var isCombo =
    ((srcBitmask == ARY_FLAG$3) && (bitmask == CURRY_FLAG$4)) ||
    ((srcBitmask == ARY_FLAG$3) && (bitmask == REARG_FLAG$1) && (data[7].length <= source[8])) ||
    ((srcBitmask == (ARY_FLAG$3 | REARG_FLAG$1)) && (source[7].length <= source[8]) && (bitmask == CURRY_FLAG$4));

  // Exit early if metadata can't be merged.
  if (!(isCommon || isCombo)) {
    return data;
  }
  // Use source `thisArg` if available.
  if (srcBitmask & BIND_FLAG$6) {
    data[2] = source[2];
    // Set when currying a bound function.
    newBitmask |= bitmask & BIND_FLAG$6 ? 0 : CURRY_BOUND_FLAG$1;
  }
  // Compose partial arguments.
  var value = source[3];
  if (value) {
    var partials = data[3];
    data[3] = partials ? composeArgs$2(partials, value, source[4]) : value;
    data[4] = partials ? replaceHolders$3(data[3], PLACEHOLDER$1) : source[4];
  }
  // Compose partial right arguments.
  value = source[5];
  if (value) {
    partials = data[5];
    data[5] = partials ? composeArgsRight$2(partials, value, source[6]) : value;
    data[6] = partials ? replaceHolders$3(data[5], PLACEHOLDER$1) : source[6];
  }
  // Use source `argPos` if available.
  value = source[7];
  if (value) {
    data[7] = value;
  }
  // Use source `ary` if it's smaller.
  if (srcBitmask & ARY_FLAG$3) {
    data[8] = data[8] == null ? source[8] : nativeMin$1(data[8], source[8]);
  }
  // Use source `arity` if one is not provided.
  if (data[9] == null) {
    data[9] = source[9];
  }
  // Use source `func` and merge bitmasks.
  data[0] = source[0];
  data[1] = newBitmask;

  return data;
}

var _mergeData = mergeData$1;

var isObjectLike$2 = isObjectLike_1;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString$1 = objectProto$4.toString;

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol$1(value) {
  return typeof value == 'symbol' ||
    (isObjectLike$2(value) && objectToString$1.call(value) == symbolTag);
}

var isSymbol_1 = isSymbol$1;

var isObject$5 = isObject_1;
var isSymbol = isSymbol_1;

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber$1(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject$5(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject$5(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

var toNumber_1 = toNumber$1;

var toNumber = toNumber_1;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;
var MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite$1(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

var toFinite_1 = toFinite$1;

var toFinite = toFinite_1;

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger$1(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

var toInteger_1 = toInteger$1;

var baseSetData = _baseSetData;
var createBind = _createBind;
var createCurry = _createCurry;
var createHybrid = _createHybrid;
var createPartial = _createPartial;
var getData = _getData;
var mergeData = _mergeData;
var setData = _setData;
var setWrapToString = _setWrapToString;
var toInteger = toInteger_1;

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to compose bitmasks for function metadata. */
var BIND_FLAG = 1;
var BIND_KEY_FLAG = 2;
var CURRY_FLAG = 8;
var CURRY_RIGHT_FLAG = 16;
var PARTIAL_FLAG = 32;
var PARTIAL_RIGHT_FLAG = 64;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Creates a function that either curries or invokes `func` with optional
 * `this` binding and partially applied arguments.
 *
 * @private
 * @param {Function|string} func The function or method name to wrap.
 * @param {number} bitmask The bitmask flags.
 *  The bitmask may be composed of the following flags:
 *     1 - `_.bind`
 *     2 - `_.bindKey`
 *     4 - `_.curry` or `_.curryRight` of a bound function
 *     8 - `_.curry`
 *    16 - `_.curryRight`
 *    32 - `_.partial`
 *    64 - `_.partialRight`
 *   128 - `_.rearg`
 *   256 - `_.ary`
 *   512 - `_.flip`
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to be partially applied.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createWrap$1(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
  var isBindKey = bitmask & BIND_KEY_FLAG;
  if (!isBindKey && typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var length = partials ? partials.length : 0;
  if (!length) {
    bitmask &= ~(PARTIAL_FLAG | PARTIAL_RIGHT_FLAG);
    partials = holders = undefined;
  }
  ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
  arity = arity === undefined ? arity : toInteger(arity);
  length -= holders ? holders.length : 0;

  if (bitmask & PARTIAL_RIGHT_FLAG) {
    var partialsRight = partials,
        holdersRight = holders;

    partials = holders = undefined;
  }
  var data = isBindKey ? undefined : getData(func);

  var newData = [
    func, bitmask, thisArg, partials, holders, partialsRight, holdersRight,
    argPos, ary, arity
  ];

  if (data) {
    mergeData(newData, data);
  }
  func = newData[0];
  bitmask = newData[1];
  thisArg = newData[2];
  partials = newData[3];
  holders = newData[4];
  arity = newData[9] = newData[9] == null
    ? (isBindKey ? 0 : func.length)
    : nativeMax(newData[9] - length, 0);

  if (!arity && bitmask & (CURRY_FLAG | CURRY_RIGHT_FLAG)) {
    bitmask &= ~(CURRY_FLAG | CURRY_RIGHT_FLAG);
  }
  if (!bitmask || bitmask == BIND_FLAG) {
    var result = createBind(func, bitmask, thisArg);
  } else if (bitmask == CURRY_FLAG || bitmask == CURRY_RIGHT_FLAG) {
    result = createCurry(func, bitmask, arity);
  } else if ((bitmask == PARTIAL_FLAG || bitmask == (BIND_FLAG | PARTIAL_FLAG)) && !holders.length) {
    result = createPartial(func, bitmask, thisArg, partials);
  } else {
    result = createHybrid.apply(undefined, newData);
  }
  var setter = data ? baseSetData : setData;
  return setWrapToString(setter(result, newData), func, bitmask);
}

var _createWrap = createWrap$1;

var createWrap = _createWrap;

/** Used to compose bitmasks for function metadata. */
var ARY_FLAG = 128;

/**
 * Creates a function that invokes `func`, with up to `n` arguments,
 * ignoring any additional arguments.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {Function} func The function to cap arguments for.
 * @param {number} [n=func.length] The arity cap.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Function} Returns the new capped function.
 * @example
 *
 * _.map(['6', '8', '10'], _.ary(parseInt, 1));
 * // => [6, 8, 10]
 */
function ary(func, n, guard) {
  n = guard ? undefined : n;
  n = (func && n == null) ? func.length : n;
  return createWrap(func, ARY_FLAG, undefined, undefined, undefined, undefined, n);
}

var ary_1 = ary;

/** Built-in value references. */
var defineProperty = Object.defineProperty;

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue$2(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

var _baseAssignValue = baseAssignValue$2;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq$1(value, other) {
  return value === other || (value !== value && other !== other);
}

var eq_1 = eq$1;

var baseAssignValue$1 = _baseAssignValue;
var eq = eq_1;

/** Used for built-in method references. */
var objectProto$5 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$5.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue$1(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$3.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue$1(object, key, value);
  }
}

var _assignValue = assignValue$1;

var assignValue = _assignValue;
var baseAssignValue = _baseAssignValue;

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject$1(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

var _copyObject = copyObject$1;

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes$1(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

var _baseTimes = baseTimes$1;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$1 = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength$1(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
}

var isLength_1 = isLength$1;

var isFunction$2 = isFunction_1;
var isLength = isLength_1;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike$2(value) {
  return value != null && isLength(value.length) && !isFunction$2(value);
}

var isArrayLike_1 = isArrayLike$2;

var isArrayLike$1 = isArrayLike_1;
var isObjectLike$3 = isObjectLike_1;

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject$1(value) {
  return isObjectLike$3(value) && isArrayLike$1(value);
}

var isArrayLikeObject_1 = isArrayLikeObject$1;

var isArrayLikeObject = isArrayLikeObject_1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/** Used for built-in method references. */
var objectProto$7 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$5 = objectProto$7.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString$2 = objectProto$7.toString;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$7.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments$1(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty$5.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString$2.call(value) == argsTag);
}

var isArguments_1 = isArguments$1;

var baseTimes = _baseTimes;
var isArguments = isArguments_1;
var isArray$2 = isArray_1;
var isIndex$2 = _isIndex;

/** Used for built-in method references. */
var objectProto$6 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$4 = objectProto$6.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys$1(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray$2(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty$4.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex$2(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

var _arrayLikeKeys = arrayLikeKeys$1;

/** Used for built-in method references. */
var objectProto$9 = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype$1(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$9;

  return value === proto;
}

var _isPrototype = isPrototype$1;

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg$1(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

var _overArg = overArg$1;

var overArg = _overArg;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys$1 = overArg(Object.keys, Object);

var _nativeKeys = nativeKeys$1;

var isPrototype = _isPrototype;
var nativeKeys = _nativeKeys;

/** Used for built-in method references. */
var objectProto$8 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$6 = objectProto$8.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys$1(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$6.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

var _baseKeys = baseKeys$1;

var arrayLikeKeys = _arrayLikeKeys;
var baseKeys = _baseKeys;
var isArrayLike = isArrayLike_1;

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys$1(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

var keys_1 = keys$1;

var copyObject = _copyObject;
var keys = keys_1;

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

var _baseAssign = baseAssign;

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear$1() {
  this.__data__ = [];
  this.size = 0;
}

var _listCacheClear = listCacheClear$1;

var eq$2 = eq_1;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf$1(array, key) {
  var length = array.length;
  while (length--) {
    if (eq$2(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

var _assocIndexOf = assocIndexOf$1;

var assocIndexOf = _assocIndexOf;

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete$1(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

var _listCacheDelete = listCacheDelete$1;

var assocIndexOf$2 = _assocIndexOf;

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet$1(key) {
  var data = this.__data__,
      index = assocIndexOf$2(data, key);

  return index < 0 ? undefined : data[index][1];
}

var _listCacheGet = listCacheGet$1;

var assocIndexOf$3 = _assocIndexOf;

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas$1(key) {
  return assocIndexOf$3(this.__data__, key) > -1;
}

var _listCacheHas = listCacheHas$1;

var assocIndexOf$4 = _assocIndexOf;

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet$1(key, value) {
  var data = this.__data__,
      index = assocIndexOf$4(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

var _listCacheSet = listCacheSet$1;

var listCacheClear = _listCacheClear;
var listCacheDelete = _listCacheDelete;
var listCacheGet = _listCacheGet;
var listCacheHas = _listCacheHas;
var listCacheSet = _listCacheSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache$1(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache$1.prototype.clear = listCacheClear;
ListCache$1.prototype['delete'] = listCacheDelete;
ListCache$1.prototype.get = listCacheGet;
ListCache$1.prototype.has = listCacheHas;
ListCache$1.prototype.set = listCacheSet;

var _ListCache = ListCache$1;

var ListCache$2 = _ListCache;

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear$1() {
  this.__data__ = new ListCache$2;
  this.size = 0;
}

var _stackClear = stackClear$1;

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete$1(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

var _stackDelete = stackDelete$1;

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet$1(key) {
  return this.__data__.get(key);
}

var _stackGet = stackGet$1;

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas$1(key) {
  return this.__data__.has(key);
}

var _stackHas = stackHas$1;

var getNative$3 = _getNative;
var root$7 = _root;

/* Built-in method references that are verified to be native. */
var Map$1 = getNative$3(root$7, 'Map');

var _Map = Map$1;

var getNative$4 = _getNative;

/* Built-in method references that are verified to be native. */
var nativeCreate$1 = getNative$4(Object, 'create');

var _nativeCreate = nativeCreate$1;

var nativeCreate = _nativeCreate;

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear$1() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

var _hashClear = hashClear$1;

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete$1(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

var _hashDelete = hashDelete$1;

var nativeCreate$2 = _nativeCreate;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto$10 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$7 = objectProto$10.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet$1(key) {
  var data = this.__data__;
  if (nativeCreate$2) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty$7.call(data, key) ? data[key] : undefined;
}

var _hashGet = hashGet$1;

var nativeCreate$3 = _nativeCreate;

/** Used for built-in method references. */
var objectProto$11 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$8 = objectProto$11.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas$1(key) {
  var data = this.__data__;
  return nativeCreate$3 ? data[key] !== undefined : hasOwnProperty$8.call(data, key);
}

var _hashHas = hashHas$1;

var nativeCreate$4 = _nativeCreate;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet$1(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate$4 && value === undefined) ? HASH_UNDEFINED$1 : value;
  return this;
}

var _hashSet = hashSet$1;

var hashClear = _hashClear;
var hashDelete = _hashDelete;
var hashGet = _hashGet;
var hashHas = _hashHas;
var hashSet = _hashSet;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash$1(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash$1.prototype.clear = hashClear;
Hash$1.prototype['delete'] = hashDelete;
Hash$1.prototype.get = hashGet;
Hash$1.prototype.has = hashHas;
Hash$1.prototype.set = hashSet;

var _Hash = Hash$1;

var Hash = _Hash;
var ListCache$4 = _ListCache;
var Map$2 = _Map;

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear$1() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map$2 || ListCache$4),
    'string': new Hash
  };
}

var _mapCacheClear = mapCacheClear$1;

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable$1(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

var _isKeyable = isKeyable$1;

var isKeyable = _isKeyable;

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData$1(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

var _getMapData = getMapData$1;

var getMapData = _getMapData;

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete$1(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

var _mapCacheDelete = mapCacheDelete$1;

var getMapData$2 = _getMapData;

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet$1(key) {
  return getMapData$2(this, key).get(key);
}

var _mapCacheGet = mapCacheGet$1;

var getMapData$3 = _getMapData;

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas$1(key) {
  return getMapData$3(this, key).has(key);
}

var _mapCacheHas = mapCacheHas$1;

var getMapData$4 = _getMapData;

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet$1(key, value) {
  var data = getMapData$4(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

var _mapCacheSet = mapCacheSet$1;

var mapCacheClear = _mapCacheClear;
var mapCacheDelete = _mapCacheDelete;
var mapCacheGet = _mapCacheGet;
var mapCacheHas = _mapCacheHas;
var mapCacheSet = _mapCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache$1(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache$1.prototype.clear = mapCacheClear;
MapCache$1.prototype['delete'] = mapCacheDelete;
MapCache$1.prototype.get = mapCacheGet;
MapCache$1.prototype.has = mapCacheHas;
MapCache$1.prototype.set = mapCacheSet;

var _MapCache = MapCache$1;

var ListCache$3 = _ListCache;
var Map = _Map;
var MapCache = _MapCache;

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet$1(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache$3) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

var _stackSet = stackSet$1;

var ListCache = _ListCache;
var stackClear = _stackClear;
var stackDelete = _stackDelete;
var stackGet = _stackGet;
var stackHas = _stackHas;
var stackSet = _stackSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack$1(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack$1.prototype.clear = stackClear;
Stack$1.prototype['delete'] = stackDelete;
Stack$1.prototype.get = stackGet;
Stack$1.prototype.has = stackHas;
Stack$1.prototype.set = stackSet;

var _Stack = Stack$1;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer$1(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var result = new buffer.constructor(buffer.length);
  buffer.copy(result);
  return result;
}

var _cloneBuffer = cloneBuffer$1;

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray$1() {
  return [];
}

var stubArray_1 = stubArray$1;

var overArg$2 = _overArg;
var stubArray = stubArray_1;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbol properties of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols$1 = nativeGetSymbols ? overArg$2(nativeGetSymbols, Object) : stubArray;

var _getSymbols = getSymbols$1;

var copyObject$2 = _copyObject;
var getSymbols = _getSymbols;

/**
 * Copies own symbol properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols$1(source, object) {
  return copyObject$2(source, getSymbols(source), object);
}

var _copySymbols = copySymbols$1;

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush$1(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

var _arrayPush = arrayPush$1;

var arrayPush = _arrayPush;
var isArray$4 = isArray_1;

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys$1(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray$4(object) ? result : arrayPush(result, symbolsFunc(object));
}

var _baseGetAllKeys = baseGetAllKeys$1;

var baseGetAllKeys = _baseGetAllKeys;
var getSymbols$2 = _getSymbols;
var keys$3 = keys_1;

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys$1(object) {
  return baseGetAllKeys(object, keys$3, getSymbols$2);
}

var _getAllKeys = getAllKeys$1;

var getNative$5 = _getNative;
var root$8 = _root;

/* Built-in method references that are verified to be native. */
var DataView$1 = getNative$5(root$8, 'DataView');

var _DataView = DataView$1;

var getNative$6 = _getNative;
var root$9 = _root;

/* Built-in method references that are verified to be native. */
var Promise$2 = getNative$6(root$9, 'Promise');

var _Promise = Promise$2;

var getNative$7 = _getNative;
var root$10 = _root;

/* Built-in method references that are verified to be native. */
var Set$1 = getNative$7(root$10, 'Set');

var _Set = Set$1;

/** Used for built-in method references. */
var objectProto$13 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString$4 = objectProto$13.toString;

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag$1(value) {
  return objectToString$4.call(value);
}

var _baseGetTag = baseGetTag$1;

var DataView = _DataView;
var Map$3 = _Map;
var Promise$1 = _Promise;
var Set = _Set;
var WeakMap$2 = _WeakMap;
var baseGetTag = _baseGetTag;
var toSource$2 = _toSource;

/** `Object#toString` result references. */
var mapTag$1 = '[object Map]';
var objectTag$1 = '[object Object]';
var promiseTag = '[object Promise]';
var setTag$1 = '[object Set]';
var weakMapTag$1 = '[object WeakMap]';

var dataViewTag$1 = '[object DataView]';

/** Used for built-in method references. */
var objectProto$12 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString$3 = objectProto$12.toString;

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource$2(DataView);
var mapCtorString = toSource$2(Map$3);
var promiseCtorString = toSource$2(Promise$1);
var setCtorString = toSource$2(Set);
var weakMapCtorString = toSource$2(WeakMap$2);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag$1 = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag$1(new DataView(new ArrayBuffer(1))) != dataViewTag$1) ||
    (Map$3 && getTag$1(new Map$3) != mapTag$1) ||
    (Promise$1 && getTag$1(Promise$1.resolve()) != promiseTag) ||
    (Set && getTag$1(new Set) != setTag$1) ||
    (WeakMap$2 && getTag$1(new WeakMap$2) != weakMapTag$1)) {
  getTag$1 = function(value) {
    var result = objectToString$3.call(value),
        Ctor = result == objectTag$1 ? value.constructor : undefined,
        ctorString = Ctor ? toSource$2(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag$1;
        case mapCtorString: return mapTag$1;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag$1;
        case weakMapCtorString: return weakMapTag$1;
      }
    }
    return result;
  };
}

var _getTag = getTag$1;

/** Used for built-in method references. */
var objectProto$14 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$9 = objectProto$14.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray$1(array) {
  var length = array.length,
      result = array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty$9.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

var _initCloneArray = initCloneArray$1;

var root$11 = _root;

/** Built-in value references. */
var Uint8Array$1 = root$11.Uint8Array;

var _Uint8Array = Uint8Array$1;

var Uint8Array = _Uint8Array;

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer$1(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

var _cloneArrayBuffer = cloneArrayBuffer$1;

var cloneArrayBuffer$2 = _cloneArrayBuffer;

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView$1(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer$2(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

var _cloneDataView = cloneDataView$1;

/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */
function addMapEntry$1(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  map.set(pair[0], pair[1]);
  return map;
}

var _addMapEntry = addMapEntry$1;

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce$1(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array ? array.length : 0;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

var _arrayReduce = arrayReduce$1;

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray$1(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

var _mapToArray = mapToArray$1;

var addMapEntry = _addMapEntry;
var arrayReduce = _arrayReduce;
var mapToArray = _mapToArray;

/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */
function cloneMap$1(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
  return arrayReduce(array, addMapEntry, new map.constructor);
}

var _cloneMap = cloneMap$1;

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp$1(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

var _cloneRegExp = cloneRegExp$1;

/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */
function addSetEntry$1(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  set.add(value);
  return set;
}

var _addSetEntry = addSetEntry$1;

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray$1(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

var _setToArray = setToArray$1;

var addSetEntry = _addSetEntry;
var arrayReduce$2 = _arrayReduce;
var setToArray = _setToArray;

/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */
function cloneSet$1(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
  return arrayReduce$2(array, addSetEntry, new set.constructor);
}

var _cloneSet = cloneSet$1;

var root$12 = _root;

/** Built-in value references. */
var Symbol$1 = root$12.Symbol;

var _Symbol = Symbol$1;

var Symbol = _Symbol;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined;
var symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol$1(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

var _cloneSymbol = cloneSymbol$1;

var cloneArrayBuffer$3 = _cloneArrayBuffer;

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray$1(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer$3(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

var _cloneTypedArray = cloneTypedArray$1;

var cloneArrayBuffer = _cloneArrayBuffer;
var cloneDataView = _cloneDataView;
var cloneMap = _cloneMap;
var cloneRegExp = _cloneRegExp;
var cloneSet = _cloneSet;
var cloneSymbol = _cloneSymbol;
var cloneTypedArray = _cloneTypedArray;

/** `Object#toString` result references. */
var boolTag$1 = '[object Boolean]';
var dateTag$1 = '[object Date]';
var mapTag$2 = '[object Map]';
var numberTag$1 = '[object Number]';
var regexpTag$1 = '[object RegExp]';
var setTag$2 = '[object Set]';
var stringTag$1 = '[object String]';
var symbolTag$2 = '[object Symbol]';

var arrayBufferTag$1 = '[object ArrayBuffer]';
var dataViewTag$2 = '[object DataView]';
var float32Tag$1 = '[object Float32Array]';
var float64Tag$1 = '[object Float64Array]';
var int8Tag$1 = '[object Int8Array]';
var int16Tag$1 = '[object Int16Array]';
var int32Tag$1 = '[object Int32Array]';
var uint8Tag$1 = '[object Uint8Array]';
var uint8ClampedTag$1 = '[object Uint8ClampedArray]';
var uint16Tag$1 = '[object Uint16Array]';
var uint32Tag$1 = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag$1(object, tag, cloneFunc, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag$1:
      return cloneArrayBuffer(object);

    case boolTag$1:
    case dateTag$1:
      return new Ctor(+object);

    case dataViewTag$2:
      return cloneDataView(object, isDeep);

    case float32Tag$1: case float64Tag$1:
    case int8Tag$1: case int16Tag$1: case int32Tag$1:
    case uint8Tag$1: case uint8ClampedTag$1: case uint16Tag$1: case uint32Tag$1:
      return cloneTypedArray(object, isDeep);

    case mapTag$2:
      return cloneMap(object, isDeep, cloneFunc);

    case numberTag$1:
    case stringTag$1:
      return new Ctor(object);

    case regexpTag$1:
      return cloneRegExp(object);

    case setTag$2:
      return cloneSet(object, isDeep, cloneFunc);

    case symbolTag$2:
      return cloneSymbol(object);
  }
}

var _initCloneByTag = initCloneByTag$1;

var overArg$3 = _overArg;

/** Built-in value references. */
var getPrototype$1 = overArg$3(Object.getPrototypeOf, Object);

var _getPrototype = getPrototype$1;

var baseCreate$4 = _baseCreate;
var getPrototype = _getPrototype;
var isPrototype$2 = _isPrototype;

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject$1(object) {
  return (typeof object.constructor == 'function' && !isPrototype$2(object))
    ? baseCreate$4(getPrototype(object))
    : {};
}

var _initCloneObject = initCloneObject$1;

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

var stubFalse_1 = stubFalse;

var isBuffer_1 = createCommonjsModule(function (module, exports) {
var root = _root,
    stubFalse = stubFalse_1;

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;
});

var Stack = _Stack;
var arrayEach$2 = _arrayEach;
var assignValue$2 = _assignValue;
var baseAssign$1 = _baseAssign;
var cloneBuffer = _cloneBuffer;
var copyArray$3 = _copyArray;
var copySymbols = _copySymbols;
var getAllKeys = _getAllKeys;
var getTag = _getTag;
var initCloneArray = _initCloneArray;
var initCloneByTag = _initCloneByTag;
var initCloneObject = _initCloneObject;
var isArray$3 = isArray_1;
var isBuffer = isBuffer_1;
var isObject$6 = isObject_1;
var keys$2 = keys_1;

/** `Object#toString` result references. */
var argsTag$1 = '[object Arguments]';
var arrayTag = '[object Array]';
var boolTag = '[object Boolean]';
var dateTag = '[object Date]';
var errorTag = '[object Error]';
var funcTag$1 = '[object Function]';
var genTag$1 = '[object GeneratorFunction]';
var mapTag = '[object Map]';
var numberTag = '[object Number]';
var objectTag = '[object Object]';
var regexpTag = '[object RegExp]';
var setTag = '[object Set]';
var stringTag = '[object String]';
var symbolTag$1 = '[object Symbol]';
var weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]';
var dataViewTag = '[object DataView]';
var float32Tag = '[object Float32Array]';
var float64Tag = '[object Float64Array]';
var int8Tag = '[object Int8Array]';
var int16Tag = '[object Int16Array]';
var int32Tag = '[object Int32Array]';
var uint8Tag = '[object Uint8Array]';
var uint8ClampedTag = '[object Uint8ClampedArray]';
var uint16Tag = '[object Uint16Array]';
var uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag$1] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag$1] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag$1] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @param {boolean} [isFull] Specify a clone including symbols.
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone$1(value, isDeep, isFull, customizer, key, object, stack) {
  var result;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject$6(value)) {
    return value;
  }
  var isArr = isArray$3(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray$3(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag$1 || tag == genTag$1;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag$1 || (isFunc && !object)) {
      result = initCloneObject(isFunc ? {} : value);
      if (!isDeep) {
        return copySymbols(value, baseAssign$1(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, baseClone$1, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (!isArr) {
    var props = isFull ? getAllKeys(value) : keys$2(value);
  }
  arrayEach$2(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue$2(result, key, baseClone$1(subValue, isDeep, isFull, customizer, key, value, stack));
  });
  return result;
}

var _baseClone = baseClone$1;

var baseClone = _baseClone;

/**
 * Creates a shallow clone of `value`.
 *
 * **Note:** This method is loosely based on the
 * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
 * and supports cloning arrays, array buffers, booleans, date objects, maps,
 * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
 * arrays. The own enumerable properties of `arguments` objects are cloned
 * as plain objects. An empty object is returned for uncloneable values such
 * as error objects, functions, DOM nodes, and WeakMaps.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to clone.
 * @returns {*} Returns the cloned value.
 * @see _.cloneDeep
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var shallow = _.clone(objects);
 * console.log(shallow[0] === objects[0]);
 * // => true
 */
function clone(value) {
  return baseClone(value, false, true);
}

var clone_1 = clone;

var createWrap$2 = _createWrap;

/** Used to compose bitmasks for function metadata. */
var CURRY_FLAG$5 = 8;

/**
 * Creates a function that accepts arguments of `func` and either invokes
 * `func` returning its result, if at least `arity` number of arguments have
 * been provided, or returns a function that accepts the remaining `func`
 * arguments, and so on. The arity of `func` may be specified if `func.length`
 * is not sufficient.
 *
 * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
 * may be used as a placeholder for provided arguments.
 *
 * **Note:** This method doesn't set the "length" property of curried functions.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Function
 * @param {Function} func The function to curry.
 * @param {number} [arity=func.length] The arity of `func`.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Function} Returns the new curried function.
 * @example
 *
 * var abc = function(a, b, c) {
 *   return [a, b, c];
 * };
 *
 * var curried = _.curry(abc);
 *
 * curried(1)(2)(3);
 * // => [1, 2, 3]
 *
 * curried(1, 2)(3);
 * // => [1, 2, 3]
 *
 * curried(1, 2, 3);
 * // => [1, 2, 3]
 *
 * // Curried with placeholders.
 * curried(1)(_, 3)(2);
 * // => [1, 2, 3]
 */
function curry$1(func, arity, guard) {
  arity = guard ? undefined : arity;
  var result = createWrap$2(func, CURRY_FLAG$5, undefined, undefined, undefined, undefined, undefined, arity);
  result.placeholder = curry$1.placeholder;
  return result;
}

// Assign default placeholders.
curry$1.placeholder = {};

var curry_1 = curry$1;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd$1(value) {
  this.__data__.set(value, HASH_UNDEFINED$2);
  return this;
}

var _setCacheAdd = setCacheAdd$1;

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas$1(value) {
  return this.__data__.has(value);
}

var _setCacheHas = setCacheHas$1;

var MapCache$2 = _MapCache;
var setCacheAdd = _setCacheAdd;
var setCacheHas = _setCacheHas;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache$1(values) {
  var index = -1,
      length = values ? values.length : 0;

  this.__data__ = new MapCache$2;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache$1.prototype.add = SetCache$1.prototype.push = setCacheAdd;
SetCache$1.prototype.has = setCacheHas;

var _SetCache = SetCache$1;

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome$1(array, predicate) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

var _arraySome = arraySome$1;

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas$1(cache, key) {
  return cache.has(key);
}

var _cacheHas = cacheHas$1;

var SetCache = _SetCache;
var arraySome = _arraySome;
var cacheHas = _cacheHas;

/** Used to compose bitmasks for comparison styles. */
var UNORDERED_COMPARE_FLAG$1 = 1;
var PARTIAL_COMPARE_FLAG$2 = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays$1(array, other, equalFunc, customizer, bitmask, stack) {
  var isPartial = bitmask & PARTIAL_COMPARE_FLAG$2,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & UNORDERED_COMPARE_FLAG$1) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, customizer, bitmask, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

var _equalArrays = equalArrays$1;

var Symbol$2 = _Symbol;
var Uint8Array$2 = _Uint8Array;
var eq$3 = eq_1;
var equalArrays$2 = _equalArrays;
var mapToArray$2 = _mapToArray;
var setToArray$2 = _setToArray;

/** Used to compose bitmasks for comparison styles. */
var UNORDERED_COMPARE_FLAG$2 = 1;
var PARTIAL_COMPARE_FLAG$3 = 2;

/** `Object#toString` result references. */
var boolTag$2 = '[object Boolean]';
var dateTag$2 = '[object Date]';
var errorTag$1 = '[object Error]';
var mapTag$3 = '[object Map]';
var numberTag$2 = '[object Number]';
var regexpTag$2 = '[object RegExp]';
var setTag$3 = '[object Set]';
var stringTag$2 = '[object String]';
var symbolTag$3 = '[object Symbol]';

var arrayBufferTag$2 = '[object ArrayBuffer]';
var dataViewTag$3 = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto$1 = Symbol$2 ? Symbol$2.prototype : undefined;
var symbolValueOf$1 = symbolProto$1 ? symbolProto$1.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag$1(object, other, tag, equalFunc, customizer, bitmask, stack) {
  switch (tag) {
    case dataViewTag$3:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag$2:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array$2(object), new Uint8Array$2(other))) {
        return false;
      }
      return true;

    case boolTag$2:
    case dateTag$2:
    case numberTag$2:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq$3(+object, +other);

    case errorTag$1:
      return object.name == other.name && object.message == other.message;

    case regexpTag$2:
    case stringTag$2:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag$3:
      var convert = mapToArray$2;

    case setTag$3:
      var isPartial = bitmask & PARTIAL_COMPARE_FLAG$3;
      convert || (convert = setToArray$2);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= UNORDERED_COMPARE_FLAG$2;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays$2(convert(object), convert(other), equalFunc, customizer, bitmask, stack);
      stack['delete'](object);
      return result;

    case symbolTag$3:
      if (symbolValueOf$1) {
        return symbolValueOf$1.call(object) == symbolValueOf$1.call(other);
      }
  }
  return false;
}

var _equalByTag = equalByTag$1;

var keys$4 = keys_1;

/** Used to compose bitmasks for comparison styles. */
var PARTIAL_COMPARE_FLAG$4 = 2;

/** Used for built-in method references. */
var objectProto$16 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$11 = objectProto$16.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects$1(object, other, equalFunc, customizer, bitmask, stack) {
  var isPartial = bitmask & PARTIAL_COMPARE_FLAG$4,
      objProps = keys$4(object),
      objLength = objProps.length,
      othProps = keys$4(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty$11.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

var _equalObjects = equalObjects$1;

var isLength$2 = isLength_1;
var isObjectLike$5 = isObjectLike_1;

/** `Object#toString` result references. */
var argsTag$3 = '[object Arguments]';
var arrayTag$2 = '[object Array]';
var boolTag$3 = '[object Boolean]';
var dateTag$3 = '[object Date]';
var errorTag$2 = '[object Error]';
var funcTag$2 = '[object Function]';
var mapTag$4 = '[object Map]';
var numberTag$3 = '[object Number]';
var objectTag$3 = '[object Object]';
var regexpTag$3 = '[object RegExp]';
var setTag$4 = '[object Set]';
var stringTag$3 = '[object String]';
var weakMapTag$2 = '[object WeakMap]';

var arrayBufferTag$3 = '[object ArrayBuffer]';
var dataViewTag$4 = '[object DataView]';
var float32Tag$2 = '[object Float32Array]';
var float64Tag$2 = '[object Float64Array]';
var int8Tag$2 = '[object Int8Array]';
var int16Tag$2 = '[object Int16Array]';
var int32Tag$2 = '[object Int32Array]';
var uint8Tag$2 = '[object Uint8Array]';
var uint8ClampedTag$2 = '[object Uint8ClampedArray]';
var uint16Tag$2 = '[object Uint16Array]';
var uint32Tag$2 = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag$2] = typedArrayTags[float64Tag$2] =
typedArrayTags[int8Tag$2] = typedArrayTags[int16Tag$2] =
typedArrayTags[int32Tag$2] = typedArrayTags[uint8Tag$2] =
typedArrayTags[uint8ClampedTag$2] = typedArrayTags[uint16Tag$2] =
typedArrayTags[uint32Tag$2] = true;
typedArrayTags[argsTag$3] = typedArrayTags[arrayTag$2] =
typedArrayTags[arrayBufferTag$3] = typedArrayTags[boolTag$3] =
typedArrayTags[dataViewTag$4] = typedArrayTags[dateTag$3] =
typedArrayTags[errorTag$2] = typedArrayTags[funcTag$2] =
typedArrayTags[mapTag$4] = typedArrayTags[numberTag$3] =
typedArrayTags[objectTag$3] = typedArrayTags[regexpTag$3] =
typedArrayTags[setTag$4] = typedArrayTags[stringTag$3] =
typedArrayTags[weakMapTag$2] = false;

/** Used for built-in method references. */
var objectProto$17 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString$5 = objectProto$17.toString;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray$1(value) {
  return isObjectLike$5(value) &&
    isLength$2(value.length) && !!typedArrayTags[objectToString$5.call(value)];
}

var _baseIsTypedArray = baseIsTypedArray$1;

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary$1(func) {
  return function(value) {
    return func(value);
  };
}

var _baseUnary = baseUnary$1;

var _nodeUtil = createCommonjsModule(function (module, exports) {
var freeGlobal = _freeGlobal;

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;
});

var baseIsTypedArray = _baseIsTypedArray;
var baseUnary = _baseUnary;
var nodeUtil = _nodeUtil;

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray$1 = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

var isTypedArray_1 = isTypedArray$1;

var Stack$3 = _Stack;
var equalArrays = _equalArrays;
var equalByTag = _equalByTag;
var equalObjects = _equalObjects;
var getTag$2 = _getTag;
var isArray$6 = isArray_1;
var isTypedArray = isTypedArray_1;

/** Used to compose bitmasks for comparison styles. */
var PARTIAL_COMPARE_FLAG$1 = 2;

/** `Object#toString` result references. */
var argsTag$2 = '[object Arguments]';
var arrayTag$1 = '[object Array]';
var objectTag$2 = '[object Object]';

/** Used for built-in method references. */
var objectProto$15 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$10 = objectProto$15.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep$1(object, other, equalFunc, customizer, bitmask, stack) {
  var objIsArr = isArray$6(object),
      othIsArr = isArray$6(other),
      objTag = arrayTag$1,
      othTag = arrayTag$1;

  if (!objIsArr) {
    objTag = getTag$2(object);
    objTag = objTag == argsTag$2 ? objectTag$2 : objTag;
  }
  if (!othIsArr) {
    othTag = getTag$2(other);
    othTag = othTag == argsTag$2 ? objectTag$2 : othTag;
  }
  var objIsObj = objTag == objectTag$2,
      othIsObj = othTag == objectTag$2,
      isSameTag = objTag == othTag;

  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack$3);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, equalFunc, customizer, bitmask, stack)
      : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
  }
  if (!(bitmask & PARTIAL_COMPARE_FLAG$1)) {
    var objIsWrapped = objIsObj && hasOwnProperty$10.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty$10.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack$3);
      return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack$3);
  return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
}

var _baseIsEqualDeep = baseIsEqualDeep$1;

var baseIsEqualDeep = _baseIsEqualDeep;
var isObject$7 = isObject_1;
var isObjectLike$4 = isObjectLike_1;

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {boolean} [bitmask] The bitmask of comparison flags.
 *  The bitmask may be composed of the following flags:
 *     1 - Unordered comparison
 *     2 - Partial comparison
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual$1(value, other, customizer, bitmask, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObject$7(value) && !isObjectLike$4(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, baseIsEqual$1, customizer, bitmask, stack);
}

var _baseIsEqual = baseIsEqual$1;

var Stack$2 = _Stack;
var baseIsEqual = _baseIsEqual;

/** Used to compose bitmasks for comparison styles. */
var UNORDERED_COMPARE_FLAG = 1;
var PARTIAL_COMPARE_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch$1(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack$2;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

var _baseIsMatch = baseIsMatch$1;

var isObject$8 = isObject_1;

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable$1(value) {
  return value === value && !isObject$8(value);
}

var _isStrictComparable = isStrictComparable$1;

var isStrictComparable = _isStrictComparable;
var keys$5 = keys_1;

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData$1(object) {
  var result = keys$5(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

var _getMatchData = getMatchData$1;

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable$1(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

var _matchesStrictComparable = matchesStrictComparable$1;

var baseIsMatch = _baseIsMatch;
var getMatchData = _getMatchData;
var matchesStrictComparable = _matchesStrictComparable;

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches$1(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

var _baseMatches = baseMatches$1;

var MapCache$3 = _MapCache;

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT$1 = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize$1(func, resolver) {
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize$1.Cache || MapCache$3);
  return memoized;
}

// Expose `MapCache`.
memoize$1.Cache = MapCache$3;

var memoize_1 = memoize$1;

var memoize = memoize_1;

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped$1(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

var _memoizeCapped = memoizeCapped$1;

var Symbol$3 = _Symbol;
var isSymbol$2 = isSymbol_1;

/** Used as references for various `Number` constants. */
var INFINITY$1 = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto$2 = Symbol$3 ? Symbol$3.prototype : undefined;
var symbolToString = symbolProto$2 ? symbolProto$2.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString$1(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol$2(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY$1) ? '-0' : result;
}

var _baseToString = baseToString$1;

var baseToString = _baseToString;

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString$1(value) {
  return value == null ? '' : baseToString(value);
}

var toString_1 = toString$1;

var memoizeCapped = _memoizeCapped;
var toString = toString_1;

/** Used to match property names within property paths. */
var reLeadingDot = /^\./;
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath$1 = memoizeCapped(function(string) {
  string = toString(string);

  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

var _stringToPath = stringToPath$1;

var isArray$7 = isArray_1;
var stringToPath = _stringToPath;

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */
function castPath$1(value) {
  return isArray$7(value) ? value : stringToPath(value);
}

var _castPath = castPath$1;

var isArray$8 = isArray_1;
var isSymbol$3 = isSymbol_1;

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
var reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey$2(value, object) {
  if (isArray$8(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol$3(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

var _isKey = isKey$2;

var isSymbol$4 = isSymbol_1;

/** Used as references for various `Number` constants. */
var INFINITY$2 = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey$2(value) {
  if (typeof value == 'string' || isSymbol$4(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY$2) ? '-0' : result;
}

var _toKey = toKey$2;

var castPath = _castPath;
var isKey$1 = _isKey;
var toKey$1 = _toKey;

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet$1(object, path) {
  path = isKey$1(path, object) ? [path] : castPath(path);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey$1(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

var _baseGet = baseGet$1;

var baseGet = _baseGet;

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get$2(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

var get_1 = get$2;

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn$1(object, key) {
  return object != null && key in Object(object);
}

var _baseHasIn = baseHasIn$1;

var castPath$2 = _castPath;
var isArguments$2 = isArguments_1;
var isArray$9 = isArray_1;
var isIndex$3 = _isIndex;
var isKey$3 = _isKey;
var isLength$3 = isLength_1;
var toKey$3 = _toKey;

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath$1(object, path, hasFunc) {
  path = isKey$3(path, object) ? [path] : castPath$2(path);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey$3(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object ? object.length : 0;
  return !!length && isLength$3(length) && isIndex$3(key, length) &&
    (isArray$9(object) || isArguments$2(object));
}

var _hasPath = hasPath$1;

var baseHasIn = _baseHasIn;
var hasPath = _hasPath;

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn$1(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

var hasIn_1 = hasIn$1;

var baseIsEqual$2 = _baseIsEqual;
var get$1 = get_1;
var hasIn = hasIn_1;
var isKey = _isKey;
var isStrictComparable$2 = _isStrictComparable;
var matchesStrictComparable$2 = _matchesStrictComparable;
var toKey = _toKey;

/** Used to compose bitmasks for comparison styles. */
var UNORDERED_COMPARE_FLAG$3 = 1;
var PARTIAL_COMPARE_FLAG$5 = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty$1(path, srcValue) {
  if (isKey(path) && isStrictComparable$2(srcValue)) {
    return matchesStrictComparable$2(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get$1(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual$2(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG$3 | PARTIAL_COMPARE_FLAG$5);
  };
}

var _baseMatchesProperty = baseMatchesProperty$1;

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty$1(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

var _baseProperty = baseProperty$1;

var baseGet$2 = _baseGet;

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep$1(path) {
  return function(object) {
    return baseGet$2(object, path);
  };
}

var _basePropertyDeep = basePropertyDeep$1;

var baseProperty = _baseProperty;
var basePropertyDeep = _basePropertyDeep;
var isKey$4 = _isKey;
var toKey$4 = _toKey;

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property$1(path) {
  return isKey$4(path) ? baseProperty(toKey$4(path)) : basePropertyDeep(path);
}

var property_1 = property$1;

var baseMatches = _baseMatches;
var baseMatchesProperty = _baseMatchesProperty;
var identity$3 = identity_1;
var isArray$5 = isArray_1;
var property = property_1;

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee$1(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity$3;
  }
  if (typeof value == 'object') {
    return isArray$5(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

var _baseIteratee = baseIteratee$1;

var baseClone$2 = _baseClone;
var baseIteratee = _baseIteratee;

/**
 * Creates a function that invokes `func` with the arguments of the created
 * function. If `func` is a property name, the created function returns the
 * property value for a given element. If `func` is an array or object, the
 * created function returns `true` for elements that contain the equivalent
 * source properties, otherwise it returns `false`.
 *
 * @static
 * @since 4.0.0
 * @memberOf _
 * @category Util
 * @param {*} [func=_.identity] The value to convert to a callback.
 * @returns {Function} Returns the callback.
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': true },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * // The `_.matches` iteratee shorthand.
 * _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
 * // => [{ 'user': 'barney', 'age': 36, 'active': true }]
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.filter(users, _.iteratee(['user', 'fred']));
 * // => [{ 'user': 'fred', 'age': 40 }]
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, _.iteratee('user'));
 * // => ['barney', 'fred']
 *
 * // Create custom iteratee shorthands.
 * _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
 *   return !_.isRegExp(func) ? iteratee(func) : function(string) {
 *     return func.test(string);
 *   };
 * });
 *
 * _.filter(['abc', 'def'], /ef/);
 * // => ['def']
 */
function iteratee(func) {
  return baseIteratee(typeof func == 'function' ? func : baseClone$2(func, true));
}

var iteratee_1 = iteratee;

var Symbol$4 = _Symbol;
var isArguments$3 = isArguments_1;
var isArray$10 = isArray_1;

/** Built-in value references. */
var spreadableSymbol = Symbol$4 ? Symbol$4.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable$1(value) {
  return isArray$10(value) || isArguments$3(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

var _isFlattenable = isFlattenable$1;

var arrayPush$2 = _arrayPush;
var isFlattenable = _isFlattenable;

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten$1(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten$1(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush$2(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

var _baseFlatten = baseFlatten$1;

var baseFlatten = _baseFlatten;

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten$1(array) {
  var length = array ? array.length : 0;
  return length ? baseFlatten(array, 1) : [];
}

var flatten_1 = flatten$1;

var apply$3 = _apply;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax$3 = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest$1(func, start, transform) {
  start = nativeMax$3(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax$3(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply$3(func, this, otherArgs);
  };
}

var _overRest = overRest$1;

var flatten = flatten_1;
var overRest = _overRest;
var setToString$2 = _setToString;

/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest$1(func) {
  return setToString$2(overRest(func, undefined, flatten), func + '');
}

var _flatRest = flatRest$1;

var createWrap$3 = _createWrap;
var flatRest = _flatRest;

/** Used to compose bitmasks for function metadata. */
var REARG_FLAG$2 = 256;

/**
 * Creates a function that invokes `func` with arguments arranged according
 * to the specified `indexes` where the argument value at the first index is
 * provided as the first argument, the argument value at the second index is
 * provided as the second argument, and so on.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {Function} func The function to rearrange arguments for.
 * @param {...(number|number[])} indexes The arranged argument indexes.
 * @returns {Function} Returns the new function.
 * @example
 *
 * var rearged = _.rearg(function(a, b, c) {
 *   return [a, b, c];
 * }, [2, 0, 1]);
 *
 * rearged('b', 'c', 'a')
 * // => ['a', 'b', 'c']
 */
var rearg = flatRest(function(func, indexes) {
  return createWrap$3(func, REARG_FLAG$2, undefined, undefined, undefined, indexes);
});

var rearg_1 = rearg;

var identity$4 = identity_1;
var overRest$2 = _overRest;
var setToString$3 = _setToString;

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest$1(func, start) {
  return setToString$3(overRest$2(func, start, identity$4), func + '');
}

var _baseRest = baseRest$1;

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice$1(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

var _baseSlice = baseSlice$1;

var baseSlice = _baseSlice;

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice$1(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return (!start && end >= length) ? array : baseSlice(array, start, end);
}

var _castSlice = castSlice$1;

var apply$4 = _apply;
var arrayPush$3 = _arrayPush;
var baseRest = _baseRest;
var castSlice = _castSlice;
var toInteger$2 = toInteger_1;

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT$2 = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax$4 = Math.max;

/**
 * Creates a function that invokes `func` with the `this` binding of the
 * create function and an array of arguments much like
 * [`Function#apply`](http://www.ecma-international.org/ecma-262/7.0/#sec-function.prototype.apply).
 *
 * **Note:** This method is based on the
 * [spread operator](https://mdn.io/spread_operator).
 *
 * @static
 * @memberOf _
 * @since 3.2.0
 * @category Function
 * @param {Function} func The function to spread arguments over.
 * @param {number} [start=0] The start position of the spread.
 * @returns {Function} Returns the new function.
 * @example
 *
 * var say = _.spread(function(who, what) {
 *   return who + ' says ' + what;
 * });
 *
 * say(['fred', 'hello']);
 * // => 'fred says hello'
 *
 * var numbers = Promise.all([
 *   Promise.resolve(40),
 *   Promise.resolve(36)
 * ]);
 *
 * numbers.then(_.spread(function(x, y) {
 *   return x + y;
 * }));
 * // => a Promise of 76
 */
function spread(func, start) {
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT$2);
  }
  start = start === undefined ? 0 : nativeMax$4(toInteger$2(start), 0);
  return baseRest(function(args) {
    var array = args[start],
        otherArgs = castSlice(args, 0, start);

    if (array) {
      arrayPush$3(otherArgs, array);
    }
    return apply$4(func, this, otherArgs);
  });
}

var spread_1 = spread;

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap$1(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

var _arrayMap = arrayMap$1;

var arrayMap = _arrayMap;
var copyArray$4 = _copyArray;
var isArray$11 = isArray_1;
var isSymbol$5 = isSymbol_1;
var stringToPath$2 = _stringToPath;
var toKey$5 = _toKey;

/**
 * Converts `value` to a property path array.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Util
 * @param {*} value The value to convert.
 * @returns {Array} Returns the new property path array.
 * @example
 *
 * _.toPath('a.b.c');
 * // => ['a', 'b', 'c']
 *
 * _.toPath('a[0].b.c');
 * // => ['a', '0', 'b', 'c']
 */
function toPath(value) {
  if (isArray$11(value)) {
    return arrayMap(value, toKey$5);
  }
  return isSymbol$5(value) ? [value] : copyArray$4(stringToPath$2(value));
}

var toPath_1 = toPath;

var _util = {
  'ary': ary_1,
  'assign': _baseAssign,
  'clone': clone_1,
  'curry': curry_1,
  'forEach': _arrayEach,
  'isArray': isArray_1,
  'isFunction': isFunction_1,
  'iteratee': iteratee_1,
  'keys': _baseKeys,
  'rearg': rearg_1,
  'spread': spread_1,
  'toInteger': toInteger_1,
  'toPath': toPath_1
};

var baseConvert = _baseConvert;
var util = _util;

/**
 * Converts `func` of `name` to an immutable auto-curried iteratee-first data-last
 * version with conversion `options` applied. If `name` is an object its methods
 * will be converted.
 *
 * @param {string} name The name of the function to wrap.
 * @param {Function} [func] The function to wrap.
 * @param {Object} [options] The options object. See `baseConvert` for more details.
 * @returns {Function|Object} Returns the converted function or object.
 */
function convert$1(name, func, options) {
  return baseConvert(util, name, func, options);
}

var convert_1 = convert$1;

var convert = convert_1;
var func = convert('get', get_1);

func.placeholder = placeholder$1;
var get = func;

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor$1(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

var _createBaseFor = createBaseFor$1;

var createBaseFor = _createBaseFor;

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor$1 = createBaseFor();

var _baseFor = baseFor$1;

var baseFor = _baseFor;
var keys$6 = keys_1;

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn$1(object, iteratee) {
  return object && baseFor(object, iteratee, keys$6);
}

var _baseForOwn = baseForOwn$1;

var isArrayLike$4 = isArrayLike_1;

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach$1(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike$4(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

var _createBaseEach = createBaseEach$1;

var baseForOwn = _baseForOwn;
var createBaseEach = _createBaseEach;

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach$1 = createBaseEach(baseForOwn);

var _baseEach = baseEach$1;

var baseEach = _baseEach;
var isArrayLike$3 = isArrayLike_1;

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap$1(collection, iteratee) {
  var index = -1,
      result = isArrayLike$3(collection) ? Array(collection.length) : [];

  baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

var _baseMap = baseMap$1;

var arrayMap$2 = _arrayMap;
var baseIteratee$2 = _baseIteratee;
var baseMap = _baseMap;
var isArray$12 = isArray_1;

/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */
function map$1(collection, iteratee) {
  var func = isArray$12(collection) ? arrayMap$2 : baseMap;
  return func(collection, baseIteratee$2(iteratee, 3));
}

var map_1 = map$1;

var convert$2 = convert_1;
var func$1 = convert$2('map', map_1);

func$1.placeholder = placeholder$1;
var map = func$1;

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith$1(array, value, comparator) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

var _arrayIncludesWith = arrayIncludesWith$1;

var SetCache$2 = _SetCache;
var arrayIncludes$2 = _arrayIncludes;
var arrayIncludesWith = _arrayIncludesWith;
var arrayMap$3 = _arrayMap;
var baseUnary$2 = _baseUnary;
var cacheHas$2 = _cacheHas;

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE$1 = 200;

/**
 * The base implementation of methods like `_.difference` without support
 * for excluding multiple arrays or iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Array} values The values to exclude.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 */
function baseDifference$1(array, values, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes$2,
      isCommon = true,
      length = array.length,
      result = [],
      valuesLength = values.length;

  if (!length) {
    return result;
  }
  if (iteratee) {
    values = arrayMap$3(values, baseUnary$2(iteratee));
  }
  if (comparator) {
    includes = arrayIncludesWith;
    isCommon = false;
  }
  else if (values.length >= LARGE_ARRAY_SIZE$1) {
    includes = cacheHas$2;
    isCommon = false;
    values = new SetCache$2(values);
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var valuesIndex = valuesLength;
      while (valuesIndex--) {
        if (values[valuesIndex] === computed) {
          continue outer;
        }
      }
      result.push(value);
    }
    else if (!includes(values, computed, comparator)) {
      result.push(value);
    }
  }
  return result;
}

var _baseDifference = baseDifference$1;

/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last$1(array) {
  var length = array ? array.length : 0;
  return length ? array[length - 1] : undefined;
}

var last_1 = last$1;

var baseDifference = _baseDifference;
var baseFlatten$2 = _baseFlatten;
var baseRest$2 = _baseRest;
var isArrayLikeObject$2 = isArrayLikeObject_1;
var last = last_1;

/**
 * This method is like `_.difference` except that it accepts `comparator`
 * which is invoked to compare elements of `array` to `values`. The order and
 * references of result values are determined by the first array. The comparator
 * is invoked with two arguments: (arrVal, othVal).
 *
 * **Note:** Unlike `_.pullAllWith`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...Array} [values] The values to exclude.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
 *
 * _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
 * // => [{ 'x': 2, 'y': 1 }]
 */
var differenceWith$1 = baseRest$2(function(array, values) {
  var comparator = last(values);
  if (isArrayLikeObject$2(comparator)) {
    comparator = undefined;
  }
  return isArrayLikeObject$2(array)
    ? baseDifference(array, baseFlatten$2(values, 1, isArrayLikeObject$2, true), undefined, comparator)
    : [];
});

var differenceWith_1 = differenceWith$1;

var convert$3 = convert_1;
var func$2 = convert$3('differenceWith', differenceWith_1);

func$2.placeholder = placeholder$1;
var differenceWith = func$2;

var convert$4 = convert_1;
var func$3 = convert$4('curry', curry_1);

func$3.placeholder = placeholder$1;
var curry$2 = func$3;

var _this = undefined;

function Point() {
  throw new Error('Shoud be called with `.of`');
}

Point.of = config => {
  const instance = Object.create(Point.prototype, {
    id: config.id,
    marker: config.marker,
    location: config.location
  });
  Object.preventExtensions(instance);
};

Point.isSame = curry$2((p1, p2) => {
  p1.isSame(p2);
});

Point.prototype.isSame = point => {
  return point.id === _this.id;
};

Point.prototype.with = curry$2((prop, val) => {
  const newConfig = Object.assign({}, _this, { [prop]: val });
  return Point.of(newConfig);
});

/**
 * @public
 * @function addMarker
 * @param {MapDriver} - mapDriver
 * @param {Point} - point
 * @return {Point} - a new point with a marker
 */
const addMarker = curry$2((mapDriver, point) => {
  const marker = mapDriver.createMarker({
    lat: point.location.lat,
    lng: point.location.lng,
    icon: point.icon,
    optimized: false, // Info window receives a function to be called
    // when marker is clicked. Should return an HTMLElement.
    infoWindow: '<h1>Oh yeah!</h1>'
  });

  return point.with('marker', marker);
});

const removeMarker = curry$2((mapDriver, point) => {
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
function removeMissingPoints(mapDriver, oldPoints, newPoints) {
  // points in oldPoints but not in newPoints
  differenceWith(Point.isSame, oldPoints, newPoints).map(removeMarker(mapDriver));
  return newPoints;
}

/**
 * @method addNewPointsToMap
 * @param  {MapDriver} mapDriver
 * @param  {Array<Point>} oldPoints
 * @param  {Array<Point>} newPoints
 * @return {Array<Point>} newPoints with added points containing markers
 */
function addNewPointsToMap(mapDriver, oldPoints, newPoints) {
  // points in newPoints but not in oldPoints
  const pointsToAdd = differenceWith(Point.isSame, newPoints, oldPoints);

  return newPoints.map(p => {
    const toBeAdded = !!pointsToAdd.find(Point.isSame(p));
    return toBeAdded ? addMarker(mapDriver, p) : p;
  });
}

/**
 * @method moveChangedPoints
 * @param  {MapDriver} mapDriver
 * @param  {Array<Point>} oldPoints
 * @param  {Array<Point>} newPoints
 * @return {Array<Point>} newPoints with references to moved markers
 */
function moveChangedPoints(mapDriver, oldPoints, newPoints) {
  const newPointsWithMarkers = newPoints.map(p => {
    const oldEquivalent = oldPoints.find(Point.isSame(p));
    return oldEquivalent ? p.with('marker', oldEquivalent.marker) : p;
  });

  newPointsWithMarkers.forEach(p => p.marker ? mapDriver.moveMarker(p.marker, p.location) : null);
  return newPointsWithMarkers;
}

var lodash_min = createCommonjsModule(function (module, exports) {
/**
 * @license
 * lodash lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 */
(function(){function t(t,n){return t.set(n[0],n[1]),t}function n(t,n){return t.add(n),t}function r(t,n,r){switch(r.length){case 0:return t.call(n);case 1:return t.call(n,r[0]);case 2:return t.call(n,r[0],r[1]);case 3:return t.call(n,r[0],r[1],r[2])}return t.apply(n,r)}function e(t,n,r,e){for(var u=-1,i=t?t.length:0;++u<i;){var o=t[u];n(e,o,r(o),t)}return e}function u(t,n){for(var r=-1,e=t?t.length:0;++r<e&&false!==n(t[r],r,t););return t}function i(t,n){for(var r=t?t.length:0;r--&&false!==n(t[r],r,t););
return t}function o(t,n){for(var r=-1,e=t?t.length:0;++r<e;)if(!n(t[r],r,t))return false;return true}function f(t,n){for(var r=-1,e=t?t.length:0,u=0,i=[];++r<e;){var o=t[r];n(o,r,t)&&(i[u++]=o)}return i}function c(t,n){return!(!t||!t.length)&&-1<d(t,n,0)}function a(t,n,r){for(var e=-1,u=t?t.length:0;++e<u;)if(r(n,t[e]))return true;return false}function l(t,n){for(var r=-1,e=t?t.length:0,u=Array(e);++r<e;)u[r]=n(t[r],r,t);return u}function s(t,n){for(var r=-1,e=n.length,u=t.length;++r<e;)t[u+r]=n[r];return t}function h(t,n,r,e){
var u=-1,i=t?t.length:0;for(e&&i&&(r=t[++u]);++u<i;)r=n(r,t[u],u,t);return r}function p(t,n,r,e){var u=t?t.length:0;for(e&&u&&(r=t[--u]);u--;)r=n(r,t[u],u,t);return r}function _(t,n){for(var r=-1,e=t?t.length:0;++r<e;)if(n(t[r],r,t))return true;return false}function v(t,n,r){var e;return r(t,function(t,r,u){if(n(t,r,u))return e=r,false}),e}function g(t,n,r,e){var u=t.length;for(r+=e?1:-1;e?r--:++r<u;)if(n(t[r],r,t))return r;return-1}function d(t,n,r){if(n===n)t:{--r;for(var e=t.length;++r<e;)if(t[r]===n){t=r;
break t}t=-1}else t=g(t,b,r);return t}function y(t,n,r,e){--r;for(var u=t.length;++r<u;)if(e(t[r],n))return r;return-1}function b(t){return t!==t}function x(t,n){var r=t?t.length:0;return r?k(t,n)/r:P}function j(t){return function(n){return null==n?F:n[t]}}function w(t){return function(n){return null==t?F:t[n]}}function m(t,n,r,e,u){return u(t,function(t,u,i){r=e?(e=false,t):n(r,t,u,i)}),r}function A(t,n){var r=t.length;for(t.sort(n);r--;)t[r]=t[r].c;return t}function k(t,n){for(var r,e=-1,u=t.length;++e<u;){
var i=n(t[e]);i!==F&&(r=r===F?i:r+i)}return r}function E(t,n){for(var r=-1,e=Array(t);++r<t;)e[r]=n(r);return e}function O(t,n){return l(n,function(n){return[n,t[n]]})}function S(t){return function(n){return t(n)}}function I(t,n){return l(n,function(n){return t[n]})}function R(t,n){return t.has(n)}function z(t,n){for(var r=-1,e=t.length;++r<e&&-1<d(n,t[r],0););return r}function W(t,n){for(var r=t.length;r--&&-1<d(n,t[r],0););return r}function B(t){return"\\"+Dt[t]}function L(t){var n=-1,r=Array(t.size);
return t.forEach(function(t,e){r[++n]=[e,t]}),r}function C(t,n){return function(r){return t(n(r))}}function U(t,n){for(var r=-1,e=t.length,u=0,i=[];++r<e;){var o=t[r];o!==n&&"__lodash_placeholder__"!==o||(t[r]="__lodash_placeholder__",i[u++]=r)}return i}function M(t){var n=-1,r=Array(t.size);return t.forEach(function(t){r[++n]=t}),r}function D(t){var n=-1,r=Array(t.size);return t.forEach(function(t){r[++n]=[t,t]}),r}function T(t){if(Wt.test(t)){for(var n=Rt.lastIndex=0;Rt.test(t);)++n;t=n}else t=tn(t);
return t}function $(t){return Wt.test(t)?t.match(Rt)||[]:t.split("")}var F,N=1/0,P=NaN,Z=[["ary",128],["bind",1],["bindKey",2],["curry",8],["curryRight",16],["flip",512],["partial",32],["partialRight",64],["rearg",256]],q=/\b__p\+='';/g,V=/\b(__p\+=)''\+/g,K=/(__e\(.*?\)|\b__t\))\+'';/g,G=/&(?:amp|lt|gt|quot|#39);/g,J=/[&<>"']/g,Y=RegExp(G.source),H=RegExp(J.source),Q=/<%-([\s\S]+?)%>/g,X=/<%([\s\S]+?)%>/g,tt=/<%=([\s\S]+?)%>/g,nt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,rt=/^\w*$/,et=/^\./,ut=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,it=/[\\^$.*+?()[\]{}|]/g,ot=RegExp(it.source),ft=/^\s+|\s+$/g,ct=/^\s+/,at=/\s+$/,lt=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,st=/\{\n\/\* \[wrapped with (.+)\] \*/,ht=/,? & /,pt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,_t=/\\(\\)?/g,vt=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,gt=/\w*$/,dt=/^[-+]0x[0-9a-f]+$/i,yt=/^0b[01]+$/i,bt=/^\[object .+?Constructor\]$/,xt=/^0o[0-7]+$/i,jt=/^(?:0|[1-9]\d*)$/,wt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,mt=/($^)/,At=/['\n\r\u2028\u2029\\]/g,kt="[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|\\ud83c[\\udffb-\\udfff])?(?:\\u200d(?:[^\\ud800-\\udfff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|\\ud83c[\\udffb-\\udfff])?)*",Et="(?:[\\u2700-\\u27bf]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])"+kt,Ot="(?:[^\\ud800-\\udfff][\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]?|[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\ud800-\\udfff])",St=RegExp("['\u2019]","g"),It=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]","g"),Rt=RegExp("\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|"+Ot+kt,"g"),zt=RegExp(["[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+(?:['\u2019](?:d|ll|m|re|s|t|ve))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde]|$)|(?:[A-Z\\xc0-\\xd6\\xd8-\\xde]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['\u2019](?:D|LL|M|RE|S|T|VE))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde](?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])|$)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?(?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['\u2019](?:d|ll|m|re|s|t|ve))?|[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?:['\u2019](?:D|LL|M|RE|S|T|VE))?|\\d+",Et].join("|"),"g"),Wt=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),Bt=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Lt="Array Buffer DataView Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Map Math Object Promise RegExp Set String Symbol TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap _ clearTimeout isFinite parseInt setTimeout".split(" "),Ct={};
Ct["[object Float32Array]"]=Ct["[object Float64Array]"]=Ct["[object Int8Array]"]=Ct["[object Int16Array]"]=Ct["[object Int32Array]"]=Ct["[object Uint8Array]"]=Ct["[object Uint8ClampedArray]"]=Ct["[object Uint16Array]"]=Ct["[object Uint32Array]"]=true,Ct["[object Arguments]"]=Ct["[object Array]"]=Ct["[object ArrayBuffer]"]=Ct["[object Boolean]"]=Ct["[object DataView]"]=Ct["[object Date]"]=Ct["[object Error]"]=Ct["[object Function]"]=Ct["[object Map]"]=Ct["[object Number]"]=Ct["[object Object]"]=Ct["[object RegExp]"]=Ct["[object Set]"]=Ct["[object String]"]=Ct["[object WeakMap]"]=false;
var Ut={};Ut["[object Arguments]"]=Ut["[object Array]"]=Ut["[object ArrayBuffer]"]=Ut["[object DataView]"]=Ut["[object Boolean]"]=Ut["[object Date]"]=Ut["[object Float32Array]"]=Ut["[object Float64Array]"]=Ut["[object Int8Array]"]=Ut["[object Int16Array]"]=Ut["[object Int32Array]"]=Ut["[object Map]"]=Ut["[object Number]"]=Ut["[object Object]"]=Ut["[object RegExp]"]=Ut["[object Set]"]=Ut["[object String]"]=Ut["[object Symbol]"]=Ut["[object Uint8Array]"]=Ut["[object Uint8ClampedArray]"]=Ut["[object Uint16Array]"]=Ut["[object Uint32Array]"]=true,
Ut["[object Error]"]=Ut["[object Function]"]=Ut["[object WeakMap]"]=false;var Mt,Dt={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Tt=parseFloat,$t=parseInt,Ft=typeof commonjsGlobal=="object"&&commonjsGlobal&&commonjsGlobal.Object===Object&&commonjsGlobal,Nt=typeof self=="object"&&self&&self.Object===Object&&self,Pt=Ft||Nt||Function("return this")(),Zt=typeof exports=="object"&&exports&&!exports.nodeType&&exports,qt=Zt&&typeof module=="object"&&module&&!module.nodeType&&module,Vt=qt&&qt.exports===Zt,Kt=Vt&&Ft.g;
t:{try{Mt=Kt&&Kt.f("util");break t}catch(t){}Mt=void 0}var Gt=Mt&&Mt.isArrayBuffer,Jt=Mt&&Mt.isDate,Yt=Mt&&Mt.isMap,Ht=Mt&&Mt.isRegExp,Qt=Mt&&Mt.isSet,Xt=Mt&&Mt.isTypedArray,tn=j("length"),nn=w({"\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a","\xc7":"C","\xe7":"c","\xd0":"D","\xf0":"d","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I",
"\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xd1":"N","\xf1":"n","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xdd":"Y","\xfd":"y","\xff":"y","\xc6":"Ae","\xe6":"ae","\xde":"Th","\xfe":"th","\xdf":"ss","\u0100":"A","\u0102":"A","\u0104":"A","\u0101":"a","\u0103":"a","\u0105":"a","\u0106":"C","\u0108":"C","\u010a":"C","\u010c":"C",
"\u0107":"c","\u0109":"c","\u010b":"c","\u010d":"c","\u010e":"D","\u0110":"D","\u010f":"d","\u0111":"d","\u0112":"E","\u0114":"E","\u0116":"E","\u0118":"E","\u011a":"E","\u0113":"e","\u0115":"e","\u0117":"e","\u0119":"e","\u011b":"e","\u011c":"G","\u011e":"G","\u0120":"G","\u0122":"G","\u011d":"g","\u011f":"g","\u0121":"g","\u0123":"g","\u0124":"H","\u0126":"H","\u0125":"h","\u0127":"h","\u0128":"I","\u012a":"I","\u012c":"I","\u012e":"I","\u0130":"I","\u0129":"i","\u012b":"i","\u012d":"i","\u012f":"i",
"\u0131":"i","\u0134":"J","\u0135":"j","\u0136":"K","\u0137":"k","\u0138":"k","\u0139":"L","\u013b":"L","\u013d":"L","\u013f":"L","\u0141":"L","\u013a":"l","\u013c":"l","\u013e":"l","\u0140":"l","\u0142":"l","\u0143":"N","\u0145":"N","\u0147":"N","\u014a":"N","\u0144":"n","\u0146":"n","\u0148":"n","\u014b":"n","\u014c":"O","\u014e":"O","\u0150":"O","\u014d":"o","\u014f":"o","\u0151":"o","\u0154":"R","\u0156":"R","\u0158":"R","\u0155":"r","\u0157":"r","\u0159":"r","\u015a":"S","\u015c":"S","\u015e":"S",
"\u0160":"S","\u015b":"s","\u015d":"s","\u015f":"s","\u0161":"s","\u0162":"T","\u0164":"T","\u0166":"T","\u0163":"t","\u0165":"t","\u0167":"t","\u0168":"U","\u016a":"U","\u016c":"U","\u016e":"U","\u0170":"U","\u0172":"U","\u0169":"u","\u016b":"u","\u016d":"u","\u016f":"u","\u0171":"u","\u0173":"u","\u0174":"W","\u0175":"w","\u0176":"Y","\u0177":"y","\u0178":"Y","\u0179":"Z","\u017b":"Z","\u017d":"Z","\u017a":"z","\u017c":"z","\u017e":"z","\u0132":"IJ","\u0133":"ij","\u0152":"Oe","\u0153":"oe","\u0149":"'n",
"\u017f":"s"}),rn=w({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}),en=w({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"}),un=function w(kt){function Et(t){return ni.call(t)}function Ot(t){if(au(t)&&!Ko(t)&&!(t instanceof Dt)){if(t instanceof Mt)return t;if(Qu.call(t,"__wrapped__"))return ze(t)}return new Mt(t)}function Rt(){}function Mt(t,n){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!n,this.__index__=0,this.__values__=F}function Dt(t){this.__wrapped__=t,this.__actions__=[],
this.__dir__=1,this.__filtered__=false,this.__iteratees__=[],this.__takeCount__=4294967295,this.__views__=[]}function Ft(t){var n=-1,r=t?t.length:0;for(this.clear();++n<r;){var e=t[n];this.set(e[0],e[1])}}function Nt(t){var n=-1,r=t?t.length:0;for(this.clear();++n<r;){var e=t[n];this.set(e[0],e[1])}}function Zt(t){var n=-1,r=t?t.length:0;for(this.clear();++n<r;){var e=t[n];this.set(e[0],e[1])}}function qt(t){var n=-1,r=t?t.length:0;for(this.__data__=new Zt;++n<r;)this.add(t[n])}function Kt(t){this.size=(this.__data__=new Nt(t)).size;
}function tn(t,n){var r,e=Ko(t)||nu(t)?E(t.length,qu):[],u=e.length,i=!!u;for(r in t)!n&&!Qu.call(t,r)||i&&("length"==r||ge(r,u))||e.push(r);return e}function on(t,n,r,e){return t===F||tu(t,Gu[r])&&!Qu.call(e,r)?n:t}function fn(t,n,r){(r===F||tu(t[n],r))&&(typeof n!="number"||r!==F||n in t)||hn(t,n,r)}function cn(t,n,r){var e=t[n];Qu.call(t,n)&&tu(e,r)&&(r!==F||n in t)||hn(t,n,r)}function an(t,n){for(var r=t.length;r--;)if(tu(t[r][0],n))return r;return-1}function ln(t,n,r,e){return Ki(t,function(t,u,i){
n(e,t,r(t),i)}),e}function sn(t,n){return t&&zr(n,mu(n),t)}function hn(t,n,r){"__proto__"==n&&fi?fi(t,n,{configurable:true,enumerable:true,value:r,writable:true}):t[n]=r}function pn(t,n){for(var r=-1,e=null==t,u=n.length,i=Du(u);++r<u;)i[r]=e?F:ju(t,n[r]);return i}function _n(t,n,r){return t===t&&(r!==F&&(t=t<=r?t:r),n!==F&&(t=t>=n?t:n)),t}function vn(t,n,r,e,i,o,f){var c;if(e&&(c=o?e(t,i,o,f):e(t)),c!==F)return c;if(!cu(t))return t;if(i=Ko(t)){if(c=he(t),!n)return Rr(t,c)}else{var a=Et(t),l="[object Function]"==a||"[object GeneratorFunction]"==a;
if(Jo(t))return kr(t,n);if("[object Object]"==a||"[object Arguments]"==a||l&&!o){if(c=pe(l?{}:t),!n)return Wr(t,sn(c,t))}else{if(!Ut[a])return o?t:{};c=_e(t,a,vn,n)}}if(f||(f=new Kt),o=f.get(t))return o;if(f.set(t,c),!i)var s=r?In(t,mu,ro):mu(t);return u(s||t,function(u,i){s&&(i=u,u=t[i]),cn(c,i,vn(u,n,r,e,i,t,f))}),c}function gn(t){var n=mu(t);return function(r){return dn(r,t,n)}}function dn(t,n,r){var e=r.length;if(null==t)return!e;for(t=Pu(t);e--;){var u=r[e],i=n[u],o=t[u];if(o===F&&!(u in t)||!i(o))return false;
}return true}function yn(t){return cu(t)?li(t):{}}function bn(t,n,r){if(typeof t!="function")throw new Vu("Expected a function");return oo(function(){t.apply(F,r)},n)}function xn(t,n,r,e){var u=-1,i=c,o=true,f=t.length,s=[],h=n.length;if(!f)return s;r&&(n=l(n,S(r))),e?(i=a,o=false):200<=n.length&&(i=R,o=false,n=new qt(n));t:for(;++u<f;){var p=t[u],_=r?r(p):p,p=e||0!==p?p:0;if(o&&_===_){for(var v=h;v--;)if(n[v]===_)continue t;s.push(p)}else i(n,_,e)||s.push(p)}return s}function jn(t,n){var r=true;return Ki(t,function(t,e,u){
return r=!!n(t,e,u)}),r}function wn(t,n,r){for(var e=-1,u=t.length;++e<u;){var i=t[e],o=n(i);if(null!=o&&(f===F?o===o&&!pu(o):r(o,f)))var f=o,c=i}return c}function mn(t,n){var r=[];return Ki(t,function(t,e,u){n(t,e,u)&&r.push(t)}),r}function An(t,n,r,e,u){var i=-1,o=t.length;for(r||(r=ve),u||(u=[]);++i<o;){var f=t[i];0<n&&r(f)?1<n?An(f,n-1,r,e,u):s(u,f):e||(u[u.length]=f)}return u}function kn(t,n){return t&&Ji(t,n,mu)}function En(t,n){return t&&Yi(t,n,mu)}function On(t,n){return f(n,function(n){return iu(t[n]);
})}function Sn(t,n){n=ye(n,t)?[n]:mr(n);for(var r=0,e=n.length;null!=t&&r<e;)t=t[Se(n[r++])];return r&&r==e?t:F}function In(t,n,r){return n=n(t),Ko(t)?n:s(n,r(t))}function Rn(t,n){return t>n}function zn(t,n){return null!=t&&Qu.call(t,n)}function Wn(t,n){return null!=t&&n in Pu(t)}function Bn(t,n,r){for(var e=r?a:c,u=t[0].length,i=t.length,o=i,f=Du(i),s=1/0,h=[];o--;){var p=t[o];o&&n&&(p=l(p,S(n))),s=ki(p.length,s),f[o]=!r&&(n||120<=u&&120<=p.length)?new qt(o&&p):F}var p=t[0],_=-1,v=f[0];t:for(;++_<u&&h.length<s;){
var g=p[_],d=n?n(g):g,g=r||0!==g?g:0;if(v?!R(v,d):!e(h,d,r)){for(o=i;--o;){var y=f[o];if(y?!R(y,d):!e(t[o],d,r))continue t}v&&v.push(d),h.push(g)}}return h}function Ln(t,n,r){var e={};return kn(t,function(t,u,i){n(e,r(t),u,i)}),e}function Cn(t,n,e){return ye(n,t)||(n=mr(n),t=Ae(t,n),n=Ue(n)),n=null==t?t:t[Se(n)],null==n?F:r(n,t,e)}function Un(t){return au(t)&&"[object ArrayBuffer]"==ni.call(t)}function Mn(t){return au(t)&&"[object Date]"==ni.call(t)}function Dn(t,n,r,e,u){if(t===n)n=true;else if(null==t||null==n||!cu(t)&&!au(n))n=t!==t&&n!==n;else t:{
var i=Ko(t),o=Ko(n),f="[object Array]",c="[object Array]";i||(f=Et(t),f="[object Arguments]"==f?"[object Object]":f),o||(c=Et(n),c="[object Arguments]"==c?"[object Object]":c);var a="[object Object]"==f,o="[object Object]"==c;if((c=f==c)&&!a)u||(u=new Kt),n=i||tf(t)?re(t,n,Dn,r,e,u):ee(t,n,f,Dn,r,e,u);else{if(!(2&e)&&(i=a&&Qu.call(t,"__wrapped__"),f=o&&Qu.call(n,"__wrapped__"),i||f)){t=i?t.value():t,n=f?n.value():n,u||(u=new Kt),n=Dn(t,n,r,e,u);break t}if(c)n:if(u||(u=new Kt),i=2&e,f=mu(t),o=f.length,
c=mu(n).length,o==c||i){for(a=o;a--;){var l=f[a];if(!(i?l in n:Qu.call(n,l))){n=false;break n}}if((c=u.get(t))&&u.get(n))n=c==n;else{c=true,u.set(t,n),u.set(n,t);for(var s=i;++a<o;){var l=f[a],h=t[l],p=n[l];if(r)var _=i?r(p,h,l,n,t,u):r(h,p,l,t,n,u);if(_===F?h!==p&&!Dn(h,p,r,e,u):!_){c=false;break}s||(s="constructor"==l)}c&&!s&&(r=t.constructor,e=n.constructor,r!=e&&"constructor"in t&&"constructor"in n&&!(typeof r=="function"&&r instanceof r&&typeof e=="function"&&e instanceof e)&&(c=false)),u.delete(t),u.delete(n),
n=c}}else n=false;else n=false}}return n}function Tn(t){return au(t)&&"[object Map]"==Et(t)}function $n(t,n,r,e){var u=r.length,i=u,o=!e;if(null==t)return!i;for(t=Pu(t);u--;){var f=r[u];if(o&&f[2]?f[1]!==t[f[0]]:!(f[0]in t))return false}for(;++u<i;){var f=r[u],c=f[0],a=t[c],l=f[1];if(o&&f[2]){if(a===F&&!(c in t))return false}else{if(f=new Kt,e)var s=e(a,l,c,t,n,f);if(s===F?!Dn(l,a,e,3,f):!s)return false}}return true}function Fn(t){return!(!cu(t)||Yu&&Yu in t)&&(iu(t)?ei:bt).test(Ie(t))}function Nn(t){return cu(t)&&"[object RegExp]"==ni.call(t);
}function Pn(t){return au(t)&&"[object Set]"==Et(t)}function Zn(t){return au(t)&&fu(t.length)&&!!Ct[ni.call(t)]}function qn(t){return typeof t=="function"?t:null==t?zu:typeof t=="object"?Ko(t)?Hn(t[0],t[1]):Yn(t):Cu(t)}function Vn(t){if(!xe(t))return mi(t);var n,r=[];for(n in Pu(t))Qu.call(t,n)&&"constructor"!=n&&r.push(n);return r}function Kn(t){if(!cu(t)){var n=[];if(null!=t)for(var r in Pu(t))n.push(r);return n}r=xe(t);var e=[];for(n in t)("constructor"!=n||!r&&Qu.call(t,n))&&e.push(n);return e;
}function Gn(t,n){return t<n}function Jn(t,n){var r=-1,e=ru(t)?Du(t.length):[];return Ki(t,function(t,u,i){e[++r]=n(t,u,i)}),e}function Yn(t){var n=ae(t);return 1==n.length&&n[0][2]?je(n[0][0],n[0][1]):function(r){return r===t||$n(r,t,n)}}function Hn(t,n){return ye(t)&&n===n&&!cu(n)?je(Se(t),n):function(r){var e=ju(r,t);return e===F&&e===n?wu(r,t):Dn(n,e,F,3)}}function Qn(t,n,r,e,i){if(t!==n){if(!Ko(n)&&!tf(n))var o=Kn(n);u(o||n,function(u,f){if(o&&(f=u,u=n[f]),cu(u)){i||(i=new Kt);var c=f,a=i,l=t[c],s=n[c],h=a.get(s);
if(h)fn(t,c,h);else{var h=e?e(l,s,c+"",t,n,a):F,p=h===F;p&&(h=s,Ko(s)||tf(s)?Ko(l)?h=l:eu(l)?h=Rr(l):(p=false,h=vn(s,true)):su(s)||nu(s)?nu(l)?h=bu(l):!cu(l)||r&&iu(l)?(p=false,h=vn(s,true)):h=l:p=false),p&&(a.set(s,h),Qn(h,s,r,e,a),a.delete(s)),fn(t,c,h)}}else c=e?e(t[f],u,f+"",t,n,i):F,c===F&&(c=u),fn(t,f,c)})}}function Xn(t,n){var r=t.length;if(r)return n+=0>n?r:0,ge(n,r)?t[n]:F}function tr(t,n,r){var e=-1;return n=l(n.length?n:[zu],S(fe())),t=Jn(t,function(t){return{a:l(n,function(n){return n(t)}),b:++e,c:t
}}),A(t,function(t,n){var e;t:{e=-1;for(var u=t.a,i=n.a,o=u.length,f=r.length;++e<o;){var c=Or(u[e],i[e]);if(c){e=e>=f?c:c*("desc"==r[e]?-1:1);break t}}e=t.b-n.b}return e})}function nr(t,n){return t=Pu(t),rr(t,n,function(n,r){return r in t})}function rr(t,n,r){for(var e=-1,u=n.length,i={};++e<u;){var o=n[e],f=t[o];r(f,o)&&hn(i,o,f)}return i}function er(t){return function(n){return Sn(n,t)}}function ur(t,n,r,e){var u=e?y:d,i=-1,o=n.length,f=t;for(t===n&&(n=Rr(n)),r&&(f=l(t,S(r)));++i<o;)for(var c=0,a=n[i],a=r?r(a):a;-1<(c=u(f,a,c,e));)f!==t&&hi.call(f,c,1),
hi.call(t,c,1);return t}function ir(t,n){for(var r=t?n.length:0,e=r-1;r--;){var u=n[r];if(r==e||u!==i){var i=u;if(ge(u))hi.call(t,u,1);else if(ye(u,t))delete t[Se(u)];else{var u=mr(u),o=Ae(t,u);null!=o&&delete o[Se(Ue(u))]}}}}function or(t,n){return t+yi(Si()*(n-t+1))}function fr(t,n){var r="";if(!t||1>n||9007199254740991<n)return r;do n%2&&(r+=t),(n=yi(n/2))&&(t+=t);while(n);return r}function cr(t,n){return fo(me(t,n,zu),t+"")}function ar(t,n,r,e){if(!cu(t))return t;n=ye(n,t)?[n]:mr(n);for(var u=-1,i=n.length,o=i-1,f=t;null!=f&&++u<i;){
var c=Se(n[u]),a=r;if(u!=o){var l=f[c],a=e?e(l,c,f):F;a===F&&(a=cu(l)?l:ge(n[u+1])?[]:{})}cn(f,c,a),f=f[c]}return t}function lr(t,n,r){var e=-1,u=t.length;for(0>n&&(n=-n>u?0:u+n),r=r>u?u:r,0>r&&(r+=u),u=n>r?0:r-n>>>0,n>>>=0,r=Du(u);++e<u;)r[e]=t[e+n];return r}function sr(t,n){var r;return Ki(t,function(t,e,u){return r=n(t,e,u),!r}),!!r}function hr(t,n,r){var e=0,u=t?t.length:e;if(typeof n=="number"&&n===n&&2147483647>=u){for(;e<u;){var i=e+u>>>1,o=t[i];null!==o&&!pu(o)&&(r?o<=n:o<n)?e=i+1:u=i}return u;
}return pr(t,n,zu,r)}function pr(t,n,r,e){n=r(n);for(var u=0,i=t?t.length:0,o=n!==n,f=null===n,c=pu(n),a=n===F;u<i;){var l=yi((u+i)/2),s=r(t[l]),h=s!==F,p=null===s,_=s===s,v=pu(s);(o?e||_:a?_&&(e||h):f?_&&h&&(e||!p):c?_&&h&&!p&&(e||!v):p||v?0:e?s<=n:s<n)?u=l+1:i=l}return ki(i,4294967294)}function _r(t,n){for(var r=-1,e=t.length,u=0,i=[];++r<e;){var o=t[r],f=n?n(o):o;if(!r||!tu(f,c)){var c=f;i[u++]=0===o?0:o}}return i}function vr(t){return typeof t=="number"?t:pu(t)?P:+t}function gr(t){if(typeof t=="string")return t;
if(pu(t))return Vi?Vi.call(t):"";var n=t+"";return"0"==n&&1/t==-N?"-0":n}function dr(t,n,r){var e=-1,u=c,i=t.length,o=true,f=[],l=f;if(r)o=false,u=a;else if(200<=i){if(u=n?null:to(t))return M(u);o=false,u=R,l=new qt}else l=n?[]:f;t:for(;++e<i;){var s=t[e],h=n?n(s):s,s=r||0!==s?s:0;if(o&&h===h){for(var p=l.length;p--;)if(l[p]===h)continue t;n&&l.push(h),f.push(s)}else u(l,h,r)||(l!==f&&l.push(h),f.push(s))}return f}function yr(t,n,r,e){for(var u=t.length,i=e?u:-1;(e?i--:++i<u)&&n(t[i],i,t););return r?lr(t,e?0:i,e?i+1:u):lr(t,e?i+1:0,e?u:i);
}function br(t,n){var r=t;return r instanceof Dt&&(r=r.value()),h(n,function(t,n){return n.func.apply(n.thisArg,s([t],n.args))},r)}function xr(t,n,r){for(var e=-1,u=t.length;++e<u;)var i=i?s(xn(i,t[e],n,r),xn(t[e],i,n,r)):t[e];return i&&i.length?dr(i,n,r):[]}function jr(t,n,r){for(var e=-1,u=t.length,i=n.length,o={};++e<u;)r(o,t[e],e<i?n[e]:F);return o}function wr(t){return eu(t)?t:[]}function mr(t){return Ko(t)?t:co(t)}function Ar(t,n,r){var e=t.length;return r=r===F?e:r,!n&&r>=e?t:lr(t,n,r)}function kr(t,n){
if(n)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}function Er(t){var n=new t.constructor(t.byteLength);return new oi(n).set(new oi(t)),n}function Or(t,n){if(t!==n){var r=t!==F,e=null===t,u=t===t,i=pu(t),o=n!==F,f=null===n,c=n===n,a=pu(n);if(!f&&!a&&!i&&t>n||i&&o&&c&&!f&&!a||e&&o&&c||!r&&c||!u)return 1;if(!e&&!i&&!a&&t<n||a&&r&&u&&!e&&!i||f&&r&&u||!o&&u||!c)return-1}return 0}function Sr(t,n,r,e){var u=-1,i=t.length,o=r.length,f=-1,c=n.length,a=Ai(i-o,0),l=Du(c+a);for(e=!e;++f<c;)l[f]=n[f];
for(;++u<o;)(e||u<i)&&(l[r[u]]=t[u]);for(;a--;)l[f++]=t[u++];return l}function Ir(t,n,r,e){var u=-1,i=t.length,o=-1,f=r.length,c=-1,a=n.length,l=Ai(i-f,0),s=Du(l+a);for(e=!e;++u<l;)s[u]=t[u];for(l=u;++c<a;)s[l+c]=n[c];for(;++o<f;)(e||u<i)&&(s[l+r[o]]=t[u++]);return s}function Rr(t,n){var r=-1,e=t.length;for(n||(n=Du(e));++r<e;)n[r]=t[r];return n}function zr(t,n,r,e){var u=!r;r||(r={});for(var i=-1,o=n.length;++i<o;){var f=n[i],c=e?e(r[f],t[f],f,r,t):F;c===F&&(c=t[f]),u?hn(r,f,c):cn(r,f,c)}return r;
}function Wr(t,n){return zr(t,ro(t),n)}function Br(t,n){return function(r,u){var i=Ko(r)?e:ln,o=n?n():{};return i(r,t,fe(u,2),o)}}function Lr(t){return cr(function(n,r){var e=-1,u=r.length,i=1<u?r[u-1]:F,o=2<u?r[2]:F,i=3<t.length&&typeof i=="function"?(u--,i):F;for(o&&de(r[0],r[1],o)&&(i=3>u?F:i,u=1),n=Pu(n);++e<u;)(o=r[e])&&t(n,o,e,i);return n})}function Cr(t,n){return function(r,e){if(null==r)return r;if(!ru(r))return t(r,e);for(var u=r.length,i=n?u:-1,o=Pu(r);(n?i--:++i<u)&&false!==e(o[i],i,o););
return r}}function Ur(t){return function(n,r,e){var u=-1,i=Pu(n);e=e(n);for(var o=e.length;o--;){var f=e[t?o:++u];if(false===r(i[f],f,i))break}return n}}function Mr(t,n,r){function e(){return(this&&this!==Pt&&this instanceof e?i:t).apply(u?r:this,arguments)}var u=1&n,i=$r(t);return e}function Dr(t){return function(n){n=xu(n);var r=Wt.test(n)?$(n):F,e=r?r[0]:n.charAt(0);return n=r?Ar(r,1).join(""):n.slice(1),e[t]()+n}}function Tr(t){return function(n){return h(Iu(Su(n).replace(St,"")),t,"")}}function $r(t){
return function(){var n=arguments;switch(n.length){case 0:return new t;case 1:return new t(n[0]);case 2:return new t(n[0],n[1]);case 3:return new t(n[0],n[1],n[2]);case 4:return new t(n[0],n[1],n[2],n[3]);case 5:return new t(n[0],n[1],n[2],n[3],n[4]);case 6:return new t(n[0],n[1],n[2],n[3],n[4],n[5]);case 7:return new t(n[0],n[1],n[2],n[3],n[4],n[5],n[6])}var r=yn(t.prototype),n=t.apply(r,n);return cu(n)?n:r}}function Fr(t,n,e){function u(){for(var o=arguments.length,f=Du(o),c=o,a=oe(u);c--;)f[c]=arguments[c];
return c=3>o&&f[0]!==a&&f[o-1]!==a?[]:U(f,a),o-=c.length,o<e?Qr(t,n,Zr,u.placeholder,F,f,c,F,F,e-o):r(this&&this!==Pt&&this instanceof u?i:t,this,f)}var i=$r(t);return u}function Nr(t){return function(n,r,e){var u=Pu(n);if(!ru(n)){var i=fe(r,3);n=mu(n),r=function(t){return i(u[t],t,u)}}return r=t(n,r,e),-1<r?u[i?n[r]:r]:F}}function Pr(t){return ue(function(n){var r=n.length,e=r,u=Mt.prototype.thru;for(t&&n.reverse();e--;){var i=n[e];if(typeof i!="function")throw new Vu("Expected a function");if(u&&!o&&"wrapper"==ie(i))var o=new Mt([],true);
}for(e=o?e:r;++e<r;)var i=n[e],u=ie(i),f="wrapper"==u?no(i):F,o=f&&be(f[0])&&424==f[1]&&!f[4].length&&1==f[9]?o[ie(f[0])].apply(o,f[3]):1==i.length&&be(i)?o[u]():o.thru(i);return function(){var t=arguments,e=t[0];if(o&&1==t.length&&Ko(e)&&200<=e.length)return o.plant(e).value();for(var u=0,t=r?n[u].apply(this,t):e;++u<r;)t=n[u].call(this,t);return t}})}function Zr(t,n,r,e,u,i,o,f,c,a){function l(){for(var d=arguments.length,y=Du(d),b=d;b--;)y[b]=arguments[b];if(_){var x,j=oe(l),b=y.length;for(x=0;b--;)y[b]===j&&++x;
}if(e&&(y=Sr(y,e,u,_)),i&&(y=Ir(y,i,o,_)),d-=x,_&&d<a)return j=U(y,j),Qr(t,n,Zr,l.placeholder,r,y,j,f,c,a-d);if(j=h?r:this,b=p?j[t]:t,d=y.length,f){x=y.length;for(var w=ki(f.length,x),m=Rr(y);w--;){var A=f[w];y[w]=ge(A,x)?m[A]:F}}else v&&1<d&&y.reverse();return s&&c<d&&(y.length=c),this&&this!==Pt&&this instanceof l&&(b=g||$r(b)),b.apply(j,y)}var s=128&n,h=1&n,p=2&n,_=24&n,v=512&n,g=p?F:$r(t);return l}function qr(t,n){return function(r,e){return Ln(r,t,n(e))}}function Vr(t,n){return function(r,e){
var u;if(r===F&&e===F)return n;if(r!==F&&(u=r),e!==F){if(u===F)return e;typeof r=="string"||typeof e=="string"?(r=gr(r),e=gr(e)):(r=vr(r),e=vr(e)),u=t(r,e)}return u}}function Kr(t){return ue(function(n){return n=l(n,S(fe())),cr(function(e){var u=this;return t(n,function(t){return r(t,u,e)})})})}function Gr(t,n){n=n===F?" ":gr(n);var r=n.length;return 2>r?r?fr(n,t):n:(r=fr(n,di(t/T(n))),Wt.test(n)?Ar($(r),0,t).join(""):r.slice(0,t))}function Jr(t,n,e,u){function i(){for(var n=-1,c=arguments.length,a=-1,l=u.length,s=Du(l+c),h=this&&this!==Pt&&this instanceof i?f:t;++a<l;)s[a]=u[a];
for(;c--;)s[a++]=arguments[++n];return r(h,o?e:this,s)}var o=1&n,f=$r(t);return i}function Yr(t){return function(n,r,e){e&&typeof e!="number"&&de(n,r,e)&&(r=e=F),n=vu(n),r===F?(r=n,n=0):r=vu(r),e=e===F?n<r?1:-1:vu(e);var u=-1;r=Ai(di((r-n)/(e||1)),0);for(var i=Du(r);r--;)i[t?r:++u]=n,n+=e;return i}}function Hr(t){return function(n,r){return typeof n=="string"&&typeof r=="string"||(n=yu(n),r=yu(r)),t(n,r)}}function Qr(t,n,r,e,u,i,o,f,c,a){var l=8&n,s=l?o:F;o=l?F:o;var h=l?i:F;return i=l?F:i,n=(n|(l?32:64))&~(l?64:32),
4&n||(n&=-4),u=[t,n,u,h,s,i,o,f,c,a],r=r.apply(F,u),be(t)&&io(r,u),r.placeholder=e,ke(r,t,n)}function Xr(t){var n=Nu[t];return function(t,r){if(t=yu(t),r=ki(gu(r),292)){var e=(xu(t)+"e").split("e"),e=n(e[0]+"e"+(+e[1]+r)),e=(xu(e)+"e").split("e");return+(e[0]+"e"+(+e[1]-r))}return n(t)}}function te(t){return function(n){var r=Et(n);return"[object Map]"==r?L(n):"[object Set]"==r?D(n):O(n,t(n))}}function ne(t,n,r,e,u,i,o,f){var c=2&n;if(!c&&typeof t!="function")throw new Vu("Expected a function");var a=e?e.length:0;
if(a||(n&=-97,e=u=F),o=o===F?o:Ai(gu(o),0),f=f===F?f:gu(f),a-=u?u.length:0,64&n){var l=e,s=u;e=u=F}var h=c?F:no(t);return i=[t,n,r,e,u,l,s,i,o,f],h&&(r=i[1],t=h[1],n=r|t,e=128==t&&8==r||128==t&&256==r&&i[7].length<=h[8]||384==t&&h[7].length<=h[8]&&8==r,131>n||e)&&(1&t&&(i[2]=h[2],n|=1&r?0:4),(r=h[3])&&(e=i[3],i[3]=e?Sr(e,r,h[4]):r,i[4]=e?U(i[3],"__lodash_placeholder__"):h[4]),(r=h[5])&&(e=i[5],i[5]=e?Ir(e,r,h[6]):r,i[6]=e?U(i[5],"__lodash_placeholder__"):h[6]),(r=h[7])&&(i[7]=r),128&t&&(i[8]=null==i[8]?h[8]:ki(i[8],h[8])),
null==i[9]&&(i[9]=h[9]),i[0]=h[0],i[1]=n),t=i[0],n=i[1],r=i[2],e=i[3],u=i[4],f=i[9]=null==i[9]?c?0:t.length:Ai(i[9]-a,0),!f&&24&n&&(n&=-25),ke((h?Hi:io)(n&&1!=n?8==n||16==n?Fr(t,n,f):32!=n&&33!=n||u.length?Zr.apply(F,i):Jr(t,n,r,e):Mr(t,n,r),i),t,n)}function re(t,n,r,e,u,i){var o=2&u,f=t.length,c=n.length;if(f!=c&&!(o&&c>f))return false;if((c=i.get(t))&&i.get(n))return c==n;var c=-1,a=true,l=1&u?new qt:F;for(i.set(t,n),i.set(n,t);++c<f;){var s=t[c],h=n[c];if(e)var p=o?e(h,s,c,n,t,i):e(s,h,c,t,n,i);if(p!==F){
if(p)continue;a=false;break}if(l){if(!_(n,function(t,n){if(!R(l,n)&&(s===t||r(s,t,e,u,i)))return l.push(n)})){a=false;break}}else if(s!==h&&!r(s,h,e,u,i)){a=false;break}}return i.delete(t),i.delete(n),a}function ee(t,n,r,e,u,i,o){switch(r){case"[object DataView]":if(t.byteLength!=n.byteLength||t.byteOffset!=n.byteOffset)break;t=t.buffer,n=n.buffer;case"[object ArrayBuffer]":if(t.byteLength!=n.byteLength||!e(new oi(t),new oi(n)))break;return true;case"[object Boolean]":case"[object Date]":case"[object Number]":
return tu(+t,+n);case"[object Error]":return t.name==n.name&&t.message==n.message;case"[object RegExp]":case"[object String]":return t==n+"";case"[object Map]":var f=L;case"[object Set]":if(f||(f=M),t.size!=n.size&&!(2&i))break;return(r=o.get(t))?r==n:(i|=1,o.set(t,n),n=re(f(t),f(n),e,u,i,o),o.delete(t),n);case"[object Symbol]":if(qi)return qi.call(t)==qi.call(n)}return false}function ue(t){return fo(me(t,F,Le),t+"")}function ie(t){for(var n=t.name+"",r=Di[n],e=Qu.call(Di,n)?r.length:0;e--;){var u=r[e],i=u.func;
if(null==i||i==t)return u.name}return n}function oe(t){return(Qu.call(Ot,"placeholder")?Ot:t).placeholder}function fe(){var t=Ot.iteratee||Wu,t=t===Wu?qn:t;return arguments.length?t(arguments[0],arguments[1]):t}function ce(t,n){var r=t.__data__,e=typeof n;return("string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==n:null===n)?r[typeof n=="string"?"string":"hash"]:r.map}function ae(t){for(var n=mu(t),r=n.length;r--;){var e=n[r],u=t[e];n[r]=[e,u,u===u&&!cu(u)]}return n}function le(t,n){
var r=null==t?F:t[n];return Fn(r)?r:F}function se(t,n,r){n=ye(n,t)?[n]:mr(n);for(var e=-1,u=n.length,i=false;++e<u;){var o=Se(n[e]);if(!(i=null!=t&&r(t,o)))break;t=t[o]}return i||++e!=u?i:(u=t?t.length:0,!!u&&fu(u)&&ge(o,u)&&(Ko(t)||nu(t)))}function he(t){var n=t.length,r=t.constructor(n);return n&&"string"==typeof t[0]&&Qu.call(t,"index")&&(r.index=t.index,r.input=t.input),r}function pe(t){return typeof t.constructor!="function"||xe(t)?{}:yn(ci(t))}function _e(r,e,u,i){var o=r.constructor;switch(e){
case"[object ArrayBuffer]":return Er(r);case"[object Boolean]":case"[object Date]":return new o(+r);case"[object DataView]":return e=i?Er(r.buffer):r.buffer,new r.constructor(e,r.byteOffset,r.byteLength);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return e=i?Er(r.buffer):r.buffer,new r.constructor(e,r.byteOffset,r.length);
case"[object Map]":return e=i?u(L(r),true):L(r),h(e,t,new r.constructor);case"[object Number]":case"[object String]":return new o(r);case"[object RegExp]":return e=new r.constructor(r.source,gt.exec(r)),e.lastIndex=r.lastIndex,e;case"[object Set]":return e=i?u(M(r),true):M(r),h(e,n,new r.constructor);case"[object Symbol]":return qi?Pu(qi.call(r)):{}}}function ve(t){return Ko(t)||nu(t)||!!(pi&&t&&t[pi])}function ge(t,n){return n=null==n?9007199254740991:n,!!n&&(typeof t=="number"||jt.test(t))&&-1<t&&0==t%1&&t<n;
}function de(t,n,r){if(!cu(r))return false;var e=typeof n;return!!("number"==e?ru(r)&&ge(n,r.length):"string"==e&&n in r)&&tu(r[n],t)}function ye(t,n){if(Ko(t))return false;var r=typeof t;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!pu(t))||(rt.test(t)||!nt.test(t)||null!=n&&t in Pu(n))}function be(t){var n=ie(t),r=Ot[n];return typeof r=="function"&&n in Dt.prototype&&(t===r||(n=no(r),!!n&&t===n[0]))}function xe(t){var n=t&&t.constructor;return t===(typeof n=="function"&&n.prototype||Gu)}function je(t,n){
return function(r){return null!=r&&(r[t]===n&&(n!==F||t in Pu(r)))}}function we(t,n,r,e,u,i){return cu(t)&&cu(n)&&(i.set(n,t),Qn(t,n,F,we,i),i.delete(n)),t}function me(t,n,e){return n=Ai(n===F?t.length-1:n,0),function(){for(var u=arguments,i=-1,o=Ai(u.length-n,0),f=Du(o);++i<o;)f[i]=u[n+i];for(i=-1,o=Du(n+1);++i<n;)o[i]=u[i];return o[n]=e(f),r(t,this,o)}}function Ae(t,n){return 1==n.length?t:Sn(t,lr(n,0,-1))}function ke(t,n,r){var e=n+"";n=fo;var u,i=Re;return u=(u=e.match(st))?u[1].split(ht):[],
r=i(u,r),(i=r.length)&&(u=i-1,r[u]=(1<i?"& ":"")+r[u],r=r.join(2<i?", ":" "),e=e.replace(lt,"{\n/* [wrapped with "+r+"] */\n")),n(t,e)}function Ee(t){var n=0,r=0;return function(){var e=Ei(),u=16-(e-r);if(r=e,0<u){if(500<=++n)return arguments[0]}else n=0;return t.apply(F,arguments)}}function Oe(t){for(var n=-1,r=t.length,e=r-1;++n<r;){var u=or(n,e),i=t[u];t[u]=t[n],t[n]=i}return t}function Se(t){if(typeof t=="string"||pu(t))return t;var n=t+"";return"0"==n&&1/t==-N?"-0":n}function Ie(t){if(null!=t){
try{return Hu.call(t)}catch(t){}return t+""}return""}function Re(t,n){return u(Z,function(r){var e="_."+r[0];n&r[1]&&!c(t,e)&&t.push(e)}),t.sort()}function ze(t){if(t instanceof Dt)return t.clone();var n=new Mt(t.__wrapped__,t.__chain__);return n.__actions__=Rr(t.__actions__),n.__index__=t.__index__,n.__values__=t.__values__,n}function We(t,n,r){var e=t?t.length:0;return e?(r=null==r?0:gu(r),0>r&&(r=Ai(e+r,0)),g(t,fe(n,3),r)):-1}function Be(t,n,r){var e=t?t.length:0;if(!e)return-1;var u=e-1;return r!==F&&(u=gu(r),
u=0>r?Ai(e+u,0):ki(u,e-1)),g(t,fe(n,3),u,true)}function Le(t){return t&&t.length?An(t,1):[]}function Ce(t){return t&&t.length?t[0]:F}function Ue(t){var n=t?t.length:0;return n?t[n-1]:F}function Me(t,n){return t&&t.length&&n&&n.length?ur(t,n):t}function De(t){return t?Ii.call(t):t}function Te(t){if(!t||!t.length)return[];var n=0;return t=f(t,function(t){if(eu(t))return n=Ai(t.length,n),true}),E(n,function(n){return l(t,j(n))})}function $e(t,n){if(!t||!t.length)return[];var e=Te(t);return null==n?e:l(e,function(t){
return r(n,F,t)})}function Fe(t){return t=Ot(t),t.__chain__=true,t}function Ne(t,n){return n(t)}function Pe(){return this}function Ze(t,n){return(Ko(t)?u:Ki)(t,fe(n,3))}function qe(t,n){return(Ko(t)?i:Gi)(t,fe(n,3))}function Ve(t,n){return(Ko(t)?l:Jn)(t,fe(n,3))}function Ke(t,n,r){return n=r?F:n,n=t&&null==n?t.length:n,ne(t,128,F,F,F,F,n)}function Ge(t,n){var r;if(typeof n!="function")throw new Vu("Expected a function");return t=gu(t),function(){return 0<--t&&(r=n.apply(this,arguments)),1>=t&&(n=F),
r}}function Je(t,n,r){return n=r?F:n,t=ne(t,8,F,F,F,F,F,n),t.placeholder=Je.placeholder,t}function Ye(t,n,r){return n=r?F:n,t=ne(t,16,F,F,F,F,F,n),t.placeholder=Ye.placeholder,t}function He(t,n,r){function e(n){var r=c,e=a;return c=a=F,_=n,s=t.apply(e,r)}function u(t){var r=t-p;return t-=_,p===F||r>=n||0>r||g&&t>=l}function i(){var t=Uo();if(u(t))return o(t);var r,e=oo;r=t-_,t=n-(t-p),r=g?ki(t,l-r):t,h=e(i,r)}function o(t){return h=F,d&&c?e(t):(c=a=F,s)}function f(){var t=Uo(),r=u(t);if(c=arguments,
a=this,p=t,r){if(h===F)return _=t=p,h=oo(i,n),v?e(t):s;if(g)return h=oo(i,n),e(p)}return h===F&&(h=oo(i,n)),s}var c,a,l,s,h,p,_=0,v=false,g=false,d=true;if(typeof t!="function")throw new Vu("Expected a function");return n=yu(n)||0,cu(r)&&(v=!!r.leading,l=(g="maxWait"in r)?Ai(yu(r.maxWait)||0,n):l,d="trailing"in r?!!r.trailing:d),f.cancel=function(){h!==F&&Xi(h),_=0,c=p=a=h=F},f.flush=function(){return h===F?s:o(Uo())},f}function Qe(t,n){function r(){var e=arguments,u=n?n.apply(this,e):e[0],i=r.cache;return i.has(u)?i.get(u):(e=t.apply(this,e),
r.cache=i.set(u,e)||i,e)}if(typeof t!="function"||n&&typeof n!="function")throw new Vu("Expected a function");return r.cache=new(Qe.Cache||Zt),r}function Xe(t){if(typeof t!="function")throw new Vu("Expected a function");return function(){var n=arguments;switch(n.length){case 0:return!t.call(this);case 1:return!t.call(this,n[0]);case 2:return!t.call(this,n[0],n[1]);case 3:return!t.call(this,n[0],n[1],n[2])}return!t.apply(this,n)}}function tu(t,n){return t===n||t!==t&&n!==n}function nu(t){return eu(t)&&Qu.call(t,"callee")&&(!si.call(t,"callee")||"[object Arguments]"==ni.call(t));
}function ru(t){return null!=t&&fu(t.length)&&!iu(t)}function eu(t){return au(t)&&ru(t)}function uu(t){return!!au(t)&&("[object Error]"==ni.call(t)||typeof t.message=="string"&&typeof t.name=="string")}function iu(t){return t=cu(t)?ni.call(t):"","[object Function]"==t||"[object GeneratorFunction]"==t}function ou(t){return typeof t=="number"&&t==gu(t)}function fu(t){return typeof t=="number"&&-1<t&&0==t%1&&9007199254740991>=t}function cu(t){var n=typeof t;return null!=t&&("object"==n||"function"==n);
}function au(t){return null!=t&&typeof t=="object"}function lu(t){return typeof t=="number"||au(t)&&"[object Number]"==ni.call(t)}function su(t){return!(!au(t)||"[object Object]"!=ni.call(t))&&(t=ci(t),null===t||(t=Qu.call(t,"constructor")&&t.constructor,typeof t=="function"&&t instanceof t&&Hu.call(t)==ti))}function hu(t){return typeof t=="string"||!Ko(t)&&au(t)&&"[object String]"==ni.call(t)}function pu(t){return typeof t=="symbol"||au(t)&&"[object Symbol]"==ni.call(t)}function _u(t){if(!t)return[];
if(ru(t))return hu(t)?$(t):Rr(t);if(ai&&t[ai]){t=t[ai]();for(var n,r=[];!(n=t.next()).done;)r.push(n.value);return r}return n=Et(t),("[object Map]"==n?L:"[object Set]"==n?M:Eu)(t)}function vu(t){return t?(t=yu(t),t===N||t===-N?1.7976931348623157e308*(0>t?-1:1):t===t?t:0):0===t?t:0}function gu(t){t=vu(t);var n=t%1;return t===t?n?t-n:t:0}function du(t){return t?_n(gu(t),0,4294967295):0}function yu(t){if(typeof t=="number")return t;if(pu(t))return P;if(cu(t)&&(t=typeof t.valueOf=="function"?t.valueOf():t,
t=cu(t)?t+"":t),typeof t!="string")return 0===t?t:+t;t=t.replace(ft,"");var n=yt.test(t);return n||xt.test(t)?$t(t.slice(2),n?2:8):dt.test(t)?P:+t}function bu(t){return zr(t,Au(t))}function xu(t){return null==t?"":gr(t)}function ju(t,n,r){return t=null==t?F:Sn(t,n),t===F?r:t}function wu(t,n){return null!=t&&se(t,n,Wn)}function mu(t){return ru(t)?tn(t):Vn(t)}function Au(t){return ru(t)?tn(t,true):Kn(t)}function ku(t,n){return null==t?{}:rr(t,In(t,Au,eo),fe(n))}function Eu(t){return t?I(t,mu(t)):[]}function Ou(t){
return Of(xu(t).toLowerCase())}function Su(t){return(t=xu(t))&&t.replace(wt,nn).replace(It,"")}function Iu(t,n,r){return t=xu(t),n=r?F:n,n===F?Bt.test(t)?t.match(zt)||[]:t.match(pt)||[]:t.match(n)||[]}function Ru(t){return function(){return t}}function zu(t){return t}function Wu(t){return qn(typeof t=="function"?t:vn(t,true))}function Bu(t,n,r){var e=mu(n),i=On(n,e);null!=r||cu(n)&&(i.length||!e.length)||(r=n,n=t,t=this,i=On(n,mu(n)));var o=!(cu(r)&&"chain"in r&&!r.chain),f=iu(t);return u(i,function(r){
var e=n[r];t[r]=e,f&&(t.prototype[r]=function(){var n=this.__chain__;if(o||n){var r=t(this.__wrapped__);return(r.__actions__=Rr(this.__actions__)).push({func:e,args:arguments,thisArg:t}),r.__chain__=n,r}return e.apply(t,s([this.value()],arguments))})}),t}function Lu(){}function Cu(t){return ye(t)?j(Se(t)):er(t)}function Uu(){return[]}function Mu(){return false}kt=kt?un.defaults(Pt.Object(),kt,un.pick(Pt,Lt)):Pt;var Du=kt.Array,Tu=kt.Date,$u=kt.Error,Fu=kt.Function,Nu=kt.Math,Pu=kt.Object,Zu=kt.RegExp,qu=kt.String,Vu=kt.TypeError,Ku=Du.prototype,Gu=Pu.prototype,Ju=kt["__core-js_shared__"],Yu=function(){
var t=/[^.]+$/.exec(Ju&&Ju.keys&&Ju.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),Hu=Fu.prototype.toString,Qu=Gu.hasOwnProperty,Xu=0,ti=Hu.call(Pu),ni=Gu.toString,ri=Pt._,ei=Zu("^"+Hu.call(Qu).replace(it,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ui=Vt?kt.Buffer:F,ii=kt.Symbol,oi=kt.Uint8Array,fi=Pu.defineProperty,ci=C(Pu.getPrototypeOf,Pu),ai=ii?ii.iterator:F,li=Pu.create,si=Gu.propertyIsEnumerable,hi=Ku.splice,pi=ii?ii.isConcatSpreadable:F,_i=kt.clearTimeout!==Pt.clearTimeout&&kt.clearTimeout,vi=Tu&&Tu.now!==Pt.Date.now&&Tu.now,gi=kt.setTimeout!==Pt.setTimeout&&kt.setTimeout,di=Nu.ceil,yi=Nu.floor,bi=Pu.getOwnPropertySymbols,xi=ui?ui.isBuffer:F,ji=kt.isFinite,wi=Ku.join,mi=C(Pu.keys,Pu),Ai=Nu.max,ki=Nu.min,Ei=Tu.now,Oi=kt.parseInt,Si=Nu.random,Ii=Ku.reverse,Ri=le(kt,"DataView"),zi=le(kt,"Map"),Wi=le(kt,"Promise"),Bi=le(kt,"Set"),Li=le(kt,"WeakMap"),Ci=le(Pu,"create"),Ui=le(Pu,"defineProperty"),Mi=Li&&new Li,Di={},Ti=Ie(Ri),$i=Ie(zi),Fi=Ie(Wi),Ni=Ie(Bi),Pi=Ie(Li),Zi=ii?ii.prototype:F,qi=Zi?Zi.valueOf:F,Vi=Zi?Zi.toString:F;
Ot.templateSettings={escape:Q,evaluate:X,interpolate:tt,variable:"",imports:{_:Ot}},Ot.prototype=Rt.prototype,Ot.prototype.constructor=Ot,Mt.prototype=yn(Rt.prototype),Mt.prototype.constructor=Mt,Dt.prototype=yn(Rt.prototype),Dt.prototype.constructor=Dt,Ft.prototype.clear=function(){this.__data__=Ci?Ci(null):{},this.size=0},Ft.prototype.delete=function(t){return t=this.has(t)&&delete this.__data__[t],this.size-=t?1:0,t},Ft.prototype.get=function(t){var n=this.__data__;return Ci?(t=n[t],"__lodash_hash_undefined__"===t?F:t):Qu.call(n,t)?n[t]:F;
},Ft.prototype.has=function(t){var n=this.__data__;return Ci?n[t]!==F:Qu.call(n,t)},Ft.prototype.set=function(t,n){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=Ci&&n===F?"__lodash_hash_undefined__":n,this},Nt.prototype.clear=function(){this.__data__=[],this.size=0},Nt.prototype.delete=function(t){var n=this.__data__;return t=an(n,t),!(0>t)&&(t==n.length-1?n.pop():hi.call(n,t,1),--this.size,true)},Nt.prototype.get=function(t){var n=this.__data__;return t=an(n,t),0>t?F:n[t][1]},Nt.prototype.has=function(t){
return-1<an(this.__data__,t)},Nt.prototype.set=function(t,n){var r=this.__data__,e=an(r,t);return 0>e?(++this.size,r.push([t,n])):r[e][1]=n,this},Zt.prototype.clear=function(){this.size=0,this.__data__={hash:new Ft,map:new(zi||Nt),string:new Ft}},Zt.prototype.delete=function(t){return t=ce(this,t).delete(t),this.size-=t?1:0,t},Zt.prototype.get=function(t){return ce(this,t).get(t)},Zt.prototype.has=function(t){return ce(this,t).has(t)},Zt.prototype.set=function(t,n){var r=ce(this,t),e=r.size;return r.set(t,n),
this.size+=r.size==e?0:1,this},qt.prototype.add=qt.prototype.push=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},qt.prototype.has=function(t){return this.__data__.has(t)},Kt.prototype.clear=function(){this.__data__=new Nt,this.size=0},Kt.prototype.delete=function(t){var n=this.__data__;return t=n.delete(t),this.size=n.size,t},Kt.prototype.get=function(t){return this.__data__.get(t)},Kt.prototype.has=function(t){return this.__data__.has(t)},Kt.prototype.set=function(t,n){
var r=this.__data__;if(r instanceof Nt){var e=r.__data__;if(!zi||199>e.length)return e.push([t,n]),this.size=++r.size,this;r=this.__data__=new Zt(e)}return r.set(t,n),this.size=r.size,this};var Ki=Cr(kn),Gi=Cr(En,true),Ji=Ur(),Yi=Ur(true),Hi=Mi?function(t,n){return Mi.set(t,n),t}:zu,Qi=Ui?function(t,n){return Ui(t,"toString",{configurable:true,enumerable:false,value:Ru(n),writable:true})}:zu,Xi=_i||function(t){return Pt.clearTimeout(t)},to=Bi&&1/M(new Bi([,-0]))[1]==N?function(t){return new Bi(t)}:Lu,no=Mi?function(t){
return Mi.get(t)}:Lu,ro=bi?C(bi,Pu):Uu,eo=bi?function(t){for(var n=[];t;)s(n,ro(t)),t=ci(t);return n}:Uu;(Ri&&"[object DataView]"!=Et(new Ri(new ArrayBuffer(1)))||zi&&"[object Map]"!=Et(new zi)||Wi&&"[object Promise]"!=Et(Wi.resolve())||Bi&&"[object Set]"!=Et(new Bi)||Li&&"[object WeakMap]"!=Et(new Li))&&(Et=function(t){var n=ni.call(t);if(t=(t="[object Object]"==n?t.constructor:F)?Ie(t):F)switch(t){case Ti:return"[object DataView]";case $i:return"[object Map]";case Fi:return"[object Promise]";case Ni:
return"[object Set]";case Pi:return"[object WeakMap]"}return n});var uo=Ju?iu:Mu,io=Ee(Hi),oo=gi||function(t,n){return Pt.setTimeout(t,n)},fo=Ee(Qi),co=function(t){t=Qe(t,function(t){return 500===n.size&&n.clear(),t});var n=t.cache;return t}(function(t){t=xu(t);var n=[];return et.test(t)&&n.push(""),t.replace(ut,function(t,r,e,u){n.push(e?u.replace(_t,"$1"):r||t)}),n}),ao=cr(function(t,n){return eu(t)?xn(t,An(n,1,eu,true)):[]}),lo=cr(function(t,n){var r=Ue(n);return eu(r)&&(r=F),eu(t)?xn(t,An(n,1,eu,true),fe(r,2)):[];
}),so=cr(function(t,n){var r=Ue(n);return eu(r)&&(r=F),eu(t)?xn(t,An(n,1,eu,true),F,r):[]}),ho=cr(function(t){var n=l(t,wr);return n.length&&n[0]===t[0]?Bn(n):[]}),po=cr(function(t){var n=Ue(t),r=l(t,wr);return n===Ue(r)?n=F:r.pop(),r.length&&r[0]===t[0]?Bn(r,fe(n,2)):[]}),_o=cr(function(t){var n=Ue(t),r=l(t,wr);return n===Ue(r)?n=F:r.pop(),r.length&&r[0]===t[0]?Bn(r,F,n):[]}),vo=cr(Me),go=ue(function(t,n){var r=t?t.length:0,e=pn(t,n);return ir(t,l(n,function(t){return ge(t,r)?+t:t}).sort(Or)),e}),yo=cr(function(t){
return dr(An(t,1,eu,true))}),bo=cr(function(t){var n=Ue(t);return eu(n)&&(n=F),dr(An(t,1,eu,true),fe(n,2))}),xo=cr(function(t){var n=Ue(t);return eu(n)&&(n=F),dr(An(t,1,eu,true),F,n)}),jo=cr(function(t,n){return eu(t)?xn(t,n):[]}),wo=cr(function(t){return xr(f(t,eu))}),mo=cr(function(t){var n=Ue(t);return eu(n)&&(n=F),xr(f(t,eu),fe(n,2))}),Ao=cr(function(t){var n=Ue(t);return eu(n)&&(n=F),xr(f(t,eu),F,n)}),ko=cr(Te),Eo=cr(function(t){var n=t.length,n=1<n?t[n-1]:F,n=typeof n=="function"?(t.pop(),n):F;return $e(t,n);
}),Oo=ue(function(t){function n(n){return pn(n,t)}var r=t.length,e=r?t[0]:0,u=this.__wrapped__;return!(1<r||this.__actions__.length)&&u instanceof Dt&&ge(e)?(u=u.slice(e,+e+(r?1:0)),u.__actions__.push({func:Ne,args:[n],thisArg:F}),new Mt(u,this.__chain__).thru(function(t){return r&&!t.length&&t.push(F),t})):this.thru(n)}),So=Br(function(t,n,r){Qu.call(t,r)?++t[r]:hn(t,r,1)}),Io=Nr(We),Ro=Nr(Be),zo=Br(function(t,n,r){Qu.call(t,r)?t[r].push(n):hn(t,r,[n])}),Wo=cr(function(t,n,e){var u=-1,i=typeof n=="function",o=ye(n),f=ru(t)?Du(t.length):[];
return Ki(t,function(t){var c=i?n:o&&null!=t?t[n]:F;f[++u]=c?r(c,t,e):Cn(t,n,e)}),f}),Bo=Br(function(t,n,r){hn(t,r,n)}),Lo=Br(function(t,n,r){t[r?0:1].push(n)},function(){return[[],[]]}),Co=cr(function(t,n){if(null==t)return[];var r=n.length;return 1<r&&de(t,n[0],n[1])?n=[]:2<r&&de(n[0],n[1],n[2])&&(n=[n[0]]),tr(t,An(n,1),[])}),Uo=vi||function(){return Pt.Date.now()},Mo=cr(function(t,n,r){var e=1;if(r.length)var u=U(r,oe(Mo)),e=32|e;return ne(t,e,n,r,u)}),Do=cr(function(t,n,r){var e=3;if(r.length)var u=U(r,oe(Do)),e=32|e;
return ne(n,e,t,r,u)}),To=cr(function(t,n){return bn(t,1,n)}),$o=cr(function(t,n,r){return bn(t,yu(n)||0,r)});Qe.Cache=Zt;var Fo=cr(function(t,n){n=1==n.length&&Ko(n[0])?l(n[0],S(fe())):l(An(n,1),S(fe()));var e=n.length;return cr(function(u){for(var i=-1,o=ki(u.length,e);++i<o;)u[i]=n[i].call(this,u[i]);return r(t,this,u)})}),No=cr(function(t,n){return ne(t,32,F,n,U(n,oe(No)))}),Po=cr(function(t,n){return ne(t,64,F,n,U(n,oe(Po)))}),Zo=ue(function(t,n){return ne(t,256,F,F,F,n)}),qo=Hr(Rn),Vo=Hr(function(t,n){
return t>=n}),Ko=Du.isArray,Go=Gt?S(Gt):Un,Jo=xi||Mu,Yo=Jt?S(Jt):Mn,Ho=Yt?S(Yt):Tn,Qo=Ht?S(Ht):Nn,Xo=Qt?S(Qt):Pn,tf=Xt?S(Xt):Zn,nf=Hr(Gn),rf=Hr(function(t,n){return t<=n}),ef=Lr(function(t,n){if(xe(n)||ru(n))zr(n,mu(n),t);else for(var r in n)Qu.call(n,r)&&cn(t,r,n[r])}),uf=Lr(function(t,n){zr(n,Au(n),t)}),of=Lr(function(t,n,r,e){zr(n,Au(n),t,e)}),ff=Lr(function(t,n,r,e){zr(n,mu(n),t,e)}),cf=ue(pn),af=cr(function(t){return t.push(F,on),r(of,F,t)}),lf=cr(function(t){return t.push(F,we),r(vf,F,t)}),sf=qr(function(t,n,r){
t[n]=r},Ru(zu)),hf=qr(function(t,n,r){Qu.call(t,n)?t[n].push(r):t[n]=[r]},fe),pf=cr(Cn),_f=Lr(function(t,n,r){Qn(t,n,r)}),vf=Lr(function(t,n,r,e){Qn(t,n,r,e)}),gf=ue(function(t,n){return null==t?{}:(n=l(n,Se),nr(t,xn(In(t,Au,eo),n)))}),df=ue(function(t,n){return null==t?{}:nr(t,l(n,Se))}),yf=te(mu),bf=te(Au),xf=Tr(function(t,n,r){return n=n.toLowerCase(),t+(r?Ou(n):n)}),jf=Tr(function(t,n,r){return t+(r?"-":"")+n.toLowerCase()}),wf=Tr(function(t,n,r){return t+(r?" ":"")+n.toLowerCase()}),mf=Dr("toLowerCase"),Af=Tr(function(t,n,r){
return t+(r?"_":"")+n.toLowerCase()}),kf=Tr(function(t,n,r){return t+(r?" ":"")+Of(n)}),Ef=Tr(function(t,n,r){return t+(r?" ":"")+n.toUpperCase()}),Of=Dr("toUpperCase"),Sf=cr(function(t,n){try{return r(t,F,n)}catch(t){return uu(t)?t:new $u(t)}}),If=ue(function(t,n){return u(n,function(n){n=Se(n),hn(t,n,Mo(t[n],t))}),t}),Rf=Pr(),zf=Pr(true),Wf=cr(function(t,n){return function(r){return Cn(r,t,n)}}),Bf=cr(function(t,n){return function(r){return Cn(t,r,n)}}),Lf=Kr(l),Cf=Kr(o),Uf=Kr(_),Mf=Yr(),Df=Yr(true),Tf=Vr(function(t,n){
return t+n},0),$f=Xr("ceil"),Ff=Vr(function(t,n){return t/n},1),Nf=Xr("floor"),Pf=Vr(function(t,n){return t*n},1),Zf=Xr("round"),qf=Vr(function(t,n){return t-n},0);return Ot.after=function(t,n){if(typeof n!="function")throw new Vu("Expected a function");return t=gu(t),function(){if(1>--t)return n.apply(this,arguments)}},Ot.ary=Ke,Ot.assign=ef,Ot.assignIn=uf,Ot.assignInWith=of,Ot.assignWith=ff,Ot.at=cf,Ot.before=Ge,Ot.bind=Mo,Ot.bindAll=If,Ot.bindKey=Do,Ot.castArray=function(){if(!arguments.length)return[];
var t=arguments[0];return Ko(t)?t:[t]},Ot.chain=Fe,Ot.chunk=function(t,n,r){if(n=(r?de(t,n,r):n===F)?1:Ai(gu(n),0),r=t?t.length:0,!r||1>n)return[];for(var e=0,u=0,i=Du(di(r/n));e<r;)i[u++]=lr(t,e,e+=n);return i},Ot.compact=function(t){for(var n=-1,r=t?t.length:0,e=0,u=[];++n<r;){var i=t[n];i&&(u[e++]=i)}return u},Ot.concat=function(){var t=arguments.length;if(!t)return[];for(var n=Du(t-1),r=arguments[0];t--;)n[t-1]=arguments[t];return s(Ko(r)?Rr(r):[r],An(n,1))},Ot.cond=function(t){var n=t?t.length:0,e=fe();
return t=n?l(t,function(t){if("function"!=typeof t[1])throw new Vu("Expected a function");return[e(t[0]),t[1]]}):[],cr(function(e){for(var u=-1;++u<n;){var i=t[u];if(r(i[0],this,e))return r(i[1],this,e)}})},Ot.conforms=function(t){return gn(vn(t,true))},Ot.constant=Ru,Ot.countBy=So,Ot.create=function(t,n){var r=yn(t);return n?sn(r,n):r},Ot.curry=Je,Ot.curryRight=Ye,Ot.debounce=He,Ot.defaults=af,Ot.defaultsDeep=lf,Ot.defer=To,Ot.delay=$o,Ot.difference=ao,Ot.differenceBy=lo,Ot.differenceWith=so,Ot.drop=function(t,n,r){
var e=t?t.length:0;return e?(n=r||n===F?1:gu(n),lr(t,0>n?0:n,e)):[]},Ot.dropRight=function(t,n,r){var e=t?t.length:0;return e?(n=r||n===F?1:gu(n),n=e-n,lr(t,0,0>n?0:n)):[]},Ot.dropRightWhile=function(t,n){return t&&t.length?yr(t,fe(n,3),true,true):[]},Ot.dropWhile=function(t,n){return t&&t.length?yr(t,fe(n,3),true):[]},Ot.fill=function(t,n,r,e){var u=t?t.length:0;if(!u)return[];for(r&&typeof r!="number"&&de(t,n,r)&&(r=0,e=u),u=t.length,r=gu(r),0>r&&(r=-r>u?0:u+r),e=e===F||e>u?u:gu(e),0>e&&(e+=u),e=r>e?0:du(e);r<e;)t[r++]=n;
return t},Ot.filter=function(t,n){return(Ko(t)?f:mn)(t,fe(n,3))},Ot.flatMap=function(t,n){return An(Ve(t,n),1)},Ot.flatMapDeep=function(t,n){return An(Ve(t,n),N)},Ot.flatMapDepth=function(t,n,r){return r=r===F?1:gu(r),An(Ve(t,n),r)},Ot.flatten=Le,Ot.flattenDeep=function(t){return t&&t.length?An(t,N):[]},Ot.flattenDepth=function(t,n){return t&&t.length?(n=n===F?1:gu(n),An(t,n)):[]},Ot.flip=function(t){return ne(t,512)},Ot.flow=Rf,Ot.flowRight=zf,Ot.fromPairs=function(t){for(var n=-1,r=t?t.length:0,e={};++n<r;){
var u=t[n];e[u[0]]=u[1]}return e},Ot.functions=function(t){return null==t?[]:On(t,mu(t))},Ot.functionsIn=function(t){return null==t?[]:On(t,Au(t))},Ot.groupBy=zo,Ot.initial=function(t){return t&&t.length?lr(t,0,-1):[]},Ot.intersection=ho,Ot.intersectionBy=po,Ot.intersectionWith=_o,Ot.invert=sf,Ot.invertBy=hf,Ot.invokeMap=Wo,Ot.iteratee=Wu,Ot.keyBy=Bo,Ot.keys=mu,Ot.keysIn=Au,Ot.map=Ve,Ot.mapKeys=function(t,n){var r={};return n=fe(n,3),kn(t,function(t,e,u){hn(r,n(t,e,u),t)}),r},Ot.mapValues=function(t,n){
var r={};return n=fe(n,3),kn(t,function(t,e,u){hn(r,e,n(t,e,u))}),r},Ot.matches=function(t){return Yn(vn(t,true))},Ot.matchesProperty=function(t,n){return Hn(t,vn(n,true))},Ot.memoize=Qe,Ot.merge=_f,Ot.mergeWith=vf,Ot.method=Wf,Ot.methodOf=Bf,Ot.mixin=Bu,Ot.negate=Xe,Ot.nthArg=function(t){return t=gu(t),cr(function(n){return Xn(n,t)})},Ot.omit=gf,Ot.omitBy=function(t,n){return ku(t,Xe(fe(n)))},Ot.once=function(t){return Ge(2,t)},Ot.orderBy=function(t,n,r,e){return null==t?[]:(Ko(n)||(n=null==n?[]:[n]),
r=e?F:r,Ko(r)||(r=null==r?[]:[r]),tr(t,n,r))},Ot.over=Lf,Ot.overArgs=Fo,Ot.overEvery=Cf,Ot.overSome=Uf,Ot.partial=No,Ot.partialRight=Po,Ot.partition=Lo,Ot.pick=df,Ot.pickBy=ku,Ot.property=Cu,Ot.propertyOf=function(t){return function(n){return null==t?F:Sn(t,n)}},Ot.pull=vo,Ot.pullAll=Me,Ot.pullAllBy=function(t,n,r){return t&&t.length&&n&&n.length?ur(t,n,fe(r,2)):t},Ot.pullAllWith=function(t,n,r){return t&&t.length&&n&&n.length?ur(t,n,F,r):t},Ot.pullAt=go,Ot.range=Mf,Ot.rangeRight=Df,Ot.rearg=Zo,Ot.reject=function(t,n){
return(Ko(t)?f:mn)(t,Xe(fe(n,3)))},Ot.remove=function(t,n){var r=[];if(!t||!t.length)return r;var e=-1,u=[],i=t.length;for(n=fe(n,3);++e<i;){var o=t[e];n(o,e,t)&&(r.push(o),u.push(e))}return ir(t,u),r},Ot.rest=function(t,n){if(typeof t!="function")throw new Vu("Expected a function");return n=n===F?n:gu(n),cr(t,n)},Ot.reverse=De,Ot.sampleSize=function(t,n,r){return n=(r?de(t,n,r):n===F)?1:gu(n),t=ru(t)?t:Eu(t),t=Oe(Rr(t)),t.length=_n(n,0,t.length),t},Ot.set=function(t,n,r){return null==t?t:ar(t,n,r);
},Ot.setWith=function(t,n,r,e){return e=typeof e=="function"?e:F,null==t?t:ar(t,n,r,e)},Ot.shuffle=function(t){return Oe(ru(t)?Rr(t):Eu(t))},Ot.slice=function(t,n,r){var e=t?t.length:0;return e?(r&&typeof r!="number"&&de(t,n,r)?(n=0,r=e):(n=null==n?0:gu(n),r=r===F?e:gu(r)),lr(t,n,r)):[]},Ot.sortBy=Co,Ot.sortedUniq=function(t){return t&&t.length?_r(t):[]},Ot.sortedUniqBy=function(t,n){return t&&t.length?_r(t,fe(n,2)):[]},Ot.split=function(t,n,r){return r&&typeof r!="number"&&de(t,n,r)&&(n=r=F),r=r===F?4294967295:r>>>0,
r?(t=xu(t))&&(typeof n=="string"||null!=n&&!Qo(n))&&(n=gr(n),!n&&Wt.test(t))?Ar($(t),0,r):t.split(n,r):[]},Ot.spread=function(t,n){if(typeof t!="function")throw new Vu("Expected a function");return n=n===F?0:Ai(gu(n),0),cr(function(e){var u=e[n];return e=Ar(e,0,n),u&&s(e,u),r(t,this,e)})},Ot.tail=function(t){var n=t?t.length:0;return n?lr(t,1,n):[]},Ot.take=function(t,n,r){return t&&t.length?(n=r||n===F?1:gu(n),lr(t,0,0>n?0:n)):[]},Ot.takeRight=function(t,n,r){var e=t?t.length:0;return e?(n=r||n===F?1:gu(n),
n=e-n,lr(t,0>n?0:n,e)):[]},Ot.takeRightWhile=function(t,n){return t&&t.length?yr(t,fe(n,3),false,true):[]},Ot.takeWhile=function(t,n){return t&&t.length?yr(t,fe(n,3)):[]},Ot.tap=function(t,n){return n(t),t},Ot.throttle=function(t,n,r){var e=true,u=true;if(typeof t!="function")throw new Vu("Expected a function");return cu(r)&&(e="leading"in r?!!r.leading:e,u="trailing"in r?!!r.trailing:u),He(t,n,{leading:e,maxWait:n,trailing:u})},Ot.thru=Ne,Ot.toArray=_u,Ot.toPairs=yf,Ot.toPairsIn=bf,Ot.toPath=function(t){
return Ko(t)?l(t,Se):pu(t)?[t]:Rr(co(t))},Ot.toPlainObject=bu,Ot.transform=function(t,n,r){var e=Ko(t)||tf(t);if(n=fe(n,4),null==r)if(e||cu(t)){var i=t.constructor;r=e?Ko(t)?new i:[]:iu(i)?yn(ci(t)):{}}else r={};return(e?u:kn)(t,function(t,e,u){return n(r,t,e,u)}),r},Ot.unary=function(t){return Ke(t,1)},Ot.union=yo,Ot.unionBy=bo,Ot.unionWith=xo,Ot.uniq=function(t){return t&&t.length?dr(t):[]},Ot.uniqBy=function(t,n){return t&&t.length?dr(t,fe(n,2)):[]},Ot.uniqWith=function(t,n){return t&&t.length?dr(t,F,n):[];
},Ot.unset=function(t,n){var r;if(null==t)r=true;else{r=t;var e=n,e=ye(e,r)?[e]:mr(e);r=Ae(r,e),e=Se(Ue(e)),r=!(null!=r&&Qu.call(r,e))||delete r[e]}return r},Ot.unzip=Te,Ot.unzipWith=$e,Ot.update=function(t,n,r){return null==t?t:ar(t,n,(typeof r=="function"?r:zu)(Sn(t,n)),void 0)},Ot.updateWith=function(t,n,r,e){return e=typeof e=="function"?e:F,null!=t&&(t=ar(t,n,(typeof r=="function"?r:zu)(Sn(t,n)),e)),t},Ot.values=Eu,Ot.valuesIn=function(t){return null==t?[]:I(t,Au(t))},Ot.without=jo,Ot.words=Iu,
Ot.wrap=function(t,n){return n=null==n?zu:n,No(n,t)},Ot.xor=wo,Ot.xorBy=mo,Ot.xorWith=Ao,Ot.zip=ko,Ot.zipObject=function(t,n){return jr(t||[],n||[],cn)},Ot.zipObjectDeep=function(t,n){return jr(t||[],n||[],ar)},Ot.zipWith=Eo,Ot.entries=yf,Ot.entriesIn=bf,Ot.extend=uf,Ot.extendWith=of,Bu(Ot,Ot),Ot.add=Tf,Ot.attempt=Sf,Ot.camelCase=xf,Ot.capitalize=Ou,Ot.ceil=$f,Ot.clamp=function(t,n,r){return r===F&&(r=n,n=F),r!==F&&(r=yu(r),r=r===r?r:0),n!==F&&(n=yu(n),n=n===n?n:0),_n(yu(t),n,r)},Ot.clone=function(t){
return vn(t,false,true)},Ot.cloneDeep=function(t){return vn(t,true,true)},Ot.cloneDeepWith=function(t,n){return vn(t,true,true,n)},Ot.cloneWith=function(t,n){return vn(t,false,true,n)},Ot.conformsTo=function(t,n){return null==n||dn(t,n,mu(n))},Ot.deburr=Su,Ot.defaultTo=function(t,n){return null==t||t!==t?n:t},Ot.divide=Ff,Ot.endsWith=function(t,n,r){t=xu(t),n=gr(n);var e=t.length,e=r=r===F?e:_n(gu(r),0,e);return r-=n.length,0<=r&&t.slice(r,e)==n},Ot.eq=tu,Ot.escape=function(t){return(t=xu(t))&&H.test(t)?t.replace(J,rn):t;
},Ot.escapeRegExp=function(t){return(t=xu(t))&&ot.test(t)?t.replace(it,"\\$&"):t},Ot.every=function(t,n,r){var e=Ko(t)?o:jn;return r&&de(t,n,r)&&(n=F),e(t,fe(n,3))},Ot.find=Io,Ot.findIndex=We,Ot.findKey=function(t,n){return v(t,fe(n,3),kn)},Ot.findLast=Ro,Ot.findLastIndex=Be,Ot.findLastKey=function(t,n){return v(t,fe(n,3),En)},Ot.floor=Nf,Ot.forEach=Ze,Ot.forEachRight=qe,Ot.forIn=function(t,n){return null==t?t:Ji(t,fe(n,3),Au)},Ot.forInRight=function(t,n){return null==t?t:Yi(t,fe(n,3),Au)},Ot.forOwn=function(t,n){
return t&&kn(t,fe(n,3))},Ot.forOwnRight=function(t,n){return t&&En(t,fe(n,3))},Ot.get=ju,Ot.gt=qo,Ot.gte=Vo,Ot.has=function(t,n){return null!=t&&se(t,n,zn)},Ot.hasIn=wu,Ot.head=Ce,Ot.identity=zu,Ot.includes=function(t,n,r,e){return t=ru(t)?t:Eu(t),r=r&&!e?gu(r):0,e=t.length,0>r&&(r=Ai(e+r,0)),hu(t)?r<=e&&-1<t.indexOf(n,r):!!e&&-1<d(t,n,r)},Ot.indexOf=function(t,n,r){var e=t?t.length:0;return e?(r=null==r?0:gu(r),0>r&&(r=Ai(e+r,0)),d(t,n,r)):-1},Ot.inRange=function(t,n,r){return n=vu(n),r===F?(r=n,
n=0):r=vu(r),t=yu(t),t>=ki(n,r)&&t<Ai(n,r)},Ot.invoke=pf,Ot.isArguments=nu,Ot.isArray=Ko,Ot.isArrayBuffer=Go,Ot.isArrayLike=ru,Ot.isArrayLikeObject=eu,Ot.isBoolean=function(t){return true===t||false===t||au(t)&&"[object Boolean]"==ni.call(t)},Ot.isBuffer=Jo,Ot.isDate=Yo,Ot.isElement=function(t){return null!=t&&1===t.nodeType&&au(t)&&!su(t)},Ot.isEmpty=function(t){if(ru(t)&&(Ko(t)||typeof t=="string"||typeof t.splice=="function"||Jo(t)||nu(t)))return!t.length;var n=Et(t);if("[object Map]"==n||"[object Set]"==n)return!t.size;
if(xe(t))return!mi(t).length;for(var r in t)if(Qu.call(t,r))return false;return true},Ot.isEqual=function(t,n){return Dn(t,n)},Ot.isEqualWith=function(t,n,r){var e=(r=typeof r=="function"?r:F)?r(t,n):F;return e===F?Dn(t,n,r):!!e},Ot.isError=uu,Ot.isFinite=function(t){return typeof t=="number"&&ji(t)},Ot.isFunction=iu,Ot.isInteger=ou,Ot.isLength=fu,Ot.isMap=Ho,Ot.isMatch=function(t,n){return t===n||$n(t,n,ae(n))},Ot.isMatchWith=function(t,n,r){return r=typeof r=="function"?r:F,$n(t,n,ae(n),r)},Ot.isNaN=function(t){
return lu(t)&&t!=+t},Ot.isNative=function(t){if(uo(t))throw new $u("This method is not supported with core-js. Try https://github.com/es-shims.");return Fn(t)},Ot.isNil=function(t){return null==t},Ot.isNull=function(t){return null===t},Ot.isNumber=lu,Ot.isObject=cu,Ot.isObjectLike=au,Ot.isPlainObject=su,Ot.isRegExp=Qo,Ot.isSafeInteger=function(t){return ou(t)&&-9007199254740991<=t&&9007199254740991>=t},Ot.isSet=Xo,Ot.isString=hu,Ot.isSymbol=pu,Ot.isTypedArray=tf,Ot.isUndefined=function(t){return t===F;
},Ot.isWeakMap=function(t){return au(t)&&"[object WeakMap]"==Et(t)},Ot.isWeakSet=function(t){return au(t)&&"[object WeakSet]"==ni.call(t)},Ot.join=function(t,n){return t?wi.call(t,n):""},Ot.kebabCase=jf,Ot.last=Ue,Ot.lastIndexOf=function(t,n,r){var e=t?t.length:0;if(!e)return-1;var u=e;if(r!==F&&(u=gu(r),u=0>u?Ai(e+u,0):ki(u,e-1)),n===n){for(r=u+1;r--&&t[r]!==n;);t=r}else t=g(t,b,u,true);return t},Ot.lowerCase=wf,Ot.lowerFirst=mf,Ot.lt=nf,Ot.lte=rf,Ot.max=function(t){return t&&t.length?wn(t,zu,Rn):F;
},Ot.maxBy=function(t,n){return t&&t.length?wn(t,fe(n,2),Rn):F},Ot.mean=function(t){return x(t,zu)},Ot.meanBy=function(t,n){return x(t,fe(n,2))},Ot.min=function(t){return t&&t.length?wn(t,zu,Gn):F},Ot.minBy=function(t,n){return t&&t.length?wn(t,fe(n,2),Gn):F},Ot.stubArray=Uu,Ot.stubFalse=Mu,Ot.stubObject=function(){return{}},Ot.stubString=function(){return""},Ot.stubTrue=function(){return true},Ot.multiply=Pf,Ot.nth=function(t,n){return t&&t.length?Xn(t,gu(n)):F},Ot.noConflict=function(){return Pt._===this&&(Pt._=ri),
this},Ot.noop=Lu,Ot.now=Uo,Ot.pad=function(t,n,r){t=xu(t);var e=(n=gu(n))?T(t):0;return!n||e>=n?t:(n=(n-e)/2,Gr(yi(n),r)+t+Gr(di(n),r))},Ot.padEnd=function(t,n,r){t=xu(t);var e=(n=gu(n))?T(t):0;return n&&e<n?t+Gr(n-e,r):t},Ot.padStart=function(t,n,r){t=xu(t);var e=(n=gu(n))?T(t):0;return n&&e<n?Gr(n-e,r)+t:t},Ot.parseInt=function(t,n,r){return r||null==n?n=0:n&&(n=+n),Oi(xu(t),n||0)},Ot.random=function(t,n,r){if(r&&typeof r!="boolean"&&de(t,n,r)&&(n=r=F),r===F&&(typeof n=="boolean"?(r=n,n=F):typeof t=="boolean"&&(r=t,
t=F)),t===F&&n===F?(t=0,n=1):(t=vu(t),n===F?(n=t,t=0):n=vu(n)),t>n){var e=t;t=n,n=e}return r||t%1||n%1?(r=Si(),ki(t+r*(n-t+Tt("1e-"+((r+"").length-1))),n)):or(t,n)},Ot.reduce=function(t,n,r){var e=Ko(t)?h:m,u=3>arguments.length;return e(t,fe(n,4),r,u,Ki)},Ot.reduceRight=function(t,n,r){var e=Ko(t)?p:m,u=3>arguments.length;return e(t,fe(n,4),r,u,Gi)},Ot.repeat=function(t,n,r){return n=(r?de(t,n,r):n===F)?1:gu(n),fr(xu(t),n)},Ot.replace=function(){var t=arguments,n=xu(t[0]);return 3>t.length?n:n.replace(t[1],t[2]);
},Ot.result=function(t,n,r){n=ye(n,t)?[n]:mr(n);var e=-1,u=n.length;for(u||(t=F,u=1);++e<u;){var i=null==t?F:t[Se(n[e])];i===F&&(e=u,i=r),t=iu(i)?i.call(t):i}return t},Ot.round=Zf,Ot.runInContext=w,Ot.sample=function(t){t=ru(t)?t:Eu(t);var n=t.length;return n?t[or(0,n-1)]:F},Ot.size=function(t){if(null==t)return 0;if(ru(t))return hu(t)?T(t):t.length;var n=Et(t);return"[object Map]"==n||"[object Set]"==n?t.size:Vn(t).length},Ot.snakeCase=Af,Ot.some=function(t,n,r){var e=Ko(t)?_:sr;return r&&de(t,n,r)&&(n=F),
e(t,fe(n,3))},Ot.sortedIndex=function(t,n){return hr(t,n)},Ot.sortedIndexBy=function(t,n,r){return pr(t,n,fe(r,2))},Ot.sortedIndexOf=function(t,n){var r=t?t.length:0;if(r){var e=hr(t,n);if(e<r&&tu(t[e],n))return e}return-1},Ot.sortedLastIndex=function(t,n){return hr(t,n,true)},Ot.sortedLastIndexBy=function(t,n,r){return pr(t,n,fe(r,2),true)},Ot.sortedLastIndexOf=function(t,n){if(t&&t.length){var r=hr(t,n,true)-1;if(tu(t[r],n))return r}return-1},Ot.startCase=kf,Ot.startsWith=function(t,n,r){return t=xu(t),
r=_n(gu(r),0,t.length),n=gr(n),t.slice(r,r+n.length)==n},Ot.subtract=qf,Ot.sum=function(t){return t&&t.length?k(t,zu):0},Ot.sumBy=function(t,n){return t&&t.length?k(t,fe(n,2)):0},Ot.template=function(t,n,r){var e=Ot.templateSettings;r&&de(t,n,r)&&(n=F),t=xu(t),n=of({},n,e,on),r=of({},n.imports,e.imports,on);var u,i,o=mu(r),f=I(r,o),c=0;r=n.interpolate||mt;var a="__p+='";r=Zu((n.escape||mt).source+"|"+r.source+"|"+(r===tt?vt:mt).source+"|"+(n.evaluate||mt).source+"|$","g");var l="sourceURL"in n?"//# sourceURL="+n.sourceURL+"\n":"";
if(t.replace(r,function(n,r,e,o,f,l){return e||(e=o),a+=t.slice(c,l).replace(At,B),r&&(u=true,a+="'+__e("+r+")+'"),f&&(i=true,a+="';"+f+";\n__p+='"),e&&(a+="'+((__t=("+e+"))==null?'':__t)+'"),c=l+n.length,n}),a+="';",(n=n.variable)||(a="with(obj){"+a+"}"),a=(i?a.replace(q,""):a).replace(V,"$1").replace(K,"$1;"),a="function("+(n||"obj")+"){"+(n?"":"obj||(obj={});")+"var __t,__p=''"+(u?",__e=_.escape":"")+(i?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":";")+a+"return __p}",
n=Sf(function(){return Fu(o,l+"return "+a).apply(F,f)}),n.source=a,uu(n))throw n;return n},Ot.times=function(t,n){if(t=gu(t),1>t||9007199254740991<t)return[];var r=4294967295,e=ki(t,4294967295);for(n=fe(n),t-=4294967295,e=E(e,n);++r<t;)n(r);return e},Ot.toFinite=vu,Ot.toInteger=gu,Ot.toLength=du,Ot.toLower=function(t){return xu(t).toLowerCase()},Ot.toNumber=yu,Ot.toSafeInteger=function(t){return _n(gu(t),-9007199254740991,9007199254740991)},Ot.toString=xu,Ot.toUpper=function(t){return xu(t).toUpperCase();
},Ot.trim=function(t,n,r){return(t=xu(t))&&(r||n===F)?t.replace(ft,""):t&&(n=gr(n))?(t=$(t),r=$(n),n=z(t,r),r=W(t,r)+1,Ar(t,n,r).join("")):t},Ot.trimEnd=function(t,n,r){return(t=xu(t))&&(r||n===F)?t.replace(at,""):t&&(n=gr(n))?(t=$(t),n=W(t,$(n))+1,Ar(t,0,n).join("")):t},Ot.trimStart=function(t,n,r){return(t=xu(t))&&(r||n===F)?t.replace(ct,""):t&&(n=gr(n))?(t=$(t),n=z(t,$(n)),Ar(t,n).join("")):t},Ot.truncate=function(t,n){var r=30,e="...";if(cu(n))var u="separator"in n?n.separator:u,r="length"in n?gu(n.length):r,e="omission"in n?gr(n.omission):e;
t=xu(t);var i=t.length;if(Wt.test(t))var o=$(t),i=o.length;if(r>=i)return t;if(i=r-T(e),1>i)return e;if(r=o?Ar(o,0,i).join(""):t.slice(0,i),u===F)return r+e;if(o&&(i+=r.length-i),Qo(u)){if(t.slice(i).search(u)){var f=r;for(u.global||(u=Zu(u.source,xu(gt.exec(u))+"g")),u.lastIndex=0;o=u.exec(f);)var c=o.index;r=r.slice(0,c===F?i:c)}}else t.indexOf(gr(u),i)!=i&&(u=r.lastIndexOf(u),-1<u&&(r=r.slice(0,u)));return r+e},Ot.unescape=function(t){return(t=xu(t))&&Y.test(t)?t.replace(G,en):t},Ot.uniqueId=function(t){
var n=++Xu;return xu(t)+n},Ot.upperCase=Ef,Ot.upperFirst=Of,Ot.each=Ze,Ot.eachRight=qe,Ot.first=Ce,Bu(Ot,function(){var t={};return kn(Ot,function(n,r){Qu.call(Ot.prototype,r)||(t[r]=n)}),t}(),{chain:false}),Ot.VERSION="4.16.1",u("bind bindKey curry curryRight partial partialRight".split(" "),function(t){Ot[t].placeholder=Ot}),u(["drop","take"],function(t,n){Dt.prototype[t]=function(r){var e=this.__filtered__;if(e&&!n)return new Dt(this);r=r===F?1:Ai(gu(r),0);var u=this.clone();return e?u.__takeCount__=ki(r,u.__takeCount__):u.__views__.push({
size:ki(r,4294967295),type:t+(0>u.__dir__?"Right":"")}),u},Dt.prototype[t+"Right"]=function(n){return this.reverse()[t](n).reverse()}}),u(["filter","map","takeWhile"],function(t,n){var r=n+1,e=1==r||3==r;Dt.prototype[t]=function(t){var n=this.clone();return n.__iteratees__.push({iteratee:fe(t,3),type:r}),n.__filtered__=n.__filtered__||e,n}}),u(["head","last"],function(t,n){var r="take"+(n?"Right":"");Dt.prototype[t]=function(){return this[r](1).value()[0]}}),u(["initial","tail"],function(t,n){var r="drop"+(n?"":"Right");
Dt.prototype[t]=function(){return this.__filtered__?new Dt(this):this[r](1)}}),Dt.prototype.compact=function(){return this.filter(zu)},Dt.prototype.find=function(t){return this.filter(t).head()},Dt.prototype.findLast=function(t){return this.reverse().find(t)},Dt.prototype.invokeMap=cr(function(t,n){return typeof t=="function"?new Dt(this):this.map(function(r){return Cn(r,t,n)})}),Dt.prototype.reject=function(t){return this.filter(Xe(fe(t)))},Dt.prototype.slice=function(t,n){t=gu(t);var r=this;return r.__filtered__&&(0<t||0>n)?new Dt(r):(0>t?r=r.takeRight(-t):t&&(r=r.drop(t)),
n!==F&&(n=gu(n),r=0>n?r.dropRight(-n):r.take(n-t)),r)},Dt.prototype.takeRightWhile=function(t){return this.reverse().takeWhile(t).reverse()},Dt.prototype.toArray=function(){return this.take(4294967295)},kn(Dt.prototype,function(t,n){var r=/^(?:filter|find|map|reject)|While$/.test(n),e=/^(?:head|last)$/.test(n),u=Ot[e?"take"+("last"==n?"Right":""):n],i=e||/^find/.test(n);u&&(Ot.prototype[n]=function(){function n(t){return t=u.apply(Ot,s([t],f)),e&&h?t[0]:t}var o=this.__wrapped__,f=e?[1]:arguments,c=o instanceof Dt,a=f[0],l=c||Ko(o);
l&&r&&typeof a=="function"&&1!=a.length&&(c=l=false);var h=this.__chain__,p=!!this.__actions__.length,a=i&&!h,c=c&&!p;return!i&&l?(o=c?o:new Dt(this),o=t.apply(o,f),o.__actions__.push({func:Ne,args:[n],thisArg:F}),new Mt(o,h)):a&&c?t.apply(this,f):(o=this.thru(n),a?e?o.value()[0]:o.value():o)})}),u("pop push shift sort splice unshift".split(" "),function(t){var n=Ku[t],r=/^(?:push|sort|unshift)$/.test(t)?"tap":"thru",e=/^(?:pop|shift)$/.test(t);Ot.prototype[t]=function(){var t=arguments;if(e&&!this.__chain__){
var u=this.value();return n.apply(Ko(u)?u:[],t)}return this[r](function(r){return n.apply(Ko(r)?r:[],t)})}}),kn(Dt.prototype,function(t,n){var r=Ot[n];if(r){var e=r.name+"";(Di[e]||(Di[e]=[])).push({name:n,func:r})}}),Di[Zr(F,2).name]=[{name:"wrapper",func:F}],Dt.prototype.clone=function(){var t=new Dt(this.__wrapped__);return t.__actions__=Rr(this.__actions__),t.__dir__=this.__dir__,t.__filtered__=this.__filtered__,t.__iteratees__=Rr(this.__iteratees__),t.__takeCount__=this.__takeCount__,t.__views__=Rr(this.__views__),
t},Dt.prototype.reverse=function(){if(this.__filtered__){var t=new Dt(this);t.__dir__=-1,t.__filtered__=true}else t=this.clone(),t.__dir__*=-1;return t},Dt.prototype.value=function(){var t,n=this.__wrapped__.value(),r=this.__dir__,e=Ko(n),u=0>r,i=e?n.length:0;t=i;for(var o=this.__views__,f=0,c=-1,a=o.length;++c<a;){var l=o[c],s=l.size;switch(l.type){case"drop":f+=s;break;case"dropRight":t-=s;break;case"take":t=ki(t,f+s);break;case"takeRight":f=Ai(f,t-s)}}if(t={start:f,end:t},o=t.start,f=t.end,t=f-o,
u=u?f:o-1,o=this.__iteratees__,f=o.length,c=0,a=ki(t,this.__takeCount__),!e||200>i||i==t&&a==t)return br(n,this.__actions__);e=[];t:for(;t--&&c<a;){for(u+=r,i=-1,l=n[u];++i<f;){var h=o[i],s=h.type,h=(0,h.iteratee)(l);if(2==s)l=h;else if(!h){if(1==s)continue t;break t}}e[c++]=l}return e},Ot.prototype.at=Oo,Ot.prototype.chain=function(){return Fe(this)},Ot.prototype.commit=function(){return new Mt(this.value(),this.__chain__)},Ot.prototype.next=function(){this.__values__===F&&(this.__values__=_u(this.value()));
var t=this.__index__>=this.__values__.length;return{done:t,value:t?F:this.__values__[this.__index__++]}},Ot.prototype.plant=function(t){for(var n,r=this;r instanceof Rt;){var e=ze(r);e.__index__=0,e.__values__=F,n?u.__wrapped__=e:n=e;var u=e,r=r.__wrapped__}return u.__wrapped__=t,n},Ot.prototype.reverse=function(){var t=this.__wrapped__;return t instanceof Dt?(this.__actions__.length&&(t=new Dt(this)),t=t.reverse(),t.__actions__.push({func:Ne,args:[De],thisArg:F}),new Mt(t,this.__chain__)):this.thru(De);
},Ot.prototype.toJSON=Ot.prototype.valueOf=Ot.prototype.value=function(){return br(this.__wrapped__,this.__actions__)},Ot.prototype.first=Ot.prototype.head,ai&&(Ot.prototype[ai]=Pe),Ot}();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(Pt._=un, define(function(){return un})):qt?((qt.exports=un)._=un,Zt._=un):Pt._=un}).call(commonjsGlobal);
});

var _ = lodash_min.runInContext();
var fp = _baseConvert(_, _);

var index = createCommonjsModule(function (module, exports) {
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(fp) :
  typeof define === 'function' && define.amd ? define(['lodash/fp'], factory) :
  (global.flMaps = factory(global.lodash_fp));
}(commonjsGlobal, (function (lodash_fp) { 'use strict';

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

// Google API Methods
const geocodingUrl = 'https://maps.googleapis.com/maps/api/geocode/json';

function GMap(google) {
  const DEFAULTS = {
    apiKey: 'AIzaSyACR9XwTnLLG11mr2ncrIgR7vwAlAzBK08',
    mapOptions: {
      center: { lat: 51.473663, lng: -0.203287 },
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      zoom: 10,
      scrollwheel: false,
      maxZoom: 17
    }
  };

  function addressToLatLng(address, apiKey = DEFAULTS.apiKey) {
    const encodedAddress = encodeURIComponent(address);
    const url = `${ geocodingUrl }?address=${ encodedAddress }&key=${ apiKey }`;
    // Get url and safely get properties
    return fetch(url).then(r => r.json()).then(lodash_fp.get('results[0].geometry.location'));
  }

  /**
   * @method createBounds
   * @return {Object} - map bounds
   */
  function createBounds() {
    return new google.maps.LatLngBounds();
  }

  /**
   * @param {HTMLElement} mapContainer
   * @param {Object} options
   * @return map
   */
  function createMap(mapContainer, options = {}) {
    const mapOptions = Object.assign({}, DEFAULTS.mapOptions, options);
    const map = new google.maps.Map(mapContainer, mapOptions);
    return map;
  }

  function createPosition(lat, lng) {
    return new google.maps.LatLng(lat, lng);
  }

  function createMarker(map, config) {
    assert(config, 'No marker configuration provided');
    assert(config.lat && config.lng, 'No marker position provided');
    const position = createPosition(config.lat, config.lng);
    const markerConfig = Object.assign({}, config, { position, map });
    const marker = new google.maps.Marker(markerConfig);
    return marker;
  }

  function createInfoWindow() {
    return new google.maps.InfoWindow({});
  }

  return {
    addressToLatLng,
    createBounds,
    createMap,
    createPosition,
    createMarker,
    createInfoWindow
  };
}

var asyncToGenerator = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new Promise(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return Promise.resolve(value).then(function (value) {
            return step("next", value);
          }, function (err) {
            return step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};











var get$1 = function get$1(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get$1(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

















var set = function set(object, property, value, receiver) {
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent !== null) {
      set(parent, property, value, receiver);
    }
  } else if ("value" in desc && desc.writable) {
    desc.value = value;
  } else {
    var setter = desc.set;

    if (setter !== undefined) {
      setter.call(receiver, value);
    }
  }

  return value;
};

/* globals google */
function withoutIndex(array, index) {
  return array.slice(0, index).concat(array.slice(index + 1, array.length));
}

function easeInOutQuad(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

function easeInOutCoord(frame, totalFrames, fromCoord, toCoord) {
  const animPercentage = totalFrames ? frame / totalFrames : 1;
  return {
    lat: easeInOutQuad(animPercentage) * (toCoord.lat - fromCoord.lat) + fromCoord.lat,
    lng: easeInOutQuad(animPercentage) * (toCoord.lng - fromCoord.lng) + fromCoord.lng
  };
}

class MapDriver {
  constructor(google, mapContainerSelector, options) {
    assert(google, 'Google Maps not loaded.');
    const mapContainer = document.querySelector(mapContainerSelector);
    const containerIsValid = mapContainer && mapContainer.nodeName;
    assert(containerIsValid, `Invalid map container from selector: ${ mapContainerSelector }`);

    this.gmap = new GMap(google);
    this.map = this.gmap.createMap(mapContainer, options);
    this.infoWindow = this.gmap.createInfoWindow();
    this.markers = [];
    Object.preventExtensions(this);
  }

  /**
   * Adds a marker to this.markers list
   * @private
   * @method addMarker
   * @param {Marker}
   */
  addMarker(marker) {
    this.markers = this.markers.concat([marker]);
    return this;
  }

  /**
   * Returns all markers currently in the map
   * @public
   * @return {Array<Marker>}
   */
  getMarkers() {
    return Array.from(this.markers);
  }

  /**
   * Creates a map marker
   * @public
   * @param {Object} config - Must have 'lat' and lng'
   * @return {Marker}
   */
  createMarker(config) {
    const marker = this.gmap.createMarker(this.map, config);
    if (config.infoWindow) {
      const infoContent = typeof config.infoWindow === 'function' ? config.infoWindow : () => config.infoWindow;

      marker.addListener('click', () => this.showInfoWindow(marker, infoContent()));
    }

    this.addMarker(marker);
    return marker;
  }

  /**
   * Animates a marker to a specific coordinate
   * @public
   * @param {Marker} marker
   * @param {Object} destination - 'lat' and 'lng'
   * @param {Int} duration - In milliseconds
   */
  moveMarker(marker, destination, duration = 1000) {
    const toCoord = destination;
    const fromCoord = {
      lat: marker.getPosition().lat(),
      lng: marker.getPosition().lng()
    };

    const slideMarker = (frameNo, totalFrames) => {
      const currentCoord = easeInOutCoord(frameNo, totalFrames, fromCoord, toCoord);
      const pos = this.gmap.createPosition(currentCoord);
      marker.setPosition(pos);

      if (frameNo < totalFrames) {
        requestAnimationFrame(() => slideMarker(frameNo + 1, totalFrames));
      }
    };
    const durationInFrames = duration * 0.060;
    slideMarker(0, durationInFrames);
    return this;
  }

  /**
   * Removes a marker from the map.
   * @public
   * @param {Marker} marker
   */
  destroyMarker(marker) {
    const mIndex = this.markers.indexOf(marker);
    assert(mIndex !== -1, 'Attempting to destroy a marker that is not in the map.');
    this.markers = withoutIndex(this.markers, mIndex);
    marker.setMap(null);
    return this;
  }

  /**
   * Fits map's focus on specified markers
   * @public
   * @param {Array<Marker}
   */
  focusMarkers(markers) {
    const bounds = this.gmap.createBounds();
    markers.forEach(m => bounds.extend(m.getPosition()));
    this.map.fitBounds(bounds);
  }

  /**
   * Converts an array into an object with 'lat' and 'lng'
   * @public
   * @param {String} address
   * @return {Object}
   */
  toLatLng(address) {
    var _this = this;

    return asyncToGenerator(function* () {
      return _this.gmap.addressToLatLng(address);
    })();
  }

  /**
   * @private
   * @method showInfoWindow
   * @param {Marker} marker
   * @param {String} content
   */
  showInfoWindow(marker, content) {
    this.infoWindow.setContent(content);
    this.infoWindow.open(this.map, marker);
    return this;
  }
}

return MapDriver;

})));

});

/**
 * Gets a new set of points from a server endpoint
 * @method loadPointsFromServer
 * @param {String} url - Server endpoint
 * @return {Promise<Array>} Array of points
 */
function loadPointsFromServer(url) {
  return fetch(url, { mode: 'cors' }).then(r => r.json()).then(get('points'));
}

function MapTracker$1({ google, mapSelector, pointsUrl, mapOptions }) {
  let points = [];
  const mapDriver = new index(google, mapSelector, mapOptions);

  function loadPoints() {
    loadPointsFromServer(pointsUrl).then(map(Point.of)).then(moveChangedPoints(mapDriver, points)).then(addNewPointsToMap(mapDriver, points)).then(removeMissingPoints(mapDriver, points)).then(newPoints => points = newPoints);
  }

  function fitPoints() {}

  return { loadPoints, fitPoints };
}

return MapTracker$1;

})));

//# sourceMappingURL=index.js.map
