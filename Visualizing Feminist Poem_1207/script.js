
let stars = []; //star background
let myOwn;
let radio1, radio2, radio3, radio4, radio5;

// button
// let testButton=document.getElementById('testButton');
// let showImage=false;
let state = "";

let button;
let song1;

// let vid;
// let button2;

let poemTexts = [
  "You may write me down in history",
  "With your bitter, twisted lies",
  "You may trod me in the very dirt",
  "But still, like dust, I'll rise.",
  "    ",
  "Just like moons and like suns",
  "With the certainty of tides",
  "Just like hopes springing high",
  "Still I'll rise.",
  "    ",
  "You may shoot me with your words",
  "You may cut me with your eyes",
  "You may kill me with your hatefulness",
  "But still, like air, I’ll rise.",
  "    ",
  "I'm a black ocean, leaping and wide",
  "Welling and swelling I bear in the tide",
  "I rise",
  "    ",
  "Into a daybreak that’s wondrously clear",
  "I rise",
  "    ",
  "Bringing the gifts that my ancestors gave",
  "I am the dream and the hope of the slave",
  "    ",
  "I rise",
];

let yoffset = 200;
// the lyric rain - manifest a feeling of confusion/loneliness/sadness
let lyrics = [
  "one face",
  "looks out from",
  "all his canvases",
  "one selfsame figure",
  "sits",
  "or walks",
  "or leans",
  "we found",
  "her hidden",
  "just behind the screen",
  "That mirror",
  "gave back all her loveliness",
  "in opal",
  "or in ruby dress",
  "a nameless girl",
  "in freshest summer-greens",
  "a saint",
  "an angel",
  "--every canvas means",
  "The same one meaning",
  "neither more or less …",
  "A queen",
  "she",
  "her",
  "her identity",
  "confusion",
  "granting the woman power to ‘live’ through different lives through art?",
  "Or -- objectifying her, offering unattainable ideals concerning how women should be?",
  "Christina Rossetti (1830-94)",
  "an endorsement of the male gaze",
  "n subtle critique on the male gaze",
];
let lyricDrops = [];
let textX;
let textY;

let img3;

// listening to clkick events
function goreClicked(){
  console.log("Gore was clicked");
  // from here:
  // document.body.scrollTo(0,document.body.scrollHeight);
  document.getElementById('canvasContainer').scrollIntoView();
  state = "gore"
}
document.getElementById("radio-1").addEventListener("click", goreClicked)
// document.getElementById("radio-5").addEventListener("click", goreClicked)
// using the eventlistener to manifest scrolling effect.

function preload() {
  img3 = loadImage("assets/image/image-own.jpeg");
  img4 = loadImage("assets/image/n.jpeg");
}


function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent("canvasContainer");
button = createButton('sing!');

// I originally wanted to put a video in. But I figured no because
// the video works but js can not run such a big file -- it feels not smooth...
// video element
// button2 = createButton('play your Statement!');
// vid = createVideo(['assets/video2.mp4'],vidLoad);
// vid.size(500, 500);
// vid.volume(10);

  radio1 = document.getElementById("radio-1");
  radio5 = document.getElementById("radio-5");
  radio2 = document.getElementById("radio-2");

  push()
  for (let i = 0; i < lyrics.length; i++) {
  lyricDrops[i] = new LyricDrop(lyrics, i);
}
  textX = width / 2;
  textY = height / 2;
  pop()

  myOwn = new own();
    for (let i = 0; i < 50; i++) {
    stars.push(new Ball(random(width), random(height), random(0.1, 1)));
  }

}
// I used a better name to define class later on. ;)

