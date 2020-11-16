class Ball{
    constructor(x,y,radius){
        var options = {
            'restitution': 0.8,
            'friction': 1.0,
            'density': 1.0,
        }
        this.ball = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world, this.ball);
    }
    display(){
        var pos = this.ball.position;
        fill("RED");
        ellipseMode(CENTER);
        ellipse(pos.x, pos.y, this.radius, this.radius);
    }
}