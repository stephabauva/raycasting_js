# raycasting_js

Go to out -> index.html to see the documentation

To make custom changes:

changing the number of rays: particle.js -> Particle() --> for loop increment

changing number of walls: sketch.js -> setup() -> length of i in for loop

change pointer location manually -> sketch.js -> 
1/ comment:
-off, yoff
-particle.update(noise(xoff) * width, noise(yoff) * height),
-xoff += 0.01 and yoff += 0.01
2/ uncomment particle.update(mouseX, mouseY);

changing background color: sketch.js -> draw() -> change background() argument : for black (0), for dark blue ("#040038")

changing walls color: Boundary.js -> show() --> stroke(r,g,b, alpha)
r, g, b: rbg colors
alpha: the width of the line

color picker: https://htmlcolors.com/google-color-picker
green fluo: 119, 255, 0
bright red: 255, 0, 106

JSDoc for the documentation.
See: 
https://jsdoc.app/about-getting-started.html
