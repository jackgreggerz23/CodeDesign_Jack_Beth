    
      	
	var c = document.getElementById("animation");
	var ctx = c.getContext("2d");
 
   

function drawCircle(x){
    //Yellow circle (face)
    ctx.beginPath();//Begins the path.
    ctx.arc(200,200,x,0,2*Math.PI);//Points of the arc, including the x var below.
    ctx.fillStyle="yellow";//This sets the colour of the fill.
    ctx.strokeStyle ="black";//This sets the colour of the stroke.
    ctx.stroke();//Strokes the shape/arc.
    ctx.fill();//Fills the shape/arc.
    ctx.lineWidth = 6;
    
    //Left circle (eye)
    ctx.beginPath();//Begins the path.
    ctx.arc(130,150,x/10,0,2*Math.PI);//Points of the arc, including the x var below.
    ctx.fillStyle = "black";//This sets the colour of the fill.
    ctx.fill();//Fills the shape/arc.
    ctx.closePath();
    
    
    //Right cicrle (eye)
    ctx.beginPath();//Begins the path.
    ctx.arc(270,150,x/10,0,2*Math.PI);//Points of the arc, including the x var below.
    ctx.fillStyle = "black";//This sets the colour of the fill.
    ctx.fill();//Fills the shape/arc.
    ctx.closePath();
    
    //Semi circle (smile)
    ctx.beginPath();//Begins the path.
    ctx.arc(200,250,x/6,2*Math.PI,1*Math.PI);//Points of the arc, including the x var below.
    ctx.fillStyle="black";//This sets the colour of the fill.
    ctx.strokeStyle ="black";//This sets the colour of the stroke.
    ctx.stroke();//Strokes the shape/arc.
    ctx.fill();//Fills the shape/arc.
}
    
    
var x = 0;
    setInterval(function(){ 
    ctx.clearRect(0,0,400,600);
    drawCircle(x%400);
        x++;
    
    
}, -20);//Speed
    
    

    

