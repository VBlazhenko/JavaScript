//Variables

let greeting = "Hello World";
console.log(greeting);

const name = "Irina";
console.log(name);

//Strings

const message = "This is a string";
const messagetype = typeof message;
console.log(messagetype);

// String Exercise 

const colors = ["blue", "yellow"];
const result = typeof colors;
console.log(result);

// String concatenation
// strings canbe added using "+" operator

const fname = "Vlad";
const sname = " Blazhenko";

const greet_user = fname + sname;
console.log(greet_user);

//String interpolation

const greetings = `${fname} is my name, and ${sname} is my surname.`
console.log(greetings);

//Numbers

const age = 21;
const sum = 10 + 2; // 12
const times = 10 * 2; // 20

// we can also round numbers to the enarest whole number

const preciseage = 21.4;
const roughage = Math.round(preciseage);
console.log(roughage);


//exercise numbers
const numberoftrainers = 15; 
const numberofmentors = 8;
const addition = numberoftrainers + numberofmentors;


console.log("number of trainers:", numberoftrainers);
console.log("number of mentors:", numberofmentors);
console.log("Total number of trainers and mentors:", addition);

const trainerspercentage = numberoftrainers / addition * 100;
const precisetrainers = Math.round(trainerspercentage);

const mentorpercentage= numberofmentors / addition * 100;
const precisementors = Math.round(mentorpercentage);

console.log("Percentage of members", precisetrainers);
console.log("Percentage of mentors", precisementors);


// statements and expressions
// in js code can be called expressions and statements

//e.g., of expressions
1 + 1; // expression
("hello") // expressions

// statement = code that carries out an instruction
//e.g., 

const statementexample = "This is a statement";



//Functions

function double(number) {
  return number * 2;
}


const result_two = double(2);
console.log(result_two); // 4

// exercise 

function formatPenceToPounds(value) {
    return value / 100;
}

formatPenceToPounds(199);

































