class component {
    constructor(name) {
        this.name = name;
        this.x = 40;
        this.y = 40;
        this.size = [60, 60];
        this.isMoving = 0;
        this.isPress = 0;
       // this.xoffset = 0;
        //this.yoffset = 0;
        this.img = createImg('https://upload.wikimedia.org/wikipedia/en/9/93/Wizard_troll_doll-low_res.jpg');
        this.img.attribute("draggable", 'false');
        this.img.attribute("name", name);
        this.img.position(this.x, this.y);
        this.img.mousePressed(this.Pcallback.bind(this));
        this.img.mouseReleased(this.Rcallback.bind(this));

    }
    Pcallback() {
        this.isPress = 1;
        this.xoffset = mouseX
        this.yoffset = mouseY
        console.log('ispress' + this.isPress + this.xoffset);
    };
    Rcallback() {
        this.isPress = 0
        this.xoffset = 0;
        this.yoffset = 0;
         console.log(this.img.position().x);
         this.x = (this.img.position().x)
         this.y = (this.img.position().y)
        console.log(this.x);
    };

   
    dragged() {
        console.log('dragloop');
        console.log(this.xoffset);
        this.img.position(((mouseX - this.xoffset) + this.x), (mouseY - this.yoffset) + this.y);
       // this.x = (mouseX)
    }
}