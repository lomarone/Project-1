/*
	Project #1
    
    by: Lauren Marone
*/

var index = 0;

var state;
var stateABT = 0;
var stateSAB = 1;
var stateSFB = 2;
var statePNB = 3;
var stateBW = 4;
var stateHome = 5;

let abt;
let sab; 
let sfb;
let pnb;
let bw;
let hme;



var abtArray = [];

var sabArray = [];

var sfbArray = [];

var pnbArray = [];

var bwArray = [];




// preload() will exectute before setup()
function preload() {
    abt = loadImage('assets/ABT.png'); 		
    sab = loadImage('assets/SAB.png'); 
    sfb = loadImage('assets/SFB.png'); 
    pnb = loadImage('assets/PNB.png'); 
    bw = loadImage('assets/BW.png'); 
    hme = loadImage('assets/home.png'); 
  
    misty = loadImage('assets/ABT/misty1.png'); 
    herman = loadImage('assets/ABT/herman.png'); 
    russel = loadImage('assets/SAB/russel.png'); 
    tiler = loadImage('assets/SAB/tiler.png'); 
    sara = loadImage('assets/SAB/sara.png'); 
    ulrik = loadImage('assets/SFB/ulrik.png'); 
    mathilde = loadImage('assets/SFB/mathilde.png'); 
    noelani = loadImage('assets/PNB/noelani.png'); 
    jerome = loadImage('assets/PNB/jerome.png'); 
    chasebeck = loadImage('assets/BW/chase_beckanne.png'); 



  //---ABT---
    abtArray[1] = loadImage('assets/ABT/abtOne.png'); 
    abtArray[2] = loadImage('assets/ABT/abtTwo.png'); 
    abtArray[3] = loadImage('assets/ABT/abtThree.png'); 
    abtArray[4] = loadImage('assets/ABT/abtFour.png'); 
    abtArray[5] = loadImage('assets/ABT/abtFive.png'); 
  
  //---SAB---
    sabArray[1] = loadImage('assets/SAB/sabOne.png'); 
    sabArray[2] = loadImage('assets/SAB/sabTwo.png'); 
    sabArray[3] = loadImage('assets/SAB/sabThree.png'); 
    sabArray[4] = loadImage('assets/SAB/sabFour.png'); 
    sabArray[5] = loadImage('assets/SAB/sabFive.png'); 
  
  //---SFB---
    sfbArray[1] = loadImage('assets/SFB/sfbOne.png'); 
    sfbArray[2] = loadImage('assets/SFB/sfbTwo.png'); 
    sfbArray[3] = loadImage('assets/SFB/sfbThree.png'); 
    sfbArray[4] = loadImage('assets/SFB/sfbFour.png'); 
    sfbArray[5] = loadImage('assets/SFB/sfbFive.png');
  
  //---PNB---
    pnbArray[1] = loadImage('assets/PNB/pnbOne.png'); 
    pnbArray[2] = loadImage('assets/PNB/pnbTwo.png'); 
    pnbArray[3] = loadImage('assets/PNB/pnbThree.png'); 
    pnbArray[4] = loadImage('assets/PNB/pnbFour.png'); 
    pnbArray[5] = loadImage('assets/PNB/pnbFive.png');
  
  //---BW---
    bwArray[1] = loadImage('assets/BW/bwOne.png'); 
    bwArray[2] = loadImage('assets/BW/bwTwo.png'); 
    bwArray[3] = loadImage('assets/BW/bwThree.png'); 
    bwArray[4] = loadImage('assets/BW/bwFour.png'); 
    bwArray[5] = loadImage('assets/BW/bwFive.png');
  
  
  
  
    
}

function setup() {

  
	createCanvas(800, 800);
    background(0);
    

    
}

function draw() {


    
    if (state == stateABT){ 
        drawABT();
    }
    
    else if (state == stateSAB){
        drawSAB();
    }
    
    else if (state == stateSFB){
        drawSFB();
    }
    
    else if (state == statePNB){
        drawPNB();
    }
    
    else if (state == stateBW){
        drawBW();
    }
    
    else if (state == stateHome){
        drawHome();
    }
    
    else{
      drawHome();
    }
}


//------- ABT ----------------------------------------------------------------------------
function drawABT(){
    
    background(255, 25);
    image(abt, width/2 - 400, height/2 - 400, 800, 800);
    image(abtArray[index], width/2 - 400, height/2 - 400, 800, 800); 
    image(misty, width/2 - 270, height/2 - 440, 800, 800);
    image(herman, width/2 - 500, height/2 - 75, 800, 800);

     



}


//------- SAB ----------------------------------------------------------------------------
function drawSAB(){
    
    background(255);
    image(sab, width/2 - 400, height/2 - 400, 800, 800);
    image(sabArray[index], width/2 - 400, height/2 - 400, 800, 800); 
    image(russel, width/2 - 300, height/2 - 365, 800, 800);
    // image(tiler, width/2 - 300, height/2 - 570, 700, 700);
    image(sara, width/2 - 500, height/2 - 360, 800, 800);


    
}


//------- SFB ----------------------------------------------------------------------------
function drawSFB(){
    noTint();
    background(255);
    image(sfb, width/2 - 400, height/2 - 400, 800, 800);
    image(sfbArray[index], width/2 - 400, height/2 - 400, 800, 800);
    image(ulrik, width/2 - 400, height/2 - 400, 800, 800);
    image(mathilde, width/2 - 400, height/2 - 400, 800, 800);

    

}


//------- PNB ----------------------------------------------------------------------------
function drawPNB(){
    noTint();
    background(255);
    image(pnb, width/2 - 400, height/2 - 400, 800, 800);
    image(pnbArray[index], width/2 - 400, height/2 - 400, 800, 800); 
    image(noelani, width/2 - 500, height/2 - 365, 820, 820);
    image(jerome, width/2 - 400, height/2 - 500, 800, 800);

    

}


//------- BW ----------------------------------------------------------------------------
function drawBW(){
    background(255);
    noTint();
    image(bw, width/2 - 400, height/2 - 400, 800, 800);
    image(bwArray[index], width/2 - 400, height/2 - 400, 800, 800); 
    image(chasebeck, width/2 - 330, height/2 - 350, 800, 800);

    
}


//------- HOME ----------------------------------------------------------------------------
function drawHome(){
    background(255);
    noTint();
    image(hme, width/2 - 400, height/2 - 400, 800, 800);
    
    
}


function keyPressed(){
    if (key == '1'){
        state = stateABT;
    }
    
    else if (key == '2'){
        state = stateSAB;
    }
    
    else if (key == '3'){
        state = stateSFB;
    }
    
    else if (key == '4'){
        state = statePNB;
    }
    
    else if (key == '5'){
        state = stateBW;
    }
    
    else if (key == '0'){
        state = stateHome;
    }
}

function mouseClicked(){
  index++;
  if (state == stateABT){
    if(index > abtArray.length){
      index = 0;
      
    }
  }
  
  else if(state == stateSAB){
    if(index > sabArray.length){
      index = 0;
      
    }
  }
  
   else if(state == stateSFB){
    if(index >= sfbArray.length){
      index = 0;
      
    }
  }
  
   else if(state == statePNB){
    if(index > pnbArray.length){
      index = 0;
      
    }
  }
  
   else if(state == stateBW){
    if(index > bwArray.length){
      index = 0;
      
    }
  }

  
}
