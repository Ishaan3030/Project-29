const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
let world;
let engine;
var bridge;
var ground;
var wall1, wall2;
var jointPoint;
var jointLink;
var stones = [];

function setup() {
  createCanvas(2000,1000);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
  
  ground = new Base(1000,900,2000,80);
  jointPoint = new Base(1000,350,20,20);
  wall1 = new Base(300, 380, 600, 90);
  wall2 = new Base(1700, 380, 1410, 90);
  bridge = new Bridge(13, {x:600, y:340});

  Matter.Composite.add(bridge.body, jointPoint);
  jointLink = new Link(bridge, jointPoint);

  for (var i = 0; i <= 8; i++){
    var x = random(width/2 - 200, width/2 + 300);
    var y = random(-10, 140);
    var stone = new Stone(x,y, 80, 80);
    stones.push(stone);
  }
}

function draw() {
  background(51);
  Engine.update(engine);

  ground.show();
  jointPoint.show();
  wall1.show();
  wall2.show();
  bridge.show();
  
}
