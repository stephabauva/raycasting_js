let ray;
let wall;

function setup() {
    createCanvas(400, 400);
    wall = new Boundary(300, 100, 300, 300); /*from Boundary.js*/
    ray = new Ray(100, 200); /*from ray.js*/
}

function draw() {
    background(0);
    wall.show();
    ray.show();

let pt = ray.cast(wall); /*cast like casting a light against a wall*/
if (pt) {
    fill(255); /*if the vector touches the wall then draw the line*/
    ellipse(pt.x, pt.y, 8, 8);
    }

}