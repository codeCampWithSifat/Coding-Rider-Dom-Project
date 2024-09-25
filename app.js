/*
 * Project Requirements
 * Change The background color by generating random rgb color
 */

// step 1  create a onload function

window.onload = () => {
  main();
};

function main() {
  const root = document.getElementById("root");
  const btn = document.getElementById("change-btn");
}

//  step 2 -- random color generator function
function generateRGBColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `rgb(${red}, ${green}, ${blue})`;
}

console.log(generateRGBColor());
