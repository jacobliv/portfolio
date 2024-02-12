class Forklift {
    constructor(x, y, size, color,images) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.color = color;
      this.images = images
      this.current=0
      this.box=null
    }
  
    draw(ctx) {
 
    
        ctx.save();
        // Draw the forklift image based on the current lift value
        ctx.globalCompositeOperation = 'source-over';

        const currentLift = "lift" + this.current;
        const forkliftImage = this.images[currentLift];
        // ctx.scale(-1, 1);
        console.log(ctx.scale)
        ctx.drawImage(forkliftImage, -this.x-this.size, this.y-this.size, this.size, this.size);
        // ctx.scale(1, 1);
        ctx.beginPath();
        ctx.rect(-50, 0, 50, 200);
        ctx.strokeStyle = "white";
        ctx.stroke();
        // this.x-=1
        // Apply the color overlay using globalCompositeOperation
        // ctx.globalCompositeOperation = 'source-atop';
        // ctx.fillStyle = this.color;
        // ctx.fillRect(this.x, this.y, this.size, this.size);
    
        ctx.restore();
        
        this.current+=5
        if(this.current>50){
            this.current=0
        }
      }

    update() {
        if(this.box){
            this.box.update(this.bo)
        }    
    }
  }