let ray;
let particle;
let walls = [];
let xoff = 0;
let yoff = 10000;

function setup() {
    createCanvas(400, 400); //W * H fullscreen: 1420, 680
    // wall = new Boundary(300, 100, 300, 300); /*from Boundary.js*/
    // ray = new Ray(100, 200); /*from ray.js*/
    for (let i = 0; i < 10; i++) {
        let x1 = random(width);
        let x2 = random(width);
        let y1 = random(height);
        let y2 = random(height);
        walls[i] = new Boundary(x1, y1, x2, y2);
    }
    //adding the window bounderies so the light does not just stop at the edge of walls
    // but continues to the edge of the whole window.
    //we add 4 walls at the end of the walls list so our vectors can intersect with them too
    walls.push(new Boundary(0, 0, width, 0)); //top wall
    walls.push(new Boundary(width, 0, width, height)); //right wall
    walls.push(new Boundary(width, height, 0, height)); //bottom wall
    walls.push(new Boundary(0, height, width, 0)); //left wall

    particle = new Particle();
}

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
    // ray.show();
    // ray.lookAt(mouseX, mouseY);

// let pt = ray.cast(wall); /*from ray.js, cast like casting a light against a wall*/
// if (pt) {
//     fill(255); /*if the vector touches the wall then draw the line*/
//     ellipse(pt.x, pt.y, 8, 8);
//     }

}