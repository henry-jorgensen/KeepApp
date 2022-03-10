let data = {
    "Technology": 90,
    "Design"  : 50,
    "Accuracy"  : 99,
    "Lorem Ipsum" : 70
};

let backData = {
    "Technology": 100,
    "Design"  : 100,
    "Accuracy"  : 100,
    "Lorem Ipsum" : 100
};

let margin = {top: 50, right: 40, bottom: 10, left: 110};
let svgWidth = 620, svgHeight = 500;
let height = svgHeight- margin.top- margin.bottom, width = svgWidth - margin.left - margin.right;
let sourceNames = [], sourceCount = [], backDataCount= [];

let x = d3.scaleLinear().rangeRound([0, width]),
    y = d3.scaleBand().rangeRound([0, height]).padding(0.1);


for(let key in data){
    if(data.hasOwnProperty(key)){
        sourceNames.push(key);
        sourceCount.push(parseInt(data[key]));
    }
}

x.domain([0, 100]);
y.domain(sourceNames);

let svg = d3.select("#graph-box");
svg.attr('height', svgHeight)
   .attr('width', svgWidth);

svg = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        
// Create rectangles
let bars = svg.selectAll('.bar')
    .data(sourceNames)
    .enter()
    .append("g");


bars.append('rect')
    .attr('class', 'bar')
    .attr("x", function(d) { return 0; })
    .attr("y", function(d) { return y(d); })
    .attr("width", function(d){return x(data[d])})
    .attr("height", "15px")
    .attr("rx", "10px")
    .style("fill", "#f98d7d");

bars.append("text")
    .text(function(d) { 
        return data[d] + "%";
    })
    .attr("x", function(d){
        return 480;
    })
    .attr("y", function(d){
        console.log(d);
        return y(d) + y.bandwidth() -110; // here 0.1 is the padding scale
    })
    .attr("font-family" , "montserrat")
    .attr("font-weight", "bold")
    .attr("font-size" , "14px")
    .attr("fill" , "black")
    .attr("text-anchor", "end");
    