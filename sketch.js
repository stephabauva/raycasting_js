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
    ray.lookAt(mouseX, mouseY);

let pt = ray.cast(wall); /*from ray.js, cast like casting a light against a wall*/
console.log(pt);
// if (pt) {
//     fill(255); /*if the vector touches the wall then draw the line*/
//     ellipse(pt.x, pt.y, 8, 8);
//     }

}