Nosex=0;
NoseY=0;
diiference=0;
rightwristX=0;
leftwristx=0;

function setup(){
    Canvas=createCanvas(550,550);
    video=createCapture(VIDEO);
    video.size(550,550);
    Canvas.position(600,150);

    
    
}
function modelLoaded(){
    console.log("posenet is loaded");
}
function draw(){
    background('green');
    document.getElementById("square_heightwidth").innerHTML="The width and height of the square will be" + difference + "pixels";
    fill('brown');
    stroke('dark green');
    square(NoseY, NoseY, difference);
}
