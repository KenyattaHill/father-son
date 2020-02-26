const box = document.getElementById('box');
// console.log(box); // this is what I was trying to have you do before? Im still not sure why that didn't work.

// arrow function versions

// const grow = () => { };
// const turnBlue = () => { };
// const fade = () => { };
// const reset = () => { };

const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');

// set button on click events
// I did not use the onClick to register the function that handles the click because that is an old way of handling events.
// using the addEventListener allows multiple event hanlders to be registered to one element. THe onClick way overwites the previous function.

button1.addEventListener('click', grow);
button2.addEventListener('click', turnBlue);
button3.addEventListener('click', fade);
button4.addEventListener('click', reset)

// Make the box grow
function grow() {
  // the box has a width of 150px and a height of 150px
  // lets make the box grow to 200px by 200px
  box.style.width = '200px';
  box.style.height = '200px';
}
// make the box turn blue
function turnBlue() {
  // the box starts out as orange
  // we need to turn the box blue
  box.style.backgroundColor = 'blue';
}
// make the box fade away
function fade() {
  // the box starts out with 100% opacity ranges from 0 to 1
  // set the opacity of the box to .5;
  box.style.opacity = '0.5';
}
// reset the box back to original state
function reset() {
  // now we reset the box back to the original state

  // box size
  box.style.height = '150px';
  box.style.width = '150px';

  // box color
  box.style.backgroundColor = 'orange';

  // box opacity
  box.style.opacity = '1';
}
