let angle = 0.67

function setup() {
    let myCanvas = createCanvas(800, 800);
    myCanvas.parent("sketchHolder1")
    
    setInterval(function(){
        console.log("fire")
        drawGrid(20)
    },2000)
    }

function draw(){
    background(250,150,200) 

    push ()
    translate(100,100)
    rotate(angle)
    drawGrid(40)
    fill(0,0,0)
    rect(0,0,100,150)

    pop()
    circle (150, 150, 100)

    angle += 0.01;

}

function drawGrid(numSegments = 10){
    console.log("fire")
    let interval = width/numSegments
    for(let x = 0; x <= numSegments; x++){
        line (x*interval, 0, x*interval, height)
    }
    interval = height/numSegments
    for(let y = 0; y <= numSegments; y++){
        line (0, y*interval, width, y*interval)
    }

}