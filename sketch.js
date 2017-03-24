var img;
var componentLst = [];
var test;

function logg(text){
  console.log(text);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(120);
  componentLst[0] = new componentGraphics('comp');
}

function draw() {
  
}

function mouseDragged() {
  console.log('being dragged');
  for (var i = 0; i < componentLst.length; i++) {
     if (componentLst[i].isPress === 1){
     console.log('draging' + i)
     componentLst[i].dragged();
     } 
  } 
}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(120);
}
