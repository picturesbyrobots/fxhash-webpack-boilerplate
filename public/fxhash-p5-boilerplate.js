
  




function setup()
{
    const randRange = (min,max) => {
        return fxrand() * (max - min) + min;
    }
    let colors = 
    [
        [255,0,0],
        [0,255,0],
        [0,0,255]
    ]
    createCanvas(window.innerWidth - 10, window.innerHeight -10)
    

    let c_data= colors[Math.floor(randRange(0,colors.length))]
    fill(c_data[0], c_data[1], c_data[2])
    

}



function draw()
{
    background(100,100,100);
    
    stroke(255,255,255)
    ellipse(window.innerWidth * .5, window.innerHeight * .5, (Math.sin(millis() * .00100)  * 400))
    
}
