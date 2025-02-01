const btn = document.querySelector("div");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener("mouseover", () => {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});
