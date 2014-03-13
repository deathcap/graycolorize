'use strict';

var graycolor = require('./');
var ndarray = require('ndarray');

var pixels = ndarray(new Uint8Array(16*16*4), [16,16,4]);
var colors = ndarray(new Uint8Array(256*4), [256,4]);

// index 0
colors.set(0, 1, 10);
colors.set(0, 2, 20);
colors.set(0, 3, 30);
colors.set(0, 4, 40);

console.log(pixels);
graycolor(pixels, colors);
console.log(pixels);
