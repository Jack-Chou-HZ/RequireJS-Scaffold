"use strict";

define([], function () {
  var Robert = function Robert(guestName) {
    'Use Strict'; // this refers to the Robert object

    this.sayHi = function () {
      console.log("Hi, ".concat(guestName, ", welcome to RequireJS!"));
    };
  };

  return Robert;
});