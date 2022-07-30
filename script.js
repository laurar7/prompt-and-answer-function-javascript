// Write a function
var startMyDay = function () {
  return "Time for coffee and a shower!";
};
console.log(startMyDay());

// Write a Function with 1 Parameter
var favoriteCookie = function (cookie) {
  return `My favorite cookie is ${cookie}.`;
};

console.log(favoriteCookie());
console.log(favoriteCookie("raisins"));

// Write a Function with 2 Parameters

var introduce = function (name, occupation) {
  return `Hello my name is ${name} and I am a ${occupation}`;
};

console.log(introduce("Laura", "student"));
console.log(introduce("Luis", "private employee"));

// Create a Function to Capture Input
var hydrationFeedback = function () {
  var numGlasses = Number(
    prompt("How many glasses of water did you have today?")
  );
  if (numGlasses >= 8) {
    console.log("Congratulations");
  } else if (numGlasses < 8) {
    console.log("Not bad, not bad. Let’s try for a bit more tomorrow!.");
  }
};

hydrationFeedback();
