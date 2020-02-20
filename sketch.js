// this is the start of my state machiene
var stateChange;
var state = 0;
var staticState = 0;
var stateOne = 1;
var stateTwo = 2;
var stateThree = 3;
var stateFour = 4;
var stateFive = 5;

//these are all my images
let staticImage;
let imageOne;
let imageTwo; 
let imageThree;
let imageFour; 
let imageFive;

/*this is for my last state - state 5 because it would only work if it was a global variable for some reason*/
var x = 20;


function preload(){
  staticImage = loadImage('assets/img1.jpg'); 			
  imageOne = loadImage('assets/img2.png');
  imageTwo = loadImage('assets/img3.png');
  imageThree = loadImage('assets/img4.png');
  imageFour = loadImage('assets/img5.jpg');
  imageFive = loadImage('assets/img6.png');
}

function setup() {
  createCanvas(1400,784);
}

function draw() {
  background(0);
  noStroke();
  
    
  
  // State Machiene -------------------------------------------
  
  if (state == staticState){
  
    drawStaticState();
  }
  
  else if (state == stateOne){
    drawStateOne();
  }
  
  else if (state == stateTwo){
    drawStateTwo();
  }
  
  else if (state == stateThree){
    drawStateThree();
  }
  
  else if (state == stateFour){
    drawStateFour();
  }
  
  else if (state == stateFive){
    drawStateFive();
  
  }
  
   
}

// ----------------------- STATIC STATE -----------------

function drawStaticState(){

    image(staticImage, width/2 - 300, height/2 - 300);
    
    /* this is from an inclass code example that I modified from my digital media design class (example was with double for loops) */
    
    if(mouseIsPressed){
        for(var y = 50; y <height; y +=75){
            for(var i=50; i <width; i = i+100){
                fill(random(250), random(250), random(250));
                ellipse(i, y, 50, 50);
            }
        }
        
    }
        
}

// ----------------------- STATE ONE -----------------

function drawStateOne(){

    image(imageOne, 0, 0);
    
    /*This is another augmented code sample from digital media design - I wanted to get random with and heign and location for ellipses */
    
    if(keyIsPressed == true){
        var X = random(width);
        var Y = random(height);
    
        fill(0);
        ellipse(X, Y, X, Y);
        
    }
    
    if(mouseIsPressed){
        fill(255);
        rect(0, 0, 1500, 900);
    }
    
}

// ----------------------- STATE TWO -----------------

function drawStateTwo(){

    image(imageTwo, mouseX, mouseY, mouseX, mouseY);
    
    if(mouseIsPressed){
        textSize(100);
        text('BREAKING SYSTEM', width/2 - 600, height/2);
        fill(250, 0, 0);
    }
}


// ----------------------- STATE THREE -----------------

function drawStateThree(){
  
    let x = 600;
    let y = 300;
    let s = 'NOPE, TRY AGAIN.';

    
    if(mouseIsPressed){
        x = 300; 
        y = 500;
        
        /* thsi is the text box example on the p5 website */
        fill(250, 250, 250);
        textSize(50);
        text(s, 900, 300, 200, 200);
    }
    
    image(imageThree, width/2 - 300, height/2 - 200, x, y);
}


// ----------------------- STATE FOUR -----------------

function drawStateFour(){
    
    image(imageFour, width/2 - 300, height/2 - 300);
    
    if(mouseX > 300 && mouseX < 800 && mouseY > 300 && mouseY < 800){
        fill(random(250), random(250), random(250))
        rect( width/2 - 300, height/2 - 300, 673, 540);
    }
    
  
    
   
}


// ----------------------- STATE FIVE -----------------

function drawStateFive(){
  //the x variable is defined at the top
    
  /*This was more code that I changed and also was inspired by- we did this for in class excercises for my digital media design class*/
    if(mouseIsPressed){
    
    x++;
    
    }
    
    else{
    x--;
    }
    
    image(imageFive, 0, 0-100);
    
    fill(0);
    ellipse(width/2 + 20, height/2 - 45, x, x);
    
    textSize(80);
    text('GOODBY', width/2 - 600, height/2);
    fill(0, 0, 0);
    
    
    
}



// THIS IS HOW TO SWITCH INBETWEEN MY STATES - USE NUMBERS 0 - 5 TO GET TO STATES
function keyPressed(){
  if(key == '0'){
    state = staticState;
  }
  

  else if(key == '1'){
    state = stateOne;
  }
  
  else if(key == '2') {
    state = stateTwo;
  }
  
  else if(key == '3'){
    state = stateThree;
  }
  
   else if(key == '4'){
    state = stateFour;
  }
  
   else if(key == '5'){
    state = stateFive;
  }
  
}



