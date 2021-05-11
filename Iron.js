class Iron {
    constructor(x,y) {
      var options = {
          //isStatic: true,
          'density': 35,
          'friction': 1,
          'resitution': 0.7

      }
      this.body = Bodies.rectangle(x,y,75,75,options);
      this.width = 75;
      this.height = 75;
      World.add(world, this.body);
    }
    
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y)
      rectMode(CENTER);
      fill("tan");
      rect(0, 0, this.width, this.height);
      pop()

    }
  };