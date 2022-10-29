class Particle {
    constructor(x=0,y=0) {
        this.pos = createVector(x,y);
        this.rays = [];
        for(let i=0; i < 360; i+=3) {
            this.rays.push(new Ray(this.pos, radians(i)));
        }
    }
    setCoord(x,y) {
        this.pos.x = x;
        this.pos.y = y;
    }
    findColision(boundaries) {
        for(let ray of this.rays) {
            let closest = null;
            let record = Infinity;  
            for(let boundary of boundaries) {
                let pt = ray.intersection(boundary);
                if(pt) {
                    const distance = p5.Vector.dist(this.pos, pt);
                    if(distance < record) {
                        record = distance;
                        closest = pt;
                    }
                }
            }
            if(closest) {
                line(this.pos.x, this.pos.y, closest.x, closest.y);
            }
        }
    }
    show() {
        fill(255);
        ellipse(this.pos.x,this.pos.y,4);
        for(let ray of this.rays) {
            ray.show();
        }
    } 
}