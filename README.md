# raycasting_js
changing the number of rays: particle.js -> Particle() --> for loop increment

changing number of walls: sketch.js -> setup() -> length of i in for loop

change pointer location manually -> sketch.js -> 
1/ comment:
-off, yoff
-particle.update(noise(xoff) * width, noise(yoff) * height),
-xoff += 0.01 and yoff += 0.01
2/ uncomment particle.update(mouseX, mouseY);

changing background color: sketch.js -> draw() -> change background() argument : for black (0), for dark blue ("#040038")

changing walls color: Boundary.js -> show() --> stroke(x,y,z, alpha)
x, y, z: rbg colors
alpha: the width of the line

color picker: https://htmlcolors.com/google-color-picker
green fluo: 119, 255, 0
bright red: 255, 0, 106