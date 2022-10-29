class Ray {
    constructor(pos, angle) {
        this.pos = pos;
        this.dir = p5.Vector.fromAngle(angle);
    }
    lookAt(x,y) {
        this.dir.x = x - this.pos.x;
        this.dir.y = y - this.pos.y;
        this.dir.normalize();
    }
    show() {
        stroke(255);
        push();
        translate(this.pos.x, this.pos.y);
        line(0, 0, this.dir.x * 10, this.dir.y * 10);
        pop();
    }
    intersection(boundary) {
        let x3 = this.pos.x;
        let y3 = this.pos.y;
        let x4 = this.pos.x + this.dir.x;
        let y4 = this.pos.y + this.dir.y;

        let x1 = boundary.a.x;
        let y1 = boundary.a.y;
        let x2 = boundary.b.x;
        let y2 = boundary.b.y;

        let den = ((x1-x2)*(y3-y4) - (y1-y2)*(x3-x4));

        if(den == 0) {
            return;
        }

        const t = ((x1-x3)*(y3-y4)-(y1-y3)*(x3-x4))/den;
        const u = ((x1-x3)*(y1-y2)-(y1-y3)*(x1-x2))/den;

        if(t > 0 && t < 1 && u > 0) {
            let pX = x1 + t*(x2-x1);
            let pY = y1 + t*(y2-y1);
            let p = createVector(pX, pY);
            return p;
        }
        else {
            return;
        }
    
    }
}