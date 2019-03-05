// TODO: 
// Need to scale Z1 so the effect is also zoomed

// GLOBAL VARIABLES: 
var width = 300;
var height = 300;
var radius = 3.5; 
var padding = 10; 
var svgOutline = "thin solid #d3d3d3";


// ******** AREA: GEOMETRIC ***************************************************************************** //

var gz0 = d3.select("#gz0")
	.append("svg")
	.attr("width", width)
	.attr("height", height)
	// .style("outline", svgOutline)
	   .call(d3.zoom().on("zoom", function() {
   	gz0.attr("transform", d3.event.transform)
   }))
   .append("g")

	;

gz0.selectAll("rect")
   .data([100, 150, 225])
   .enter()
   .append("rect")
   .attr("x", function(d, i) {
   		return i * (width / 3 + 15);
   })
   .attr("y", function(d) {
   		return height - (d);
   })
   .attr("width", width / 3 - 30)
   .attr("height", function(d) {
   		return d;
   })
   ;	

function zoomed() {
	gz0.attr("transform", d3.event.transform)
}

 var zoom = d3.zoom()
    .scaleExtent([0, 20])
    .on('zoom', zoomed);

gz0.transition()
	.duration(5000)
	.call(zoom.transform, d3.zoomIdentity.translate(-700, -175)
	.scale(3.5))
	.on('end', function() {
		gz0.transition()
			.duration(2000)
			.call(zoom.transform, d3.zoomIdentity)
	})



// gz0.call(zoom.transform, d3.zoomIdentity.translate(-700, -175).scale(3.5))

// gz0.append("rect")
//    .attr("x", 225)
//    .attr("y", 71)
//    .attr("width", 15)
//    .attr("height", 15)
//    .attr("fill", "none")
//    .attr("stroke-width", "1")
//    .attr("stroke", "red")
//    ;

   // var initialTransform = d3.zoomIdentity.scale(2);
  // gz0.call(zoom.transform, initialTransform);

function extendGattr (attr, styl){
	if (attr) {
		gz0.attr(attr[0], attr[1]); 
		// gz1.attr(attr[0], attr[1]); 
	}
	if (styl) {
		gz0.style(styl[0], styl[1]); 
		// gz1.style(styl[0], styl[1]); 
	}
}

extendGattr(["fill", "black"], null)