function boardSize(size) {
  let board = document.querySelector(".board");
  let sqaures = board.querySelectorAll("div");
  sqaures.forEach((div) => div.remove());
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    let pixel = document.createElement("div");

    pixel.addEventListener("mouseover", () => {
      pixel.style.backgroundColor = "black";
    });
    // pixel.style.backgroundColor = "blue";
    board.insertAdjacentElement("beforeend", pixel);
  }
}

boardSize(16);

// try input.value for boardSize parameter after commenting the onchange  line
function changeBoardSize(input) {
  if (input >= 2 && input <= 100) {
    boardSize(input);
  } else {
    console.log("Too many squares");
  }
}

// function randomColor() {
//   let random = document.querySelector(".random");
//   random.addEventListener("click"), function () {};
// }
