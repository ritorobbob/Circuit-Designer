var img;
var testComp;
var test;
function preload() {
  //img = loadImage("http://localhost:3000/dave.jpg");
}
function testFunc(){
  console.log('heyy');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  test = createElement('ja', 'he');
 // test.position(20, 20);
  background(120);
  //test.mouseOver(testFunc);
  testComp = new component('comp');
  //testComp.rect.mouseOver(testFunc)
  console.log(component.name);
}

function draw() {
  background(120);
  //testComp.show();
  
}

function mouseDragged() {
  console.log('being dragged');
  if (testComp.isPress === 1){
  console.log('dragloop')
  testComp.dragged();
  }

  
}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}