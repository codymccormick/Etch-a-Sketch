// Get the container div
const container = document.getElementById("container");

// Create the cells
for (let i = 0; i < 256; i++) {
	const cell = document.createElement("div");
	cell.classList.add("cell");
	container.appendChild(cell);
}
