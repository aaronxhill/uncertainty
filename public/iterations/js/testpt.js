// TODO: 
// Need to scale Z1 so the effect is also zoomed

// GLOBAL VARIABLES: 
var width = 1024;
var height = 256;


// ******** AREA: GEOMETRIC ***************************************************************************** //

var gz0 = d3.select("#gz0")
	.append("svg")
	.attr("width", width)
	.attr("height", height)
	// .style("outline", svgOutline)
	// .call(zoom.on("zoom", function() {
 //   		gz0.attr("transform", d3.event.transform)
 //   }))
	// .call(zoom.on("zoom", zoomed))
   .append("path")
   .attr("d", "M115.59,174.46H86.83v-13q-6.43,8-13,11.43t-16.08,3.4q-12.72,0-19.94-7.61T30.6,145.24V94.08H61.55v44.2q0,7.56,2.8,10.75a10,10,0,0,0,7.87,3.17,11.22,11.22,0,0,0,9-4.24q3.51-4.23,3.52-15.21V94.08h30.8Z")
   // .attr("transform", "translate(-30.6 -63.5)")
   .transition()
	// .duration(5000)
	.attr("d", "M236.55,164.59V154.23q-8.24,12-22.38,12a28.45,28.45,0,0,1-11.66-2.39,19.15,19.15,0,0,1-8-6,22.47,22.47,0,0,1-3.69-8.86,61.43,61.43,0,0,1-.73-11.16V94.07h12v39.11q0,9.36.73,12.62a12.42,12.42,0,0,0,4.78,7.4,14.75,14.75,0,0,0,9,2.69,19.7,19.7,0,0,0,10.09-2.75,15.33,15.33,0,0,0,6.68-7.51q1.95-4.74,2-13.78V94.07h12v70.52Z")
	// .attr("transform", "translate(-190.06 -67.24)"); 
;

// gz0.selectAll("path").transition()
// 	.duration(50)
// 	.attr("d", "M236.55,164.59V154.23q-8.24,12-22.38,12a28.45,28.45,0,0,1-11.66-2.39,19.15,19.15,0,0,1-8-6,22.47,22.47,0,0,1-3.69-8.86,61.43,61.43,0,0,1-.73-11.16V94.07h12v39.11q0,9.36.73,12.62a12.42,12.42,0,0,0,4.78,7.4,14.75,14.75,0,0,0,9,2.69,19.7,19.7,0,0,0,10.09-2.75,15.33,15.33,0,0,0,6.68-7.51q1.95-4.74,2-13.78V94.07h12v70.52Z")
// 	.attr("transform", "translate(-190.06 -67.24)"); 


// gz0.selectAll("")
//    .append("rect")
//    .attr("x", function(d, i) {
//    		return i * (width / 3 + 15);
//    })
//    .attr("y", function(d) {
//    		return height - (d);
//    })
//    .attr("width", width / 3 - 30)
//    .attr("height", function(d) {
//    		return d;
//    })
//    .attr("id", "tryGrad")
//    ;	

// xk + tx,yk + ty
// 6000 - 4500 = 1500, /20 = 75
// 6000 - 1400 = 4600, /20 = 230
// gz0.transition()
// 	.duration(5000)
// 	.call(zoom.transform, d3.zoomIdentity.translate(-0.75*width*zoomScale, -0.24*width*zoomScale)
// 	.scale(zoomScale))
// 	.on('end', function() {
// 		gz0.transition()
// 			.delay(2000)
// 			.duration(2000)
// 			.call(zoom.transform, d3.zoomIdentity)
// 	})

// buttons: show detail, reset

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

// function extendGattr (attr, styl){
// 	if (attr) {
// 		gz0.attr(attr[0], attr[1]); 
// 		// gz1.attr(attr[0], attr[1]); 
// 	}
// 	if (styl) {
// 		gz0.style(styl[0], styl[1]); 
// 		// gz1.style(styl[0], styl[1]); 
// 	}
// }

// extendGattr(["fill", "blue"], null)