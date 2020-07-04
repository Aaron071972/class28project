const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constaint;


var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
function preload()
{
	
}
var options = {
	isStatic: true
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	box1 = new Box(400, 200, 75,75);
	ground = new Ground(200,height,1200,30)

	target1 = new Trash(340, 650, 30, 100, options)
	target2 = new Trash(380, 650, 140, 20, options)
	target3 = new Trash(420, 650, 30, 100, options)
	
	slingshot = new Slingshot(box1.body, {x: 200, y:100})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");
  

box1.display()
ground.display()
target1.display()
target2.display()
target3.display()
  
  drawSprites();
 
}



