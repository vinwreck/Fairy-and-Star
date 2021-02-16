var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 550);

	// fairyVoice.play();

	fairy = createSprite(130, 320);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.1;
	fairy.setCollider("rectangle",0,0,fairy.width/2.03,fairy.height/7);


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.1;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

//   if( starBody.position.y > 470) {
// 		star.velocityY=0;
// 		star.velocityX=0;
//   }

  if(star.isTouching(fairy)) {
	  star.velocityX=0;
	  star.velocityY=0;
	  fairy.velocityX=0;
	  fairy.velocityY=0;
  }
 
 // Matter.Body.setStatic(body, isStatic);

  keyPressed();	
  drawSprites();
}

function keyPressed() {
	//write code here

	if(keyDown("right")) {
		fairy.velocityX=5;
		fairyVoice.play();
	}

	if(keyDown("left")) {
		fairy.velocityX=-5;
	}

	if(keyDown("down")) {
		star.velocityY=7;
	}

	if(keyDown("up")) {
		fairy.velocityX=0;
	}
}
