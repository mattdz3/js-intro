console.log ("hello world");

var fullname = "Matt Dougherty"

var age = 26

console.log ("My name is", fullname, "and I'm", age, "years old.");

var x = 10

var y = 20

console.log (x * 10);

console.log (y + 100);

var array = [x, y]

console.log (array);

var math = x + y

console.log (math);

console.log (math * 2);

console.log (math * math + 1000);

console.log (math % 200)

if (20 > 10) {

	console.log (true);
}

if (20 < 10) {

	console.log (true);

} else {

	console.log (false);
}

array.push ("Tacos");

console.log (array);

array.push ("Spiderman");

console.log (array);

var keepMeGoing = ["coffee", "red bull", "beer"]

console.log(keepMeGoing);

console.log ("Wait that's not right...")

var beer = {

	drink: function() {

		alert("BEER IS GOOD!");
	}
};

function myfunc(car) {
	car.make = "Porsche";
	car.model = "911 Turbo";
	car.year = "2014";
	car.color = "yellow"
};

var mycar = {
	make: "BMW",
	model: "Z3",
	year: "2001",
	color: "black"
};

window.alert(mycar.make);
window.alert(mycar.model);
window.alert(mycar.year);
window.alert(mycar.color);

myfunc(mycar);

window.alert(mycar.make);
window.alert(mycar.model);
window.alert(mycar.year);
window.alert(mycar.color);

var add = function (a, b, c) {
	return 'a' + 'b' + 'c';
};

var abc = add(25, 50, 50);


var stout = function () {
	prompt("Beer are go good with pizza?");
}


var robotmaster = function () {
	alert("Megaman Rules");
}


var boo = alert("WARNING: JS WILL MELT YOUR BRAIN");

var ask = prompt("Good day! What's your name?");
if (ask == "Matt") 
{
	console.log ("Hey Matt you're cool");

} else {

	console.log(ask, "is a boring name");
}


var user = prompt("Rock, Paper, or Scissors?");

console.log(user);

if (user == "rock") {
	console.log ("Good Job");

} else if (user == "paper") {

	console.log ("Good Job");

} else if (user == "scissors") {

	console.log ("Good Job");

} else if (user !== "rock", "paper", "scissors") {

	console.log("What are you stupid?");
}

var computer = Math.random();

console.log(computer);

if (computer < .3) {

	console.log("YOU WIN!")

} else {

	console.log("YOU LOSE!")
}






