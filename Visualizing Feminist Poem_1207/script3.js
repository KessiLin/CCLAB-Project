

// let showText = false;
// document.getElementById("buttonread").addEventListener("click", function(){
//    let textElement = document.getElementById("buttonread2");
//    if(showText == false){
//       textElement.style.display = "block";
//       showText = true;
//    }else{
//       textElement.style.display = "none";
//       showText = false;
//    }
// })


function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("less");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }}

  function myFunction2() {
    let dots2 = document.getElementById("dots2");
    let moreText2 = document.getElementById("more2");
    let lessText2 = document.getElementById("less2");
  if (dots2.style.display === "none") {
  dots2.style.display = "inline";
  lessText2.innerHTML = "Read more";
  moreText2.style.display = "none";
  } else {
  dots2.style.display = "none";
  lessText2.innerHTML = "Read less";
  moreText2.style.display = "inline";
}}

  function myFunction3() {
    let dots3 = document.getElementById("dots3");
    let moreText3 = document.getElementById("more3");
    let lessText3 = document.getElementById("less3");
  if (dots3.style.display === "none") {
  dots3.style.display = "inline";
  lessText3.innerHTML = "Read more";
  moreText3.style.display = "none";
  } else {
  dots3.style.display = "none";
  lessText3.innerHTML = "Read less";
  moreText3.style.display = "inline";
}}

  function myFunction4() {
    let dots4 = document.getElementById("dots4");
    let moreText4 = document.getElementById("more4");
    let lessText4 = document.getElementById("less4");
  if (dots4.style.display === "none") {
  dots4.style.display = "inline";
  lessText4.innerHTML = "Read more";
  moreText4.style.display = "none";
  } else {
  dots4.style.display = "none";
  lessText4.innerHTML = "Read less";
  moreText4.style.display = "inline";
}}
