class Pelota{
    constructor (){
        this.diam = random(10, 100);
        this.rad = this.diam /2;
      
        this.posx = random(this.rad, width - this.rad);
        this.posy = random(this.rad, height - this.rad);

        this.velx = random(-5, 5);
        this.vely = random(-5, 5);

        this.nuevoColor = color(random(255), random( 255), random(255), 100);
    }

    actualizar(){
        
        if(this.posx > width - this.rad || this.posx < this.rad){
            this.velx *= -1;
        }

        if(this.posy > height - this.rad || this.posy < this.rad){
            this.vely *= -1;
        }

        this.posx += this.velx;
        this.posy += this.vely;
        
    }

    visualizar(){
        fill(this.nuevoColor);
        stroke("#a5deffff");
        strokeWeight(5);
        circle( this.posx, this.posy, this.diam);

        push();
        noStroke();
        fill(255, 180);  
        ellipse(this.posx, this.posy, this.rad, this.rad * 0.6);
        pop();
    }

}
