// alert('yay');
// document = method
// getelementbyID = element =lyric >> div = lyric >> assign一个variable

function say(what){
  //say = () add a value = let () do sth. = in HTML, we need to add this
  // console.log("Browser is saying: " + what);
  let elem = document.getElementById('lyrics');
  //same with javascript
  let newelem = document.createElement('p');
  newelem.innerHTML = what;
  // in div -- there is a p

  elem.appendChild(newelem);
  //appendchild = add one more roll
  //list add one more
}

function makeCircle(){
  let elem = document.getElementById('circleB');


  elem.style.borderRadius = '20px';
  //style ： because JavaScript could change the css
}

function makeRect(){
  let elem = document.getElementById('rectB');
  elem.style.style.borderRadius = '20px';

}

let circleB = document.getElementById('circleB');
circleB.addEventListener('click', makeCircle);

let rectB = document.getElementById('rectB');
rectB.addEventListener('click', makeCircle);
