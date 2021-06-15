class Block{
    constructor(x,y,width,height){
        var option = {
            restitution :0.4,
            friction :1.0,
            //isStatic :true
        }
        this.body = Bodies.rectangle(x,y,width,height,option);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    
    }
    display(){
        var angle = this.body.angle;
        var pos = this.body.position;

        Push();
        Translate(pos.x,pos.y);
        rotate(angle);
        rectmode(CENTRE);
        rect(0,0,this.width,this.height);
        Pop();
    
    }
}