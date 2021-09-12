"use strict";

// document.getElementById('a1').addEventListener('click', function() {
// document.querySelector('.wrap').classList.remove('hidden');
// document.querySelector('.icon').classList.add('icon-transform')

// })
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// const addCart = document.querySelector(".addCart");

// addCart.addEventListener("click", function () {
//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//   }
// });

document.querySelector(".icon-after").style.content = "2";

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

function hideShowElement() {
  const x = document.querySelector(".hidden");
  if (x.style.display === "none") {
    x.style.display = "block";
    x.offsetHeight;
    x.classList.add("wrap1");
    x.classList.remove("wrap2");
    document.querySelector(".icon").classList.remove("iconTransformClose");
    document.querySelector(".icon").classList.add("iconTransformOpen");
  } else {
    x.style.display = "none";
    document.querySelector(".icon").classList.add("iconTransformClose");
    document.querySelector(".icon").classList.remove("iconTransformOpen");
    x.classList.remove("wrap1");
    x.classList.add("wrap2");
  }
}

function hideShowElement2() {
  const x = document.querySelector(".hidden2");
  if (x.style.display === "none") {
    x.style.display = "block";
    x.offsetHeight;
    x.classList.add("wrap3");
    x.classList.remove("wrap4");
    document.querySelector(".icon2").classList.remove("icon2TransformClose");
    document.querySelector(".icon2").classList.add("icon2TransformOpen");
  } else {
    x.style.display = "none";
    document.querySelector(".icon2").classList.add("icon2TransformClose");
    document.querySelector(".icon2").classList.remove("icon2TransformOpen");
    x.classList.remove("wrap3");
    x.classList.add("wrap4");
  }
}
function hideShowElement3() {
  const x = document.querySelector(".hidden3");
  if (x.style.display === "none") {
    x.style.display = "block";
    x.offsetHeight;
    x.classList.add("wrap5");
    x.classList.remove("wrap6");
    document.querySelector(".icon3").classList.remove("icon3TransformClose");
    document.querySelector(".icon3").classList.add("icon3TransformOpen");
  } else {
    x.style.display = "none";
    document.querySelector(".icon3").classList.add("icon3TransformClose");
    document.querySelector(".icon3").classList.remove("icon3TransformOpen");
    x.classList.remove("wrap5");
    x.classList.add("wrap6");
  }
}

document.getElementById("a1").addEventListener("click", hideShowElement);
document.getElementById("a2").addEventListener("click", hideShowElement2);
document.getElementById("a3").addEventListener("click", hideShowElement3);

//

/*   const x = document.querySelector(".hidden");
  if (x.style.display === "none") {
    x.style.display = "block";
    document.querySelector(".hidden").offsetHeight;
    document.querySelector(".hidden").classList.add("wrap1");
    document.querySelector(".hidden").classList.remove("wrap2");
    document.querySelector(".icon").classList.remove("iconTransformClose");
    document.querySelector(".icon").classList.add("iconTransformOpen");
  } else {
    x.style.display = "none";
    document.querySelector(".icon").classList.add("iconTransformClose");
    document.querySelector(".icon").classList.remove("iconTransformOpen");
    document.querySelector(".hidden").classList.remove("wrap1");
    document.querySelector(".hidden").classList.add("wrap2");

    */

