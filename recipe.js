/*
Let's start by declaring our ingredients.
The data that we have available at the beginning of our program.

THIS IS A COMMENT: a note from the developer.
WHO ARE THE TARGETS OF COMMENTS:
- You future self
- Your coworkers, whoever may work on this code in the future
*/

console.log("Hello! Welcome to the programming kitchen :)")

// This is another way to write a comment, on just a single line.
let butter = 80
let sugar = 120
let flour = 200
// ^ these are our inputs. Usually, inputs come from the outside.
// From the user, from an external source.
// But, for this example, we delcare them here.

// Let's print on the console the CONTENT of our variables.
// We are calling them by name, which means GET THEIR CONTENT, THEIR VALUE.
console.log(butter)
console.log(sugar)
console.log(flour)

// Step 1 of our recipe:
// Mix together, in a medium bowl, butter and sugar
let mediumBowl // We declare a new variable, it's empty at the moment
console.log(mediumBowl) // This will print undefined
mediumBowl = butter + sugar
console.log(mediumBowl)

// In the SAME BOWL, we also add flour to the mix
mediumBowl += flour
// EXACTLY LIKE WRITING mediumBowl = mediumBowl + flour
// Syntactic sugar: a "sweeter" way to write the same thing.
console.log(mediumBowl)

// We are satisfied. We empty the bowl.
mediumBowl = null
console.log(mediumBowl)
// We use null when we want to make something empty explicitly.
// It's not empty by accident - WE made id emtpy.
