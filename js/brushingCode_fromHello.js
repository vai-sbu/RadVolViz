function brushingCode(){

pointLineonCir();

var dragging = false, drawing = false, startPoint;
var polyG = svgColorSpace.append('g');

var points = []
svgColorSpace.on('mouseup', function(){
  // console.log("Mouse Up ENtering");
    if(dragging) return;
    drawing = true;
    startPoint = [d3.mouse(this)[0], d3.mouse(this)[1]];


        guiControls.startX = startPoint[0];
        guiControls.startY = startPoint[1];
    if(polyG.select('g.drawPoly').empty()) g4 = polyG.append('g').attr('class', 'drawPoly');
    if(d3.event.target.hasAttribute('is-handle')) {
        closePolygon();
        return;
    };
    points.push(d3.mouse(this));




    g4.select('polyline').remove();
    var polyline = svgColorSpace.append('polyline')
                    .attr('points', points)
                    .style('fill', 'none')
                    .attr('stroke', '#000');
    for(var i = 0; i < points.length; i++) {
        polyline.append('circle')
        .attr('cx',points[i][0])
        .attr('cy', points[i][1])
        .attr('r', 6)
        .attr('fill', 'red')
        .attr('stroke', '#000')
        .style({cursor: 'pointer'});
    }
});
function closePolygon() {
  // console.log("EMter PolygonClose");
    polyG.select('g.drawPoly').remove();
    var g = polyG.append('g');
    g.append('polygon')
    .attr('points', points)
    .style('fill', getRandomColor());
    for(var i = 0; i < points.length; i++) {
        var circle = g.selectAll('circles')
        .data([points[i]])
        .enter()
        .append('circle')
        .attr('cx', points[i][0])
        .attr('cy', points[i][1])
        .attr('r', 4)
        .attr('fill', '#FDBC07')
        .attr('stroke', '#000')
        .attr('is-handle', 'true')
        .style({cursor: 'move'});
        // .call(dragger);
    }
    points.splice(0);
    drawing = false;
}
svgColorSpace.on('mousemove', function() {
  // console.log("Enter Mouse Move");

  // console.log(guiControls.pointy6);
    if(!drawing) return;
    var g = d3.select('g.drawPoly');
    g.select('line').remove();

    var line = g.append('line')
                .attr('x1', startPoint[0])
                .attr('y1', startPoint[1])
                .attr('x2', d3.mouse(this)[0] + 2)
                .attr('y2', d3.mouse(this)[1])
                .attr('stroke', 'red')
                .attr('stroke-width', 1);
})

if (guiControls.polySide == 5.0){
if (pp1.length >0){
guiControls.x1 = pp1[0][0];
guiControls.x2 = pp1[1][0];
guiControls.x3 = pp1[2][0];
guiControls.x4 = pp1[3][0];
guiControls.x5 = pp1[4][0];

guiControls.y1 = pp1[0][1];
guiControls.y2 = pp1[1][1];
guiControls.y3 = pp1[2][1];
guiControls.y4 = pp1[3][1];
guiControls.y5 = pp1[4][1];

}

if (pp2.length >0){

guiControls.x11 = pp2[1][0];
guiControls.x12 = pp2[2][0];
guiControls.x13 = pp2[3][0];
guiControls.x14 = pp2[4][0];
guiControls.x15 = pp2[5][0];

guiControls.y11 = pp2[1][1];
guiControls.y12 = pp2[2][1];
guiControls.y13 = pp2[3][1];
guiControls.y14 = pp2[4][1];
guiControls.y15 = pp2[5][1];
}


if (pp3.length >0){

guiControls.x31 = pp3[1][0];
guiControls.x32 = pp3[2][0];
guiControls.x33 = pp3[3][0];
guiControls.x34 = pp3[4][0];
guiControls.x35 = pp3[5][0];

guiControls.y31 = pp3[1][1];
guiControls.y32 = pp3[2][1];
guiControls.y33 = pp3[3][1];
guiControls.y34 = pp3[4][1];
guiControls.y35 = pp3[5][1];
}


if (pp4.length >0){

guiControls.x41 = pp4[1][0];
guiControls.x42 = pp4[2][0];
guiControls.x43 = pp4[3][0];
guiControls.x44 = pp4[4][0];
guiControls.x45 = pp4[5][0];

guiControls.y41 = pp4[1][1];
guiControls.y42 = pp4[2][1];
guiControls.y43 = pp4[3][1];
guiControls.y44 = pp4[4][1];
guiControls.y45 = pp4[5][1];
}

if (pp5.length >0){

guiControls.x51 = pp5[1][0];
guiControls.x52 = pp5[2][0];
guiControls.x53 = pp5[3][0];
guiControls.x54 = pp5[4][0];
guiControls.x55 = pp5[5][0];

guiControls.y51 = pp5[1][1];
guiControls.y52 = pp5[2][1];
guiControls.y53 = pp5[3][1];
guiControls.y54 = pp5[4][1];
guiControls.y55 = pp5[5][1];
}

}


if (guiControls.polySide == 6.0){

if (pp1.length >0){
guiControls.x1 = pp1[0][0];
guiControls.x2 = pp1[1][0];
guiControls.x3 = pp1[2][0];
guiControls.x4 = pp1[3][0];
guiControls.x5 = pp1[4][0];
guiControls.x6 = pp1[5][0];
// guiControls.x7 = pp1[6][0];
// guiControls.x8 = pp1[7][0];

guiControls.y1 = pp1[0][1];
guiControls.y2 = pp1[1][1];
guiControls.y3 = pp1[2][1];
guiControls.y4 = pp1[3][1];
guiControls.y5 = pp1[4][1];
guiControls.y6 = pp1[5][1];
// guiControls.y7 = pp1[6][1];
// guiControls.x8 = pp1[7][0];
}

if (pp2.length >0){

guiControls.x11 = pp2[1][0];
guiControls.x12 = pp2[2][0];
guiControls.x13 = pp2[3][0];
guiControls.x14 = pp2[4][0];
guiControls.x15 = pp2[5][0];
guiControls.x16 = pp2[6][0];

guiControls.y11 = pp2[1][1];
guiControls.y12 = pp2[2][1];
guiControls.y13 = pp2[3][1];
guiControls.y14 = pp2[4][1];
guiControls.y15 = pp2[5][1];
guiControls.y16 = pp2[6][1];
}


if (pp3.length >0){

guiControls.x31 = pp3[1][0];
guiControls.x32 = pp3[2][0];
guiControls.x33 = pp3[3][0];
guiControls.x34 = pp3[4][0];
guiControls.x35 = pp3[5][0];
guiControls.x36 = pp3[6][0];

guiControls.y31 = pp3[1][1];
guiControls.y32 = pp3[2][1];
guiControls.y33 = pp3[3][1];
guiControls.y34 = pp3[4][1];
guiControls.y35 = pp3[5][1];
guiControls.y36 = pp3[6][1];
}


if (pp4.length >0){

guiControls.x41 = pp4[1][0];
guiControls.x42 = pp4[2][0];
guiControls.x43 = pp4[3][0];
guiControls.x44 = pp4[4][0];
guiControls.x45 = pp4[5][0];
guiControls.x46 = pp4[6][0];

guiControls.y41 = pp4[1][1];
guiControls.y42 = pp4[2][1];
guiControls.y43 = pp4[3][1];
guiControls.y44 = pp4[4][1];
guiControls.y45 = pp4[5][1];
guiControls.y46 = pp4[6][1];
}

if (pp5.length >0){

guiControls.x51 = pp5[1][0];
guiControls.x52 = pp5[2][0];
guiControls.x53 = pp5[3][0];
guiControls.x54 = pp5[4][0];
guiControls.x55 = pp5[5][0];
guiControls.x56 = pp5[6][0];

guiControls.y51 = pp5[1][1];
guiControls.y52 = pp5[2][1];
guiControls.y53 = pp5[3][1];
guiControls.y54 = pp5[4][1];
guiControls.y55 = pp5[5][1];
guiControls.y56 = pp5[6][1];
}

}

if (guiControls.polySide == 7.0){
if (pp1.length >0){
guiControls.x1 = pp1[0][0];
guiControls.x2 = pp1[1][0];
guiControls.x3 = pp1[2][0];
guiControls.x4 = pp1[3][0];
guiControls.x5 = pp1[4][0];
guiControls.x6 = pp1[5][0];
guiControls.x7 = pp1[6][0];
// guiControls.x8 = pp1[7][0];

guiControls.y1 = pp1[0][1];
guiControls.y2 = pp1[1][1];
guiControls.y3 = pp1[2][1];
guiControls.y4 = pp1[3][1];
guiControls.y5 = pp1[4][1];
guiControls.y6 = pp1[5][1];
guiControls.y7 = pp1[6][1];
// guiControls.x8 = pp1[7][0];
}

if (pp2.length >0){

guiControls.x11 = pp2[1][0];
guiControls.x12 = pp2[2][0];
guiControls.x13 = pp2[3][0];
guiControls.x14 = pp2[4][0];
guiControls.x15 = pp2[5][0];
guiControls.x16 = pp2[6][0];
guiControls.x17 = pp2[7][0];

guiControls.y11 = pp2[1][1];
guiControls.y12 = pp2[2][1];
guiControls.y13 = pp2[3][1];
guiControls.y14 = pp2[4][1];
guiControls.y15 = pp2[5][1];
guiControls.y16 = pp2[6][1];
guiControls.y17 = pp2[7][1];
}


if (pp3.length >0){

guiControls.x31 = pp3[1][0];
guiControls.x32 = pp3[2][0];
guiControls.x33 = pp3[3][0];
guiControls.x34 = pp3[4][0];
guiControls.x35 = pp3[5][0];
guiControls.x36 = pp3[6][0];
guiControls.x37 = pp3[7][0];

guiControls.y31 = pp3[1][1];
guiControls.y32 = pp3[2][1];
guiControls.y33 = pp3[3][1];
guiControls.y34 = pp3[4][1];
guiControls.y35 = pp3[5][1];
guiControls.y36 = pp3[6][1];
guiControls.y37 = pp3[7][1];
}


if (pp4.length >0){

guiControls.x41 = pp4[1][0];
guiControls.x42 = pp4[2][0];
guiControls.x43 = pp4[3][0];
guiControls.x44 = pp4[4][0];
guiControls.x45 = pp4[5][0];
guiControls.x46 = pp4[6][0];
guiControls.x47 = pp4[7][0];

guiControls.y41 = pp4[1][1];
guiControls.y42 = pp4[2][1];
guiControls.y43 = pp4[3][1];
guiControls.y44 = pp4[4][1];
guiControls.y45 = pp4[5][1];
guiControls.y46 = pp4[6][1];
guiControls.y47 = pp4[7][1];
}

if (pp5.length >0){

guiControls.x51 = pp5[1][0];
guiControls.x52 = pp5[2][0];
guiControls.x53 = pp5[3][0];
guiControls.x54 = pp5[4][0];
guiControls.x55 = pp5[5][0];
guiControls.x56 = pp5[6][0];
guiControls.x57 = pp5[7][0];

guiControls.y51 = pp5[1][1];
guiControls.y52 = pp5[2][1];
guiControls.y53 = pp5[3][1];
guiControls.y54 = pp5[4][1];
guiControls.y55 = pp5[5][1];
guiControls.y56 = pp5[6][1];
guiControls.y57 = pp5[7][1];
}

}

if (guiControls.polySide == 8.0){
if (pp1.length >0){
guiControls.x1 = pp1[0][0];
guiControls.x2 = pp1[1][0];
guiControls.x3 = pp1[2][0];
guiControls.x4 = pp1[3][0];
guiControls.x5 = pp1[4][0];
guiControls.x6 = pp1[5][0];
guiControls.x7 = pp1[6][0];
guiControls.x8 = pp1[7][0];

guiControls.y1 = pp1[0][1];
guiControls.y2 = pp1[1][1];
guiControls.y3 = pp1[2][1];
guiControls.y4 = pp1[3][1];
guiControls.y5 = pp1[4][1];
guiControls.y6 = pp1[5][1];
guiControls.y7 = pp1[6][1];
guiControls.x8 = pp1[7][0];
}

if (pp2.length >0){

guiControls.x11 = pp2[1][0];
guiControls.x12 = pp2[2][0];
guiControls.x13 = pp2[3][0];
guiControls.x14 = pp2[4][0];
guiControls.x15 = pp2[5][0];
guiControls.x16 = pp2[6][0];
guiControls.x17 = pp2[7][0];
guiControls.x18 = pp2[8][0];

guiControls.y11 = pp2[1][1];
guiControls.y12 = pp2[2][1];
guiControls.y13 = pp2[3][1];
guiControls.y14 = pp2[4][1];
guiControls.y15 = pp2[5][1];
guiControls.y16 = pp2[6][1];
guiControls.y17 = pp2[7][1];
guiControls.y18 = pp2[8][1];
}


if (pp3.length >0){

guiControls.x31 = pp3[1][0];
guiControls.x32 = pp3[2][0];
guiControls.x33 = pp3[3][0];
guiControls.x34 = pp3[4][0];
guiControls.x35 = pp3[5][0];
guiControls.x36 = pp3[6][0];
guiControls.x37 = pp3[7][0];
guiControls.x38 = pp3[8][0];

guiControls.y31 = pp3[1][1];
guiControls.y32 = pp3[2][1];
guiControls.y33 = pp3[3][1];
guiControls.y34 = pp3[4][1];
guiControls.y35 = pp3[5][1];
guiControls.y36 = pp3[6][1];
guiControls.y37 = pp3[7][1];
guiControls.y38 = pp3[8][1];
}


if (pp4.length >0){

guiControls.x41 = pp4[1][0];
guiControls.x42 = pp4[2][0];
guiControls.x43 = pp4[3][0];
guiControls.x44 = pp4[4][0];
guiControls.x45 = pp4[5][0];
guiControls.x46 = pp4[6][0];
guiControls.x47 = pp4[7][0];
guiControls.x48 = pp4[8][0];

guiControls.y41 = pp4[1][1];
guiControls.y42 = pp4[2][1];
guiControls.y43 = pp4[3][1];
guiControls.y44 = pp4[4][1];
guiControls.y45 = pp4[5][1];
guiControls.y46 = pp4[6][1];
guiControls.y47 = pp4[7][1];
guiControls.y48 = pp4[8][1];
}

if (pp5.length >0){

guiControls.x51 = pp5[1][0];
guiControls.x52 = pp5[2][0];
guiControls.x53 = pp5[3][0];
guiControls.x54 = pp5[4][0];
guiControls.x55 = pp5[5][0];
guiControls.x56 = pp5[6][0];
guiControls.x57 = pp5[7][0];
guiControls.x58 = pp5[8][0];

guiControls.y51 = pp5[1][1];
guiControls.y52 = pp5[2][1];
guiControls.y53 = pp5[3][1];
guiControls.y54 = pp5[4][1];
guiControls.y55 = pp5[5][1];
guiControls.y56 = pp5[6][1];
guiControls.y57 = pp5[7][1];
guiControls.y58 = pp5[8][1];
}

}

}

