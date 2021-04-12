var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("randomButton");

setGradient(); //calls the set gradient function as to set values on first page load

//sets the gradient of our webpage
function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")"; //syntax we have to get used to
	css.textContent = body.style.background + ";"; //change text content of h3 tag 
}

//returns random hex value
const random_hex_value = () => {
  	var n = (Math.random() * 0xfffff * 1000000).toString(16); //radix parameter is 16 for hex numbers
  	return "#" + n.slice(0, 6); //slice method to return the first 6 characters of string n
};

//sets random color for our webpage
function randomColor() {
	color1.value = random_hex_value(); 
	color2.value = random_hex_value();
	setGradient();
}

color1.addEventListener("input", setGradient); //adds event listener on first color input
color2.addEventListener("input", setGradient); //adds event listener on second color input

randomButton.addEventListener("click", randomColor); //adds event listener on random color button
