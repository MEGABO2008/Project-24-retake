
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var box1;
var box2;
var box3;
var paper;
var ground;


function preload()
{
	
}

function setup() {
	createCanvas(2000, 700);


	engine = Engine.create();
	world = engine.world;

rectMode(CENTER);
box1 = new Box(1200,685,160,20., {isStatic:true} );
	box2 = new Box(1275,680,20,100);
	box3 = new Box(1127,680,20,100);
paper = new Paper(50,510,50);
ground = new Ground(600,height,1500,20);





	//Create the Bodies Here.


  
}


function draw() {
	Engine.update(engine);

	rectMode(CENTER);
  background("white");
  
  drawSprites();
  box1.display();
  box2.display();
  box3.display();
  paper.display();
  ground.display();





}

function keyPressed()  {
   if (keyCode === UP_ARROW){
Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
   }
}

