const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg
var girl
var score=0
var candies
var candy1
var candy2
var candy3
var candy4
var choco
var chocolate

function preload(){
backgroundImg=loadImage("ground.jpg")
girlImg=loadImage("girl-removebg-preview.png")
candy1=loadImage("candy-removebg-preview.png")
candy2=loadImage("candy2-removebg-preview.png")
candy3=loadImage("candy_3-removebg-preview.png")
candy4=loadImage("candy4-removebg-preview.png")
choco=loadImage("choco-removebg-preview.png")
}

function setup(){
    createCanvas(1500,650);
    engine = Engine.create();
    world = engine.world;
  
    girl=createSprite(1000,500,50,50)
    girl.addImage("girl",girlImg)
    girl.scale=0.5

    candiesGroup=new Group()
    chocolateGroup=new Group()
}

function draw(){
    background(backgroundImg);
   
    Engine.update(engine);
    drawSprites();

   girl.x=mouseX

   //if(candiesGroup.isTouching(girl)){
    //destroycandies
  //}

  girl.bounceOff(candiesGroup,destroycandies)
   djcandies()
   chocolates()
   
   if(girl.y>560){
     girl.y=500
   }
   textSize(40);
  stroke(3);
  fill("black")
  text("SCORE: "+ score,1250,50);
}

function djcandies(){
    if(frameCount%20===0){
        candies=createSprite(120,30,20,20)
        candies.velocityY=4
        candies.x=Math.round(random(100,1400))
        var abc=Math.round(random(1,4))
      switch(abc){
        case 1:candies .addImage("candy1",candy1) ;
          break;
         case 2:candies .addImage("candy2",candy2) ;
          break;  
         case 3:candies .addImage("candy3",candy3) ;
          break;
          case 4:candies .addImage("candy4",candy4) ;
          break;
          default:break 
             
      }
      candies.scale=0.20
      candiesGroup.add(candies)
}
}

function chocolates(){
  if(frameCount%60===0){
    chocolate=createSprite(150,40,20,20)
    chocolate.velocityY=4
    chocolate.x=Math.round(random(100,1400))
    chocolate.addImage("choco",choco)
    chocolate.scale=0.2
  chocolateGroup.add(chocolate) 
  }
  
}

function destroycandies(girl,candies){
  score = score + 10;
  candies.remove();
}

function destroychoco(girl,chocolate){
  score=score+30
  chocolate.remove()
}