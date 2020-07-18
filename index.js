"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var func = function func() {
  var arr = ["Hello", "World"];
  var arr2 = ["Happy", "Learning"];
  var res = arr.concat(arr2);
  var sum_array = [1, 2, 89, 65, 90];
  var sum = sum_array.reduce(function (currentValue, sum) {
    return currentValue + sum;
  });
  console.log("Reduce funtion using ES6: " + sum);
  var filter = sum_array.filter(function (filter) {
    return filter > 50;
  });
  console.log("Filter Function using ES6: " + filter);
  var map = sum_array.map(function (map) {
    return map * 100;
  });
  console.log("Map Function using ES6: " + map);
  console.log("Array Function using ES6: " + Array.isArray(map));
  var find = sum_array.find(function (find) {
    return find >= 90;
  });
  console.log("Find Function using ES6: " + find);
  console.log("Slice of an Array using ES6: " + res.slice(2, 4));
  var product = {
    name: "book",
    price: 200,
    quantity: 1
  };
  console.log("Product Details using ES6:");
  console.log(_objectSpread({}, product));
};

func();