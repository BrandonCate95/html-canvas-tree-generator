// Coding Rainbow
// Daniel Shiffman
// http://patreon.com/codingtrain
// Code for: https://youtu.be/fcdNSZ9IzJM

var tree = [];
var leaves = [];

count = 0;
len = 1;
//tree variables
var treeDepth = 10;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  var a = createVector(width / 2, height);
  var b = createVector(width / 2, height - 100);
  var root = new Branch(a, b,treeDepth);

  tree[0] = root;
  drawTree(treeDepth);
}

function drawTree(depth) {
	for(var i = 0; i < depth; i++){
		
		var currLevel = depth - i + 1;
		
		for(var j = 0; j < len; j++){
			tree.push(tree[count].branchA(currLevel));
			tree.push(tree[count].branchB(currLevel));
			tree[count].finished = true;
			count++;
		}
		
		if (len === Math.pow(2,treeDepth-1)) {
			for (var j = 0; j < tree.length; j++) {
				if (!tree[j].finished) {
					var leaf = tree[j].end.copy();
					leaves.push(leaf);
				}
			}
		}
		len = len * 2;
	}

}

function draw() {
  background(51);

  for (var i = 0; i < tree.length; i++) {
    tree[i].show();
  }

  for (var i = 0; i < leaves.length; i++) {
    fill(255, 0, 100, 100);
    noStroke();
    ellipse(leaves[i].x, leaves[i].y, 10*Math.random(), 10*Math.random());
    //leaves[i].y += random(0, 2);
  }

}