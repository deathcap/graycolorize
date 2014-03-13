'use strict';

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

module.exports = function(pixels, colors) {

};
