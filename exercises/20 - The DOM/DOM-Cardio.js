// Make a div
const myDiv = document.createElement('div');
// add a class of wrapper to it
myDiv.classList.add('wrapper');
// put it into the body
document.body.append(myDiv);
// make an unordered list
// add three list items with the words "one, two, three" in them
// put that list into the above wrapper
const myList = `
  <ul>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </ul>
`;
myDiv.innerHTML = myList;

// create an image
const myImg = document.createElement('img');
// set the source to an image
// set the width to 250
// add a class of cute
// add an alt of Cute Puppy
// Append that image to the wrapper
myImg.src = 'https://source.unsplash.com/random/300x300';
myImg.width = 250;
myImg.classList.add('cute');
myImg.alt = 'Cute Puppy';
myDiv.append(myImg);

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above
const paraDiv = `
  <div>
    <p>Paragraph 1</p>
    <p class='warning'>Paragraph 2</p>
  </div>
`;
myDiv.insertAdjacentHTML('afterbegin', paraDiv);

// add a class to the second paragraph called warning
// remove the first paragraph
const para1 = document.querySelector('p');
para1.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height) {
  const playerCard = document.createElement('div');
  playerCard.classList.add('playerCard');
  playerCard.innerHTML = `
    <h2>${name} - ${age}</h2>
    <p>They are ${height} and ${age} years old. In Dog years, this person would be ${
      age * 7
    }. That would be a tall dog!</p>
  `;
  return playerCard;
}

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const newDiv = document.createElement('div');
newDiv.classList.add('cards');
// make 4 player cards using generatePlayerCard
// append those cards to the div
for (let i = 0; i < 4; i++) {
  const player = generatePlayerCard(
    `Person${i + 1}`,
    Math.floor(Math.random() * (40 - 20) + 20),
    '5"11',
  );
  player.classList = 'card';
  const button = document.createElement('button');
  button.innerText = 'Delete';
  player.append(button);
  newDiv.append(player);
}
// put the div into the DOM just before the wrapper element
document.body.insertAdjacentElement('afterbegin', newDiv);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const buttons = document.querySelectorAll('button');
// make out delete function
function deleteCard(e) {
  e.currentTarget.parentNode.remove();
}
// loop over them and attach a listener

for (const button of buttons) {
  button.addEventListener('click', deleteCard);
}
