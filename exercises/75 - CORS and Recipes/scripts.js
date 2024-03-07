// The Recipe Puppy API used in the course is broken
// Please use this replacement API URL "https://recipes.beginnerjavascript.com/api"
const baseEndpoint = 'https://recipes.beginnerjavascript.com/api';
const proxy = 'https://cors-anywhere.herokuapp.com/';
const form = document.querySelector('form.search');
const recipesGrid = document.querySelector('.recipes');

async function fetchRecipes(query) {
  const res = await fetch(`${proxy}${baseEndpoint}?q=${query}`);
  const data = await res.json();
  return data;
}

async function handelSubmit(event) {
  event.preventDefault();
  const el = event.currentTarget;
  console.log(el.query.value);
  fetchAndDisplay(el.query.value);
}

async function fetchAndDisplay(query) {
  // Turn the form off
  form.submit.disabled = true;
  // Submit the search
  const recipes = await fetchRecipes(form.query.value);
  console.log(recipes);
  form.submit.disabled = false;
  displayRecipes(recipes.results);
}

function displayRecipes(recipes) {
  console.log('Creating HTML');
  const html = recipes.map(
    (recipe) => `<div class="recipe">
      <h2>${recipe.title}</h2>
      <p>${recipe.ingredients}</p>
      ${
        recipe.thumbnail &&
        `<img src="${recipe.thumbnail}" alt="${recipe.title}"/>`
      }
      <a href="${recipe.href}">View Recipe</a>
    </div>`,
  );
  recipesGrid.innerHTML = html.join('');
}

form.addEventListener('submit', handelSubmit);

// On page load run it
fetchAndDisplay('pizza');
