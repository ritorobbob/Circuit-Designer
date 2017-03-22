var img;
var componentLst = [];
var test;

function testFunc(){
  console.log('heyy');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
 // test = createElement('ja', 'he');
  background(120);
  componentLst[0] = new component('comp');
}

function draw() {
  background(120);
  
}

function mouseDragged() {
  console.log('being dragged');
  if (componentLst[0].isPress === 1){
  console.log('dragloop')
  componentLst[0].dragged();
  }

  
}



function windowResized() {
    background(120);
  resizeCanvas(windowWidth, windowHeight);
}