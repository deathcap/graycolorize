'use strict';

var cwise = require('cwise');

var applyColor = cwise({
  args: ["array", "array"],
  body: function(a, color) {
    // TODO: if r=g=b, set to color
    // TODO: and then from colormap[index], where index=r=g=b
  }
});

module.exports = function(pixels, colors) {

};
