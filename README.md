# raycasting_js

Visualize the raycasting: just open index.html in your browser

To see the documentation -> out/index.html

To make custom changes:

Changing the number of rays: particle.js -> Particle() --> for loop increment

Changing number of walls: sketch.js -> setup() -> length of i in for loop

Changing pointer location manually -> sketch.js -> 
1/ comment:
-off, yoff
-particle.update(noise(xoff) * width, noise(yoff) * height),
-xoff += 0.01 and yoff += 0.01
2/ uncomment particle.update(mouseX, mouseY);

Changing background color: sketch.js -> draw() -> change background() argument : for black (0), for dark blue ("#040038")

Changing walls color: Boundary.js -> show() --> stroke(r,g,b, alpha)
r, g, b: rbg colors
alpha: the width of the line

Color picker: https://htmlcolors.com/google-color-picker
Some examples:
green fluo: 119, 255, 0
bright red: 255, 0, 106

JSDoc for the documentation.
See: 
https://jsdoc.app/
