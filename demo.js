'use strict';

var getPixels = require('get-pixels');
var savePixels = require('save-pixels');
var ndarray = require('ndarray');
var graycolorize = require('./');

var show = function(url) {
  var size = 16*8;
  var origImg = new Image();
  origImg.src = url;
  origImg.width = origImg.height = size.toString();
  
  var container = document.createElement('div');
  var canvasContainer = document.createElement('span');
  container.appendChild(origImg);
  container.appendChild(canvasContainer);
  document.body.appendChild(container);

  getPixels(url, function(err, pixels) {

    /* manual test
    var colormap = ndarray(new Uint8Array(256*4), [256,4]);

    colormap.set(0x71, 0, 0x42);
    colormap.set(0x71, 1, 0x7f);
    colormap.set(0x71, 2, 0x13);
    colormap.set(0x71, 3, 0xff);
    */

    //colormap = graycolorize.generateMap(0.25 /* 90deg(/360), green-yellow */, 0.5, 0.3, 1.0);
    colormap = graycolorize.generateMap(0.25, 0.5);
    console.log('colormap=',colormap);

    graycolorize(pixels, colormap);

    console.log(err, pixels);

    var canvas = savePixels(pixels, 'canvas');
    canvas.style.width = canvas.style.height = size + 'px';
    canvasContainer.appendChild(canvas);
  });
};

if (!process.browser) throw new Error('requires browserify environment'); // because data URLs only supported with get-pixels on browser for now, not nodejs

document.body.style.imageRendering = '-moz-crisp-edges';

// grayscale vines from https://github.com/deathcap/ProgrammerArt
show('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAEJGlDQ1BJQ0MgUHJvZmlsZQAAOBGFVd9v21QUPolvUqQWPyBYR4eKxa9VU1u5GxqtxgZJk6XtShal6dgqJOQ6N4mpGwfb6baqT3uBNwb8AUDZAw9IPCENBmJ72fbAtElThyqqSUh76MQPISbtBVXhu3ZiJ1PEXPX6yznfOec7517bRD1fabWaGVWIlquunc8klZOnFpSeTYrSs9RLA9Sr6U4tkcvNEi7BFffO6+EdigjL7ZHu/k72I796i9zRiSJPwG4VHX0Z+AxRzNRrtksUvwf7+Gm3BtzzHPDTNgQCqwKXfZwSeNHHJz1OIT8JjtAq6xWtCLwGPLzYZi+3YV8DGMiT4VVuG7oiZpGzrZJhcs/hL49xtzH/Dy6bdfTsXYNY+5yluWO4D4neK/ZUvok/17X0HPBLsF+vuUlhfwX4j/rSfAJ4H1H0qZJ9dN7nR19frRTeBt4Fe9FwpwtN+2p1MXscGLHR9SXrmMgjONd1ZxKzpBeA71b4tNhj6JGoyFNp4GHgwUp9qplfmnFW5oTdy7NamcwCI49kv6fN5IAHgD+0rbyoBc3SOjczohbyS1drbq6pQdqumllRC/0ymTtej8gpbbuVwpQfyw66dqEZyxZKxtHpJn+tZnpnEdrYBbueF9qQn93S7HQGGHnYP7w6L+YGHNtd1FJitqPAR+hERCNOFi1i1alKO6RQnjKUxL1GNjwlMsiEhcPLYTEiT9ISbN15OY/jx4SMshe9LaJRpTvHr3C/ybFYP1PZAfwfYrPsMBtnE6SwN9ib7AhLwTrBDgUKcm06FSrTfSj187xPdVQWOk5Q8vxAfSiIUc7Z7xr6zY/+hpqwSyv0I0/QMTRb7RMgBxNodTfSPqdraz/sDjzKBrv4zu2+a2t0/HHzjd2Lbcc2sG7GtsL42K+xLfxtUgI7YHqKlqHK8HbCCXgjHT1cAdMlDetv4FnQ2lLasaOl6vmB0CMmwT/IPszSueHQqv6i/qluqF+oF9TfO2qEGTumJH0qfSv9KH0nfS/9TIp0Wboi/SRdlb6RLgU5u++9nyXYe69fYRPdil1o1WufNSdTTsp75BfllPy8/LI8G7AUuV8ek6fkvfDsCfbNDP0dvRh0CrNqTbV7LfEEGDQPJQadBtfGVMWEq3QWWdufk6ZSNsjG2PQjp3ZcnOWWing6noonSInvi0/Ex+IzAreevPhe+CawpgP1/pMTMDo64G0sTCXIM+KdOnFWRfQKdJvQzV1+Bt8OokmrdtY2yhVX2a+qrykJfMq4Ml3VR4cVzTQVz+UoNne4vcKLoyS+gyKO6EHe+75Fdt0Mbe5bRIf/wjvrVmhbqBN97RD1vxrahvBOfOYzoosH9bq94uejSOQGkVM6sN/7HelL4t10t9F4gPdVzydEOx83Gv+uNxo7XyL/FtFl8z9ZAHF4bBsrEwAAAKVJREFUOBGFkwEOgzAMA9eJd/Zx/eiYJzkcbssqQZKL64gC7YXVe/+oHGM05mKqycW0mm4pNlttUE9csZYNCnwTseRZS3/kJtbTJDYzT/esrU/+Fki4E5tvYxqtzFMzmaUgTbJ/EKwOzYw6Tr29T4t2m8id0+yXy8TX1ATwMKDri3TzyciaMiBgLkHWZHWI22eqEVciw0e9BKuptmD/9i9Y8C9y+gkVQ4WBKfOwggAAAABJRU5ErkJggg==');

// 10% gradient
show('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAKklEQVQ4y2NgGPKAEYj/U2IAi5SUFEUuYJGUlGQYdcGIdwHjfyAY2pkJAArVB9T3UlZLAAAAAElFTkSuQmCC');
