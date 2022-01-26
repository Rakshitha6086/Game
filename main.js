let c = document.getElementById("Page");
let ctx = c.getContext("2d");
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

var img = new document.createElement("img");
img.onload = () => {
   ctx.drawImage(img, 0, 0, 500, 500);
};
img.src = "/images/idle.png";