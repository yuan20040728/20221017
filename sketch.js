function setup() { 
  createCanvas(windowWidth, windowHeight); 
}
 function draw() {
   rectMode(CENTER) 
   background(0)
    noFill() 
    stroke(255)
    var w= mouseX/10
    for(var j=0;j<height/50;j++) 
    { 
      for(var i=0;i<width/50;i++)
       {
       ellipse(25+50*i,25+50*j,mouseX/10) 
       rect(25+50*i,25+50*j,mouseY/9) 
       ellipse(50+50*i,50+50*j,mouseY/6)
 }
 }
 }
// for(var i=0;i<width/50;i++){
// for(var r=0;r<Height/50;r++)
// {
//   eiiipse(25+50*i,25+50*r,50)
//   rect(25+50*i,25+50*r,50)
//   ellipse(50+50*i,50,25)
// }
// }
// for(var i=0;i<width/50;i++){
// for(var r=0;r<Height/50;r++)
// {
//   eiiipse(25+50*i,25+50*r,50)
//   rect(25+50*i,25+50*r,50)
//   ellipse(50+50*i,50,25)
// }
// }
// for(var i=0;i<width/50;i++){
//   for(var r=0;r<Height/50;r++)
// {
//   eiiipse(25+50*i,25+50*r,50)
//   rect(25+50*i,25+50*r,50)
//   ellipse(50+50*i,50,25)
// }
// }
