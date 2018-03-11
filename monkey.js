        var c = document.getElementById("monkey"); //calls the id above^
        var ctx = c.getContext("2d"); //2d identifies the type of drawing that will be made. Other types are possible
        
        ctx.lineWidth = 3; //the width all lines within the canvas will be
        
        //FUNCTIONS
        function drawRect(x,y,w,h,s,f) { //Named the function 'drawRect'. The letter values mirror the values inside the brackets in each instance it is called throughout the page.
        ctx.beginPath(); //begins a new line
        ctx.strokeStyle = s; // the 5th value in method
        ctx.fillStyle = f; // the 6th value in the method
        ctx.strokeRect(x,y,w,h); // the 1st, 2nd, 3rd and 4th values in the canvas rect() method. Tells the browser to stroke the outline of the rectangle  
        ctx.fillRect(x,y,w,h); // the 1st, 2nd, 3rd and 4th values in the canvas rect() method. Tells the browser to fill the rectangle 
        ctx.closePath(); //joins the start and end coordinates together with a line
        }
        
        function drawShape(xa,ya,xb,yb,xc,yc,xd,yd){ //Named the function 'drawShape'. The letter values mirror the values inside the brackets in each instance it is called throughout the page.
        ctx.beginPath(); //begins a new line
        ctx.moveTo(xa,ya); //the 1st and 2nd values in method
        ctx.lineTo(xb,yb); //the 3rd and 4th values in method
        ctx.lineTo(xc,yc); //the 5th and 6th values in method
        ctx.lineTo(xd,yd); //the 7th and 8th values in method
        ctx.fill(); //tells the browser to fill the shape in
        ctx.closePath(); //closes the path. //joins the start and end coordinates together with a line
        }
        
        //START OF LEAVES
        
        ctx.fillStyle = "green"; //tells the "ctx.fill();" function(s) below what colour to fill the shape
        ctx.strokeStyle = "black"; //tells the "ctx.stroke();" function(s) below what colour to shade the line
        
        //Leaves 1
        var pos = [-670, -570, -470, -370, -270, -170]; //an array of the x coordinates
        var a = pos.length; //length of array variable

        for (q = 1; q < a; q++) {
        var z = pos[q]; //updates the array every time we loop to give them their correct positions
        ctx.beginPath(); //begins a new line
        ctx.arc(z, 364, 600, 1.8 * Math.PI, 0 * Math.PI); //coordinates of the rectangle are numbers while the z (or x) value changes
        ctx.closePath(); //joins the start and end coordinates together with a line
        ctx.stroke(); //tells the browser to show the line. It calls "ctx.strokeStyle" for the colour above^
        ctx.fill(); //tells the browser to fill the shape in. It calls "ctx.fillStyle" for the colour above^
        }
        
        //Leaves 2
        var pos = [230, 330, 430, 530, 630, 730]; //an array of the x coordinates
        var a = pos.length; //length of array variable

        for (q = 1; q < a; q++) {
        var z = pos[q]; //updates the array every time we loop to give them their correct positions
        ctx.beginPath(); //begins a new line
        ctx.arc(z, 364, 400, 1 * Math.PI, 1.3 * Math.PI); //coordinates of the rectangle are numbers while the z (or x) value changes
        ctx.closePath(); //joins the start and end coordinates together with a line
        ctx.stroke(); //tells the browser to show the line. It calls "ctx.strokeStyle" for the colour above^
        ctx.fill(); //tells the browser to fill the shape in. It calls "ctx.fillStyle" for the colour above^
        }
        
        //END OF LEAVES
    
        
        //START OF EARS
        
        ctx.fillStyle = "#cb925f"; //tells the "ctx.fill();" function(s) below what colour to fill the shape
        ctx.strokeStyle = "black"; //tells the "ctx.stroke();" function(s) below what colour to shade the line
        
        //left ear
        ctx.beginPath(); //begins a new line
        ctx.arc(94, 215, 44, 0.7 * Math.PI, 1.7 * Math.PI); //draws a circle, or part of one
        ctx.stroke(); //tells the browser to show the line. It calls "ctx.strokeStyle" for the colour above^
        ctx.fill(); //tells the browser to fill the shape in. It calls "ctx.fillStyle" for the colour above^
        
        ctx.beginPath(); //begins a new line
        ctx.arc(102, 185, 74, 0.45 * Math.PI, 0.65 * Math.PI); //draws a circle, or part of one
        ctx.stroke(); //tells the browser to show the line. It calls "ctx.strokeStyle" for the colour above^
        ctx.fill(); //tells the browser to fill the shape in. It calls "ctx.fillStyle" for the colour above^
        
        
        
        
        //filling left ear (triangle)
        ctx.beginPath(); //begins a new line
        ctx.moveTo(110,180); //the starting coordinate
        ctx.lineTo(120,260); //joins a line to this coordinate from the previous coordinate
        ctx.lineTo(66,251); //joins a line to this coordinate from the previous coordinate
        ctx.fill(); //tells the browser to fill the shape in. It calls "ctx.fillStyle" for the colour above^
        ctx.closePath(); //joins the start and end coordinates together with a line
        
        
        //right ear
        ctx.beginPath(); //begins a new line
        ctx.arc(306, 215, 44, 1.3 * Math.PI, 0.3 * Math.PI); //draws a circle, or part of one
        ctx.stroke(); //tells the browser to show the line. It calls "ctx.strokeStyle" for the colour above^
        ctx.fill(); //tells the browser to fill the shape in. It calls "ctx.fillStyle" for the colour above^
        
        ctx.beginPath(); //begins a new line
        ctx.arc(298, 185, 74, 0.35 * Math.PI, 0.55 * Math.PI); //draws a circle, or part of one
        ctx.stroke(); //tells the browser to show the line. It calls "ctx.strokeStyle" for the colour above^
        ctx.fill(); //tells the browser to fill the shape in. It calls "ctx.fillStyle" for the colour above^
        
        //filling right ear (triangle)
        ctx.beginPath(); //begins a new line
        ctx.moveTo(290,180); //the starting coordinate
        ctx.lineTo(280,260); //joins a line to this coordinate from the previous coordinate
        ctx.lineTo(334,251); //joins a line to this coordinate from the previous coordinate
        ctx.fill(); //tells the browser to fill the shape in. It calls "ctx.fillStyle" for the colour above^
        ctx.closePath(); //joins the start and end coordinates together with a line
    
        ctx.fillStyle = "pink"; 
        ctx.strokeStyle = "black"; 

        //left inner ear pink
        ctx.beginPath(); //begins a new line
        ctx.arc(94, 218, 22, 0.7 * Math.PI, 1.7 * Math.PI);  //draws a circle, or part of one
        ctx.stroke(); //tells the browser to show the line. It calls "ctx.strokeStyle" for the colour above^
        ctx.fill(); //tells the browser to fill the shape in. It calls "ctx.fillStyle" for the colour above^
        ctx.closePath(); //joins the start and end coordinates together with a line
        
        ctx.beginPath(); //begins a new line
        ctx.arc(103, 192, 49, 0.45 * Math.PI, 0.65 * Math.PI); //draws a circle, or part of one
        ctx.stroke(); //tells the browser to show the line. It calls "ctx.strokeStyle" for the colour above^
        ctx.fill(); //tells the browser to fill the shape in. It calls "ctx.fillStyle" for the colour above^
        ctx.closePath(); //joins the start and end coordinates together with a line

        //filling left inner ear pink (triangle)
        drawShape(106,199,110,241,80,236); //calls the function drawShape (at top). Matches the coordinate values with the corresponding letters
        
        //right inner ear pink
        ctx.beginPath(); //begins a new line
        ctx.arc(306, 218, 22, 1.3 * Math.PI, 0.3 * Math.PI); //draws a circle, or part of one
        ctx.stroke(); //tells the browser to show the line. It calls "ctx.strokeStyle" for the colour above^
        ctx.fill(); //tells the browser to fill the shape in. It calls "ctx.fillStyle" for the colour above^
         ctx.closePath(); //joins the start and end coordinates together with a line
        
        ctx.beginPath(); //begins a new line
        ctx.arc(297, 192, 49, 0.35 * Math.PI, 0.55 * Math.PI); //draws a circle, or part of one
        ctx.stroke(); //tells the browser to show the line. It calls "ctx.strokeStyle" for the colour above^
        ctx.fill(); //tells the browser to fill the shape in. It calls "ctx.fillStyle" for the colour above^
        ctx.closePath(); //joins the start and end coordinates together with a line
        
        //filling right inner ear pink (triangle)
        drawShape(294,199,290,241,320,236);  //calls the function drawShape (at top). Matches the coordinate values with the corresponding letters
        
        //END OF EARS
        
        
        //START OF HEAD

        ctx.fillStyle = "#cb925f"; //tells the "ctx.fill();" function(s) below what colour to fill the shape
        ctx.strokeStyle = "black"; //tells the "ctx.stroke();" function(s) below what colour to shade the line
        
        //top of head
        ctx.beginPath(); //begins a new line
        ctx.arc(200, 200, 92, 1.1 * Math.PI, 1.9 * Math.PI); //draws a circle, or part of one
        ctx.stroke(); //tells the browser to show the line. It calls "ctx.strokeStyle" for the colour above^
        ctx.fill(); //tells the browser to fill the shape in. It calls "ctx.fillStyle" for the colour above^
        ctx.closePath(); //joins the start and end coordinates together with a line
        
        //hair strands
        ctx.beginPath(); //begins a new line
        ctx.arc(232, 114, 28, 1 * Math.PI, 1.3 * Math.PI); //draws a circle, or part of one
        ctx.stroke(); //tells the browser to show the line. It calls "ctx.strokeStyle" for the colour above^
        ctx.closePath(); //joins the start and end coordinates together with a line
        
        ctx.beginPath(); //begins a new line
        ctx.arc(234, 115, 26, 1 * Math.PI, 1.2 * Math.PI); //draws a circle, or part of one
        ctx.stroke(); //tells the browser to show the line. It calls "ctx.strokeStyle" for the colour above^
        ctx.closePath(); //joins the start and end coordinates together with a line
        
        ctx.beginPath(); //begins a new line
        ctx.arc(185, 116, 22, 1.7 * Math.PI, 0 * Math.PI); //draws a circle, or part of one
        ctx.stroke(); //tells the browser to show the line. It calls "ctx.strokeStyle" for the colour above^
        ctx.closePath(); //joins the start and end coordinates together with a line
        
        ctx.beginPath(); //begins a new line
        ctx.arc(182, 116, 22, 1.8 * Math.PI, 0 * Math.PI); //draws a circle, or part of one
        ctx.stroke(); //tells the browser to show the line. It calls "ctx.strokeStyle" for the colour above^
        ctx.closePath(); //joins the start and end coordinates together with a line
        
        //left of head
        ctx.beginPath(); //begins a new line
        ctx.arc(250, 206, 142, 0.92 * Math.PI, 1.08 * Math.PI); //draws a circle, or part of one
        ctx.stroke(); //tells the browser to show the line. It calls "ctx.strokeStyle" for the colour above^
        ctx.fill(); //tells the browser to fill the shape in. It calls "ctx.fillStyle" for the colour above^
        ctx.closePath(); //joins the start and end coordinates together with a line
        
        //right of head
        ctx.beginPath(); //begins a new line
        ctx.arc(150, 206, 142, 1.92 * Math.PI, 0.08 * Math.PI); //draws a circle, or part of one
        ctx.stroke(); //tells the browser to show the line. It calls "ctx.strokeStyle" for the colour above^
        ctx.fill(); //tells the browser to fill the shape in. It calls "ctx.fillStyle" for the colour above^
        ctx.closePath(); //joins the start and end coordinates together with a line
        
        //filling head (rectangle)
        drawRect(113, 172, 175, 70, "#cb925f", "#cb925f"); //calls the function drawRect (at top) with the values for x, y, width, height, stroke colour and fill colour.
        
        //END OF HEAD
        
        
        //START OF SHOULDERS
        
        ctx.fillStyle = "#cb925f"; //tells the "ctx.fill();" function(s) below what colour to fill the shape
        ctx.strokeStyle = "black"; //tells the "ctx.stroke();" function(s) below what colour to shade the line
        
        //shoulders
        ctx.beginPath(); //begins a new line
        ctx.arc(200, 510, 179, 1.3 * Math.PI, 1.7 * Math.PI); //draws a circle, or part of one
        ctx.stroke(); //tells the browser to show the line. It calls "ctx.strokeStyle" for the colour above^
        ctx.fill(); //tells the browser to fill the shape in. It calls "ctx.fillStyle" for the colour above^
        ctx.closePath(); //joins the start and end coordinates together with a line
        
        ctx.beginPath(); //begins a new line
        ctx.moveTo(96, 365); //the starting coordinate
        ctx.lineTo(304, 365); //joins a line to this coordinate from the previous coordinate
        ctx.stroke(); //tells the browser to fill the shape in. It calls "ctx.fillStyle" for the colour above^
        ctx.closePath(); //joins the start and end coordinates together with a line
        
        //END OF SHOULDERS
        
        
        //START OF FACE
        
        ctx.fillStyle = "#fcf7bd"; //tells the "ctx.fill();" function(s) below what colour to fill the shape
        ctx.strokeStyle = "black"; //tells the "ctx.stroke();" function(s) below what colour to shade the line
        
        //top left of face 1
        ctx.beginPath(); //begins a new line
        ctx.arc(194, 207, 65, 0.9 * Math.PI, 1.2 * Math.PI); //draws a circle, or part of one
        ctx.stroke(); //tells the browser to show the line. It calls "ctx.strokeStyle" for the colour above^
        ctx.fill(); //tells the browser to fill the shape in. It calls "ctx.fillStyle" for the colour above^
        
        //topleft of face 2
        ctx.beginPath(); //begins a new line
        ctx.arc(171, 190, 36, 1.2 * Math.PI, 1.8 * Math.PI); //draws a circle, or part of one
        ctx.stroke(); //tells the browser to show the line. It calls "ctx.strokeStyle" for the colour above^ 
        ctx.fill(); //tells the browser to fill the shape in. It calls "ctx.fillStyle" for the colour above^
        
        //top right Of face
        ctx.beginPath(); //begins a new line
        ctx.arc(206, 207, 65, 1.8 * Math.PI, 0.1 * Math.PI); //draws a circle, or part of one
        ctx.stroke(); //tells the browser to show the line. It calls "ctx.strokeStyle" for the colour above^ 
        ctx.fill(); //tells the browser to fill the shape in. It calls "ctx.fillStyle" for the colour above^
        
        //top right of face 2
        ctx.beginPath(); //begins a new line
        ctx.arc(229, 190, 36, 1.2 * Math.PI, 1.8 * Math.PI); //draws a circle, or part of one
        ctx.stroke(); //tells the browser to show the line. It calls "ctx.strokeStyle" for the colour above^ 
        ctx.fill(); //tells the browser to fill the shape in. It calls "ctx.fillStyle" for the colour above^
        
        //left cheek
        ctx.beginPath(); //begins a new line
        ctx.arc(160, 280, 60, 1.1 * Math.PI, 1.35 * Math.PI); //draws a circle, or part of one
        ctx.stroke(); //tells the browser to show the line. It calls "ctx.strokeStyle" for the colour above^
        ctx.fill(); //tells the browser to fill the shape in. It calls "ctx.fillStyle" for the colour above^
        
        //left cheek 2
        ctx.beginPath(); //begins a new line
        ctx.arc(143, 272, 41, 0.9 * Math.PI, 1.1 * Math.PI); //draws a circle, or part of one
        ctx.stroke(); //tells the browser to show the line. It calls "ctx.strokeStyle" for the colour above^
        ctx.fill(); //tells the browser to fill the shape in. It calls "ctx.fillStyle" for the colour above^
        
        //right cheek
        ctx.beginPath(); //begins a new line
        ctx.arc(240, 280, 60, 1.65 * Math.PI, 1.9 * Math.PI); //draws a circle, or part of one
        ctx.stroke(); //tells the browser to show the line. It calls "ctx.strokeStyle" for the colour above^
        ctx.fill(); //tells the browser to fill the shape in. It calls "ctx.fillStyle" for the colour above^
        
        //right cheek 2
        ctx.beginPath(); //begins a new line
        ctx.arc(257, 272, 41, 1.9 * Math.PI, 0.1 * Math.PI); //draws a circle, or part of one
        ctx.stroke(); //tells the browser to show the line. It calls "ctx.strokeStyle" for the colour above^
        ctx.fill(); //tells the browser to fill the shape in. It calls "ctx.fillStyle" for the colour above^
        
        //filling face 2 (rectangle)
        drawRect(103, 260, 194, 22, "black", "#fcf7bd"); //calls the function drawRect (at top) with the values for x, y, width, height, stroke colour and fill colour
        
        //filling face 3 (trapezium)
        drawShape(141,168,259,168,276,270,124,270); //calls the function drawShape (at top). Matches the coordinate values with the corresponding letters 
        
        //filling face 4 (triangle left)
        drawShape(131,227,104,260,130,260); //calls the function drawShape (at top). Matches the coordinate values with the corresponding letters
        
        //filling face 5 (triangle right)
        drawShape(269,227,296,260,270,260); //calls the function drawShape (at top). Matches the coordinate values with the corresponding letters
    
        //chin
        ctx.beginPath(); //begins a new line
        ctx.arc(200, 250, 102, 0.1 * Math.PI, 0.9 * Math.PI); //draws a circle, or part of one
        ctx.stroke(); //tells the browser to show the line. It calls "ctx.strokeStyle" for the colour above^
        ctx.fill(); //tells the browser to fill the shape in. It calls "ctx.fillStyle" for the colour above^
        
        //mouth
        ctx.beginPath(); //begins a new line
        ctx.arc(200, 225, 90, 0.3 * Math.PI, 0.7 * Math.PI); //draws a circle, or part of one
        ctx.stroke(); //tells the browser to show the line. It calls "ctx.strokeStyle" for the colour above^
        
        //left dimple
        ctx.beginPath(); //begins a new line
        ctx.arc(165, 304, 20, 1 * Math.PI, 1.2 * Math.PI); //draws a circle, or part of one
        ctx.stroke(); //tells the browser to show the line. It calls "ctx.strokeStyle" for the colour above^
        
        //right dimple
        ctx.beginPath(); //begins a new line
        ctx.arc(235, 304, 20, 1.8 * Math.PI, 0 * Math.PI); //draws a circle, or part of one
        ctx.stroke(); //tells the browser to show the line. It calls "ctx.strokeStyle" for the colour above^
    
        ctx.fillStyle = "white"; //tells the "ctx.fill();" function(s) below what colour to fill the shape
        ctx.strokeStyle = "black"; //tells the "ctx.stroke();" function(s) below what colour to shade the line
        
        //left outer eye white
        ctx.beginPath(); //begins a new line
        ctx.arc(171, 190, 22, 1 * Math.PI, 0 * Math.PI); //draws a circle, or part of one
        ctx.stroke(); //tells the browser to show the line. It calls "ctx.strokeStyle" for the colour above^
        ctx.fill(); //tells the browser to fill the shape in. It calls "ctx.fillStyle" for the colour above^
        
        ctx.beginPath(); //begins a new line
        ctx.arc(171, 198, 37, 0.3 * Math.PI, 0.7 * Math.PI); //draws a circle, or part of one
        ctx.stroke(); //tells the browser to show the line. It calls "ctx.strokeStyle" for the colour above^
        ctx.fill(); //tells the browser to fill the shape in. It calls "ctx.fillStyle" for the colour above^
        
        ctx.beginPath(); //begins a new line
        ctx.moveTo(148.5, 190); //the starting coordinate
        ctx.lineTo(148.5, 228); //joins a line to this coordinate from the previous coordinate
        ctx.stroke(); //tells the browser to show the line. It calls "ctx.strokeStyle" for the colour above^
       
        ctx.beginPath(); //begins a new line
        ctx.moveTo(193.5, 190); //the starting coordinate
        ctx.lineTo(193.5, 228); //joins a line to this coordinate from the previous coordinate
        ctx.stroke(); //tells the browser to show the line. It calls "ctx.strokeStyle" for the colour above^
        
        //filling left outer eye white (rectangle)
        drawRect(150, 190, 42, 38, "white", "white"); //calls the function drawRect (at top) with the values for x, y, width, height, stroke colour and fill colour
        
        ctx.fillStyle = "white"; //tells the "ctx.fill();" function(s) below what colour to fill the shape
        ctx.strokeStyle = "black"; //tells the "ctx.stroke();" function(s) below what colour to shade the line
        
        //right outer eye white
        ctx.beginPath(); //begins a new line
        ctx.arc(229, 190, 22, 1 * Math.PI, 0 * Math.PI); //draws a circle, or part of one
        ctx.stroke(); //tells the browser to show the line. It calls "ctx.strokeStyle" for the colour above^
        ctx.fill(); //tells the browser to fill the shape in. It calls "ctx.fillStyle" for the colour above^
    
        ctx.beginPath(); //begins a new line
        ctx.arc(229, 198, 37, 0.3 * Math.PI, 0.7 * Math.PI); //draws a circle, or part of one
        ctx.stroke(); //tells the browser to show the line. It calls "ctx.strokeStyle" for the colour above^
        ctx.fill();//tells the browser to fill the shape in. It calls "ctx.fillStyle" for the colour above^ 
        
        ctx.beginPath(); //begins a new line
        ctx.moveTo(206.5, 190); //the starting coordinate
        ctx.lineTo(206.5, 228); //joins a line to this coordinate from the previous coordinate
        ctx.stroke(); //tells the browser to show the line. It calls "ctx.strokeStyle" for the colour above^
       
        ctx.beginPath(); //begins a new line
        ctx.moveTo(251.5, 190); //the starting coordinate
        ctx.lineTo(251.5, 228); //joins a line to this coordinate from the previous coordinate
        ctx.stroke(); //tells the browser to show the line. It calls "ctx.strokeStyle" for the colour above^
        
        //filling right outer eye white (rectangle)
        drawRect(208, 190, 42, 38, "white", "white"); //calls the function drawRect (at top) with the values for x, y, width, height, stroke colour and fill colour
        
        ctx.fillStyle = "black"; //tells the "ctx.fill();" function(s) below what colour to fill the shape
        ctx.strokeStyle = "black"; //tells the "ctx.stroke();" function(s) below what colour to shade the line
        
        //left eye black
        ctx.beginPath(); //begins a new line
        ctx.arc(197, 190, 37, 0.8 * Math.PI, 1.2 * Math.PI); //draws a circle, or part of one
        ctx.stroke(); //tells the browser to show the line. It calls "ctx.strokeStyle" for the colour above^
        ctx.fill(); //tells the browser to fill the shape in. It calls "ctx.fillStyle" for the colour above^
        
        ctx.beginPath(); //begins a new line
        ctx.arc(180, 201, 17, 0.2 * Math.PI, 0.8 * Math.PI); //draws a circle, or part of one
        ctx.stroke(); //tells the browser to show the line. It calls "ctx.strokeStyle" for the colour above^
        ctx.fill(); //tells the browser to fill the shape in. It calls "ctx.fillStyle" for the colour above^
        
        ctx.beginPath(); //begins a new line
        ctx.arc(171, 190, 22, 1.45 * Math.PI, 0 * Math.PI); //draws a circle, or part of one
        ctx.stroke(); //tells the browser to show the line. It calls "ctx.strokeStyle" for the colour above^
        ctx.fill(); //tells the browser to fill the shape in. It calls "ctx.fillStyle" for the colour above^
        
        //filling left eye black (rectangle)
        drawRect(167, 190, 26, 21, "black", "black"); //calls the function drawRect (at top) with the values for x, y, width, height, stroke colour and fill colour
        
        //filling left eye black (triangle)
        drawShape(167,167,167,190,194,190); //calls the function drawShape (at top). Matches the coordinate values with the corresponding letters
        
        ctx.beginPath(); //begins a new line
        ctx.moveTo(167,167); //the starting coordinate
        ctx.lineTo(167,190); //joins a line to this coordinate from the previous coordinate
        ctx.lineTo(194,190); //joins a line to this coordinate from the previous coordinate
        ctx.closePath(); //joins the start and end coordinates together with a line
        ctx.fill(); //tells the browser to fill the shape in. It calls "ctx.fillStyle" for the colour above^
        
        //right eye black
        ctx.beginPath(); //begins a new line
        ctx.arc(255, 190, 37, 0.8 * Math.PI, 1.2 * Math.PI); //draws a circle, or part of one
        ctx.stroke(); //tells the browser to show the line. It calls "ctx.strokeStyle" for the colour above^
        ctx.fill(); //tells the browser to fill the shape in. It calls "ctx.fillStyle" for the colour above^
        
        ctx.beginPath(); //begins a new line
        ctx.arc(238, 201, 17, 0.2 * Math.PI, 0.8 * Math.PI); //draws a circle, or part of one
        ctx.stroke(); //tells the browser to show the line. It calls "ctx.strokeStyle" for the colour above^
        ctx.fill(); //tells the browser to fill the shape in. It calls "ctx.fillStyle" for the colour above^
        
        ctx.beginPath(); //begins a new line
        ctx.arc(229, 190, 22, 1.45 * Math.PI, 0 * Math.PI); //draws a circle, or part of one
        ctx.stroke(); //tells the browser to show the line. It calls "ctx.strokeStyle" for the colour above^
        ctx.fill(); //tells the browser to fill the shape in. It calls "ctx.fillStyle" for the colour above^
        
        //filling right eye black (rectangle)
        drawRect(225, 190, 26, 21, "black", "black"); //calls the function drawRect (at top) with the values for x, y, width, height, stroke colour and fill colour
        
        //filling right eye black (triangle)
        drawShape(225,167,225,190,252,190); //calls the function drawShape (at top). Matches the coordinate values with the corresponding letters
        
        ctx.fillStyle = "white"; //tells the "ctx.fill();" function(s) below what colour to fill the shape
        ctx.strokeStyle = "black"; //tells the "ctx.stroke();" function(s) below what colour to shade the line
        
        //left eye inner white
        ctx.beginPath(); //begins a new line
        ctx.arc(179, 183, 12, 0 * Math.PI, 2 * Math.PI); //draws a circle, or part of one
        ctx.stroke(); //tells the browser to show the line. It calls "ctx.strokeStyle" for the colour above^
        ctx.fill(); //tells the browser to fill the shape in. It calls "ctx.fillStyle" for the colour above^
        
        //right eye inner white
        ctx.beginPath(); //begins a new line
        ctx.arc(237, 183, 12, 0 * Math.PI, 2 * Math.PI); //draws a circle, or part of one
        ctx.stroke(); //tells the browser to show the line. It calls "ctx.strokeStyle" for the colour above^
        ctx.fill(); //tells the browser to fill the shape in. It calls "ctx.fillStyle" for the colour above^
        
        ctx.fillStyle = "#fcf7bd"; //tells the "ctx.fill();" function(s) below what colour to fill the shape
        ctx.strokeStyle = "black"; //tells the "ctx.stroke();" function(s) below what colour to shade the line
        
        //nose
        ctx.beginPath(); //begins a new line
        ctx.arc(200, 245, 26, 1.1 * Math.PI, 1.9 * Math.PI); //draws a circle, or part of one
        ctx.stroke(); //tells the browser to show the line. It calls "ctx.strokeStyle" for the colour above^
        ctx.fill(); //tells the browser to fill the shape in. It calls "ctx.fillStyle" for the colour above^
        
        ctx.fillStyle = "black"; //tells the "ctx.fill();" function(s) below what colour to fill the shape
        ctx.strokeStyle = "black"; //tells the "ctx.stroke();" function(s) below what colour to shade the line
        
        //left nostril
        ctx.beginPath(); //begins a new line
        ctx.arc(190, 235, 2, 0, 2 * Math.PI); //draws a circle, or part of one
        ctx.stroke(); //tells the browser to show the line. It calls "ctx.strokeStyle" for the colour above^
        ctx.fill(); //tells the browser to fill the shape in. It calls "ctx.fillStyle" for the colour above^
        
        //right nostril
        ctx.beginPath(); //begins a new line
        ctx.arc(210, 235, 2, 0, 2 * Math.PI); //draws a circle, or part of one
        ctx.stroke(); //tells the browser to show the line. It calls "ctx.strokeStyle" for the colour above^
        ctx.fill(); //tells the browser to fill the shape in. It calls "ctx.fillStyle" for the colour above^
        
        //END OF FACE
        
        
        //ARC REFERENCE
        //bracket values are: "(x, y, radius, starting angle, ending angle) 
        //x and y values pinpoint the centre of the circle 
        //radius is for sizing. The larger the radius value the larger the arc
        //start and end angles are in radians, not degrees. These values always lie between 0 and 2. The 0 and 2 values lie at the furthest right point of the circle. The 0.5 is at the bottom, one at the left and 1.5 at the top, with all other values in between. Therefore, "..0 * Math.PI, 2 * Math.PI) would make a full circle, and "..0 * Math.PI, 1 * Math.PI) would make a semi circle
        //The direction of the arc by default is clockwise. To change the direction type ", FALSE" before the closing bracket. 
        //SEE HERE: https://www.w3schools.com/tags/canvas_arc.asp