var svg = d3.select("#circle"),
    width = +svg.attr("width"),
    height = +svg.attr("height"),
    angles = d3.range(0, 2 * Math.PI, Math.PI / 200);

var path = svg.append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
    .attr("fill", "none")
    .attr("stroke-width", 10)
    .attr("stroke-linejoin", "round")
    .selectAll("path")
    .data(["cyan", "magenta", "yellow"])
    .enter().append("path")
    .attr("stroke", function(d) { return d; })
    .style("mix-blend-mode", "darken")
    .datum(function(d, i) {
      return d3.radialLine()
          .curve(d3.curveLinearClosed)
          .angle(function(a) { return a; })
          .radius(function(a) {
            var t = d3.now() / 1000;
            return 200 + Math.cos(a * 8 - i * 2 * Math.PI / 3 + t) * Math.pow((1 + Math.cos(a - t)) / 2, 3) * 32;
          });
    });
function Repeat(){
  var name=svg.append('text').attr('x',560).attr('y',320)
      .style('fill','yellow ').style('font-size','72px').style('font-family','ubuntu')
      .style('font-weight','bold').text('Rollens');
  repeat();
  function repeat(){
  name.transition().delay(500).duration(3000).style('fill','magenta')
  .transition().delay(500).duration(3000).style('fill','cyan')
  .transition().delay(500).duration(3000).style('fill','yellow').on('end',repeat);};
};

Repeat();

d3.timer(function() {
  path.attr("d", function(d) {
    return d(angles);
  });
});

