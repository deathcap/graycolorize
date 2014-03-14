# graycolorize

Replace grayscale with color from a colormap

![![Build Status](https://travis-ci.org/deathcap/graycolorize.png)](https://travis-ci.org/deathcap/graycolorize)

Usage:

    var graycolorize = require('graycolorize');

    graycolorize(pixels, colormap);

where `pixels` is an [ndarray](https://github.com/mikolalysenko/ndarray) of pixels
(e.g., loaded by [get-pixels](https://github.com/mikolalysenko/get-pixels)). `colormap`
is a 256x4 ndarray of RGBA colors for each 256 grayscale colors to replace. 

Example of replacing 0x71 with 0x427f13ff (see demo.js or run `npm start`):

![screenshot](http://i.imgur.com/w1Zas8E.png "Screenshot")

## License

MIT

