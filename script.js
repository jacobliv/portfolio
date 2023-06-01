window.addEventListener("load", function() {
     // JavaScript code for drawing on the canvas goes here
  

    // Set the canvas width and height to fill the page
    // module aliases
    var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite,
    Vertices = Matter.Vertices;

    // create an engine
    var engine = Engine.create();
    
    // create a renderer
    var render = Render.create({
        element: document.body,
        engine: engine,
        options: {
            width: this.window.innerWidth,
            height: this.window.innerHeight,
            pixelRatio: 1,
            hasBounds: false,
            enabled: true,
            showSleeping: true,
            showDebug: false,
            showBroadphase: false,
            showBounds: false,
            showVelocity: true,
            showCollisions: true,
            showSeparations: true,
            showAxes: false,
            showPositions: false,
            showAngleIndicator: false,
            showIds: false,
            showVertexNumbers: false,
            showConvexHulls: false,
            showInternalEdges: false,
            showMousePosition: false
        }
    });
    const canvas = document.querySelector("body > canvas");
    canvas.width =this.window.innerWidth
    canvas.height=this.window.innerHeight
    canvas.style.position = 'absolute';
    canvas.style.left = '0';
    canvas.style.top = '0';
    canvas.style.margin = 'auto';
    canvas.style.display = 'block';
    canvas.style.backgroundColor = "transparent";

    var unit=5
    // create two boxes and a ground
    var boxA = Bodies.rectangle(400, 200, 80, 80);
    var boxB = Bodies.rectangle(450, 50, 80, 80);
    var trapezoid = Bodies.circle(350, 50, 15);
    Matter.Body.setVelocity(trapezoid,{ x: 5, y: -5 })
    var star = Vertices.fromPath('50 0 63 38 100 38 69 59 82 100 50 75 18 100 31 59 0 38 37 38'),
    concave = Bodies.fromVertices(200, 200, star);
    // var I = Bodies.fromVertices(400,200,[[{ x: 0, y: 0 }],])
    var ground = Bodies.rectangle(canvas.width/2, 600, canvas.width, 2, { isStatic: true });

    // add all of the bodies to the world
    Composite.add(engine.world, [ground,concave]);

    // run the renderer
    Render.run(render);

    // create runner
    var runner = Runner.create();

    // run the engine
    Runner.run(runner, engine);
    function loop(){
        canvas.width =this.window.innerWidth
        canvas.height=this.window.innerHeight
        ground.position={x:canvas.width/2,y: 600}
        requestAnimationFrame(loop)
    }
    loop()
}); 
 
 
