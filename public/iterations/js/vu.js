// TODO: 
// Need to scale Z1 so the effect is also zoomed

// GLOBAL VARIABLES: 
var width = 300;
var height = 300;
var radius = 3.5; 
var padding = 10; 
var svgOutline = "thin solid #d3d3d3";

// ************************************ //
// ******** P, L, A(2) CLASSES ******** //
// ************************************ //

// ******** POINT *************************************************************************************** //

var pz0 = d3.select("#pz0")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
	.style("outline", svgOutline)
    ;

var pz1 = d3.select("#pz1")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
	.style("outline", svgOutline)
    ;

d3.csv("data/oldfaithful.csv", function(data) {

	var rectOffset = 1; 
	
	var dataz1 = []; // data for zoom level 1
	for (var i=0; i<data.length; i++) {
		if (data[i].TimeEruption >= 3.4335 - 3.5 * 4 / 53 && data[i].TimeEruption <= 3.4335 + 3.5 * 4 / 53 && data[i].TimeWaiting >= 63 && data[i].TimeWaiting <= 67) {
			dataz1.push(data[i]);
		}
	}

	var x = d3.scaleLinear()
			.domain([
				d3.min(data, function(d) {return d.TimeEruption;}),
				d3.max(data, function(d) {return d.TimeEruption;}),
				])
			.range([0 + padding, width - padding])
			;

	var y = d3.scaleLinear()
			.domain([
				d3.min(data, function(d) {return d.TimeWaiting;}),
				d3.max(data, function(d) {return d.TimeWaiting;}),
				])
			.range([height - padding, 0 + padding])
			;

	// scale for zoom level 1
	var xz1 = d3.scaleLinear()
			.domain([3.4335 - 3.5 * 4 / 53 / 2, 3.4335 + 3.5 * 4 / 53 / 2])
			.range([0 + padding, width - padding])
			;

	var yz1 = d3.scaleLinear()
			.domain([63, 67])
			.range([height - padding, 0 + padding])
			;

    pz0.selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("r", radius)
      .attr("cx", function(d) { return x(d.TimeEruption); })
      .attr("cy", function(d) { return y(d.TimeWaiting); })
      ;

     pz0.append("rect")
       .attr("x", x(3.4335 - 3.5 * 4 / 53 / 2) - rectOffset)
       .attr("y", y(67) - rectOffset)
       .attr("width", 4 / 53 * 300)
       .attr("height", 4 / 53 * 300)
       .attr("fill", "none")
       .attr("stroke-width", "1")
       .attr("stroke", "red")
       ;

    pz1.selectAll("circle")
      .data(dataz1)
      .enter()
      .append("circle")
      .attr("r", (radius / (width * (4/53)))*width)
      .attr("cx", function(d) { return xz1(d.TimeEruption); })
      .attr("cy", function(d) { return yz1(d.TimeWaiting); })
      ;

});

// ******** LINE **************************************************************************************** //

var lz0 = d3.select("#lz0")
	.append("svg")
	.attr("width", width)
	.attr("height", height)
	.style("outline", svgOutline)
	;

var lz1 = d3.select("#lz1")
	.append("svg")
	.attr("width", width)
	.attr("height", height)
	.style("outline", svgOutline)
	;

var rowConverter = function (d) {
	return {
		date: new Date(d.Datee),
		close: parseFloat(d.Close)
	}
}

