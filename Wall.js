function PlayerWall(x, y, player){
  this.x = x;
  this.y = y;
  this.w = 30;
  this.h = 350;
  if (player == 1) {
     this.r = 176;
     this.g = 25;
     this.b = 25;
  }
  else {
    this.r = 30;
    this.b = 45;
    this.g = 176;
  }
  this.show = function() {
    fill(this.r, this.b, this.g);
    rect(this.x, this.y, this.w, this.h);
  }
}
