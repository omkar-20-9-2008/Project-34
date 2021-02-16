const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg;
var world;
var engine;
var ground;
var hero,rope;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15;
var monster;

function preload() {
//preload the images here
bg = loadImage("images/GamingBackground.png");
}

function setup() {
  createCanvas(3000, 800);
  // create sprites here
  engine=Engine.create();
  world=engine.world;
  ground = new Ground(500,605,1000,10);
  hero = new Hero(50,100,250);
  rope = new Fly(hero.body,{x:177,y:36})
  //first column
  block1 = new Block(500,570,60,60);
  block2 = new Block(500,510,60,60);
  block3 = new Block(500,450,60,60);
  block4 = new Block(500,390,60,60);
  block5 = new Block(500,330,60,60);
  block6 = new Block(500,270,60,60);
  //econd column
  block11 = new Block(570,570,60,60);
  block12 = new Block(570,510,60,60);
  block13 = new Block(570,450,60,60);
  block14 = new Block(570,390,60,60);
  block15 = new Block(570,330,60,60);
  block16 = new Block(570,270,60,60);
  block17 = new Block(570,210,60,60);
  block18 = new Block(570,150,60,60);
  //third column
  block20 = new Block(640,520,60,60);
  block21 = new Block(640,470,60,60);
  block22 = new Block(640,420,60,60);
  block23 = new Block(640,370,60,60);
  block24 = new Block(640,320,60,60);

  monster = new Monster(850,100,300);

}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();

  hero.display();
  monster.display();

}

function mouseDragged() {
  Matter.Body.setPosition(hero.body, { x: mouseX, y: mouseY });
}

