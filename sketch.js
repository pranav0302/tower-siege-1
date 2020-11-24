
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1800, 700);


	engine = Engine.create();
	world = engine.world;

  ground = new Ground(900,450,480,35);
//level 1
  box1 = new Ground(725,300,50,50);
  box2 = new Ground(775,300,50,50);
  box3 = new Ground(825,300,50,50);
  box4 = new Ground(875,300,50,50);
  box5 = new Ground(925,300,50,50);
  box6 = new Ground(975,300,50,50);
  box7 = new Ground(1025,300,50,50);
  box8 = new Ground(1075,300,50,50);
//level 2
  box9 = new Ground(750,250,50,50);
  box10 = new Ground(800,250,50,50);
  box11 = new Ground(850,250,50,50);
  box12 = new Ground(900,250,50,50);
  box13= new Ground(950,250,50,50);
  box14= new Ground(1000,250,50,50);
  box15= new Ground(1050,250,50,50);
//level 3
  box16 = new Ground(775,200,50,50);
  box17 = new Ground(825,200,50,50);
  box18 = new Ground(875,200,50,50);
  box19 = new Ground(925,200,50,50);
  box20 = new Ground(975,200,50,50);
  box21 = new Ground(1025,200,50,50);
//level 4
  box22 = new Ground(800,150,50,50);
  box23 = new Ground(850,150,50,50);
  box24 = new Ground(900,150,50,50);
  box25 = new Ground(950,150,50,50);
  box26 = new Ground(1000,150,50,50);
//level 5
  box27 = new Ground(825,100,50,50);
  box28 = new Ground(875,100,50,50);
  box29 = new Ground(925,100,50,50);
  box30 = new Ground(975,100,50,50);
//level 6
  box31 = new Ground(850,50,50,50);
  box32 = new Ground(900,50,50,50);
  box33 = new Ground(950,50,50,50);
// level 7
  box34 = new Ground(875,0,50,50);
  box35 = new Ground(925,0,50,50);
// level 8
 box36 = new Ground(900,-50,50,50);


 polygon1 = new Polygon(150,850,30);

	slingShot = new SlingShot(polygon1.body,{x:150, y:410});



	Engine.run(engine);
  
}


function draw() {
 // rectMode(CENTER);
  background(135, 203, 248);
  Matter.Body.setStatic(ground.body,true);

  slingShot.display();
polygon1.display();

 ground.display();
 box1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();
 box6.display();
 box7.display();
 box8.display();

box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();

box16.display();
box17.display();
box18.display();
box19.display();
box20.display();
box21.display();

box22.display();
box23.display();
box24.display();
box25.display();
box26.display();

box27.display();
box28.display();
box29.display();
box30.display();

box31.display();
box32.display();
box33.display();

box34.display();
box35.display();

box36.display();



}


function mouseDragged(){
    Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
}
