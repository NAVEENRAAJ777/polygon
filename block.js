class Block{
    constructor(x,y,width,height){
        var option={
            isStatic:false,
            restitution:0.9,
            friction:0.6,
            density:1.2


        }
        this.body=Bodies.rectangle(x,y,width,height,option);
        this.width=width;
        this.height=height;
        World.add(world,this.body);

    }
    display(){
        var pos=this.body.position;
        push();
        rectMode(CENTER);
        strokeWeight(2);
        stroke("blue");
        
        rect(pos.x,pos.y,this.width,this.height);
        pop();

    }
}