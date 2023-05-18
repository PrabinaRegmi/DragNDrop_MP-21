const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

// in our project dragged element is fill and drop targets are empties
// https://developer.mozilla.org/en-US/docs/Web/API/DragEvent

// dragstart and dragend events are used for dragged element
// event is always lowercase
fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

// dragover, dragenter, dragleave, drop events are fired in association with drop target
empties.forEach((empty) => {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
});

function dragStart() {
  this.classList.add("hold");
  setTimeout(() => {
    this.className = "invisible";
  }, 0);
}

function dragEnd() {
  fill.className = "fill";
}

function dragEnter(e) {
  e.preventDefault();
  this.classList.add("hovered");
}

function dragOver(e) {
  e.preventDefault();
}

function dragLeave() {
  this.classList.remove("hovered");
}

function dragDrop() {
  this.className = "empty";
  this.append(fill);
}