function ClearSVGPoints() {
  guiControls.startX = 0.0;
  guiControls.startY = 0.0;

  for (i=0;i<guiControls.polySide+2;i++){
    console.log(i);
    pp1.pop();
    console.log(pp1);
  }

  for (i=0;i<guiControls.polySide+2;i++){
    console.log(i);
    pp2.pop();
    console.log(pp2);
  }

  for (i=0;i<guiControls.polySide+1;i++){
    pp3.pop();
  }

  for (i=0;i<guiControls.polySide+1;i++){
    pp4.pop();
  }
  for (i=0;i<guiControls.polySide+1;i++){
    pp5.pop();
  }
  // for (i=0;i<guiControls.polySide+1;i++){
  //   pp6.pop();
  // }

  guiControls.x1 = 0.0;
  guiControls.x2 = 0.0;
  guiControls.x3 = 0.0;
  guiControls.x4 = 0.0;
  guiControls.x5 = 0.0;
  guiControls.x6 = 0.0;
  guiControls.x7 = 0.0;


  guiControls.y1 = 0.0;
  guiControls.y2 = 0.0;
  guiControls.y3 = 0.0;
  guiControls.y4 = 0.0;
  guiControls.y5 = 0.0;
  guiControls.y6 = 0.0;
  guiControls.y7 = 0.0;


  guiControls.x11 = 0.0;
  guiControls.x12 = 0.0;
  guiControls.x13 = 0.0;
  guiControls.x14 = 0.0;
  guiControls.x15 = 0.0;
  guiControls.x16 = 0.0;
  guiControls.x17 = 0.0;

  guiControls.y11 = 0.0;
  guiControls.y12 = 0.0;
  guiControls.y13 = 0.0;
  guiControls.x14 = 0.0;
  guiControls.x15 = 0.0;
  guiControls.x16 = 0.0;
  guiControls.x17 = 0.0;


  guiControls.x31 = 0.0;
  guiControls.x32 = 0.0;
  guiControls.x33 = 0.0;
  guiControls.x34 = 0.0;
  guiControls.x35 = 0.0;
  guiControls.x36 = 0.0;
  guiControls.x37 = 0.0;

  guiControls.y31 = 0.0;
  guiControls.y32 = 0.0;
  guiControls.y33 = 0.0;
  guiControls.y34 = 0.0;
  guiControls.y35 = 0.0;
  guiControls.y36 = 0.0;
  guiControls.y37 = 0.0;

  guiControls.x41 = 0.0;
  guiControls.x42 = 0.0;
  guiControls.x43 = 0.0;
  guiControls.x44 = 0.0;
  guiControls.x45 = 0.0;
  guiControls.x46 = 0.0;
  guiControls.x47 = 0.0;

  guiControls.y41 = 0.0;
  guiControls.y42 = 0.0;
  guiControls.y43 = 0.0;
  guiControls.y44 = 0.0;
  guiControls.y45 = 0.0;
  guiControls.y46 = 0.0;
  guiControls.y47 = 0.0;

  guiControls.x51 = 0.0;
  guiControls.x52 = 0.0;
  guiControls.x53 = 0.0;
  guiControls.x54 = 0.0;
  guiControls.x55 = 0.0;
  guiControls.x56 = 0.0;
  guiControls.x57 = 0.0;

  guiControls.y51 = 0.0;
  guiControls.y52 = 0.0;
  guiControls.y53 = 0.0;
  guiControls.y54 = 0.0;
  guiControls.y55 = 0.0;
  guiControls.y56 = 0.0;
  guiControls.y57 = 0.0;

  // guiControls.x61 = 0.0;
  // guiControls.x62 = 0.0;
  // guiControls.x63 = 0.0;
  // guiControls.x64 = 0.0;
  // guiControls.x65 = 0.0;
  //
  // guiControls.y61 = 0.0;
  // guiControls.y62 = 0.0;
  // guiControls.y63 = 0.0;
  // guiControls.y64 = 0.0;
  // guiControls.y65 = 0.0;

}


function radioOnChange(value){
if (value == 'brush'){
guiControls.brushMode = 1.0
}
else {
  guiControls.brushMode = 0.0
  ClearSVGPoints();
}
//  console.log(guiControls.brushMode);
}
