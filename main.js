let boundary;
let ray;
let boundaries = [];
let particle;

function setup() {
    createCanvas(800,800);
    for(let i = 0; i < 5; i++) {
        let aX = Math.random() * 800;
        let aY = Math.random() * 800;
        let bX = Math.random() * 800;
        let bY = Math.random() * 800;
        boundary = new Boundary(aX,aY,bX,bY);
        boundaries[i] = boundary;
    }
    particle = new Particle();
    ray = new Ray(100,150);
}

function draw() {
    background(0);
    particle.setCoord(mouseX, mouseY);
    particle.show();
    for(let b of boundaries) {
        b.show();
    }
    particle.findColision(boundaries);
}

