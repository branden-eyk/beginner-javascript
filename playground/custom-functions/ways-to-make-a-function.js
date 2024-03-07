/* eslint-disable */
// function doctorize(firstName) {
//   return `Dr. ${firstName}`;
// }

// Anon Function
// function (firstName) {
//   return `Dr. ${firstName}`;
// }

// Function Expression
// const doctorize = function (firstName) {
//   return `Dr. ${firstName}`;
// };

// Arrow Functions
// const inchToCM = (inches) => inches * 2.54;
// const add = (a, b = 3) => a + b;

// returning a object

// function makeABaby(first, last) {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0,
//   };
//   return baby;
// }

// const makeABaby = (first, last) => ({
//   name: `${first} ${last}`,
//   age: 0,
// });

// IIFE
// Immediately Invoked Function Expression
// (function (age) {
//   console.log('Running the Anon Function');
//   return `You are cool and ${age}`;
// })(10);

// Methods!!!

const wes = {
  name: 'Wes Bos',
  // Method
  sayHi: function() {
    console.log(`Hey ${this.name}`);
    return 'Hey Wes';
  },
  // Shorthand Method
  yellHi() {
    console.log('HEY WESSSSS');
  },
  // Arrow Function
  whisperHi: () => {
    console.log('hii wesss im a mouse');
  }
};

// Callback Functions
// Click Callback
const button = document.querySelector('.clickMe');
function handleClick() {
  console.log('Great Clicking!!!');
}
button.addEventListener('click', function(){
  console.log('Nice Job!');
});

//Timer Callback
setTimeout(() => {console.log('Done! Time to eat!')}, 1000);
