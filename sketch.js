const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var slingshot
var engine, world

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  block1 = new Box(300, 275, 30, 40);
  block2 = new Box (330, 275, 30, 40);
  block3 = new Box (360, 275, 30, 40);
  block4 = new Box (390, 275, 30, 40);
  block5 = new Box (420, 275, 30, 40);
  block6 = new Box (450, 275, 30, 40);
  block7 = new Box (480, 275, 30, 40);
  block8 = new Box (330, 275, 30, 40);
  block9 = new Box (360, 275, 30, 40);
  block10 = new Box (390, 275, 30, 40);
  block11 = new Box (420, 275, 30, 40);
  block12 = new Box (450, 275, 30, 40);
  block13 = new Box (360, 275, 30, 40);
  block14 = new Box (390, 275, 30, 40);
  block15 = new Box (420, 275, 30, 40);
  block16 = new Box (390, 275, 30, 40);

  ground = new Ground(600,height,1200,20);
  platform = new Ground(150, 305, 300, 170);

  polygon = new Ball(100, 200, 30);

  slingshot = new Slingshot(polygon,{x:100, y:200});

  console.log(block1);

}

function draw() {
  background(247,223,178);  
  Engine.update(engine);
  debug: true;
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  slingshot.display();
  polygon.display();
  ground.display();
  platform.display();
}