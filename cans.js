class Cans{
    constructor(x,y,width,height){
        var options = {
         friction: 1,
         restitution: 1,
         density: 0.2
        }

        this.body = Bodies.rectangle(x,y,width,height);
        this.width =width;
        this.heigth =height;
        this.x = x;
        this.y = y;
        World.add(world,this.body);

    }
    display() {
        push()
        translate(this.body.position.x,this.body.position.y);
        fill('pink');
        rect(0,0,width,height);
        pop()

    }

}