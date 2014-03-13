'use strict';

var graycolor = require('./');
var ndarray = require('ndarray');

var pixels = ndarray(new Uint8Array(16*16*4), [16,16,4]);

// unchanged
pixels.set(15, 15, 0, 128);
pixels.set(15, 15, 1, 128);
pixels.set(15, 15, 2, 128);
pixels.set(15, 15, 3, 255);

// changed below to 11,22,33
pixels.set(15, 14, 0, 192);
pixels.set(15, 14, 1, 192);
pixels.set(15, 14, 2, 192);
pixels.set(15, 14, 3, 255);


var colors = ndarray(new Uint8Array(256*4), [256,4]);

// index 0 (most pixels)
colors.set(0, 0, 10);
colors.set(0, 1, 20);
colors.set(0, 2, 30);
colors.set(0, 3, 255);

// index 192
colors.set(192, 0, 11);
colors.set(192, 1, 22);
colors.set(192, 2, 33);
colors.set(192, 3, 255);

console.log(pixels);
graycolor(pixels, colors);
console.log(pixels);
