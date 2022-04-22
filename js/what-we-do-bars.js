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

function drawGraph(size){
    var textY = 135
    var textX = 270
    var imgY = 130
    var width = 420
    var height = 600

    if (size == "L"){
        textY = 110
        textX = 470
        imgY = 105
        width = 620
        height = 480
    }

    d3.selectAll('.theG').remove();


    let svgWidth = width, svgHeight = height;
    let heightCalc = svgHeight- margin.top- margin.bottom, widthCalc = svgWidth - margin.left - margin.right;
    let sourceNames = [], sourceCount = [];

    for(let key in data){
        if(data.hasOwnProperty(key)){
            sourceNames.push(key);
            sourceCount.push(parseInt(data[key]));
        }
    }

    let x = d3.scaleLinear().rangeRound([0, widthCalc]),
        y = d3.scaleBand().rangeRound([0, heightCalc]).padding(0.1);

    x.domain([0, 100]);
    y.domain(sourceNames);
    var svg = d3.select("#graph-box");
    svg.attr('height', height)
    .attr('width', width)
    .attr('opacity', 0);

    svg = svg.append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
        .attr('class', 'theG');

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
        .attr('class', 'percent')
        .attr("x", textX)
        .attr("y", function(d, i){return y(d) + y.bandwidth() - textY; })
        .attr("font-family" , "montserrat")
        .attr("font-weight", "bold")
        .attr("font-size" , "14px")
        .attr("fill" , "#2f2a3e")
        .attr("text-anchor", "end");

    bars.append("text")
        .attr('class', 'name')
        .text(function(d) {return d})
        .attr("x", function(d){return 1;})
        .attr("y", function(d){return y(d) + y.bandwidth() - textY})
        .attr("font-family" , "montserrat")
        .attr("font-weight", "bold")
        .attr("font-size" , "14px")
        .attr("fill" , "#2f2a3e")
        .attr("text-anchor", "start");

    bars.append("svg:image")
        .attr('x', -65)
        .attr('y', function(d){return y(d) + y.bandwidth() - imgY})
        .attr('class', 'theImg')
        .attr('width', 50)
        .attr('height', 50)
        .attr("text-anchor", "start")
        .attr("xlink:href", function(d){return img[d]});

    return x;
}

if (window.innerWidth > 700){
    xValue = drawGraph("L")
} else{
    xValue = drawGraph("S")
}


function triggerAnimation(){
    var graph = d3.select('#graph-box')
    graph.transition()
    .duration(1500)
    .attr('opacity', 1)

    setTimeout(function(){
        graph.selectAll('.bar')
        .transition()
        .duration(1500)
        .attr("width", function(d){return xValue(data[d])})
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
var temp = false
var smallGraph = false
if (window.innerWidth < 700){
    smallGraph = true
} else{
    smallGraph = false
}
d3.select(window).on("resize", resize);
function resize(){
    if (window.innerWidth < 700){
        temp = true
    } else{
        temp = false
    }

    if (temp == true && smallGraph == false){
        xValue = drawGraph("S")
        triggerAnimation()
        smallGraph = true
    } else if (temp == false && smallGraph == true){
        xValue = drawGraph("L")
        triggerAnimation()
        smallGraph = false
    }
}

if (smallGraph == false){
    xValue = drawGraph("L")
    triggerAnimation()
} else{
    xValue = drawGraph("S")
    triggerAnimation()
}

    