canvas=document.getElementById("canva1");
ctx=canvas.getContext("2d");
color1= "blue";
color2= "black"
color3= "red"
color4= "yellow"
color5= "green"
ctx.beginPath();
ctx.strokeStyle=color1;
ctx.lineWidth= 5;
ctx.arc(200,120,40,0,2*Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle=color2;
ctx.lineWidth= 5;
ctx.arc(290,120,40,0,2*Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle=color3;
ctx.lineWidth= 5;
ctx.arc(380,120,40,0,2*Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle=color4;
ctx.lineWidth= 5;
ctx.arc(253,160,40,0,2*Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle=color5;
ctx.lineWidth= 5;
ctx.arc(349,160,40,0,2*Math.PI);
ctx.stroke();
