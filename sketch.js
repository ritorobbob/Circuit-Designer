var img;
var componentLst = [];
var test;

function testFunc(){
  console.log('heyy');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  test = createElement('ja', 'he');
 // test.position(20, 20);
  background(120);
  //test.mouseOver(testFunc);
  componentLst[0] = new component('comp');
}

function draw() {
  background(120);
  //componentLst.show();
  
}

function mouseDragged() {
  console.log('being dragged');
  if (componentLst[0].isPress === 1){
  console.log('dragloop')
  componentLst[0].dragged();
  }

  
}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}