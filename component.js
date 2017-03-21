class component {
    constructor(name) {
        this.name = name;
        this.x = 40;
        this.y = 40;
        this.size = [60, 60];  
        this.isMoving = 0; 
    }
    show() {
        rectMode(CENTER)
        fill(255);
        if (this.isMoving == 1){ 
            this.x = mouseX;
            this.y = mouseY;
        }
        
        rect(this.x, this.y, this.size[0], this.size[1]);
    }
    dragged() {
            if (this.isMoving == 1){
                console.log('moving');
            }
            else if((mouseX > (this.x - (this.size[0]/2)) && mouseX < (this.x + (this.size[0]/2))) && 
                (mouseY > (this.y -(this.size[1]/2)) && mouseY < (this.y + (this.size[1]/2)))) {
            this.isMoving = 1;
        }
    }
}
