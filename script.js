const canvas = document.getElementById("canvas");
const boardSize = document.getElementById("adjustSize");

boardSize.addEventListener("click", newBoard);

let size = 16;

// Create the drawing board
function populateBoard(size) {
  const cellSize = `calc(100% / ${size})`;
  for (let i = 0; i < size ** 2; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    canvas.appendChild(cell);
    cell.style.flexBasis = cellSize;
    cell.addEventListener("mouseover", () => highlight(cell));
  }
}

populateBoard(size);

//Highlight cells on mouse over
const highlight = (cell) => {
  const colorInput = document.getElementById("colorSelect");
  cell.style.backgroundColor = colorInput.value;
};

//Creates a new drawing board of user inputed size up to 100x100
function newBoard() {
  size = prompt("Enter Board Size");
  if (size < 2 || size > 100) {
    alert("Please choose a number between 2 and 100");
    return;
  }
  removeAllChildNodes(canvas);
  populateBoard(size);

  //Removes all child nodes from a parent
  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }
}