function draw() {
  background(0);


if (radio1.checked ){
// if(showImage==true){
// In order to test button, I made a boolean variable and cosolelog >> it works >> so button can be
// used in javascriot
// button2.position(-1000, 450);

  push();
  translate(windowWidth/2, windowHeight/2);
  scale(0.8);

  push()
  translate(-400,-550);
  let x = 400;
  let y = 100;
  let s = 400;

  let rectSize = s / sqrt(2);
  let headHeight = rectSize + s / 2;

  let eyeHeight = y - s / 2 + headHeight / 2;
  let eyeSize = s / 5;
  let mouthline = y + s / 2;
  let mouthSize = eyeSize * 2;
  let earLine = y - s / 2 + headHeight / 2 - eyeSize / 3;

  stroke(50);
  strokeWeight(3);
  noFill();

  //eye
  fill(100);
  ellipse(x - eyeSize, eyeHeight, eyeSize, eyeSize / 2);
  ellipse(x + eyeSize, eyeHeight, eyeSize, eyeSize / 2);
  textStyle(BOLDITALIC);
  text("Words have power",x-130, eyeHeight-60)
  text("Engage and Reflect",x+15, eyeHeight-40)
  //pupils + iris
  fill("#491d88");
  ellipse(x - eyeSize, eyeHeight, eyeSize , eyeSize / 4);
  ellipse(x + eyeSize, eyeHeight, eyeSize / 2, eyeSize / 2);
  noStroke();
  fill(20, 25, 11);
  ellipse(x - eyeSize, eyeHeight, eyeSize / 4, eyeSize / 4);
  ellipse(x + eyeSize, eyeHeight, eyeSize / 5, eyeSize / 5);
  pop();
  pop();



  push();
  image(img3, 680, 100, 70, 90);
  translate(0,0);
  myOwn.update();
  myOwn.display();

  button.position(688, 450);
  button.mousePressed(loadSong1);
  pop();
// I only want the button appears at "class own" so That
// I put the mousePressed function here >> I made a mistake
// by defining the button in here == in draw loop == it doea not work
// because it keeps running

}

else if (radio5.checked) {
button.position(-200, 450);
// button2.position(-1000, 450);
// I moved the button so that it won't appear
  push();
  if (mouseIsPressed) {
   textX = mouseX;
   textY = mouseY;
 }

 push();
 fill(150, map(mouseY, height, 0, 0, 150), 150);
 stroke(0.5);
 textFont("Courier New");
 textSize(20);
 textAlign(CENTER);
 text("She wonders who she is", textX, textY);


 rectMode(CENTER);
 pop();
 // for (let i = 0; i < lyricDrops.length; i++) {
 //   lyricDrops[i].rain();

 // transfer to below
 // I adapted from one of my previous try-outs when I practiced
 // I now define a new variable to get access each value in the length of the
 // lyricDrops so that each word phrase can be accessed one by one.

   for (let i = 0; i < lyricDrops.length; i++) {
   let lyricDisplay = lyricDrops[i];
    push();
   lyricDisplay.update();
     pop();
   lyricDisplay.display();
 }
 pop();

}

else if (radio2.checked ){
// if(showImage==true){

push();
button.position(-1000, 0);
push();
translate(windowWidth/2, windowHeight/2);
image(img4, 20, -400, 500, 700);
pop();
pop();

push();
translate(windowWidth/2-400, windowHeight/2)
for (let i = 0; i < poemTexts.length; i++) {
  // adopted from Moon's instructions and examples. The i value is used for index values and y position values.
  // the i can adjust the line space/ the style of the poem
  textSize(13);
  fill("#dbacdd")
  text(poemTexts[i], 50, yoffset + i * 30);
  yoffset-= 0.08
  if (yoffset < -800){
    yoffset = 800;
  }
  // noLoop();
  // I'm so careless QAQ
}
pop();

  // pattern #1 - adjusted from class practice [loop]
  // interestingly, though I just wanted to make the ellipse in loops,
  // the text I added are also in loops >> which is somehow beautiful so I kept it.
  for (let i = 0; i < 360; i += 140) {
  let angle = radians(i);

  push();
  scale(0.4)
  translate(width / 2-300, 1400);
  rotate(angle);
  if(mouseIsPressed){
  push();
  fill(180);
  textSize(25)
  text("Rise and Shine like a star ✨",-45,90)
  pop();
  stroke(255,0.5);
  fill(255, 130);
  ellipse(20, 0, 200, 50);
}else{
  push();
  fill("#491d88");
  textSize(40)
  text("✨",20,90)
  scale(0.5)
  stroke(100,0.9);
  ellipse(20, 0, 200, 50);
  pop();
}
  pop();
}
}
    for (let indexA = 0; indexA < stars.length; indexA++) {
      let star = stars[indexA];
      // update first
      star.move();
      star.bounce();
      star.display();
    }
// previous midterm example
}
// testButton.addEventListener("click",()=>{
//   console.log("testButton works noww!")
//   showImage=true;
// })

