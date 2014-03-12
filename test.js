'use strict';

var graycolor = require('./');
var ndarray = require('ndarray');

var pixels = ndarray(new Uint8Array(16*16*4), [16,16,4]);
var color = 42;
graycolor(pixels, color);
