let data = {
    "Technology": 90,
    "Design"  : 50,
    "Accuracy"  : 99,
    "Lorem Ipsum" : 70
};

let img = {
    "Technology": "/assets/about/Technology.png",
    "Design": "/assets/about/Design.png",
    "Accuracy": "/assets/about/Accuracy.png",
    "Lorem Ipsum": "/assets/about/LoremIpsum.png"
}


let margin = {top: 80, right: 40, bottom: 0, left: 110};
let svgWidth = 620, svgHeight = 480;
let height = svgHeight- margin.top- margin.bottom, width = svgWidth - margin.left - margin.right;
let sourceNames = [], sourceCount = [];

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
   .attr('width', svgWidth)
   .attr('opacity', 0);

svg = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        
// Create rectangles
let bars = svg.selectAll('.bar')
    .data(sourceNames)
    .enter()
    .append("g");


bars.append('rect')
    .attr('class', 'back-bar')
    .attr("x", 0 )
    .attr("y", function(d) { return y(d); })
    .attr("width", x(100))
    .attr("height", "15px")
    .attr("rx", "10px")
    .style("fill", "#b3b3b3");

bars.append('rect')
    .attr('class', 'bar')
    .attr("x", function(d) { return 0; })
    .attr("y", function(d) { return y(d); })
    .attr("width", 0)
    .attr("opacity", 0)
    .style("fill", "#f98d7d")
    .attr("height", "15px")
    .attr("rx", "10px");
    

bars.append("text")
    .text(function(d) { return data[d] + "%";})
    .attr("x", function(d){return 470;})
    .attr("y", function(d, i){console.log(d);return y(d) + y.bandwidth() -110; })
    .attr("font-family" , "montserrat")
    .attr("font-weight", "bold")
    .attr("font-size" , "14px")
    .attr("fill" , "black")
    .attr("text-anchor", "end");

bars.append("text")
    .text(function(d) {return d})
    .attr("x", function(d){return 1;})
    .attr("y", function(d){return y(d) + y.bandwidth() -110})
    .attr("font-family" , "montserrat")
    .attr("font-weight", "bold")
    .attr("font-size" , "14px")
    .attr("fill" , "black")
    .attr("text-anchor", "start");

bars.append("svg:image")
    .attr('x', -65)
    .attr('y', function(d){return y(d) + y.bandwidth() -105})
    .attr('width', 50)
    .attr('height', 50)
    .attr("text-anchor", "start")
    .attr("xlink:href", function(d){return img[d]});

function triggerAnimation(){
    d3.select('#graph-box')
        .transition()
        .duration(1500)
        .attr('opacity', 1)

    setTimeout(function(){
        d3.selectAll('.bar')
        .transition()
        .duration(1500)
        .attr("width", function(d){return x(data[d])})
        .attr("opacity", 1);
    }, 1300);
    
};

function reverseAnimation(){
    d3.select('#graph-box')
        .transition()
        .duration(500)
        .attr('opacity', 0)

    d3.selectAll('.bar')
        .transition()
        .duration(500)
        .attr("opacity", 0)
        .attr("width", 0)
};
    