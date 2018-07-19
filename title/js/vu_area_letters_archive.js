// var svg = d3.select("#example")
//   .append("svg");

// var t = textures.paths()
//   .d("caps")
//   .lighter()
//   .thicker()
//   .stroke("darkorange");

// svg.call(t);

// svg.append("circle")
//   .style("fill", t.url())
//   .attr("cx", 75)
//   .attr("cy", 75)
//   .attr("r", 75);


var testdatainner = [[367.0, 116.0], [378.0, 116.0], [389.0, 116.0], [400.0, 116.0], [411.0, 116.0], [422.0, 116.0], [425.68, 109.96], [422.5152, 99.5824], [416.008, 90.969604], [406.6, 85.44], [396.50153, 84.00369], [385.875, 86.12501], [376.5, 92.50001], [370.61987, 100.91993], [367.54166, 111.18055], [367.0, 116.0]]
var testdataouter = [[444.0, 130.0], [433.0, 130.0], [422.0, 130.0], [411.0, 130.0], [400.0, 130.0], [389.0, 130.0], [378.0, 130.0], [367.0, 130.0], [368.04166, 140.625], [372.04166, 150.625], [378.67493, 159.19926], [388.09296, 164.58264], [398.47433, 165.99702], [409.1355, 163.9881], [418.06274, 157.63988], [423.74304, 148.35416], [432.0, 145.0], [441.90405, 145.5293], [438.87402, 155.74219], [433.0381, 165.30469], [425.14737, 172.31198], [415.29614, 177.1715], [404.87192, 179.53513], [394.3524, 179.94609], [383.54214, 178.42795], [373.30896, 174.39107], [364.38013, 167.54433], [357.9551, 159.18489], [353.48596, 149.36491], [350.90894, 138.45291], [350.02524, 127.76992], [350.35318, 117.36511], [352.14908, 106.41693], [355.65143, 96.220955], [361.34216, 86.58748], [368.63052, 78.861046], [377.8346, 73.06173], [388.034, 69.87869], [398.51767, 69.0024], [409.4724, 70.2699], [420.03772, 74.07957], [428.66034, 79.7181], [435.94446, 87.99999], [440.45035, 97.31569], [442.7868, 108.30624], [443.75723, 119.39507], [444.00003, 129.99997], [444.0, 130.0]]
var testdatae = [testdatainner, testdataouter]


// !!! SWITCH TO POLYLINE TO REDUCE DATA FOOTPRINT
// https://developer.mozilla.org/en-US/docs/Web/SVG/Element/polyline

var movementFactor = 5;
var decreasing = true; 

// console.log(data1.length); // 531

var width = 1024;
var height = 256;
var radius = 3.5; 

var line = d3.line()
	// .curve(d3.curveLinear)
	.curve(d3.curveStep)
	// .curve(d3.curveStepBefore)
	// .curve(d3.curveStepAfter)
	// .curve(d3.curveBasis)
	// .curve(d3.curveCardinal)
	// .curve(d3.curveMonotoneX)
	// .curve(d3.curveCatmullRomOpen)
    // .x(function(d) { return d[0];})
    // .y(function(d) { return d[1]; });
    .x(function(d) { return d[0] + randn_bm() * movementFactor; })
    .y(function(d) { return d[1] + randn_bm() * movementFactor; });

// var t = textures.paths().d('crosses').lighter().thicker();

// svg.append("path").style("fill", t.url());

var svg = d3.select("body")
// var svg = svg.select("body")
    .append("svg")
        .attr("width", width)
        .attr("height", height);

// svg.call(t)

var pathnames = ["pathe", "pathei"]

// for (var i=0; i < testdatae.length; i++) {
  svg.append("path")
      // .data([[[testdatae]]])
      .data([testdatae[1]])
      // .data([[testdatae]])
      // .call(t)
      // .attr("fill", t.url())
      .attr("fill", "turquoise")
      .attr("d", line);
// }

// setInterval(moving, 1000)

function moving() {
if (Math.round(movementFactor) === -10) {decreasing = false}
if (Math.round(movementFactor) === 10) {decreasing = true}
if (decreasing === true) {
  movementFactor = movementFactor - 0.1
}
else {movementFactor = movementFactor + 0.1}
  console.log(movementFactor)
        for (var i=0; i < testdatae.length; i++) {
        svg.selectAll("path")
        .data([testdatae[i]])
      .transition()
      // .duration(1500)
      // .on("start", function(){
        // d3.select(this)
          // .attr("fill", "red");
      // })
      .attr("d", line);}
            // .on("end", function(){
        // d3.select(this)
          // .attr("fill", "blue");
      // });
      // .style("fill", t.url());
}

// setTimeout(moving, 2000)

// const texture = textures
//   .lines()
//   .thicker();

// svg.call(texture);

// svg
//   .append('path')
//   .style('fill', texture.url());



  // svg.selectAll("lines")
  //     .data(data1)
  //     .enter().append("line")
  //     .attr("class", "line")
  //     .attr("x1", function(d) {return d[0] + randn_bm() * movementFactor;})
  //     .attr("x2", function(d) {return d[2] + randn_bm() * movementFactor;})
  //     .attr("y1", function(d) {return d[1] + randn_bm() * movementFactor;})
  //     .attr("y2", function(d) {return d[3] + randn_bm() * movementFactor;});

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

var opac = 0.0;

function newStroke(){
	if (opac < 1) {opac = opac + 0.01}
  svg.selectAll("lines")
      .data(alldata[getRandomIntInclusive(0, 9)])
      .enter().append("line")
      .attr("x1", function(d) {return d[0] + randn_bm() * movementFactor;})
      .attr("x2", function(d) {return d[2] + randn_bm() * movementFactor;})
      .attr("y1", function(d) {return d[1] + randn_bm() * movementFactor;})
      .attr("y2", function(d) {return d[3] + randn_bm() * movementFactor;})
      .attr("stroke-opacity", opac)
      .attr("stroke", "red");
}






function moving() {
if (Math.round(movementFactor) === -10) {decreasing = false}
if (Math.round(movementFactor) === 10) {decreasing = true}
if (decreasing === true) {
  movementFactor = movementFactor - 0.1
}
else {movementFactor = movementFactor + 0.1}
  // console.log(movementFactor)
        // for (var i=0; i < testdatae.length; i++) {
        
        eo.data([testdatae[1]])
      .transition()
      .duration(1200)
      // .on("start", function(){
        // d3.select(this)
          // .attr("fill", "red");
      // })
      .attr("d", line);

              ei.data([testdatae[0]])
      .transition()
      .duration(1200)
      .attr("d", line);}

            // .on("end", function(){
        // d3.select(this)
          // .attr("fill", "blue");
      // });
      // .style("fill", t.url());
// }

// setTimeout(moving, 2000)


