class component {
    constructor(name) {
        this.name = name;
        this.x = 40;
        this.y = 40;
        this.size = [60, 60];  
        this.isMoving = 0; 
        this.isPress = 0;
        this.img = createImg('https://upload.wikimedia.org/wikipedia/en/9/93/Wizard_troll_doll-low_res.jpg');
        this.img.attribute("draggable", 'false');
        this.img.attribute("name", name);
        this.img.position(this.x, this.y);
        this.img.mousePressed(function () {
            this.isPress = 1;
            console.log('ispress' + this.isPress);
        });
        this.img.mouseReleased(function () {
            this.isPress = 0;
            console.log('nooo');
        });

      
        
    }
    pressy(){
        return (this.isPress === 1);
    }
    show() {
        rectMode(CENTER)
        fill(255);
        if (this.isMoving == 1){ 
            this.x = mouseX;
            this.y = mouseY;
        }
       // this.img.position(this.x, this.y);
        //this.rect = rect(this.x, this.y, this.size[0], this.size[1]);
    }
    dragged() {
           // if (this.isMoving == 1){
           //     console.log('moving');
           // }
           // else if((mouseX > (this.x - (this.size[0]/2)) && mouseX < (this.x + (this.size[0]/2))) && 
           //     (mouseY > (this.y -(this.size[1]/2)) && mouseY < (this.y + (this.size[1]/2)))) {
           // this.isMoving = 1;
           //}
        //   if(this.isPress == 1){
               console.log('dragloop')
               this.img.position(mouseX, mouseY);
          // }
    }
}
