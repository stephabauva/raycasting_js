/** 
 * Defines two points a and b, linked together with a line 
 * @param {int} x1 - x value for a
 * @param {int} y1 - y value for a
 * @param {int} x2 - x value for b
 * @param {int} y2 - y value for b
 */
class Boundary {
    constructor(x1, y1, x2, y2) {
        this.a = createVector(x1, y1);
        this.b = createVector(x2, y2);
    }
    show() {
        stroke(119, 255, 0, 255) //stroke(r,g,b, alpha)
        line(this.a.x, this.a.y, this.b.x, this.b.y);
    }
}