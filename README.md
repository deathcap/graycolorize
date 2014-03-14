# graycolorize

Replace grayscale with color from a colormap

[![Build Status](https://travis-ci.org/deathcap/graycolorize.png)](https://travis-ci.org/deathcap/graycolorize)

Usage:

    var graycolorize = require('graycolorize');

    graycolorize(pixels, colormap);

where `pixels` is an [ndarray](https://github.com/mikolalysenko/ndarray) of pixels
(e.g., loaded by [get-pixels](https://github.com/mikolalysenko/get-pixels)). `colormap`
is a 256x4 ndarray of RGBA colors for each 256 grayscale colors to replace. 

You can create the `colormap` yourself or call `graycolorize.generateMap(hue, saturation)` to
generate one for you, with the given hue and saturation (0-1) from minimum to maximum brightness:

    var colormap = graycolorize.generateMap(0.25, 0.5);

Example (see demo.js or run `npm start`):

![screenshot](http://i.imgur.com/w1Zas8E.png "Screenshot")

## License

MIT

