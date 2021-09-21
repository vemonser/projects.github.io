document.getElementById("but").addEventListener("click", function () {
  document.querySelector(".popup").style.display = "flex";
});
document.getElementById("close").addEventListener("click", function () {
  document.querySelector(".popup").style.display = "none";
});

document.getElementById("total").value = "total is 99 $";
document.getElementById("product").value = "product1 and total is 99 $";

function eq() {
  var nomOfItem = 1 * document.getElementById("nomOfItem").value;
  if (nomOfItem > 0) {
    nomOfItem = "total is " + eval(nomOfItem * "99") + "$";
    document.getElementById("total").value = nomOfItem;
    document.getElementById("product").value =
      "product1 and total is 99 $" + nomOfItem;
  } else {
    document.getElementById("total").value = "please choose number";
  }
}
// =============================================>
