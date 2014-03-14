'use strict';

var color = require('onecolor');

/* TODO
var cwise = require('cwise');

var applyColor = cwise({
  args: ['array', 'array', 'array',
         'array', 'array', 'array',
         'array', 'array', 'array'],
  body: function(inR, inG, inB, colorR, colorG, colorB, outR, outG, outB) {
    if (inR === inG && inG === inB) { // grayscale
      var index = inR; // === inG === inB

      // TODO: lookup in colormap
      // TODO: and then from colormap[index], where index=r=g=b
     }
  }
});
*/

var generateMap = function(hue, saturation) {
  for (var i = 0; i < 256; i += 1) {
    var brightness = i / 255.0;
    var c = new color.HSV(hue, saturation, brightness).rgb();

    var r = Math.round(c.red() * 255);
    var g = Math.round(c.green() * 255);
    var b = Math.round(c.blue() * 255);

    //console.log(r, g, b);
    console.log(r,g,b,'<div style="width: 50px; height: 10px; background-color: '+c.hex()+'"></div><br>');
  }
}

generateMap(0.25 /* 90deg(/360), green-yellow */, 0.5);

var graycolorize = function(pixels, colors) {
  var height = pixels.shape[0];
  var width = pixels.shape[1];

  for (var j = 0; j < height; j += 1) { // TODO: replace with cwise above
    for (var i = 0; i < width; i += 1) {
      var r = pixels.get(i, j, 0);
      var g = pixels.get(i, j, 1);
      var b = pixels.get(i, j, 2);
      var a = pixels.get(i, j, 3);

      if (r === g && g === b) { // grayscale index
        var index = r;

        if (colors.get(index, 3) !== 0) { // only replace if replacement alpha set
          // replace with color at given index
          pixels.set(i, j, 0, colors.get(index, 0));
          pixels.set(i, j, 1, colors.get(index, 1));
          pixels.set(i, j, 2, colors.get(index, 2));
          pixels.set(i, j, 3, colors.get(index, 3));
        }
      }
    }
  }
};

module.exports = graycolorize;