d3.csv("data/yahoosnp500.csv", rowConverter, function(data) {
	// console.table(data)

	var rectOffset = 1;

	dataz1 = [];
	for (var i=0; i<data.length; i++) {
		if (data[i].date >= new Date("10/1/12") && data[i].date <= new Date("6/1/13")) {
			dataz1.push(data[i]);
		}
	}
	// console.log(dataz1)

	var xScale = d3.scaleTime()
		.domain([
			d3.min(data, function(d) { return d.date; }),
			d3.max(data, function(d) { return d.date; })
			])
		.range([0, width])
		;

	var yScale = d3.scaleLinear()
		.domain([0, d3.max(data, function(d) { return d.close; })])
		.range([height, 0])
		;

	var line = d3.line()
		.x(function(d) { return xScale(d.date); })
		.y(function(d) { return yScale(d.close); })
		;

	var horLine = d3.line()
		.x(function(d) { return xScale(d.date); })
		.y(function(d) { return yScale(1514.68); })
		;

	var xzScale = d3.scaleTime()
		.domain([
			d3.min(dataz1, function(d) { return d.date; }),
			d3.max(dataz1, function(d) { return d.date; })
			])
		.range([0, width])
		;

	var yzScale = d3.scaleLinear()
		.domain([
			d3.min(dataz1, function(d) { return d.close; }), 
			d3.max(dataz1, function(d) { return d.close; })
			])
		.range([height, 0])
		;

	var linez = d3.line()
		.x(function(d) { return xzScale(d.date); })
		.y(function(d) { return yzScale(d.close); })
		;

	var horLinez = d3.line()
		.x(function(d) { return xzScale(d.date); })
		.y(function(d) { return yzScale(1514.68); })
		;

	lz0.append("path")
		.datum(data)
		.attr("class", "line")
		.attr("fill", "none")
		.attr("stroke", "black")
		.attr("stroke-width", "2")
		.attr("d", line)
		;

	lz0.append("path")
	.datum(data)
		.attr("class", "line")
		.attr("fill", "none")
		.attr("stroke", "black")
		.attr("stroke-width", "2")
		.attr("d", horLine)
		;	

 	lz0.append("rect")
       .attr("x", xScale(new Date("10/1/12")) - rectOffset)
       .attr("y", yScale(1514.68 + (162.06 / 2)) - rectOffset)
       .attr("width", (9 / 121) * 300)
       .attr("height", (9 / 121) * 300)
       .attr("fill", "none")
       .attr("stroke-width", "1")
       .attr("stroke", "red")
       ;

	lz1.append("path")
		.datum(dataz1)
		.attr("class", "line")
		.attr("fill", "none")
		.attr("stroke", "black")
		.attr("stroke-width", "27")
		.attr("d", linez)
		;

	lz1.append("path")
	.datum(dataz1)
		.attr("class", "line")
		.attr("fill", "none")
		.attr("stroke", "black")
		.attr("stroke-width", "27")
		.attr("d", horLinez)
		;	

})

// ******** AREA: MAP *********************************************************************************** //

var az0 = d3.select("#az0")
	.append("svg")
	.attr("width", width)
	.attr("height", height)
	.style("outline", svgOutline)
	;

var az1 = d3.select("#az1")
	.append("svg")
	.attr("width", width)
	.attr("height", height)
	.style("outline", svgOutline)
	;

function extendAattr (attr, styl){
	if (attr) {
		az0.attr(attr[0], attr[1]); 
		az1.attr(attr[0], attr[1]); 
	}
	if (styl) {
		az0.style(styl[0], styl[1]); 
		az1.style(styl[0], styl[1]); 
	}
}

extendAattr(["fill", "black"], null)

// http://bl.ocks.org/peterlozano/3a4578f64ec9630cfefe
var projection = d3.geoMercator()
   .center([-3, 40]) 
   .scale([1300])
   .translate([width/2,height/2]) 
;

var mapPath = d3.geoPath()
	.projection(projection)
	;

// map zoom
var projectionz = d3.geoMercator()
   .center([-8.1, 43.6]) 
   .scale([33000])
   .translate([width/2,height/2]) 
;

var mapPathz = d3.geoPath()
	.projection(projectionz)
	;

d3.json("data/esp.json", function(es) {

	var subunits = topojson.feature(es, es.objects.subunits);
	
	az0.selectAll("path")
		.data(subunits.features)
		.enter()
		.append("path")
		.attr("d", mapPath)
		;

	az1.selectAll("path")
		.data(subunits.features)
		.enter()
		.append("path")
		.attr("d", mapPathz)
		;

	 az0.append("rect")
       .attr("x", 28.25)
       .attr("y", 34.5)
       .attr("width", 12.5)
       .attr("height", 12.5)
       .attr("fill", "none")
       .attr("stroke-width", "1")
       .attr("stroke", "red")
       ;
})

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
   // .call(d3.zoom().on("zoom", function() {
   // 	gz0.attr("transform", d3.event.transform)
   // }))
   // .append("g")
   ;	

gz0.append("rect")
   .attr("x", 225)
   .attr("y", 71)
   .attr("width", 15)
   .attr("height", 15)
   .attr("fill", "none")
   .attr("stroke-width", "1")
   .attr("stroke", "red")
   ;

var gz1 = d3.select("#gz1")
	.append("svg")
	.attr("width", width)
	.attr("height", height)
	// .style("outline", svgOutline)
	.call(d3.zoom().on("zoom", function() {
   	gz1.attr("transform", d3.event.transform)
   }))
   .append("g")

	;

gz1.selectAll("rect")
   .data([225])
   .enter()
   .append("rect")
   .attr("x", function(d, i) {
   		return width / 3;
   })
   .attr("y", function(d) {
   		return height - (d);
   })
   .attr("width", width )
   .attr("height", function(d) {
   		return d;
   })
   ;

function extendGattr (attr, styl){
	if (attr) {
		gz0.attr(attr[0], attr[1]); 
		gz1.attr(attr[0], attr[1]); 
	}
	if (styl) {
		gz0.style(styl[0], styl[1]); 
		gz1.style(styl[0], styl[1]); 
	}
}

extendGattr(["fill", "black"], null)