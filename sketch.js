var ground1,ground2;
var can;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}	

function setup() {
	createCanvas(1200, 650);

	engine = Engine.create();
	world = engine.world;

	ground1 = createSprite(550,400,300,15);
	ground1.shapeColor = "brown";

	ground2 = createSprite(800,200,300,15);
	ground2.shapeColor = "brown";

	can1 = new Cans(500,400,25,20);
	
	
	Engine.run(engine);

}


function draw() {
  background(0);

  can1.display();

  


  

}


