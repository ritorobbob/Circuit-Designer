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

function mousePressed() {
<<<<<<< HEAD
  testComp.clicked();
}
function mouseRelased(){
  return true
=======
  console.log('pressed');
  testComp.isMoving = true;
  testComp.clicked();
}
function mouseReleased() {
  console.log('realeased');
  testComp.isMoving = false;
>>>>>>> 032d3b990f41a1d9bfa727841f6db3a896e0c4b2
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
