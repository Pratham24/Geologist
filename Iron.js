class Iron {
    constructor(x, y) {
      var options = {
        'density': 0.8,
        'friction': 3,
        'restitution': 0.2
      };
      this.body = Bodies.rectangle(500, 300, 10, 78, options);
      this.width = 120;
      this.height = 80;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(4);
      stroke('white')
      fill('grey')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };