function wait(ms = 0) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function destroyPopup(popup) {
  popup.classList.remove('open');
  await wait(1000);
  // remove popup entirely
  popup.remove();
  // eslint-disable-next-line no-param-reassign
  popup = null; // this destroys the popup from memory as well, closing a memory leak
}

function ask(options) {
  return new Promise(async (resolve) => {
    // First we need to create a popup with all the fields
    const popup = document.createElement('form');
    popup.classList.add('popup');
    popup.insertAdjacentHTML(
      'afterbegin',
      `<fieldset>
        <label>${options.title}</label>
        <input type="text" name="input"/>
        <button type="submit">Submit</button>
      </fieldset>
    `,
    );

    // Check if they want a cancel button
    if (options.cancel) {
      const skipButton = document.createElement('button');
      skipButton.type = 'button';
      skipButton.textContent = 'Cancel';
      popup.firstElementChild.append(skipButton);
      // TODO: listen for a click on that cancel button
      skipButton.addEventListener(
        'click',
        () => {
          resolve(null);
          destroyPopup(popup);
        },
        { once: true },
      );
    }
    // listen for the submit event on the inputs
    popup.addEventListener(
      'submit',
      (e) => {
        e.preventDefault();
        resolve(e.target.input.value);
        // remove it from the DOM entirely
        destroyPopup(popup);
      },
      { once: true },
    );
    // When someone does submit it, resolve the data that was in the inputer box
    // insert that popup into the dom
    document.body.appendChild(popup);
    // put a very small timeout before we add the open class
    // We need to do this because if the popup and open classes are added at the same time the animation won't work
    await wait(50);
    popup.classList.add('open');
  });
}

// select all buttons that have a question
async function askQuestion(e) {
  const button = e.currentTarget;
  const cancel = 'cancel' in button.dataset; // how to check if a property is in an object
  // we could also use:
  // const cancel = button.hasAttribute('data-cancel'), which is arguable better
  const answer = await ask({
    title: button.dataset.question,
    cancel,
  });
  console.log(answer);
}

const buttons = document.querySelectorAll('[data-question]');
buttons.forEach((button) => button.addEventListener('click', askQuestion));

const questions = [
  { title: 'What is your name?' },
  { title: 'What is your age?', cancel: true },
  { title: "What is your dog's name?" },
];

// For of loops unlick maps and for each, for of allows you to pause with await so you can do things sequentially
// So we can make a utility function to add this reusable functionality
async function asyncMap(array, callback) {
  // make an array to store our results
  const results = [];
  // loop over array
  for (const item of array) {
    const result = await callback(item);
    results.push(result);
  }
  // When we are done the loop, return it!
  return results;
}

async function go() {
  const answers = await asyncMap(questions, ask);
  console.log(answers);
}

go();

// async function askMany() {
//   // For of loops unlick maps and for each, for of allows you to pause with await so you can do things sequentially
//   for (const question of questions) {
//     const answer = await ask(question);
//     console.log(answer);
//   }
// }

// askMany();
