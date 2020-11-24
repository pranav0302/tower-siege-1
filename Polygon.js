class Polygon{
    constructor(x,y,radius){
        var options = {
            isStatic:false,
            restitution:0.1,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world,this.body);
        this.image = loadImage("polygon.png");
    }
    display(){
var pos = this.body.position ; 
      imageMode(CENTER);
      image(this.image, pos.x, pos.y, 60, 60);
      
    }
  }