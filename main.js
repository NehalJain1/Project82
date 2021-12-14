var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var mouseevent = "" ;
var last_position_of_mouse_X;
var last_position_of_mouse_Y;
colour = "red";
lineWidth = 7;
radius = 50;

canvas.addEventListener("mousedown",mymousedown);
function mymousedown(event) {
mouseevent = "mousedown";
console.log( "the mouse event is",mouseevent);

//get the value from html for colour ,lineWidth and radius
colour = document.getElementById("colour").value;
lineWidth = document.getElementById("LineWidth").value;
radius = document.getElementById("Radius").value;
}
//mouseup
canvas.addEventListener("mouseup",mymouseup);
function mymouseup(event) {
mouseevent = "mouseup";
console.log( "the mouse event is",mouseevent);
}
//mouseleave
canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(event) {
mouseevent = "mouseleave";
console.log( "the mouse event is",mouseevent);
}


//mousemove + mousedown
canvas.addEventListener("mousemove",mymousemove);
function mymousemove(event) {
current_position_of_mouse_X = event.clientX - canvas.offsetLeft;
current_position_of_mouse_Y  = event.clientY - canvas.offsetTop;
if (mouseevent == "mousedown")
 {
    ctx.beginPath();//Take the pen and start
    ctx.strokeStyle = colour; //pen colour
    ctx.lineWidth = lineWidth; //Pen width
    
    //to show in console
console.log("current-position_of_X,Y");
console.log("x = "+ current_position_of_mouse_X + "Y = "+ current_position_of_mouse_Y );
ctx.arc(current_position_of_mouse_X ,current_position_of_mouse_Y ,radius, 0, 2 * Math.PI);
ctx.stroke();
}
}