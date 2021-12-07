let img1;
let img2;
let img3;
let img4;
let horseX = 0;

let xdraw = 0, ydraw = 0;
// the distance between words

// import the words as the brush;
let wordList1 = "I have gone out,a possessed witch,haunting the black air, braver at night;dreaming evil, I have done my hitch,over the plain houses, light by light:lonely thing, twelve-fingered,out of mind.A woman like that is not a woman, quite.I have been her kind...A woman like that is misunderstood.I have been her kind.I have ridden in your cart, driver,waved my nude arms at villages going by,learning the last bright routes, survivor where your flames still bite my thigh and my ribs crack."
// let wordList2 = "hahaha"
// let wordList3 = "HEIHEIHEI"
let getW = 10;
//word-distance
let wordD;

// a bit of the word twist;
var angleDistortion = 0.5;

let smoothC = 0;
// let poem;

function preload() {
  img1 = loadImage("assets/image/image-draw.jpeg");
    // img2 = loadImage("assets/image/2.jpg");
    //   img3 = loadImage("assets/image/3.jpg");
    //     img4 = loadImage("assets/image/4.jpg");

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
  colorMode(HSB);

xdraw = mouseX;
ydraw = mouseY;
// poem = new drawPoem();
image(img1, windowWidth/2, 20, 200, 300);

push()；
textFont('Georgia');
fill("blue");
textSize(10);
textStyle(BOLDITALIC);
text("draw the poem,", windowWidth/2,40)
text("don't let others draw you", windowWidth/2+70, 70)
text("press and drag to draw", windowWidth/2, 300)
pop()；
  
}

function draw() {

//   image(img1, 600, 20, 200, 300);

//   push()
//   textFont('Georgia');
//   fill("pink");
//   textSize(10);
//   textStyle(BOLDITALIC);
//   text("draw the poem,", 600,40)
//   text("don't let others draw you", 670, 70)
//   text("press and drag to draw", 650, 300)
//   pop()


  // image(img4, 0, 420, 200, 300);

  // horseX+=0.5;
  // if(horseX>width-450){
  //   horseX = -100;
  // }
  if (mouseIsPressed) {
      let d = dist(xdraw,ydraw, mouseX,mouseY);
      // create drawing patterns
      push()
      // textSize(fontSizeMin+d/2)
      textSize(25);

      let newLetter = wordList1.charAt(getW);;
      // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
      // My elaboration: STRING is used to read each value in a long list of words from left to right
      // e.g. let list = "list"; and list.charAT (0) = l; list.charAT (3) = t;
      // this is very useful in making word variations and it makes each character of the words into
      // each value. ;-))

      wordD = textWidth(newLetter);

      if (d > wordD) {
        let angle = 10;

        push();
        translate(xdraw, ydraw);
        rotate(random(0,angleDistortion));

  			// fill(smoothC);
        // generate smooth colors - rainbow colors

        fill(smoothC, 360, 360);
        text(newLetter, 0, 0);
  			smoothC ++;
  			if (smoothC > 360) smoothC = 0;
        pop();
        pop()

        // to get each values in the "wordList" one by one into the "newLetter"
        getW++;
       if (getW > wordList1.length-1) getW = 0;

        xdraw = mouseX + cos(angle) ;
        ydraw = mouseY + sin(angle) ;
        // x = mouseX;
        // y = mouseY;
      }
    }


  // push();
  // translate(0,0);
  // poem.update();
  // poem.display();
  // pop();

  }


  // class drawPoem {
  //   constructor(xdraw, ydraw) {
  //     this.x = xdraw;
  //     this.y = ydraw;
  //
  //
  //     this.xdraw = 0,
  //     this.ydraw = 0;
  //     // the distance between words
  //
  //     // import the words as the brush;
  //     this.wordList = "Christina Rossetti,‘In an Artist’s Studio’One face looks out from all his canvases,One selfsame figure sits or walks or leans:We found her hidden just behind those screens,That mirror gave back all her loveliness.A queen in opal or in ruby dress,A nameless girl in freshest summer-greens,A saint, an angel — every canvas means.The same one meaning, neither more or less…"
  //     this.getW = 10;
  //     //word-distance
  //     this.wordD;
  //
  //     // a bit of the word twist;
  //     this.angleDistortion = 0.5;
  //
  //     this.smoothC = 0;
  //
  //   }
  //   update() {
  //     this.x = mouseX;
  //     this.y = mouseY;
  //     }
  //
  //   display() {
  //       colorMode(HSB);
  //       if (mouseIsPressed) {
  //           this.d = dist(this.xdraw,this.ydraw, mouseX,mouseY);
  //           // create drawing patterns
  //           push()
  //           // textSize(fontSizeMin+d/2)
  //           textSize(15);
  //
  //           this.newLetter = this.wordList.charAt(this.getW);;
  //           // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
  //           // My elaboration: STRING is used to read each value in a long list of words from left to right
  //           // e.g. let list = "list"; and list.charAT (0) = l; list.charAT (3) = t;
  //           // this is very useful in making word variations and it makes each character of the words into
  //           // each value. ;-))
  //
  //           this.wordD = textWidth(this.newLetter);
  //
  //           if (this.d > this.wordD) {
  //           this.angle = 10;
  //
  //             push();
  //             translate(this.xdraw, this.ydraw);
  //             rotate(random(0,this.angleDistortion));
  //
  //             // fill(smoothC);
  //             // generate smooth colors - rainbow colors
  //
  //             fill(this.smoothC, 360, 360);
  //             text(this.newLetter, 0, 0);
  //             this.smoothC ++;
  //             if (this.smoothC > 360) this.smoothC = 0;
  //             pop();
  //             pop()
  //
  //             // to get each values in the "wordList" one by one into the "newLetter"
  //             this.getW++;
  //            if (this.getW > this.wordList.length-1) this.getW = 0;
  //
  //             this.xdraw = mouseX + cos(this.angle) ;
  //             this.ydraw = mouseY + sin(this.angle) ;
  //             // x = mouseX;
  //             // y = mouseY;
  //           }
  //         }
  //       }
  //
  //   }

  function keyPressed() {
    if (keyCode == DELETE || keyCode == BACKSPACE) background(0);
  }
