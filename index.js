const button = document.querySelector("button");
const body = document.querySelector("body");
const color = ['red', 'blue', 'white', 'green', 'yellow', 'pink', 'purple'];

body.style.backgroundColor = 'grey';

button.addEventListener('click', changeBackground)

function changeBackground() {
    const colorIndex = parseInt(Math.random() * color.length);
    body.style.backgroundColor = color[colorIndex];
}