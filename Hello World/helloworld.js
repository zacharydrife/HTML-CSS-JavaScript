// print strings

console.log('Hello' + 'World');
console.log('Hello World');

// print numbers

console.log(1 + 1);
console.log(1 - 1);
console.log(1 * 1);
console.log(1 / 1);
console.log(1 % 1);

// print strings commands

console.log('Hello World'.length);
console.log('Hello World'.toUpperCase());
console.log('Hello World'.toLowerCase());
console.log('                  Hello World'.trim());
console.log('Hello World'.charAt(0));
console.log('Hello World'.indexOf('World'));
console.log('Hello World'.substring(0, 5));
console.log('Hello World'.split(' '));

// print numbers commands

console.log(Math.PI);
console.log(Math.E);
console.log(Math.round(2.5));
console.log(Math.ceil(2.1));
console.log(Math.floor(2.9));
console.log(Math.sqrt(4));
console.log(Math.abs(-4));
console.log(Math.pow(2, 3));
console.log(Math.min(2, 3, 4, 5, 6, 7, 8, 9, 10));
console.log(Math.max(2, 3, 4, 5, 6, 7, 8, 9, 10));
console.log(Math.random());

// built in functions

console.log(Math.random());
console.log(Math.random() * 50);
console.log(Math.floor(Math.random() * 50));
console.log(Math.ceil(43.8));
console.log(Number.isInteger(2017));


// add some conversion maths for temperature

// set kelvin constant value
const kelvin = 0;
// set celsius constant value K>C conversion
const celsius = kelvin - 273;
// let fahrenheit input update C>F conversion
let fahrenheit = celsius * (9/5) + 32;
// convert fahrenheit output to whole number
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// set newton value input update C>N conversion
let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees newton.`);


// try converting age to dog years

// set constant myAge
const myAge = 27;
// set updatable var earlyYears
let earlyYears = 2;
earlyYears *= 10.5;
// set updatable var laterYears
let laterYears = myAge - 2;
laterYears *= 4;
console.log(laterYears);
// convert myAge to dog years
let myAgeInDogYears = earlyYears + laterYears;
let myName = 'Zak' .toLowerCase();
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${laterYears} years old in dog years.`);