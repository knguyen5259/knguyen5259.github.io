var modal = document.getElementById("lilliput-pop-up");
var btn = document.getElementById("lilliput-button");
var span = document.getElementById("lilliput-close");

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

var modal2 = document.getElementById("brobdingnag-pop-up");
var btn2 = document.getElementById("brobdingnag-button");
var span2 = document.getElementById("brobdingnag-close");

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

var modal3 = document.getElementById("laputa-pop-up");
var btn3 = document.getElementById("laputa-button");
var span3 = document.getElementById("laputa-close");

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

var modal4 = document.getElementById("glub-pop-up");
var btn4 = document.getElementById("glub-button");
var span4 = document.getElementById("glub-close");

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
