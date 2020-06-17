var hex = document.querySelector(".hex");
var rgb = document.querySelector(".rgb");

var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");

var body = document.getElementById("gradient");


//Function by Tim Down on StackOverflow
function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function setDefaultColor () {    
	
	var hex1 = '#ff0000';
	var hex2 = '#0000ff';

	document.querySelector('input[class="color1"]').value = hex1;
	document.querySelector('input[class="color2"]').value = hex2;

	body.style.background = "linear-gradient(to right, " + hex1 + ", " + hex2 + ")";

	printCSS(hex1, hex2);
}

function setGradient () {
	
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	
	printCSS(color1.value, color2.value);
}

function printCSS (hex1, hex2) {
	var rgb1 = hexToRgb(hex1);
	var rgb2 = hexToRgb(hex2);

	hex.textContent = "linear-gradient(to right, " + hex1 + ", " + hex2 + ");";
	rgb.textContent = "linear-gradient(to right, rgb(" + rgb1.r + ", " + rgb1.g + 
	", " + rgb1.b + "), rgb(" + rgb2.r + ", " + rgb2.g + ", " + rgb2.b + "));";
}

setDefaultColor();

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
 