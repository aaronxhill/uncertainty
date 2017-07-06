//*************************************************************************************//
var ct = function(p) {

    p.setup = function() {
        p.createCanvas(320, 320);
        p.noLoop();
    }

    p.draw = function() {
        p.line(40.6, 280, 280, 280);
        var b1 = p.color(221, 221, 221);
        var b2 = p.color(109, 109, 109);
        p.fill(50);
        p.text('texture', 20, 300);
        setGradient(69, 186, 40, 94, b1, b2);
        setGradient(140, 39, 40, 241, b1, b2);
        setGradient(210, 114, 40, 166, b1, b2);
    }

    function setGradient(x, y, w, h, b1, b2) {
        p.noFill();
        for (var i = y; i <= y + h; i++) {
            var inter = p.map(i, y, y + h, 0.0, 1.0);
            var c = p.lerpColor(b1, b2, inter);
            p.stroke(c);
            p.line(x, i, x + w, i);
        }
    }
}

new p5(ct, 'ct');
//*************************************************************************************//
