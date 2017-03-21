class component {
    constructor(name) {
        this.name = name;
        this.x = 40;
        this.y = 40;
        this.size = [60, 60];
        this.isMoving = false;
    }
    show() {
        rectMode(CENTER)
        fill(255);
        rect(this.x, this.y, this.size[0], this.size[1]);
    }
    clicked() {
        do {
            if ((mouseX > (this.x - (this.size[0]/2)) && mouseX < (this.x + (this.size[0]/2))) && 
                (mouseY > (this.y -(this.size[1]/2)) && mouseY < (this.y + (this.size[1]/2)))) {
            this.x = mouseX;
            this.y = mouseY;
            }
        } while(this.isMoving);
    }
}
