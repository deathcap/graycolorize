'use strict';

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

module.exports = function(pixels, colors) {
  var height = pixels.shape[0];
  var width = pixels.shape[1];

  for (var j = 0; j < height; j += 1) { // TODO: replace with cwise above
    for (var i = 0; i < width; i += 1) {
      var r = pixels.get(i, j, 0);
      var g = pixels.get(i, j, 1);
      var b = pixels.get(i, j, 2);
      var a = pixels.get(i, j, 3);

      if (r === g && g === b) {
        // grayscale index
        var index = r;

        pixels.set(i, j, 0, colors.get(index, 0));
        pixels.set(i, j, 1, colors.get(index, 1));
        pixels.set(i, j, 2, colors.get(index, 2));
        pixels.set(i, j, 3, colors.get(index, 3));
      }
    }
  }
};
