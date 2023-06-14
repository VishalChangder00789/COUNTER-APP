const displayContainer = document.getElementById("Display_CounterContainer_id");
let count = 0;
displayContainer.innerHTML = count;

function handleIncrement() {
  count++;
  displayContainer.innerHTML = count;
}

function handleDecrement() {
  if (count > 0) {
    count--;
  }
  displayContainer.innerHTML = count;
}

function handleReset() {
  count = 0;
  displayContainer.innerHTML = 0;
}
