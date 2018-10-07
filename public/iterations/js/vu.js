

var width = 300;
var height = 300;
var radius = 3.5; 
var padding = 10; 

var pz0 = d3.select("#pz0")
    .append("svg")
        .attr("width", width)
        .attr("height", height)
        // MAKE RESPONSIVE: 
        // .attr("preserveAspectRatio", "xMinYMin meet")
        // .attr("viewBox", "0 0 1024 256")
        ;

var pz1 = d3.select("#pz1")
    .append("svg")
        .attr("width", width)
        .attr("height", height)
        // MAKE RESPONSIVE: 
        // .attr("preserveAspectRatio", "xMinYMin meet")
        // .attr("viewBox", "0 0 1024 256")
        ;

var lz0 = d3.select("#lz0")
	.append("svg")
	.attr("width", width)
	.attr("height", height)
	;

var lz1 = d3.select("#lz1")
	.append("svg")
	.attr("width", width)
	.attr("height", height)
	;

var az0 = d3.select("#az0")
	.append("svg")
	.attr("width", width)
	.attr("height", height)
	;

// var projection = d3.geoEquirectangular()
// 	.translate[width/2, height/2]
// 	// .center([0, 15])
// 	// .scale([1500])
// 	;

var projection = d3
   .geoEquirectangular()
   // .center([40.416775, -3.703790]) // set centre to further North
   .scale([175])
   // .scale([width/(2*Math.PI)]) // scale to fit group width
   .translate([width/2,height/2]) // ensure centred in group
;

var mapPath = d3.geoPath()
	.projection(projection)
	// .bounds([[44.318936, 2.461475],[35.152898, -10.298987]])
	// .bounds([[44.318936, -10.298987],[35.152898, 2.461475]])
	;

var rowConverter = function (d) {
	return {
		date: new Date(d.Datee),
		close: parseFloat(d.Close)
	}
}

d3.json("data/spain.json", function(json) {
	
	az0.selectAll("path")
		.data(json.features)
		.enter()
		.append("path")
		.attr("d", mapPath)
		.attr("stroke", "black")
		;
})

d3.csv("data/yahoosnp500.csv", rowConverter, function(data) {
	// console.table(data)

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
       .attr("x", xScale(new Date("10/1/12")))
       .attr("y", yScale(1514.68 + (162.06 / 2)))
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

d3.csv("data/oldfaithful.csv", function(data) {

	// data for zoom level 1
	var dataz1 = []; 
	for (var i=0; i<data.length; i++) {
		if (data[i].TimeEruption >= 3.4335 - 3.5 * 4 / 53 && data[i].TimeEruption <= 3.4335 + 3.5 * 4 / 53 && data[i].TimeWaiting >= 63 && data[i].TimeWaiting <= 67) {
			dataz1.push(data[i]);
		}
	}

	// data for zoom level 2
	// var dataz2 = []; 
	// for (var i=0; i<data.length; i++) {
	// 	if (data[i].TimeEruption >= 3.833 - 3.5 * 2 / 53 && data[i].TimeEruption <= 3.833 + 3.5 * 2 / 53 && data[i].TimeWaiting >= 63 && data[i].TimeWaiting <= 65) {
	// 		dataz2.push(data[i]);
	// 	}
	// }

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
    .enter().append("circle")
      .attr("r", radius)
      .attr("cx", function(d) { return x(d.TimeEruption); })
      .attr("cy", function(d) { return y(d.TimeWaiting); })

      ;

     pz0.append("rect")
       .attr("x", x(3.4335 - 3.5 * 4 / 53 / 2))
       .attr("y", y(67))
       .attr("width", 4 / 53 * 300)
       .attr("height", 4 / 53 * 300)
       .attr("fill", "none")
       .attr("stroke-width", "1")
       .attr("stroke", "red")
       ;

    pz1.selectAll("circle")
      .data(dataz1)
    .enter().append("circle")
      .attr("r", (radius / (width * (4/53)))*width)
      .attr("cx", function(d) { return xz1(d.TimeEruption); })
      .attr("cy", function(d) { return yz1(d.TimeWaiting); })

      ;

    // svg.selectAll("text")
    // 	.data(data)
	   //  .enter()
	   //  .append("text")
	   //  .text(function(d) {
	   //  	return d.TimeEruption + ", " + d.TimeWaiting; 
	   //  })
	   //  .attr("x", function(d) {
	   //  	return x(d.TimeEruption); 
	   //  })
	   //  .attr("y", function(d) {
	   //  	return y(d.TimeWaiting); 
	   //  })
	   //  .attr("font-family", "sans-serif")
	   //  .attr("font-size", "11px")
	   //  .attr("fill", "black")
	   //  ;

});


