class Throw{
    constructor(bodyA,pointB){
    var option = {
        bodyA:bodyA,
        bodyB:bodyB,
        stiffness:0.01,
        length:10
    }
    this.pointB=pointB;
    this.throw = constraint.create(option);
    World.add(world,this.throw);

    }

    fly(){
        this.throw.bodyA=null;

    }display(){
        
    }
}