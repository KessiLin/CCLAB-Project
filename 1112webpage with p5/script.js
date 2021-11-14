console.log("script works!");
let Posslider = document.getElementById('Posslider');
// Id is always upper case + lower case

function setup(){
// above : we can not just use p5, but also include the p5 library.

//define a parent for your Canvas
let canvas = createCanvas(windowWidth,400);
canvas.parent("canvasContainer");
colorMode(HSB);

// background(225);

}

function draw(){
  background(225);

  // ellipse(width/2,height/2,200)

  let sliderValue = Posslider.value;

  console.log(sliderValue);
  let x = map(sliderValue, 0, 100, 0, width);
  let CH = map(sliderValue, 0, 360, 0, width);
  let CS = map(sliderValue, 0, 360, 0, width);
  let CB = map(sliderValue, 0, 360, 0, width);
  noStroke();
  fill(CH, CS, CB)
  circle(x, height/2, 300, 100);
  fill(CH, CS, 80)
  circle(x, height/2, 100, 100);

}
