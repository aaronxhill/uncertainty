//*************************************************************************************//
var bg = function (p) {

	p.windowResized = function() {
		p.resizeCanvas(p.windowWidth, p.windowHeight + 50);
	}

    p.setup = function () {
        p.createCanvas(p.windowWidth, p.windowHeight + 50);
        p.noLoop();
    };
    p.draw = function() {
        p.background('red');
    };
};

new p5(bg, 'bg');
//*************************************************************************************//
