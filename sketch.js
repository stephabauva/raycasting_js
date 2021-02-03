let ray;
let particle;
let walls = [];
let xoff = 0;
let yoff = 10000;

/**  Using p5.js library, creates a canvas with 4 walls: top, right, bottom, left; so rays can also cast to those bounderies. */
function setup() {
    createCanvas(400, 400); //W * H fullscreen: 1420, 680
    for (let i = 0; i < 7; i++) {
        let x1 = random(width);
        let x2 = random(width);
        let y1 = random(height);
        let y2 = random(height);
        walls[i] = new Boundary(x1, y1, x2, y2);
    }

    walls.push(new Boundary(0, 0, width, 0)); //top wall
    walls.push(new Boundary(width, 0, width, height)); //right wall
    walls.push(new Boundary(width, height, 0, height)); //bottom wall
    walls.push(new Boundary(0, height, width, 0)); //left wall

    particle = new Particle();
}

/** Displays walls and the source particle
 * To automatically move the source around, we introdiuce Perlin noise with noise().
 * We provide the Perlin noise function with an offset argument, i.e. xoff and then yoff, and we multiply them by the width and height of the canvas, respectively.
 * We then update our particle coordinates with our new x and y.
 */
function draw() {
    background(0);
    for (let wall of walls) {
        wall.show();
    }
    particle.show();
    // particle.update(mouseX, mouseY);
    particle.update(noise(xoff) * width, noise(yoff) * height);
    particle.look(walls);

    xoff += 0.01;
    yoff += 0.01;

}