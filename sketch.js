var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";
    
    block3 = createSprite(510,580,200,30)
    block3.shapeColor = "red";

    block4 = createSprite(710,580,170,30);
    block4.shapeColor = "green";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX = 20;
    ball.velocityY = 20;
}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
       velocityX = 0;
       velocityY = 0;
    }



    if(block2.isTouching(ball)){
        ball.shapeColor = "orange";
        velocityX = 20;
        velocityY = 20;
    }

    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "red";
        velocityX = 20;
       velocityY = 20;
    }



    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "green";
        velocityX = 20;
        velocityY = 20;
    }


    drawSprites();
}
