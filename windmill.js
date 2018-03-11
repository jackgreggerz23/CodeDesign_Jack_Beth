            var c = document.getElementById("windmill"); //calls the id above^
            var ctx = c.getContext("2d"); //2d identifies the type of drawing that will be made. Other types are possible

            ctx.lineWidth = 3; //the width all lines within the canvas will be

            ctx.fillStyle = "grey"; //tells the "ctx.fill();" function(s) below what colour to fill the shape  
            ctx.beginPath(); //begins a new path
            ctx.rect(0, 600, 600, 100) //draws the rectangle (x, y, width, height)
            ctx.fill(); //tells the browser to fill the shape in. It calls "ctx.fillStyle" for the colour above^
            ctx.closePath(); //closes the path
        
        //windmill rectangles
            var angle = 10;
            window.setInterval(function (){  // 'set Interval' continuously  calls the function
            angle = (angle + 0.5) % 360; //the value inside the bracket after 'angle +' affects the speed of rotation, the value after '%' can be any value between 0 and 360 as these are the degrees of a circle. Setting it to 0 or 360 means the windmill will fully rotate
            ctx.clearRect(0, 0, 600, 595); //setting these values to the dimensions of the canvas means the animation doesn't remain on the canvas, it clears evey millisecond. I have stopped the height value short at 595 so the remaining 105 pixels will be covered with snow 
            ctx.save(); //saves the current state of the canvas
            
            ctx.fillStyle = "white"; //tells the "ctx.fill();" function(s) below what colour to fill the shape    
            ctx.strokeStyle = "white"; //tells the "ctx.stroke();" function(s) below what colour to shade the line            
                
        //snow        
            ctx.save(); //saves the current state of the canvas
            ctx.beginPath(); //begins a new line
            ctx.setLineDash([5, (Math.random() * 200)]); //'setLineDash' breaks the line up at speciied x and y intervals. '5' allows the line to break up into snow shaped blocks and randomising the 'y' value means it can land anywhere within the bottom 105 pixels
            ctx.moveTo (((Math.random() * 600) + 1), 0); //the line can be drawn from and to any random point within the canvas. The y value of 0 means the line will begin at the top of the canvas
            ctx.lineTo (((Math.random() * 600) + 1), 700); //the line can be drawn from and to any random point within the canvas. The y value of 700 means the line will end at the bottom of the canvas
            ctx.stroke(); //tells the browser to show the line. It calls "ctx.strokeStyle" for the colour above^
            ctx.closePath(); //closes the path
            ctx.restore(); //restores the state of the context
                
                
            ctx.fillStyle = "#cb925f"; //tells the "ctx.fill();" function(s) below what colour to fill the shape
            ctx.strokeStyle = "black"; //tells the "ctx.stroke();" function(s) below what colour to shade the line    
                

            //building left
            ctx.beginPath(); //begins a new line
            ctx.arc(1242, 655, 1100, 1 * Math.PI, 1.1 * Math.PI); //draws a circle, or part of one
            ctx.fill(); //tells the browser to fill the shape in. It calls "ctx.fillStyle" for the colour above^
            ctx.stroke(); //tells the browser to show the line. It calls "ctx.strokeStyle" for the colour above^
            ctx.closePath(); //joins the start and end coordinates together with a line
            
            //building right
            ctx.beginPath(); //begins a new line
            ctx.arc(-642, 655, 1100, 1.9 * Math.PI, 2 * Math.PI); //draws a circle, or part of one
            ctx.fill(); //tells the browser to fill the shape in. It calls "ctx.fillStyle" for the colour above^
            ctx.stroke(); //tells the browser to show the line. It calls "ctx.strokeStyle" for the colour above^
            ctx.closePath(); //joins the start and end coordinates together with a line
            
            //building fill
            ctx.beginPath(); //begins a new line
            ctx.moveTo(195, 316); //the starting coordinate
            ctx.lineTo(405, 316); //joins a line to this coordinate from the previous coordinate
            ctx.lineTo(458, 655); //joins a line to this coordinate from the previous coordinate
            ctx.lineTo(142, 655); //joins a line to this coordinate from the previous coordinate
            ctx.closePath(); //joins the start and end coordinates together with a line
            ctx.fill(); //tells the browser to fill the shape in. It calls "ctx.fillStyle" for the colour above^

            //base
            ctx.beginPath(); //begins a new line
            ctx.moveTo(141, 655); //the starting coordinate
            ctx.lineTo(459, 655); //joins a line to this coordinate from the previous coordinate
            ctx.stroke(); //tells the browser to show the line. It calls "ctx.strokeStyle" for the colour above^

            ctx.fillStyle = "#AF2C2C"; //tells the "ctx.fill();" function(s) below what colour to fill the shape 
            ctx.strokeStyle = "black"; //tells the "ctx.stroke();" function(s) below what colour to shade the line 

            //building top
            ctx.beginPath(); //begins a new line
            ctx.arc(300, 380, 125, 1.1 * Math.PI, 1.9 * Math.PI);  //draws a circle, or part of one
            ctx.fill(); //tells the browser to fill the shape in. It calls "ctx.fillStyle" for the colour above^
            ctx.closePath(); //joins the start and end coordinates together with a line
            ctx.stroke(); //tells the browser to show the line. It calls "ctx.strokeStyle" for the colour above^
            
            //door
            ctx.beginPath(); //begins a new line
            ctx.arc(300, 600, 35, 1 * Math.PI, 2 * Math.PI); //draws a circle, or part of one
            ctx.fill(); //tells the browser to fill the shape in. It calls "ctx.fillStyle" for the colour above^
            ctx.stroke(); //tells the browser to show the line. It calls "ctx.strokeStyle" for the colour above^
            ctx.closePath(); //joins the start and end coordinates together with a line

            ctx.beginPath(); //begins a new line
            ctx.moveTo(335, 600); //the starting coordinate
            ctx.lineTo(335, 655); //joins a line to this coordinate from the previous coordinate
            ctx.lineTo(265, 655); //joins a line to this coordinate from the previous coordinate
            ctx.lineTo(265, 600); //joins a line to this coordinate from the previous coordinate
            ctx.fill(); //tells the browser to fill the shape in. It calls "ctx.fillStyle" for the colour above^
                
            ctx.fillStyle = "#2C2C2C"; //tells the "ctx.fill();" function(s) below what colour to fill the shape
            ctx.strokeStyle = "black"; //tells the "ctx.stroke();" function(s) below what colour to shade the line

            //windows
            var pos = [360, 430, 500]; //an array of the y coordinates
            var a = pos.length; //length of array variable

            for (q = 0; q < a; q++) {
                var z = pos[q]; //updates the array every time we loop to give them their correct positions
                ctx.fillRect(275, z, 50, 50); //coordinates of the rectangle are numbers while the z (or y) value changes
                ctx.strokeRect(275, z, 50, 50); //coordinates of the rectangle are numbers while the z (or y) value changes
            }
                
            ctx.fillStyle = "white"; //tells the "ctx.fill();" function(s) below what colour to fill the shape
            ctx.strokeStyle = "black"; //tells the "ctx.stroke();" function(s) below what colour to shade the line

            //rotating rectangles
            ctx.beginPath(); //begins a new path
            ctx.translate(300, 300); //centre point of rotation (initial position)
            ctx.rotate(angle * Math.PI / 360); //speed of rotation
            ctx.translate(0, 0); //affects the origin of rotation
            ctx.closePath(); //closes the path
                
            ctx.fillRect(80, -50, 200, 50); //fill and position of right rectangle from origin 300, 300
            ctx.strokeRect(80, -50, 200, 50); //stroke and position of right rectangle from origin 300, 300
            ctx.fillRect(0, 80, 50, 200); //fill and position of bottom rectangle from origin 300, 300
            ctx.strokeRect(0, 80, 50, 200); //stroke and position of bottom rectangle from origin 300, 300
            ctx.fillRect(-80, 50, -200, -50); //fill and position of left rectangle from origin 300, 300
            ctx.strokeRect(-80, 50, -200, -50); //stroke and position of left rectangle from origin 300, 300
            ctx.fillRect(0, -80, -50, -200); //fill and position of top rectangle from origin 300, 300
            ctx.strokeRect(0, -80, -50, -200); //stroke and position of top rectangle from origin 300, 300
            //The centre point is "ctx.translate(300, 300);"
            //'25' values are the radius of imaginary circle at the centre of the windmill. The centre point of that circle is 25 pixels from the closest point of each rectangle
                
            //rotating polls
            ctx.moveTo(12, 0); //position the starting coordinate from the origin 300, 300
            ctx.lineTo(80, 0); //joins a line to this coordinate from the previous coordinate

            ctx.moveTo(0, 12); //position the starting coordinate from the origin 300, 300
            ctx.lineTo(0, 80); //joins a line to this coordinate from the previous coordinate

            ctx.moveTo(-12, 0); //position the starting coordinate from the origin 300, 300
            ctx.lineTo(-80, 0); //joins a line to this coordinate from the previous coordinate

            ctx.moveTo(0, -12); //position the starting coordinate from the origin 300, 300
            ctx.lineTo(0, -80); //joins a line to this coordinate from the previous coordinate

            ctx.stroke(); //tells the browser to show the line. It calls "ctx.strokeStyle" for the colour above^
                
            ctx.fillStyle = "black"; //tells the "ctx.fill();" function(s) below what colour to fill the shape
            ctx.strokeStyle = "black"; //tells the "ctx.stroke();" function(s) below what colour to shade the line
                
            //Inner circle
            ctx.beginPath(); //begins a new line
            ctx.arc(0, 0, 20, 0 * Math.PI, 2 * Math.PI); //draws a circle, or part of one
            ctx.stroke(); //tells the browser to show the line. It calls "ctx.strokeStyle" for the colour above^
            ctx.fill(); //tells the browser to fill the shape in. It calls "ctx.fillStyle" for the colour above^
            ctx.closePath(); //joins the start and end coordinates together with a line
                
            ctx.restore();
            }, 5); //Interval of animation in milliseconds