var img;
var componentLst = [];
var test;


function logg(text){
  console.log(text);
}

function setup() {
  graphicsSetup();
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

function mouseReleased(){
  for (var i = 0; i < componentLst.length; i++) {
    componentLst[i].ReleasedFnc(); //makes sure the dom element release function is called when mouse if not over that dom element
  }
}


function windowResized() {
  resizeCanvas(windowWidth - 100, windowHeight);

  background(120);
}
