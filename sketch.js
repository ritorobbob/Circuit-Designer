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
  console.log('commit');
  console.log('test2');
}

function draw() {
  background(120);
  testComp.show();
  
}

function mouseDragged() {
  testComp.clicked();
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}