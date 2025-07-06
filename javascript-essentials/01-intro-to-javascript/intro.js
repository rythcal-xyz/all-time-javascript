// ==========================
// Intro to JavaScript
// ==========================

// JavaScript is a programming language that runs inside your browser.
// It allows you to create interactive, dynamic behavior on web pages.
// This example covers the basic concepts you need to get started.



// ----------------------------------------------------
// 1. Declaration of Variables
// ----------------------------------------------------

// Variables are used to store information that your code can use later.
// You create a variable using the 'let' keyword followed by a name.
// Here, we create a variable called 'greeting' and assign a string value.
let greeting = 'Hi there!';

// The console.log() function prints the value to the browser's console.
// This is useful for checking your code and debugging.
console.log(greeting);



// ----------------------------------------------------
// 2. Reassigning Variables
// ----------------------------------------------------

// Variables declared with 'let' can be updated later.
// Here we change the value of 'greeting' to a new string.
greeting = 'Hello again!';

// When we log it again, you will see the updated text in the console.
console.log(greeting);



// ----------------------------------------------------
// 3. Displaying a Popup
// ----------------------------------------------------

// The alert() function shows a popup dialog in the browser with a message.
// This is a simple way to notify the user.
alert('Hello, world!');



// ----------------------------------------------------
// 4. Simple Math
// ----------------------------------------------------

// JavaScript can perform calculations using operators like +, -, *, and /.
// Here, we add two numbers and store the result in a variable called 'sum'.
let sum = 5 + 3;

// This prints the result of the calculation to the console.
console.log(sum); // You should see '8'.



// ----------------------------------------------------
// 5. Functions
// ----------------------------------------------------

// A function is a reusable block of code that performs a task.
// You define a function with the 'function' keyword followed by a name.
// Inside the curly braces { }, you write the code the function should run.
function sayHello() {
	// This function will print a message each time it is called.
	console.log('Hello there!');
}

// To execute the function, you write its name followed by parentheses ().
sayHello(); // This calls the function and prints the message.



// ----------------------------------------------------
// 6. Conditional Statements (If/Else)
// ----------------------------------------------------

// Conditional statements let you make decisions based on conditions.
// Here, we check if 'age' is greater than or equal to 18.
let age = 18;

if (age >= 18) {
	// If the condition is true, this block runs.
	console.log('You are an adult.');
} else {
	// If the condition is false, this block runs.
	console.log('You are a minor.');
}

// Try changing 'age' to see different results.



// ----------------------------------------------------
// 7. Arrays
// ----------------------------------------------------

// An array is a list of values stored in a single variable.
// Arrays are useful for working with collections of items.
let colors = ['red', 'green', 'blue'];

// You can access items in the array by their index (starting at 0).
console.log(colors[0]); // This prints 'red'.
console.log(colors[1]); // This prints 'green'.



// ----------------------------------------------------
// 8. Objects
// ----------------------------------------------------

// An object is a collection of related data stored as key-value pairs.
// Objects are commonly used to group properties about something.
let person = {
	name: 'Alice',
	age: 25,
};

// You can access properties of an object using dot notation.
console.log(person.name); // Prints 'Alice'
console.log(person.age); // Prints 25



// ----------------------------------------------------
// 9. Prompting for User Input
// ----------------------------------------------------

// The prompt() function displays a dialog that asks the user for input.
// The text the user types is stored in a variable.
let userName = prompt('What is your name?');

// You can then use that input in other messages or logic.
console.log('Hello, ' + userName + '!'); // Prints a greeting with the user's name.



// ----------------------------------------------------
// 10. Changing the Page Background (DOM Manipulation)
// ----------------------------------------------------

// JavaScript can change the content and style of web pages dynamically.
// This is called DOM (Document Object Model) manipulation.
// For example, you can change the background color of the page like this:
document.body.style.backgroundColor = 'lightyellow';

// The 'document' object represents your entire web page.
// 'body' is the main container of the page's content.
// 'style' lets you change CSS styles.
// 'backgroundColor' sets the background color.



// ----------------------------------------------------
// 11. Summary of What You Learned
// ----------------------------------------------------
// - How to declare variables using 'let'
// - How to reassign variables
// - How to show messages with alert()
// - How to print messages to the console with console.log()
// - How to perform simple math calculations
// - How to define and call functions
// - How to write if/else statements to make decisions
// - How to work with arrays and access their elements
// - How to create and use objects
// - How to get input from users with prompt()
// - How to change the page's appearance by manipulating the DOM

// ----------------------------------------------------
// This concludes your introduction to JavaScript.
// ----------------------------------------------------
// You can try changing the values and running each line again.
// Practicing in the console is the best way to understand how JavaScript works.
