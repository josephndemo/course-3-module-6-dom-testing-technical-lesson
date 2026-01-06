function addItem() {
  const list = document.getElementById("item-list");
  const newItem = document.createElement("li");
  newItem.textContent = "New Item";
  list.appendChild(newItem);
}

document.getElementById("add-item").addEventListener("click", addItem);