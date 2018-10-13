var svg = d3.select("#example")
  .append("svg");

var t = textures.paths()
  .d("caps")
  .lighter()
  .thicker()
  .stroke("darkorange");

svg.call(t);

svg.append("circle")
	.style("fill", t.url())
	.attr("cx", 75)
	.attr("cy", 75)
	.attr("r", 75);