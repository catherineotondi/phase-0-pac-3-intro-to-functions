// Follow along with the examples here
function sayHello() {
    console.log("Hello")
}
sayHello()

function sayHelloToIsabel() {
    console.log("Hello, Isabel!");
}

function sayHelloToSofia() {
    console.log("Hello, Sofia!");
}
  
function sayHelloToBrendan() {
    console.log("Hello, Brendan!");
}
  
sayHelloToIsabel();
sayHelloToSofia();
sayHelloToBrendan();

function sayHelloTo(firstName) {
    console.log(`Hello, ${firstName}!`);

}
  
  
  sayHelloTo("Isabel"); // "Hello, Isabel!"
  sayHelloTo("Jane"); // "Hello, Jane!"
  sayHelloTo("R2-D2"); // "Hello, R2-D2!"
sayHelloTo(1); 
function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
}
say("GOODBYE", "JULIO")
function say(greeting, firstName) {
    console.log("firstName: ", firstName);
    console.log("greeting: ", greeting);
    console.log(`${greeting}, ${firstName}!`);
}
  

function add(x, y) {
    return(x + y) ;
}
console.log(add(1, 2))
  
const sum = add(1, 2);
const message = `The sum of your numbers is: ${sum}.`;
console.log(message)

function say(greeting, firstName) {
    console.log("I was called!");
    return `${greeting}, ${firstName}!`;
}
console.log(say("Howdy", "partner"));
