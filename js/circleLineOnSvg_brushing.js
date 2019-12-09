
function pointLineonCir() {


  if( guiControls.clusters == 2.0) {

  if (guiControls.startY != 0 && guiControls.startX != 0){

  if (pp1.length == 0){
    // console.log("First Entry");
  pp1.push([guiControls.startX,guiControls.startY])
  }
  if (pp1.length > 0 && pp1.length < guiControls.polySide){
  //  console.log(pp.length);
    if (pp1[pp1.length - 1][1] !=  guiControls.startY  ){
      // console.log("Entry to Push");
      pp1.push([guiControls.startX,guiControls.startY])
    }
  }



  newDraw = svgColorSpace.append("g")
  circle = newDraw.selectAll("circle")
     .data(pp1);
  circleEnter = circle.enter().append("circle");

     circleEnter.attr("cy", function (d) {
        return d[1];
     })
     .attr("cx", function (d) {
        return d[0];
     })
     .attr("r", 5)
     .style("opacity", 0.5)
     .style("fill", guiControls.color1);

     if (pp1.length >1){
     // console.log("Entering Line");
     var drawLine = newDraw.selectAll("line")
     for( i = 0; i < pp1.length-1; i++) {

          drawLine.data([pp1[i]])
           .enter()
           .append("line")
           .attr("x1",pp1[i][0])
           .attr("y1",pp1[i][1])
           .attr("x2",pp1[i+1][0])
           .attr("y2", pp1[i+1][1])
           .attr("stroke-width", 2)
           .attr("stroke", guiControls.color1);
      }
    }

    // console.log(pp1);

      //SECOND REGION DRAW FOR COLORING

      if (pp1.length == guiControls.polySide){

        if (pp2.length == 0){

        pp2.push([guiControls.startX, guiControls.startY])
        }
        if (pp2.length <= (guiControls.polySide)){
        if (pp2[pp2.length - 1][1] !=  guiControls.startY ){
            pp2.push([guiControls.startX,guiControls.startY])}
      }
      }



      newDraw2 = svgColorSpace.append("g")
      circle2 = newDraw2.selectAll("circle")
          .data(pp2);
      circleEnter2 = circle2.enter().append("circle");

          circleEnter2.attr("cy", function (d) {
             return d[1];
          })
          .attr("cx", function (d) {
             return d[0];
          })
          .attr("r", 5)
          .style("opacity", 0.5)
          .style("fill", guiControls.color2);

          if (pp2.length >2){
          // console.log("Entering Line");
          var drawLine2 = newDraw2.selectAll("line")
          for( i = 0; i < pp2.length-2; i++) {

               drawLine2.data([pp2[i]])
                .enter()
                .append("line")
                .attr("x1",pp2[i+1][0])
                .attr("y1",pp2[i+1][1])
                .attr("x2",pp2[i+2][0])
                .attr("y2", pp2[i+2][1])
                .attr("stroke-width", 2)
                .attr("stroke", guiControls.color2);
           }
         }

  }
   // console.log("Entering Points in PP2");
   // console.log(pp2);
  }


if( guiControls.clusters == 5.0) {

if (guiControls.startY != 0 && guiControls.startX != 0){

if (pp1.length == 0){
  // console.log("First Entry");
pp1.push([guiControls.startX,guiControls.startY])
}
if (pp1.length > 0 && pp1.length < guiControls.polySide){
//  console.log(pp.length);
  if (pp1[pp1.length - 1][1] !=  guiControls.startY  ){
    // console.log("Entry to Push");
    pp1.push([guiControls.startX,guiControls.startY])
  }
}



newDraw = svgColorSpace.append("g")
circle = newDraw.selectAll("circle")
   .data(pp1);
circleEnter = circle.enter().append("circle");

   circleEnter.attr("cy", function (d) {
      return d[1];
   })
   .attr("cx", function (d) {
      return d[0];
   })
   .attr("r", 5)
   .style("opacity", 0.5)
   .style("fill", guiControls.color1);

   if (pp1.length >1){
   // console.log("Entering Line");
   var drawLine = newDraw.selectAll("line")
   for( i = 0; i < pp1.length-1; i++) {

        drawLine.data([pp1[i]])
         .enter()
         .append("line")
         .attr("x1",pp1[i][0])
         .attr("y1",pp1[i][1])
         .attr("x2",pp1[i+1][0])
         .attr("y2", pp1[i+1][1])
         .attr("stroke-width", 2)
         .attr("stroke", guiControls.color1);
    }
  }

    //SECOND REGION DRAW FOR COLORING

    if (pp1.length == guiControls.polySide){

      if (pp2.length == 0){

      pp2.push([guiControls.startX,guiControls.startY])
      }
      if (pp2.length <= (guiControls.polySide)){
      if (pp2[pp2.length - 1][1] !=  guiControls.startY ){
          pp2.push([guiControls.startX,guiControls.startY])}
    }
    }



    newDraw2 = svgColorSpace.append("g")
    circle2 = newDraw2.selectAll("circle")
        .data(pp2);
    circleEnter2 = circle2.enter().append("circle");

        circleEnter2.attr("cy", function (d) {
           return d[1];
        })
        .attr("cx", function (d) {
           return d[0];
        })
        .attr("r", 5)
        .style("opacity", 0.5)
        .style("fill", guiControls.color2);

        if (pp2.length >2){
        // console.log("Entering Line");
        var drawLine2 = newDraw2.selectAll("line")
        for( i = 0; i < pp2.length-2; i++) {

             drawLine2.data([pp2[i]])
              .enter()
              .append("line")
              .attr("x1",pp2[i+1][0])
              .attr("y1",pp2[i+1][1])
              .attr("x2",pp2[i+2][0])
              .attr("y2", pp2[i+2][1])
              .attr("stroke-width", 2)
              .attr("stroke",guiControls.color2);
         }
       }


           //THIRD REGION DRAW FOR COLORING
           // console.log(guiControls.polySide);
           // console.log(pp2.length);
           var ss =  parseFloat(guiControls.polySide) + 1.0;
           // console.log(ss);
           if (pp2.length == ss){
             // console.log("Enter 3" );

             if (pp3.length == 0){

             pp3.push([guiControls.startX,guiControls.startY])
             }
             if (pp3.length <= (guiControls.polySide)){
             if (pp3[pp3.length - 1][1] !=  guiControls.startY ){
                 pp3.push([guiControls.startX,guiControls.startY])}
           }
           }



           newDraw3 = svgColorSpace.append("g")
           circle3 = newDraw3.selectAll("circle")
               .data(pp3);
           circleEnter3 = circle3.enter().append("circle");

               circleEnter3.attr("cy", function (d) {
                  return d[1];
               })
               .attr("cx", function (d) {
                  return d[0];
               })
               .attr("r", 5)
               .style("opacity", 0.5)
               .style("fill", guiControls.color3);

               if (pp3.length >2){
               // console.log("Entering Line");
               var drawLine3 = newDraw3.selectAll("line")
               for( i = 0; i < pp3.length-2; i++) {

                    drawLine3.data([pp3[i]])
                     .enter()
                     .append("line")
                     .attr("x1",pp3[i+1][0])
                     .attr("y1",pp3[i+1][1])
                     .attr("x2",pp3[i+2][0])
                     .attr("y2", pp3[i+2][1])
                     .attr("stroke-width", 2)
                     .attr("stroke",guiControls.color3);
                }
              }


              //FOURTH REGION DRAW FOR COLORING
              // console.log(guiControls.polySide);
              // console.log(pp3.length);
              var ss =  parseFloat(guiControls.polySide) + 1.0;
              // console.log(ss);
              if (pp3.length == ss){
              //  console.log("Enter Number 4" );

                if (pp4.length == 0){

                pp4.push([guiControls.startX,guiControls.startY])
                }
                if (pp4.length <= (guiControls.polySide)){
                if (pp4[pp4.length - 1][1] !=  guiControls.startY ){
                    pp4.push([guiControls.startX,guiControls.startY])}
              }
              }



              newDraw4 = svgColorSpace.append("g")
              circle4 = newDraw4.selectAll("circle")
                  .data(pp4);
              circleEnter4 = circle4.enter().append("circle");

                  circleEnter4.attr("cy", function (d) {
                     return d[1];
                  })
                  .attr("cx", function (d) {
                     return d[0];
                  })
                  .attr("r", 5)
                  .style("opacity", 0.5)
                  .style("fill", guiControls.color4);

                  if (pp4.length >2){
                  // console.log("Entering Line");
                  var drawLine4 = newDraw4.selectAll("line")
                  for( i = 0; i < pp4.length-2; i++) {

                       drawLine4.data([pp4[i]])
                        .enter()
                        .append("line")
                        .attr("x1",pp4[i+1][0])
                        .attr("y1",pp4[i+1][1])
                        .attr("x2",pp4[i+2][0])
                        .attr("y2", pp4[i+2][1])
                        .attr("stroke-width", 2)
                        .attr("stroke", guiControls.color4);
                   }
                 }

                 //FIFTH REGION DRAW FOR COLORING
                 // console.log(guiControls.polySide);
                 // console.log(pp4.length);
                 var ss =  parseFloat(guiControls.polySide) + 1.0;
                 // console.log(ss);
                 if (pp4.length == ss){
                //   console.log("Enter Number 5" );

                   if (pp5.length == 0){

                   pp5.push([guiControls.startX,guiControls.startY])
                   }
                   if (pp5.length <= (guiControls.polySide)){
                   if (pp5[pp5.length - 1][1] !=  guiControls.startY ){
                       pp5.push([guiControls.startX,guiControls.startY])}
                 }
                 }



                 newDraw5 = svgColorSpace.append("g")
                 circle5 = newDraw5.selectAll("circle")
                     .data(pp5);
                 circleEnter5 = circle5.enter().append("circle");

                     circleEnter5.attr("cy", function (d) {
                        return d[1];
                     })
                     .attr("cx", function (d) {
                        return d[0];
                     })
                     .attr("r", 5)
                     .style("opacity", 0.5)
                     .style("fill", guiControls.color5);

                     if (pp5.length >2){
                     // console.log("Entering Line");
                     var drawLine5 = newDraw5.selectAll("line")
                     for( i = 0; i < pp5.length-2; i++) {

                          drawLine5.data([pp5[i]])
                           .enter()
                           .append("line")
                           .attr("x1",pp5[i+1][0])
                           .attr("y1",pp5[i+1][1])
                           .attr("x2",pp5[i+2][0])
                           .attr("y2",pp5[i+2][1])
                           .attr("stroke-width", 2)
                           .attr("stroke", guiControls.color5);
                      }
                    }

}
}
if( guiControls.clusters == 4.0) {

if (guiControls.startY != 0 && guiControls.startX != 0){

if (pp1.length == 0){
  // console.log("First Entry");
pp1.push([guiControls.startX,guiControls.startY])
}
if (pp1.length > 0 && pp1.length < guiControls.polySide){
//  console.log(pp.length);
  if (pp1[pp1.length - 1][1] !=  guiControls.startY  ){
    // console.log("Entry to Push");
    pp1.push([guiControls.startX,guiControls.startY])
  }
}



newDraw = svgColorSpace.append("g")
circle = newDraw.selectAll("circle")
   .data(pp1);
circleEnter = circle.enter().append("circle");

   circleEnter.attr("cy", function (d) {
      return d[1];
   })
   .attr("cx", function (d) {
      return d[0];
   })
   .attr("r", 5)
   .style("opacity", 0.5)
   .style("fill", guiControls.color1);

   if (pp1.length >1){
   // console.log("Entering Line");
   var drawLine = newDraw.selectAll("line")
   for( i = 0; i < pp1.length-1; i++) {

        drawLine.data([pp1[i]])
         .enter()
         .append("line")
         .attr("x1",pp1[i][0])
         .attr("y1",pp1[i][1])
         .attr("x2",pp1[i+1][0])
         .attr("y2", pp1[i+1][1])
         .attr("stroke-width", 2)
         .attr("stroke", guiControls.color1);
    }
  }

    //SECOND REGION DRAW FOR COLORING

    if (pp1.length == guiControls.polySide){

      if (pp2.length == 0){

      pp2.push([guiControls.startX,guiControls.startY])
      }
      if (pp2.length <= (guiControls.polySide)){
      if (pp2[pp2.length - 1][1] !=  guiControls.startY ){
          pp2.push([guiControls.startX,guiControls.startY])}
    }
    }



    newDraw2 = svgColorSpace.append("g")
    circle2 = newDraw2.selectAll("circle")
        .data(pp2);
    circleEnter2 = circle2.enter().append("circle");

        circleEnter2.attr("cy", function (d) {
           return d[1];
        })
        .attr("cx", function (d) {
           return d[0];
        })
        .attr("r", 5)
        .style("opacity", 0.5)
        .style("fill", guiControls.color2);

        if (pp2.length >2){
        // console.log("Entering Line");
        var drawLine2 = newDraw2.selectAll("line")
        for( i = 0; i < pp2.length-2; i++) {

             drawLine2.data([pp2[i]])
              .enter()
              .append("line")
              .attr("x1",pp2[i+1][0])
              .attr("y1",pp2[i+1][1])
              .attr("x2",pp2[i+2][0])
              .attr("y2", pp2[i+2][1])
              .attr("stroke-width", 2)
              .attr("stroke", guiControls.color2);
         }
       }


           //THIRD REGION DRAW FOR COLORING
           // console.log(guiControls.polySide);
           // console.log(pp2.length);
           var ss =  parseFloat(guiControls.polySide) + 1.0;
           // console.log(ss);
           if (pp2.length == ss){
          //   console.log("Enter 3" );

             if (pp3.length == 0){

             pp3.push([guiControls.startX,guiControls.startY])
             }
             if (pp3.length <= (guiControls.polySide)){
             if (pp3[pp3.length - 1][1] !=  guiControls.startY ){
                 pp3.push([guiControls.startX,guiControls.startY])}
           }
           }



           newDraw3 = svgColorSpace.append("g")
           circle3 = newDraw3.selectAll("circle")
               .data(pp3);
           circleEnter3 = circle3.enter().append("circle");

               circleEnter3.attr("cy", function (d) {
                  return d[1];
               })
               .attr("cx", function (d) {
                  return d[0];
               })
               .attr("r", 5)
               .style("opacity", 0.5)
               .style("fill", guiControls.color3);

               if (pp3.length >2){
               // console.log("Entering Line");
               var drawLine3 = newDraw3.selectAll("line")
               for( i = 0; i < pp3.length-2; i++) {

                    drawLine3.data([pp3[i]])
                     .enter()
                     .append("line")
                     .attr("x1",pp3[i+1][0])
                     .attr("y1",pp3[i+1][1])
                     .attr("x2",pp3[i+2][0])
                     .attr("y2", pp3[i+2][1])
                     .attr("stroke-width", 2)
                     .attr("stroke", guiControls.color3);
                }
              }


              //FOURTH REGION DRAW FOR COLORING
              // console.log(guiControls.polySide);
              // console.log(pp3.length);
              var ss =  parseFloat(guiControls.polySide) + 1.0;
              // console.log(ss);
              if (pp3.length == ss){
              //  console.log("Enter Number 4" );

                if (pp4.length == 0){

                pp4.push([guiControls.startX,guiControls.startY])
                }
                if (pp4.length <= (guiControls.polySide)){
                if (pp4[pp4.length - 1][1] !=  guiControls.startY ){
                    pp4.push([guiControls.startX,guiControls.startY])}
              }
              }



              newDraw4 = svgColorSpace.append("g")
              circle4 = newDraw4.selectAll("circle")
                  .data(pp4);
              circleEnter4 = circle4.enter().append("circle");

                  circleEnter4.attr("cy", function (d) {
                     return d[1];
                  })
                  .attr("cx", function (d) {
                     return d[0];
                  })
                  .attr("r", 5)
                  .style("opacity", 0.5)
                  .style("fill", guiControls.color4);

                  if (pp4.length >2){
                  // console.log("Entering Line");
                  var drawLine4 = newDraw4.selectAll("line")
                  for( i = 0; i < pp4.length-2; i++) {

                       drawLine4.data([pp4[i]])
                        .enter()
                        .append("line")
                        .attr("x1",pp4[i+1][0])
                        .attr("y1",pp4[i+1][1])
                        .attr("x2",pp4[i+2][0])
                        .attr("y2", pp4[i+2][1])
                        .attr("stroke-width", 2)
                        .attr("stroke", guiControls.color4);
                   }
                 }

}
}
if( guiControls.clusters == 3.0) {

if (guiControls.startY != 0 && guiControls.startX != 0){

if (pp1.length == 0){
  // console.log("First Entry");
pp1.push([guiControls.startX,guiControls.startY])
}
if (pp1.length > 0 && pp1.length < guiControls.polySide){
//  console.log(pp.length);
  if (pp1[pp1.length - 1][1] !=  guiControls.startY  ){
    // console.log("Entry to Push");
    pp1.push([guiControls.startX,guiControls.startY])
  }
}



newDraw = svgColorSpace.append("g")
circle = newDraw.selectAll("circle")
   .data(pp1);
circleEnter = circle.enter().append("circle");

   circleEnter.attr("cy", function (d) {
      return d[1];
   })
   .attr("cx", function (d) {
      return d[0];
   })
   .attr("r", 5)
   .style("opacity", 0.5)
   .style("fill", guiControls.color1);

   if (pp1.length >1){
   // console.log("Entering Line");
   var drawLine = newDraw.selectAll("line")
   for( i = 0; i < pp1.length-1; i++) {

        drawLine.data([pp1[i]])
         .enter()
         .append("line")
         .attr("x1",pp1[i][0])
         .attr("y1",pp1[i][1])
         .attr("x2",pp1[i+1][0])
         .attr("y2", pp1[i+1][1])
         .attr("stroke-width", 2)
         .attr("stroke", guiControls.color1);
    }
  }

    //SECOND REGION DRAW FOR COLORING

    if (pp1.length == guiControls.polySide){

      if (pp2.length == 0){

      pp2.push([guiControls.startX,guiControls.startY])
      }
      if (pp2.length <= (guiControls.polySide)){
      if (pp2[pp2.length - 1][1] !=  guiControls.startY ){
          pp2.push([guiControls.startX,guiControls.startY])}
    }
    }



    newDraw2 = svgColorSpace.append("g")
    circle2 = newDraw2.selectAll("circle")
        .data(pp2);
    circleEnter2 = circle2.enter().append("circle");

        circleEnter2.attr("cy", function (d) {
           return d[1];
        })
        .attr("cx", function (d) {
           return d[0];
        })
        .attr("r", 5)
        .style("opacity", 0.5)
        .style("fill", guiControls.color2);

        if (pp2.length >2){
        // console.log("Entering Line");
        var drawLine2 = newDraw2.selectAll("line")
        for( i = 0; i < pp2.length-2; i++) {

             drawLine2.data([pp2[i]])
              .enter()
              .append("line")
              .attr("x1",pp2[i+1][0])
              .attr("y1",pp2[i+1][1])
              .attr("x2",pp2[i+2][0])
              .attr("y2", pp2[i+2][1])
              .attr("stroke-width", 2)
              .attr("stroke", guiControls.color2);
         }
       }


           //THIRD REGION DRAW FOR COLORING
           // console.log(guiControls.polySide);
           // console.log(pp2.length);
           var ss =  parseFloat(guiControls.polySide) + 1.0;
           // console.log(ss);
           if (pp2.length == ss){
            // console.log("Enter 3" );

             if (pp3.length == 0){

             pp3.push([guiControls.startX,guiControls.startY])
             }
             if (pp3.length <= (guiControls.polySide)){
             if (pp3[pp3.length - 1][1] !=  guiControls.startY ){
                 pp3.push([guiControls.startX,guiControls.startY])}
           }
           }



           newDraw3 = svgColorSpace.append("g")
           circle3 = newDraw3.selectAll("circle")
               .data(pp3);
           circleEnter3 = circle3.enter().append("circle");

               circleEnter3.attr("cy", function (d) {
                  return d[1];
               })
               .attr("cx", function (d) {
                  return d[0];
               })
               .attr("r", 5)
               .style("opacity", 0.5)
               .style("fill", guiControls.color3);

               if (pp3.length >2){
               // console.log("Entering Line");
               var drawLine3 = newDraw3.selectAll("line")
               for( i = 0; i < pp3.length-2; i++) {

                    drawLine3.data([pp3[i]])
                     .enter()
                     .append("line")
                     .attr("x1",pp3[i+1][0])
                     .attr("y1",pp3[i+1][1])
                     .attr("x2",pp3[i+2][0])
                     .attr("y2", pp3[i+2][1])
                     .attr("stroke-width", 3)
                     .attr("stroke", guiControls.color3);
                }
              }

}
}


if( guiControls.clusters == 1.0) {

if (guiControls.startY != 0 && guiControls.startX != 0){

if (pp1.length == 0){
  // console.log("First Entry");
pp1.push([guiControls.startX,guiControls.startY])
}
if (pp1.length > 0 && pp1.length < guiControls.polySide){
//  console.log(pp.length);
  if (pp1[pp1.length - 1][1] !=  guiControls.startY  ){
    // console.log("Entry to Push");
    pp1.push([guiControls.startX,guiControls.startY])
  }
}



newDraw = svgColorSpace.append("g")
circle = newDraw.selectAll("circle")
   .data(pp1);
circleEnter = circle.enter().append("circle");

   circleEnter.attr("cy", function (d) {
      return d[1];
   })
   .attr("cx", function (d) {
      return d[0];
   })
   .attr("r", 5)
   .style("opacity", 0.5)
   .style("fill", guiControls.color1);

   if (pp1.length >1){
   // console.log("Entering Line");
   var drawLine = newDraw.selectAll("line")
   for( i = 0; i < pp1.length-1; i++) {

        drawLine.data([pp1[i]])
         .enter()
         .append("line")
         .attr("x1",pp1[i][0])
         .attr("y1",pp1[i][1])
         .attr("x2",pp1[i+1][0])
         .attr("y2", pp1[i+1][1])
         .attr("stroke-width", 2)
         .attr("stroke", guiControls.color1);
    }
  }


}
}



}
