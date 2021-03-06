class Stone {
    constructor(x, y) {
      var options = {
        'density':0.8,
        'friction': 0.9,
        'restitution':0.1
      };
      this.body = Bodies.rectangle(200, 300, 100, 50, options);
      this.width = 150;
      this.height = 40;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('white')
      fill('green')
      rectMode(CENTER)
      rect(0,0,this.width, this.height);
      pop();
    };
  };