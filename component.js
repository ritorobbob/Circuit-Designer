class componentGraphics {
    constructor(name) {
        this.name = name;
        this.x = 40; //x and y property keeps track of the img dom element absolute position
        this.y = 40;
        this.isMoving = 0;
        this.isPress = 0; //keeps track of if the dom element has been clicked on and held
        this.img = createImg('https://upload.wikimedia.org/wikipedia/en/9/93/Wizard_troll_doll-low_res.jpg');
        this.img.attribute("draggable", 'false'); //stops the browser drag event as it creates a ghost image
        this.img.attribute("name", name);
        this.img.position(this.x, this.y); 
        this.img.mousePressed(this.PressedFnc.bind(this)); //called on mouse pressed over element element event
        this.img.mouseReleased(this.ReleasedFnc.bind(this));
    }
    PressedFnc() {
        this.isPress = 1;
        //offset is so that when dragging an element the position is relavent to the origional mouse click pos 
        this.xoffset = mouseX 
        this.yoffset = mouseY
        console.log('ispress' + this.isPress + this.xoffset);
    };
    ReleasedFnc() {
        this.isPress = 0; //resets some variable that are used in draggin event
        this.xoffset = 0;
        this.yoffset = 0;
        console.log(this.img.position().x);
        this.x = (this.img.position().x); //updates x and y to the new positions
        this.y = (this.img.position().y);
        console.log(this.x);
    };

   //called when mouse is pressed over dowm element and moved
    dragged() {
        console.log('dragloop');
        console.log(this.xoffset);
        if ((mouseX - this.xoffset) + this.x < windowWidth - (100 + this.img.width)) {
        this.img.position(((mouseX - this.xoffset) + this.x), (mouseY - this.yoffset) + this.y);
        }
     
    }
}

class componentMath extends componentGraphics{
    constructor(){
        this.voltage;
        this.current;
        this.resistance;
        this.position = {x: this.x, y: this.y}

    }
}

class staticMath{
    static isParrallel(x1, y1, x2, y2){
        if(x1 == x2 && y1 !== y2){
           return true 
        }else if(x1 !== x2 && y1 == y2){
            return true
        }else{
            return false
        }
    }
}