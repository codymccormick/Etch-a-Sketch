const container = document.getElementById("container");
const boardSize = document.getElementById("size");

boardSize.addEventListener("click", newBoard);

let size = 16;

// Create the drawing board
function populateBoard(size) {
  const cellSize = `calc(100% / ${size})`;
  for (let i = 0; i < size ** 2; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    container.appendChild(cell);
    cell.innerHTML = i + 1;
    cell.style.flexBasis = cellSize;
    cell.addEventListener("mouseover", () => highlight(cell));
  }
}

populateBoard(size);

//Highlight cells on mouse over
const highlight = (cell) => (cell.style.backgroundColor = "blue");

//Removes all child nodes from a parent
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

//Creates a new drawing board of user inputed size. Currently overflows if input is above 20.
function newBoard() {
  newSize = prompt("Enter Board Size");
  if (newSize < 2 || newSize > 20) {
    alert("nope");
    return;
  }
  removeAllChildNodes(container);
  populateBoard(newSize);
}
