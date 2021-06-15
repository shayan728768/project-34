class Superhero{
    constructor(x,y,width,height){
        var option = {
            isStatic : false,
            restitution :0,
            friction : 1,
            density : 1.2
        }
        this.body = Bodies.rectangle(x,y,width,height,option);
        this.width = width;
        this.height = height;
        this.image = loadimage("images/Superhero-01.png");
        World.add(world,this.body);
    }  
    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        PushManager();
        translated(this.body.position.x,this.body.position.y);
        ImageBitmapRenderingContext(CENTER);
        this.image(thiss.image,0,0,this.width,this.height);
        Pop()
    }
}
