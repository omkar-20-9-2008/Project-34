class Monster{
    constructor(x,y,r){
      var options = {
      'density': 1,
      'frictionAir': 0.2
 }
 this.x=x;
 this.y=y;
 this.r=r;
 this.image=loadImage("Images/Monster-01.png");
 this.body=Bodies.circle(this.x, this.y, (this.r)/2, options);
 World.add(world, this.body);
 this.body.scale=2;
 }  



 display(){

    var pos = this.body.position;

    push();
    translate(pos.x,pos.y);
    imageMode(RADIUS);
    image(this.image,0,0,this.r,this.r);
    pop();

 }

}