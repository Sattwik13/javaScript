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