
function Branch(begin, end, level) {
  this.begin = begin;
  this.end = end;
  this.finished = false;
  this.level = level;

  this.show = function() {
    stroke(255);
	strokeWeight(Math.pow(this.level,1.3));
    line(this.begin.x, this.begin.y, this.end.x, this.end.y);
  }

  this.branchA = function(currLevel) {
    var dir = p5.Vector.sub(this.end, this.begin);
    dir.rotate(PI / 6 * Math.random());
    dir.mult(Math.random() + .2);
    var newEnd = p5.Vector.add(this.end, dir);
    var b = new Branch(this.end, newEnd, currLevel);
    return b;
  }
  this.branchB = function(currLevel) {
    var dir = p5.Vector.sub(this.end, this.begin);
    dir.rotate(-PI / 6 * Math.random());
    dir.mult(Math.random() + .2);
    var newEnd = p5.Vector.add(this.end, dir);
    var b = new Branch(this.end, newEnd, currLevel);
    return b;
  }
}