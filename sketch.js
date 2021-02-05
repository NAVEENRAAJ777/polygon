const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon1,ground;
var stand1,stand2;

var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}










function setup() {

  createCanvas(800, 700);





  engine = Engine.create();

  world = engine.world;



  //Create the Bodies Here.

  polygon1=new Polygon(150,200)





  ground1=new Ground(400,690,800,20);

  ground2=new Ground(500,490,200,20)





  block1=new Block(441,450,20,60);

  block2=new Block(461,450,20,60);

  block3=new Block(481,450,20,60);

  block4=new Block(501,450,20,60);

  block5=new Block(521,450,20,60);

  block6=new Block(461,400,20,60);

  block7=new Block(481,400,20,60);

  block8=new Block(501,400,20,60);

  block9=new Block(481,360,20,60);



  sling1=new Slingshot(polygon1.body,{x:150,y:200})

  

Engine.run(engine);

 

}





function draw() {

 rectMode(CENTER);

 background("black");

 polygon1.display();

 ground1.display();

 ground2.display();

 block1.display();

 block2.display();

 block3.display();

 block4.display();

 block5.display();

 fill("red");

 textSize(14)

 stroke("green")

 strokeWeight(4)

 fill("white")

 text("DRAG & RELESE TO HIT BLOCKS",200,200)

 

 block6.display();

 block7.display();

 block8.display();

 fill("yellow");

 block9.display();

 fill("black")



 sling1.display();

 

 

 


  

 drawSprites();

 

}


  
function mouseDragged(){
  Matter.Body.setPosition(polygon1.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  sling1.fly();
}
