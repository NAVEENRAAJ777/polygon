class Polygon{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.7,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.circle(x,y,35,options);
        this.radius=52;
        
        
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        strokeWeight(3);
        stroke("blue")
        fill("red");
        circle(0,0,this.radius);
    
        
        pop();
    }
}