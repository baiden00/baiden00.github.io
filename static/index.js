
document.getElementsByClassName('center').addEventListener("mouseover", mouseOn);
document.getElementsByClassName('center').addEventListener("mouseout", mouseOff);

function mouseOn() {
  document.getElementsByClassName('center').style.color = "red";
  document.getElementsByClassName('center').style.fontSize = "x-large";
}

function mouseOff() {
  document.getElementById('center').style.color = "black";
}
