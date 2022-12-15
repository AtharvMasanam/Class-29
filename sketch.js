const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var fruit;
var rope;

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);

  fruit = Bodies.circle(200,200,20);
  World.add(world, fruit);
  
  rope = new Rope(10, 100);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50);
  
  
}

function draw() 
{
  background(51);
  ground.show();
  rope.show();
  ellipse(fruit.position.x, fruit.position.y, 20,20)
  
  Engine.update(engine);
  

 
   
}
