let video;
let checkbox1,checkbox2,checkbox3,checkboxRect,checkboxMouse;

function setup() {

  let canvas = createCanvas(1000,650);
  canvas.parent("canvasContainer");

  // webcam capture (at the size of the window)
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();

  checkbox1 = document.getElementById('checkbox-1');
  checkbox2 = document.getElementById('checkbox-2');
  checkbox3 = document.getElementById('checkbox-3');
  checkboxRect = document.getElementById('checkbox-rect');
  checkboxMouse = document.getElementById('checkbox-mouse');
}

function draw() {
  background(0);


  // using map function in p5js and html web-interface to optimize interactivity
  let gridSize;
    video.loadPixels();
    push();
    if (checkbox1.checked) {
      gridSize = 10;
    }
    pop();

    push();
    if (checkbox2.checked) {
      gridSize = 20;
    }
    pop();

    push();
    if (checkbox3.checked) {
      gridSize = 30;
    }
    pop();

    push();
    if (checkboxMouse.checked) {
      gridSize = int(map(mouseX, 0, width, 10, 60));
    }
    //reference video: about doing with the interactivity: https://www.youtube.com/watch?v=VYg-YdGpW1o
    pop();


  for (let y=0; y<video.height; y+=gridSize) {
    for (let x=0; x<video.width; x+=gridSize) {

      let index = (y * video.width + x) * 4;
      let r = video.pixels[index];
      let g = video.pixels[index + 1];
      let b = video.pixels[index + 2];
      let dia = map(gridSize, 0,255, gridSize,gridSize*1.5);
      fill(r,g,b);
      noStroke();

      if (checkboxRect.checked) {
        gridSize = 20;
        circle(x+gridSize,y+gridSize, dia);
      }else {
        rect(x+gridSize,y+gridSize, dia, dia);
      };


    }
  }




}
