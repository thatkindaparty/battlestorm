var canvas;
var p1_wall;
var p2_wall;
var p1_stats;
var p2_stats;

function setup() {
  canvas = createCanvas(1200, 500);
  centerCanvas();
  p1_wall = new PlayerWall(300, 75, 1);
  p2_wall = new PlayerWall(900, 75, 2);
  p1_stats = new Map();
  p2_stats = new Map();
}

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  canvas.position(x, 25);
}

function draw() {
   background(72, 115, 81);
   gameBoard();
}

function gameBoard() {
   p1_wall.show()
   p2_wall.show()
   gameText();
}

function gameText() {
   textSize(18);
   textFont("Comic Sans MS");
   fill(211, 247, 34);
   text("Player 1 Score: ", 10, 20)
   text("Player 2 Score: ", 10 + (width / 2)+300, 20)
}
