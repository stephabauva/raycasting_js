class Ray {
    constructor(x, y){
        this.pos = createVector(x,y); /*position*/
        this.dir = createVector(1, 0); /*direction*/
    }

    show() {
        stroke(255);
        push();
        translate(this.pos.x, this.pos.y);
        line(0 ,0, this.dir.x * 10, this.dir.y * 10);
        pop();
    }

    cast(wall) {
        /*formula from "Line-line intersection" Wikipedia page*/
        const x1 = wall.a.x;
        const y1 = wall.a.y;
        const x2 = wall.b.x;
        const y2 = wall.b.y;

        const x3 = this.pos.x;
        const y3 = this.pos.y;
        const x4 = this.pos.x + this.dir.x;
        const y4 = this.pos.y + this.dir.y;
    }
}