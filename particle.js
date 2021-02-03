/**
 * This class defines how the vector looks like 
 * @param {Vector} pos - the position x, y of point a of our light source
 * @param {Array<Float>} rays - each subarray contains the source position and the direction angle
*/
class Particle {
    constructor() {
        this.pos = createVector(width / 2, height / 2);
        this.rays = [];
        for (let a = 0; a < 360; a +=10) {
            this.rays.push(new Ray(this.pos, radians(a)));
        }
    }
    /** Updates pos vector values x and y */
    update(x,y) {
        this.pos.set(x,y);
    }
    /** Checks if the vector intersects with a wall anf if so, casts a line from teh source to the wall
    * @param {Array<Float>} - each subarray contains the start and end of a wall
    * @property {vector} pt - The point of intersection betw/ the ray and the wall, calculated in Ray.cast()
    * @property {float} d - distance between the source pos and the point of intersection with the wall
    * @property {number} record - keeps track of the smallest length of teh vector at each loop
    * @property {vector} closest - everytime a point of intersection exist and the distance d is < to the last recorded distance, then closest = the new point coordinates
    */
    look(walls) {
        for (let ray of this.rays) {
            let closest = null;
            let record = Infinity;
            for (let wall of walls) {
                const pt = ray.cast(wall);
                if (pt) {
                    const d = p5.Vector.dist(this.pos, pt);
                    if (d < record) {
                        record = d;
                        closest = pt;
                    }
                }
            }
            if (closest) {
                stroke(255, 100); //adding some transparency to the rays, more light like
                line(this.pos.x, this.pos.y, closest.x, closest.y);
            }
        }
    }
    /** Displays all vectors 'ray' from the list 'rays' */
    show() {
        fill(255);
        ellipse(this.pos.x, this.pos.y, 4); //shape displayed on the wall
        for (let ray of this.rays) {
            ray.show();
        }

    }
}
