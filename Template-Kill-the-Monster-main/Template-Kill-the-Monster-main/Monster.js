class Monster{
    constructor(x,y,width,height){
        var option ={
            isStatic:true,
            restitution:0.5,
            friction:1.0
        }
        this.body = Bodies.rectangle(x,y,width,height,option);
        this.width = width;
        this.height = height;
        this.image = loadimage("image/Monster-01.png");
        World.add(world,this.body)

    }
    display(){
        Push();
        Translate
        imageMode(CENTER);
        this.image(this.image,0,0,width,height);
        pop();
    }
}