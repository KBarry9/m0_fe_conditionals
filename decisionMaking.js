// This exercise file is a little different from the others you have seen so far. Read carefully!
// Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
// Spend some time changing the variables and running the file to see how the story changes.


var doorChoice = 1;
var bearClothing = "";
var bearChoice = 1;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 1) {
  bearClothing = "hat";
} else {
  bearClothing = "scarf";
}

console.log("You see a bear putting on a " + bearClothing);
console.log("It looks like that " + bearClothing + " is too small for the bear, do you...");

console.log("1. Offer your own to the bear?");
console.log("2. Point it out to the bear?");
console.log("3. Make a dash for the next room?");

if (bearChoice === 1) {
  "You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!";
} else if (bearChoice === 2) {
  "You tell the bear the " + bearClothing + " is too small and it starts to cry!";
} else if (bearChoice === 3) {
  "You run as fast as you can into the next room. It's full of snakes!";
} else {
  "You stay with the bear and become it's best friend!";
}


// Questions
// 1. If the bear chose door 1, he is wearing a hat, but if he chose other than door 1, he is wearing a scarf.
// 2. The  bearClothing has a new value assigned to it after the first if statement executes.
// 3. If you changed the variable doorChoice to equal 3, the bearClothing value would be scarf.
// 4. Depending on if the bearChoice is 1, 2, 3, or anything else will determine the condition for the bear.
// 5. If you changed the variable bearChoice to equal 3, you run as fast as you can into the next room, full of snakes.
// 6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, you tell the bear the hat is too small and he cries.
// 7. My favorite ending is you stay with the bear and become it's best friend. 
