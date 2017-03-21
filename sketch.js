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
  testComp.clicked();
}
function mouseRelased(){
  return true
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}