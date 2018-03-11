'use strict'

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


let s = new snake();
s.update();
s.show();

function keyPressed() {
	if (keyCode === UP_ARROW)
	s.dir(0, -1);
} else if (keyCode === DOWN_ARROW) {
	s.dir(0,1)
}else if (keyCode === RIGHT_ARROW) {
	s.dir(1,0)
}else if (keyCode === LEFT_ARROW) {
	s.dir(-1, 0)
}

function snake() {
	this.x = 0;
	this.y = 0;
	this.xspeed = 1;
	this.yspeed = 0;

	this.dir = function(x, y) {
		this.xspeed = x;
		this.yspeed = y;
	}

  this.update = function() {
		this.x = this.x + this.xspeed;
		this.y = this.y + this.yspeed;
	}

	this.show = function() {
		ctx.fillRect(this.x, this.y, 10, 10);
	}
}