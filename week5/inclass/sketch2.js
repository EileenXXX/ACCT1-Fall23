function setup(){
    let mycanvas = createCanvas(600,600)
    mycanvas.parent("sketchHolder2")
    colorMode(HSB, TWO_PI, 1, 1)
}

function draw(){
    background(0,0,0)

    strokeWeight (16)
    noFill()

    for(let i = 0; i < 10; i++){
        let diam = 280 + i*30
        let thisHue = (TWO_PI/10) * i
        stroke(thisHue, 1, 1)

        push ()
        translate (width*0.5, height*0.5)
        let angle = millis()* 0.001* (i*0.5+1)
        rotate (sin(angle))
        arc(0, 0, diam, diam, PI*0.75, TWO_PI*1.125)
        pop ()
    }
    
}