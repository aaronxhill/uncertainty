// http://bl.ocks.org/nategood/2d5d7537597e340f968d

var movementFactor = 1;
var decreasing = true; 

var width = 1024;
var height = 256;
var radius = 3.5; 
var opac = 0.2;

var pointt = [[100, 100], [200, 100], [200, 200], [100, 200], [100, 100]];
var pointloc = [[150, 150]]


var line5 = d3.line()
	// .curve(d3.curveLinear)
	// .curve(d3.curveStep)
	// .curve(d3.curveStepBefore)
	// .curve(d3.curveStepAfter)
	// .curve(d3.curveBasis)
	.curve(d3.curveCardinal)
	// .curve(d3.curveMonotoneX
	// .curve(d3.curveCatmullRomOpen)
    // .x(function(d) { return d[0];})
    // .y(function(d) { return d[1]; });
    .x(function(d) { return d[0] + randn_bm() * 5; })
    .y(function(d) { return d[1] + randn_bm() * 5; });

var svg = d3.select("body")
    .append("svg")
        .attr("width", width)
        .attr("height", height);

// for (var i=0; i < testdatae.length; i++) {

  svg.append("ellipse")
      .data([pointloc])
      .attr("fill", "black")
      // .attr("fill-opacity", filll)
      .attr("cx", 150)
      .attr("cy", 150)
      // .attr("cx", function (d) { return d[0]; })
      // .attr("cy", function (d) { return d[1]; })
      .attr('rx', 1.5)
      .attr('ry', 5)
      ;






// Standard Normal variate using Box-Muller transform.
function randn_bm() {
    var u = 0, v = 0;
    while(u === 0) u = Math.random(); //Converting [0,1) to (0,1)
    while(v === 0) v = Math.random();
    return Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}


