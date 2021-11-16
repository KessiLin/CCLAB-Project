console.log("script works!");
let Posslider = document.getElementById('Posslider');
// Id is always upper case + lower case
let checkboxRect,checkboxBug,checkboxCircle;
let dancer;
let textInput;


function setup(){
// above : we can not just use p5, but also include the p5 library.
//define a parent for your Canvas
let canvas = createCanvas(windowWidth,600);
canvas.parent("canvasContainer");

checkboxRect = document.getElementById('checkbox-rect');
checkboxCircle = document.getElementById('checkbox-circle');
checkboxBug = document.getElementById('checkbox-bug');
textInput = document.getElementById("text-input");

dancer = new YodaDancer(width*0.5, height*0.5);


}

function draw(){
  background(0);
  colorMode(HSB);

  push();
  fill(50);
textSize(20);
let x1 = windowWidth - random(width)* 0.1;
let x2 = random(width)* 0.1;
let y1 = random(height);
let txt = textInput.value;
text(txt, x1, y1);
text(txt, x2, y1);
  pop();


push();
if (checkboxRect.checked) {
  dancer.update();
  dancer.display();
}
pop();

  let sliderValue = Posslider.value;

  let x = map(sliderValue, 0, 100, 0, width);
  let CH = map(sliderValue, 0, 360, 0, width);
  let CS = map(sliderValue, 0, 360, 0, width);
  let CB = map(sliderValue, 0, 360, 0, width);

  if (checkboxCircle.checked) {
    push()
    scale(1.5);
    noStroke();
    fill(CH, CS, CB)
    ellipse(x, height/2 + 80 , 300, 100);
    fill(CH, CS, 0)
    ellipse(x, height/2 + 80, 200, 80);
    fill(CH, CS, 80)
    ellipse(x, height/2 + 80, 100, 60);
    pop();
  }

  if (checkboxBug.checked) {
    //
  }


}

// reference of the random moving images : https://www.plus2net.com/javascript_tutorial/image-move1.php
function reset1(){
clearTimeout(my_time);
document.getElementById('i1');
document.getElementById('i1');
document.getElementById("msg").innerHTML="";
}

function disp(){
var step=1;
var y=document.getElementById('i1').offsetTop;
var x=document.getElementById('i1').offsetLeft;
document.getElementById("msg")
// .innerHTML="X: " + x  + " Y : " + y
if(y < windowHeight/2){y= y +step;
document.getElementById('i1').style.top= y + "px"; // vertical movment
}else{
if(x < windowWidth - 300){x= x +step;
document.getElementById('i1').style.left= x + "px";//horizontal move
}

}
//////////////////////
}

function timer(){
disp();
my_time=setTimeout('timer()',2000);// step by step moving
}


class YodaDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.basicradius = 40;
    this.speed = 2;
    this.colors = ["lightblue", "SpringGreen", "dodgerBlue", "black"];
    this.allColors = [];
    for (let i = 0; i < 20; i++) {
      let j = floor(random(0, this.colors.length));
      this.allColors.push(this.colors[j]);
    }
    // mouse interaction
    this.r = 80;

  }
  update() {
    this.x = this.x + this.speed;
    this.y = this.y - this.speed;
    if (this.y > height -30 || this.y < 30) {
      this.speed *= -1;
      // bounce at around 30 from edges
    }
  }

  display() {
    translate(this.x, this.y);
    rectMode(CENTER);
    scale(3);

    this.parta();
    this.partb();
    this.partc();
    this.partd();
    this.parte(10, 25);
    this.parte(-10, 25);
  }

  parta() {
    push();
    colorMode(RGB);
    stroke(255);
    strokeWeight(3);
    fill(300);
    ellipse(0, -20, this.basicradius);
    pop();
  }
  partb() {
    // eyepart1: to vanish,but not blink
    push();
    colorMode(RGB);
    let r2 = map(this.x, 0, width, 0, 255);
    let g2 = map(this.x, 0, width, 0, 255);
    let b2 = map(this.x, 0, width, 0, 255);
    fill(r2, g2, b2);
    noStroke();
    // mouseX/22 is a range for the eye extension on x-axis
    ellipse(-20, -25, mouseX/22, this.r / 10);
    ellipse(20, -25, mouseX/22, this.r / 10);
    pop();

    //eyepart2: to blink
    push();
    fill(0, random(255), random(255));
    noStroke();
    ellipse(-20, -25, 10, 7);
    ellipse(20, -25, 10, 7);
    pop();
  }
  partc() {
    let angleC;
    let freq = 0.5;
    let amp = random(0.1, 0.5);
    angleC = sin(frameCount * freq) * amp;

    push();
    fill("magenta");
    noStroke();
    rotate(PI + angleC);
    scale(0.6);
    ellipse(-25, -10, 50, 40);
    ellipse(25, -10, 50, 40);

    push();
    stroke("lime");
    noFill();
    strokeWeight(3);
    ellipse(-25, -10, 35, 30);
    ellipse(25, -10, 35, 30);
    pop();
    pop();
  }
  partd() {

    let numRect = 10;
    translate(0, 0);
    push();
    noStroke();
    for (let i = 0; i < numRect; i++) {
      let rectLoop = (i * width) / 150;
      fill(this.allColors[i]);
      rect(0, rectLoop, 20, 40);
      scale(0.9);
    }
    pop();
  }
  parte(tranX, tranY) {
    push();
    fill(0);
    stroke(255);
    translate(tranX, tranY);
    rotate(sin(frameCount * 0.1));
    beginShape();
    vertex(-10, 10);
    vertex(0, 35);
    vertex(10, 10);
    vertex(35, 0);
    vertex(10, -8);
    vertex(0, -35);
    vertex(-10, -8);
    vertex(-35, 0);
    scale(0.3);
    endShape();
    pop();


  }
}
