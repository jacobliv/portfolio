class Box {
  constructor(x, y, size, color,textureImage) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.textureImage = textureImage
  }

  draw(ctx) {
    ctx.drawImage(this.textureImage, this.x, this.y, this.size, this.size);

    ctx.globalCompositeOperation = 'source-atop';
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.size, this.size);
    ctx.globalCompositeOperation = 'source-over';

    const borderWidth = 1;
    const dotSpacing = 2;

    ctx.save();
    ctx.fillStyle = "rgb(35,35,35,.5)";
    ctx.fillRect(this.x,this. y, this.size, this.size);

    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.lineWidth = borderWidth;
    ctx.setLineDash([dotSpacing]);
    ctx.rect(this.x + borderWidth / 2, this.y + borderWidth / 2, this.size - borderWidth, this.size - borderWidth);
    ctx.stroke();
    ctx.closePath();

    ctx.restore();
  }

  update(x,y) {
    this.x = x;
    this.y = y;
  }
}