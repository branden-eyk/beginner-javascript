// Function Declaration
function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
  // Function Body
  console.log('Running Calculate Bill!!!');
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;
  return total;
}
// // Function Call
// console.log(`Your Total Bill is ${calculateBill()}`);

function sayHiTo(firstName) {
  return `Hello ${firstName}`;
}

function doctorize(name) {
  return `Dr. ${name}`;
}

function yell(name = '') {
  return `HEY ${name.toUpperCase()}`;
}

const myBill = calculateBill(100, undefined, 0.2);
console.log(myBill);
