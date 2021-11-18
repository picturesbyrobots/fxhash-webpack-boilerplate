
  
const init = () => {


}
var numMovers = 200;
const randRange = (min,max) => {
    return fxrand() * (max - min) + min;
}

class Mover {
    constructor(xpos, ypos, speed, size, amp, per)
    {
        this.xpos = xpos;
        this.ypos = ypos
        this.speed = speed
        this.size = size
        this.amp = amp
        this.per = per
        this.text = ''
        let emoji = '❤✨-~'
        let emoji_chance = randRange(0,100)
        if(emoji_chance < 40)
        {
            this.text = emoji.charAt(randRange(0,emoji.length))
        }
       
    }
    update()
    {
        this.xpos -= this.speed * (deltaTime / 30);
        let y_off = (this.amp * .01) * Math.sin(TWO_PI * frameCount / this.per)
        this.ypos += y_off
        

        if(this.xpos <= -100)
        {
            this.xpos = randRange(window.innerWidth,window.innerWidth + 1500)
            this.ypos = randRange(0,800)
        }
    }
    draw ()
    {
        if(this.text === '') 
        {
            ellipse(this.xpos, this.ypos, this.size,this.size);
        }
        else {
            textSize(this.size * 3)
            textAlign(CENTER)
            text(this.text, this.xpos, this.ypos)
        }
    }
}

let movers = []

function setup()
{
    createCanvas(window.innerWidth - 10, window.innerHeight -10)
    for(var i = 0; i < numMovers; i++)
    {
        var mover = new Mover(
                randRange(window.innerWidth,window.innerWidth + 1400), 
                randRange(0, 800),
                randRange(1,5),
                randRange(4,10),
                randRange(10, 30),
                randRange(120, 3000));
        movers.push(mover);
    }

}

function draw()
{
    background(0);
    color(255)
    noFill()
    stroke(255,255,255)

    for(var i = 0; i < numMovers; i++)
    {
        var this_mover = movers[i];
        this_mover.update();
        this_mover.draw();
    }
}
