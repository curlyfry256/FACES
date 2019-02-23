var mic; //SETS UP A VARIABLE FOR THE MICROPHONE
var animal = "face" //RECOGNISES THE WORD "FACE" UNDER THE ANIMAL VARIABLE
var state = 0; // SETS THE STATE AUTOMATICALLY TO 0 UNLESS TOLD OTHERWISE

function setup(){
    
    mic = new p5.AudioIn()
    mic.start(); //STARTS THE MICROPHONE INPUT

 createCanvas (600,600); //MAKES A CANVAS 600/600 PIXELS
}

function keyPressed() {
  if (keyCode === ENTER) { //WHEN ENTER IS PRESSED TH IMAGE WILL CHANGE
     console.log(state);
     
//   if("animal"==0){
//       "cat" = 1; //IMAGE IS CALLED CAT AND IS CALLED FROM THE CAT FUNCTION
//    console.log(state);
//   }
//                                                                                  THIS IS MY OLD METHOD OF MOVING THROUGH THE DIFFERENT IMAGES
//      if("cat" == 1){
//        "animal" = 0; //IMAGE IS CALLED LION AND IS CALLED FROM THE CAT FUNCTION
//    console.log(state);
//        
// }
//      
   switch(state) {  //COMPARE THE VALUE OF STATE AGAINST:
    case 0:   //IF STATE HAS A VALUE OF 0 THEN CHANGE THE VALUE STATE TO 1
        state = 1;
        break; //LEAVES TO MOVE TO NEXT SWITCH*
    case 1: //IF STATE HAS A VALUE OF 1 THEN CHANGE THE VALUE STATE TO 2
        state = 2;
        break;//*
    case 2://IF STATE HAS A VALUE OF 2 THEN CHANGE THE VALUE STATE TO 0
        state = 0;
        break;//*
           
    default: //IN THE CASE OF ERROR WHERE STATE IS NOT EQUAL TO 0, 1 OR 2 RESET STATE TO 0  
        {
          state = 0; //INPUT CAN BE ANY OF THE STATES, IT IS 0 BECAUSE THAT IS THE FIRST STATE            
        }
}
       
   }
  }
          


function draw(){
    
    micLevel = mic.getLevel(); 
    console.log(micLevel);
    (micLevel*500)// SETS MIC LEVEL TO 500
     background(255); // SETS BACKGROUND TO WHITE
    
    if (state == 0){ // IF STATE IS 0 THEN RUN CAT
            face(); //LABELLNG AS FACE
        }
    if (state == 1){ // IF STATE IS 1 THEN RUN LION
            girl(); //LABELLING AS LION
        }
    if (state == 2){ //IF STATE IS 2 THEN RUN PANTHER
            boy();// LABELLING AS PANTHER
        }
    
//    if(animal== "cat"){
//      cat();  
//    state = 1;
//
//    }
//    
//    if(animal == "lion"){
//        lion();
//        state = 0;
//    }
//    
    
   
    //FACE DRAWING

    
  
}

function mirrorLine(x1, y1, x2,y2) { //THIS MIRROS THE LEFT SIDE OF THE FACE

    line(x1, y1, x2, y2) // THIS CALLS THE AXIS 
    line(width - x1 , y1, width - x2 ,y2) //THIS CALLS WHERE TO PLOT EACH CORDINATE 



}
    function face(){
        
    strokeWeight(4); //SETS THE LINE THICKNESS TO 4
    mirrorLine(150, 150, 140, 190); //LEFT EYE
    mirrorLine(150, 150, 230, 150); //TOP EYE
    mirrorLine(230, 150, 300, 170); //UPPER INNER EYE
    mirrorLine(140, 190, 200, 230); //LOWER LEFT EYE
    mirrorLine(200, 230, 230, 230) // SIDE JAW
    mirrorLine(230, 230, 300, 170) //LOWER INNER EYE
    mirrorLine(300, 170, 360, 370) //OUTER NOSE LINE
    mirrorLine(300, 170, 320, 360) //INNER NOSE LINE
    mirrorLine(360, 370, 320, 360) //OUTER NOSE RIDGE
    mirrorLine(320, 360, 300, 360)//MIDDLE NOSE RIDGE
    mirrorLine(360, 370, 300, 380)//UNDER NOSE
    mirrorLine(360, 370, 350, 420)//NOSE TO LIP LINE
    mirrorLine(350, 420, 300, 420); // UPPER LIP
    mirrorLine(350, 420, 380, 460)//OUTER LIP
    mirrorLine(380, 460, 300, 480 + micLevel*250); // LOWER LIP

    //mirrorLine(240, 425, 300, 420 - micLevel*100)// UPPER CHIN
    //mirrorLine(250, 430, 300, 440 + micLevel*250); //LEFT CHIN WITH MIC LEVEL SO THE LINE LOVES WITH VOICE
    //line(300, 440 + micLevel*250, 300, 410); //MOUTH SEAM WITH MIC LEVEL SO THE LINE LOVES WITH VOICE
    //line( 290, 390, 310, 390 )//TOP NOSe
    //line(270, 300, 330, 300) //NOSE RIDGE
        
        
        
        
    }