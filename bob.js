class Bob{
    constructor(x,y,r){
        var options={
            isStatic:true,
            friction:5.0,
            restitution:0.3,
            speed:0.5,
            density:1.2
            }
            this.x=x;
            this.y=y
            this.r=r
            this.body=Bodies.circle(x,y,r,options)
         World.add(world,this.body)
    }
    display(){
    var pos=this.body.position
    push()
                translate(pos.x, pos.y);
                rectMode(CENTER)
                strokeWeight(3);
                fill(255,0,255)
                ellipse(0,0,this.r);
                pop()
    }
    }
    