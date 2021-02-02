let ray;
let particle;
let walls = [];

function setup() {
    createCanvas(400, 400);
    // wall = new Boundary(300, 100, 300, 300); /*from Boundary.js*/
    // ray = new Ray(100, 200); /*from ray.js*/
    for (let i = 0; i < 5; i++) {
        let x1 = random(width);
        let x2 = random(width);
        let y1 = random(height);
        let y2 = random(height);
        walls[i] = new Boundary(x1, y1, x2, y2);
    }
    particle = new Particle();
}

function draw() {
    background(0);
    for (let wall of walls) {
        wall.show();
    }
    particle.show();
    particle.update(mouseX, mouseY);
    particle.look(walls);
    // ray.show();
    // ray.lookAt(mouseX, mouseY);

// let pt = ray.cast(wall); /*from ray.js, cast like casting a light against a wall*/
// if (pt) {
//     fill(255); /*if the vector touches the wall then draw the line*/
//     ellipse(pt.x, pt.y, 8, 8);
//     }

}