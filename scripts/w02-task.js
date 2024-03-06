/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Chase Wallace';
let currentYear = 'year';
let profilePicture = 'images/fampic.jpeg';


/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');

const foodElement = document.getElementById('food');

const yearElement = document.querySelector('#year');

const imageElement = document.querySelector('img');
/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;

currentYear.textContent = '2024';

imageElement.setAttribute('src', profilePicture);

imageElement.setAttribute('alt', 'Profile image of Chase Wallace');

/* Step 5 - Array */

const food = [" Pizza", " Ice cream", " Apples", " Peaches", " Spaghetti"];

foodElement.innerHTML += `<br>${food}`;

const chicken = food.push(" Chicken");

foodElement.innerHTML += `<br>${food}`;

food.shift();

foodElement.innerHTML += `<br>${food}`;

food.pop();

foodElement.innerHTML += `<br>${food}`;



