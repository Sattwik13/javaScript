# projects related to DOM

## project link
[Click here] (http://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

##  project 1

```javascript
console.log("Sattwik")

const button = document.querySelectorAll('.button');
// console.log(button)
const body = document.querySelector('body');

button.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (chai) {
    console.log(chai);
    console.log(chai.target);
    if (chai.target.id === 'grey') {
      body.style.backgroundColor = chai.target.id;
    } else if (chai.target.id === 'yellow') {
      body.style.backgroundColor = chai.target.id;
    } else if (chai.target.id === 'white') {
      body.style.backgroundColor = chai.target.id;
    } else if (chai.target.id === 'blue') {
      body.style.backgroundColor = chai.target.id;
    } else if (chai.target.id === 'purple') {
      body.style.backgroundColor = chai.target.id;
    }
  });
});

```

## project 2 solution

``` javascript

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `please give a valid height ${height}`;
  }
  // result.innerHTML = `${weight}`;
  else if (weight === '' || weight < 0 || isNaN(height)) {
    result.innerHTML = `please give a valid height ${weight}`;
  }
  // result.innerHTML = `${weight}`;
  else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`;
  }
});

```

## project 3 solution code

```javascript
const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000); // -> 1000 is 1000 milisecond, after 1000 milisecond repeatedly calling

```

## project 4 solution code

```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);
// console.log(`${randomNumber}`);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const LowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('please enter a valid nummber');
  } else if (guess < 1) {
    alert('please enter a number more than 1');
  } else if (guess > 100) {
    alert('Please enter a number less than 100 ');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      // when value excced 10
      cleanUpGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      cleanUpGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage('You guessed it right');
    endGame();
  } else if (guess < randomNumber) {
    displayMessage('Number is TOOO low');
  } else if (guess > randomNumber) {
    displayMessage('Number is TOOO High');
  }
}

function cleanUpGuess(guess) {
  // after a value put,for new value cleanUp
  userInput.value = '';
  guessSlot.innerHTML += `${guess} , `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`; // Remaining guesses
}

function displayMessage(message) {
  LowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disable', 'true');
  p.classList.add('button');
  p.innerHTML = `<h2 id = "newGame"> start new game </h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');

  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    newGuess = 1;
    guessSlot.innerHTML = '';
    LowOrHi.innerHTML = '';
    remaining.innerHTML = `${10 - newGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}

```

# Project 5 solution

```javascript

const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <div class = 'color'>
  <table>
  <tr>
    <th>Key</th>
    <th>Keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'Space' : e.key} </td>  
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  </table>
   </div>  
  `;
});

```

## Project 6 solution code

```javascript
//generating  a random color

const randomColor = function () {
  const hex = '012456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let interValId;

const startChangingColor = function () {
  if (!interValId) {
    interValId = setInterval(changeBgColor, 1000);
  }
  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};

const stopChangingColor = function () {
  clearInterval(interValId);
  interValId = null; // -> refresh value of interValId
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);

```