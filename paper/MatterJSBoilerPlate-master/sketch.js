
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	box=createSprite(300,665,200,10)
	box.shapeColor=color("red")

	boxside=createSprite(200,620,10,100)
	boxside.shapeColor=color("red")

	boxside1=createSprite(400,620,10,100)
	boxside1.shapeColor=color("red")

    box =Bodies.rectangle(300,665,200,10,{isStatic:true})
    paper1 = new paper(85,-85,10)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === 39) {
   
		Matter.Body.applyForce(paper1.body,paper1.body. position,{x:85,y:-85});
	 }
   }
   

