
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	
	bob1 =new Bob(600,600,90);
	bob2 =new Bob(690,600,90);
	bob3 =new Bob(780,600,90);
	bob4 =new Bob(510,600,90);
	bob5 =new Bob(420,600,90);
	roof =new Roof(600,200,550,40)
	rope= new Rope(bob1.body,roof.body,-bobDiameter*2,0);
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("gray");
  
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope.display();
}



