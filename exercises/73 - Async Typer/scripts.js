function wait(ms = 0) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getRandomBetween(min = 20, max = 150, randomNumber = Math.random()) {
  return Math.floor(randomNumber * (max - min) + 20);
}

// async for of loop
// async function draw(el) {
//   const text = el.textContent;
//   let soFar = '';
//   for (const letter of text) {
//     soFar += letter;
//     el.textContent = soFar;
//     // wait for some amount of time
//     const { typeMin, typeMax } = el.dataset;
//     const amount = getRandomBetween(typeMin, typeMax);
//     await wait(amount);
//   }
// }

// recursion
function draw(el) {
  let index = 1;
  const text = el.textContent;
  const { typeMin, typeMax } = el.dataset;
  async function drawLetter() {
    el.textContent = text.slice(0, index);
    index += 1;
    const amount = getRandomBetween(typeMin, typeMax);
    await wait(amount);
    // exit condition
    if (index <= text.length) {
      drawLetter();
      // wait for some time
    }
  }
  // when this function draw runs, kick off drawLetter
  drawLetter();
}

const els = document.querySelectorAll('[data-type]').forEach(draw);
