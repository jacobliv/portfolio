forkliftLoaded=0
function loadForklift(){
    forkliftLoaded+=1
    console.log(forkliftLoaded);
}

function createForklift(x,y){
    const forkliftLift0 = new Image();
    const forkliftLift5 = new Image();
    const forkliftLift10 = new Image();
    const forkliftLift15 = new Image();
    const forkliftLift20 = new Image();
    const forkliftLift25 = new Image();
    const forkliftLift30 = new Image();
    const forkliftLift35 = new Image();
    const forkliftLift40 = new Image();
    const forkliftLift45 = new Image();
    const forkliftLift50 = new Image();
    const forkliftLiftMove = new Image();

    forkliftLift0.src = 'patterns/Forklift/Forklift-lift0.png';
    forkliftLift5.src = 'patterns/Forklift/Forklift-lift5.png';
    forkliftLift10.src = 'patterns/Forklift/Forklift-lift10.png';
    forkliftLift15.src = 'patterns/Forklift/Forklift-lift15.png';
    forkliftLift20.src = 'patterns/Forklift/Forklift-lift20.png';
    forkliftLift25.src = 'patterns/Forklift/Forklift-lift25.png';
    forkliftLift30.src = 'patterns/Forklift/Forklift-lift30.png';
    forkliftLift35.src = 'patterns/Forklift/Forklift-lift35.png';
    forkliftLift40.src = 'patterns/Forklift/Forklift-lift40.png';
    forkliftLift45.src = 'patterns/Forklift/Forklift-lift45.png';
    forkliftLift50.src = 'patterns/Forklift/Forklift-lift50.png';
    forkliftLiftMove.src = 'patterns/Forklift/Forklift-move.png';

    // forkliftLift0.addEventListener('load', loadForklift)
    // forkliftLift5.addEventListener('load', loadForklift) 
    // forkliftLift10.addEventListener('load', loadForklift) 
    // forkliftLift15.addEventListener('load', loadForklift)
    // forkliftLift20.addEventListener('load', loadForklift)
    // forkliftLift25.addEventListener('load', loadForklift)
    // forkliftLift30.addEventListener('load', loadForklift)
    // forkliftLift35.addEventListener('load', loadForklift)
    // forkliftLift40.addEventListener('load', loadForklift)
    // forkliftLift45.addEventListener('load', loadForklift)
    // forkliftLift50.addEventListener('load', loadForklift)
    // forkliftLiftMove.addEventListener('load', loadForklift)

    return new Forklift(x,y,75,"#673AB7",{
        "lift0"   : forkliftLift0,  
        "lift5"   : forkliftLift5,
        "lift10"  : forkliftLift10, 
        "lift15"  : forkliftLift15, 
        "lift20"  : forkliftLift20,
        "lift25"  : forkliftLift25,
        "lift30"  : forkliftLift30,  
        "lift35"  : forkliftLift35, 
        "lift40"  : forkliftLift40,
        "lift45"  : forkliftLift45,
        "lift50"  : forkliftLift50,
        "liftMove": forkliftLiftMove
    })
}
grid={}
window.addEventListener("load", function() {
     const canvas = document.getElementById('myCanvas');
     const ctx = canvas.getContext('2d');
     canvas.width =this.window.innerWidth
     canvas.height=this.window.innerHeight
     const boxSize = 25;

     canvas.width/boxSize
     const gridWidth = Math.floor(canvas.width/boxSize);
     for(let gx =0; gx <gridWidth;gx+=1){
        for(let gy =0; gy <3;gy+=1){

            grid[gx+","+gy]=null
        } 
    }

     const boxStacks = [];

     const textureImage = new Image();
     textureImage.src = 'patterns/HatPattern.png';

     lift=createForklift(canvas.width/2,canvas.height)

     textureImage.addEventListener('load', () => {
        
        const startX =canvas.width- boxSize - 64;
        
        boxStacks.push(
            new Box(startX,canvas.height-boxSize,25,"#009688",textureImage)
        );
        boxStacks.push(
           new Box(startX-boxSize,canvas.height-boxSize,25,"#FFC107",textureImage),
           new Box(startX-boxSize,canvas.height-boxSize-boxSize,25,"#673AB7",textureImage)
   
       );
       boxStacks.push(
           new Box(startX-boxSize-boxSize,canvas.height-boxSize,25,"#4CAF50",textureImage),
           new Box(startX-boxSize-boxSize,canvas.height-boxSize-boxSize,25,"#800000",textureImage),
           new Box(startX-boxSize-boxSize,canvas.height-boxSize-boxSize-boxSize,25,"#6A5ACD",textureImage)
   
       );
       grid[3+","+0]=boxStacks[0]
       grid[2+","+0]=boxStacks[1]
       grid[2+","+1]=boxStacks[2]
       grid[1+","+0]=boxStacks[3]
       grid[1+","+1]=boxStacks[4]
       grid[1+","+2]=boxStacks[5]

        
      });
      
      // Handle image loading errors
      textureImage.addEventListener('error', () => {
        console.error('Failed to load the texture image.');
      });
      function gameLoop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // boxStacks.forEach(box => {
        //     box.draw(ctx);
        // });
        lift.draw(ctx)
        for (let key in grid) {
            let [x, y] = key.split(',').map(Number);
            x=x*boxSize
            y=canvas.height-(y*boxSize)-boxSize
            ctx.strokeStyle = "red";    // Set the border color
            ctx.lineWidth = 1;      // Set the border width
            // ctx.strokeRect(x, y, boxSize, boxSize);
            if(grid[key]){
                grid[key].update(x,y)
                grid[key].draw(ctx);

            }
        }
        requestAnimationFrame(gameLoop);
      }
      
      requestAnimationFrame(gameLoop);
     

}); 
 
 