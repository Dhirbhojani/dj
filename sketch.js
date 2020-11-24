const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var log1

function preload() {
    backgroundImg = loadImage("sprites/m.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);


    box1 = new Box(1000,100,20,50);
    box2 = new Box(1020,100,20,50);
    box3 = new Box(1040,100,20,50);
    box4 = new Box(1060,100,20,50);
    box5 = new Box(1000,50  ,20,50);
    box6 = new Box(1020,50,20,50) 
    box7 = new Box(1040,50,20,50)
    box8 = new Box(1060,50,20,50)
    bird = new Bird(100,100);

    log1 = new Log(1000,200,200,PI/2)
    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:100});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
  ground.display();

    box3.display();
    box4.display();
    box5.display();
box6.display();
box7.display(); 
box8.display();

    bird.display();

    log1.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}