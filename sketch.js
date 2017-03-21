var img;
var testComp;
function preload() {
  //img = loadImage("http://localhost:3000/dave.jpg");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(120);
  testComp = new component('comp');
  console.log(component.name);
}

function draw() {
  background(120);
  testComp.show();
  
}

function mouseDragged() {
  console.log('pressed');
  testComp.dragged();
  //testComp.isMoving = 1;
  //console.log(testComp.isMoving);
  
}
function mouseReleased() {
  console.log('relsead');
  testComp.isMoving = 0 ;
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}