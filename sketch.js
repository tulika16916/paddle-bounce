var ballimg,paddleimg,paddle,ball,score,sound;
function preload() {
  /* preload your images here of the ball and the paddle */
  ballimg=loadImage("ball.png")
  paddleimg=loadImage("paddle.png")
  sound=loadSound("wall.mp3")
}
function setup() {
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */
  ball=createSprite(30,34,34,44)
  ball.addImage("Ball",ballimg)
  ball.velocityX=9
  /* assign the images to the sprites */
  paddle=createSprite(350,34,46,4)
  paddle.addImage("Paddle",paddleimg)
  /* give the ball an initial velocity of 9 in the X direction */
  
  score=0

}

function draw() {
  background(205,153,0);
  /* create Edge Sprites here */
  edges=createEdgeSprites();
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
 // ball.bounceOff(edges);
  ball.bounceOff(edges[0],randomVelocity)
// ball.bounceOff(edges[1],randomVelocity)
  ball.bounceOff(edges[2],randomVelocity) 
  ball.bounceOff(edges[3],randomVelocity) 
//  ball.bounceOff(edges[4],randomVelocity)
  /* Allow the ball to bounceoff from the paddle */
  ball.bounceOff(paddle,scoreVelocity)
  
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
      

  /* Prevent the paddle from going out of the edges */ 
  
  
  if(keyDown(UP_ARROW))
  {
     /* what should happen when you press the UP Arrow Key */
  paddle.y = paddle.y - 20;
  
    
  }
  
  if(keyDown(DOWN_ARROW))
  {
    /* what should happen when you press the UP Arrow Key */
  paddle.y = paddle.y + 20;
  
  }
  
paddle.collide(edges)
  
  text("SCORE:"+score,20,20)
  drawSprites();
  
}

function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
  ball.velocityY=random(-9,9);
}

function scoreVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
  ball.velocityY=random(-9,9);
  score = score+1;
  sound.play();
}
