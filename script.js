'use strict'

// document.getElementById('a1').addEventListener('click', function() {
// document.querySelector('.wrap').classList.remove('hidden');
// document.querySelector('.icon').classList.add('icon-transform')


// })


function hideShowElement() {
    
    const x = document.querySelector('.hidden');
    if (x.style.display === "none") {
      x.style.display = "block";
      document.querySelector('.hidden').offsetHeight;
      document.querySelector('.hidden').classList.add("wrap1")
      document.querySelector('.hidden').classList.remove("wrap2")
      document.querySelector('.icon').classList.remove("iconTransformClose");
      document.querySelector('.icon').classList.add("iconTransformOpen");
    } else {
      x.style.display = "none";
      document.querySelector('.icon').classList.add("iconTransformClose");
      document.querySelector('.icon').classList.remove("iconTransformOpen");
      document.querySelector('.hidden').classList.remove("wrap1")
      document.querySelector('.hidden').classList.add("wrap2")


    }
}
function hideShowElement2() {
    
    const x = document.querySelector('.hidden2');
    if (x.style.display === "none") {
      x.style.display = "block";
      document.querySelector('.hidden2').offsetHeight;
      document.querySelector('.hidden2').classList.add("wrap3")
      document.querySelector('.hidden2').classList.remove("wrap4")
      document.querySelector('.icon2').classList.remove("icon2TransformClose");
      document.querySelector('.icon2').classList.add("icon2TransformOpen");
    } else {
      x.style.display = "none";
      document.querySelector('.icon2').classList.add("icon2TransformClose");
      document.querySelector('.icon2').classList.remove("icon2TransformOpen");
      document.querySelector('.hidden2').classList.remove("wrap3")
      document.querySelector('.hidden2').classList.add("wrap4")


    }
}
function hideShowElement3() {
    
    const x = document.querySelector('.hidden3');
    if (x.style.display === "none") {
      x.style.display = "block";
      document.querySelector('.hidden3').offsetHeight;
      document.querySelector('.hidden3').classList.add("wrap5")
      document.querySelector('.hidden3').classList.remove("wrap6")
      document.querySelector('.icon3').classList.remove("icon3TransformClose");
      document.querySelector('.icon3').classList.add("icon3TransformOpen");
    } else {
      x.style.display = "none";
      document.querySelector('.icon3').classList.add("icon3TransformClose");
      document.querySelector('.icon3').classList.remove("icon3TransformOpen");
      document.querySelector('.hidden3').classList.remove("wrap5")
      document.querySelector('.hidden3').classList.add("wrap6")


    }
}


document.getElementById('a1').addEventListener('click', hideShowElement)
document.getElementById('a2').addEventListener('click', hideShowElement2)
document.getElementById('a3').addEventListener('click', hideShowElement3)




// 


