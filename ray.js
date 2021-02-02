class Ray {
    constructor(x, y){
        this.pos = createVector(x,y); /*position*/
        this.dir = createVector(1, 0); /*direction*/
    }

    lookAt(x, y) {
        this.dir.x = x - this.pos.x;
        this.dir.y = y - this.pos.y;
        this.dir.normalize();
    }

    show() {
        stroke(255);
        push();
        translate(this.pos.x, this.pos.y);
        line(0 ,0, this.dir.x * 10, this.dir.y * 10);
        pop();
    }

    cast(wall) {
        /*calculate the point where our ray intersect with the wall*/
        /*formula from "Line-line intersection" Wikipedia page*/
        /*https://en.wikipedia.org/wiki/Line%E2%80%93line_intersection*/
        const x1 = wall.a.x;
        const y1 = wall.a.y;
        const x2 = wall.b.x;
        const y2 = wall.b.y;

        const x3 = this.pos.x;
        const y3 = this.pos.y;
        const x4 = this.pos.x + this.dir.x; /*position + the direction of the vector*/
        const y4 = this.pos.y + this.dir.y;

        /*denominator. Note: t and u have the same*/
        const den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
        if (den == 0) { 
            /*meaning if the ray is parallel to the wall*/
            return;
        }

        /*then calculate t*/
        const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den;
        /*then calculate u*/
        const u = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / den;
        
        /*The intersection point falls within the first line segment if 0.0 ≤ t ≤ 1.0, and it falls within the second line segment if 0.0 ≤ u ≤ 1.0.*/ 
        /*although 0.0 < u < 1 is for a defined line but our ray is a vector that can be of infinite length*/
        /*sp we'll just do if u > 0*/
        if (t > 0 && t < 1 && u > 0) {
            return true; /*we DID touch the wall*/
        } else {
            return;
        }
    }
}