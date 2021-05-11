class Stone {
    constructor(x,y) {
      var options = {
          //isStatic: true,
          'density': 5,
          'friction': 0.9,
          'resitution': 1.5

      }
      this.body = Bodies.rectangle(x,y,50,50,options);
      this.width = 50;
      this.height = 50;
      World.add(world, this.body);
    }
    
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y)
      rectMode(CENTER);
      fill("gray");
      rect(0, 0, this.width, this.height);
      pop()

    }
  };