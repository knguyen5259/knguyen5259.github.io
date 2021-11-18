const modal = document.getElementById("lilliput-pop-up");
const btn = document.getElementById("lilliput-button");
const span = document.getElementById("lilliput-close");

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const modal2 = document.getElementById("brobdingnag-pop-up");
const btn2 = document.getElementById("brobdingnag-button");
const span2 = document.getElementById("brobdingnag-close");

btn2.onclick = function() {
  modal2.style.display = "block";
}

span2.onclick = function() {
  modal2.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal2.style.display = "none";
  }
}

const modal3 = document.getElementById("laputa-pop-up");
const btn3 = document.getElementById("laputa-button");
const span3 = document.getElementById("laputa-close");

btn3.onclick = function() {
  modal3.style.display = "block";
}

span3.onclick = function() {
  modal3.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal3.style.display = "none";
  }
}

const modal4 = document.getElementById("glub-pop-up");
const btn4 = document.getElementById("glub-button");
const span4 = document.getElementById("glub-close");

btn4.onclick = function() {
  modal4.style.display = "block";
}

span4.onclick = function() {
  modal4.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal4.style.display = "none";
  }
}

const modal5 = document.getElementById("lug-pop-up");
const btn5 = document.getElementById("lug-button");
const span5 = document.getElementById("lug-close");

btn5.onclick = function() {
  modal5.style.display = "block";
}

span5.onclick = function() {
  modal5.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal5.style.display = "none";
  }
}

const modal6 = document.getElementById("england-pop-up");
const btn6 = document.getElementById("england-button");
const span6 = document.getElementById("england-close");

btn6.onclick = function() {
  modal6.style.display = "block";
}

span6.onclick = function() {
  modal6.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal6.style.display = "none";
  }
}

const modal7 = document.getElementById("hou-pop-up");
const btn7 = document.getElementById("hou-button");
const span7 = document.getElementById("hou-close");

btn7.onclick = function() {
  modal7.style.display = "block";
}

span7.onclick = function() {
  modal7.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal7.style.display = "none";
  }
}