// function vidLoad() {
//   vid.play();
// }
//
// function vidPause() {
//   vid.pause();
// }

function loadSong1() {
   song1 = createAudio('assets/sound/song1.mp3');
   song1.autoplay(true);
}

class own {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  update() {
    }

  display() {
	translate(width/2-10, height/2-20);
    frameRate(20);
	colorMode(HSB);
	for(var i=0; i<400 ;i++){
		let ang  = i/20 + frameCount/80;
		let r = i + noise(i/5)*map(0,0,width/2,0,300);
		// ellipse(cos(ang)*r, sin(ang)*r, 50);
		fill(i%360,80,80);
		textSize(10);

		text("you don't own me"[i%20],cos(15)*r, sin(ang)*r);
    // what is i%20? -- modulo in math.
    // for every loop, i increase 1 to [400-1], and it is calculating
    // the modulo , or remainder, based on 20 values [in this case is the
    // word count]
    // e.g. 5%3 = 2 6%2 = 0

    // https://www.youtube.com/watch?v=r5Iy3v1co0A again, coding train's tutorial on modulos



      text("I am not one of your pretty toys and don't try to change me in any way"[i%70],cos(50)*r, sin(ang)*r);

      push()
      translate(0,50)
      fill(100)
      textSize(15)
      rotate(PI/2);
      text("don't tell me what to do"[i%30],cos(18)*r, sin(ang)*r);
      pop()
  }

  }
}


// adopted from the example : https://editor.p5js.org/slow_izzm/sketches/WbOyZTFQd
class LyricDrop {
  constructor(lyric, idx) {
    this.pos = createVector(random(30, width - 30), random(height));
    this.vel = createVector(0, random(1,5));
    // this.vel2 = createVector(0, random(6, 8));
    //
    this.acc = createVector();
    this.lyric = lyric;
    this.idx = idx;
  }

  update() {
    // using createvectors (which is magnitude + position from point to point >>
  // this way we can manipulate the pints going from different positions but having
// the similar motion : going down by manipulating the y value)
// https://www.youtube.com/watch?v=bKEaK7WNLzM

    this.vel.add(this.acc);
    this.pos.add(this.vel);
    // maths knowledge: acc changes vel and vel changes position > the ".add " learned from https://p5js.org/reference/#/p5.Vector/add
    // acc does not have a direction but velosity has [magnitude + direction makes a certain position]

    // to make the random position come back again from the top
    if (this.pos.y > height) {
      this.pos.y = random(0, -height);
    }
  }
  display() {
    noStroke();
    // change the color based on the mouse position
    fill(map(mouseX, 0, width, 0, 255), map(mouseY, height, 0, 0, 255), 255);
    // fill(242, map(this.pos.y, 0, height, height * 0.5, 0));
    textFont("monospace");
    textSize(15);
    text(this.lyric[this.idx], this.pos.x, this.pos.y);
  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  for (let i = 0; i < lyricDrops.length; i++) {
    lyricDrops[i].pos = createVector(random(30, width), random(height));
  }
}

class Ball {
  constructor(x, y, rad) {
    this.x = x;
    this.y = y;
    this.rad = rad;
    this.xSpd = random(-1, 1);
    this.ySpd = random(-1, 1);
    this.isDone = false;
  }
  bounce() {
    if (this.x < 0 || this.x > width) {
      this.xSpd *= -1;
    }
    if (this.y < 0 || this.y > height) {
      this.ySpd *= -1;
    }
  }
  move() {
    this.x += this.xSpd;
    this.y += this.ySpd;
  }
  display() {
    push();
    strokeWeight(0.5);
    stroke(random(0, 255)); // starts blink
    fill(255, 100);
    ellipse(this.x, this.y, this.rad * 2, this.rad * 3);
    pop();
  }

}

// notes
//  instructions : drag
