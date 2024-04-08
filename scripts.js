document.addEventListener("DOMContentLoaded", function () {
  const itemFrame = document.getElementById("item-frame");
  const addButton = document.getElementById("add-button");

  let itemRowCounter = 0;

  addButton.addEventListener("click", function () {
    itemRowCounter++;

    const itemRow = document.createElement("div");
    itemRow.className = "item-row";
    itemFrame.appendChild(itemRow);

    const itemLabel = document.createElement("label");
    itemLabel.textContent = `Item ${itemRowCounter}:`;
    itemRow.appendChild(itemLabel);

    const itemInput = document.createElement("input");
    itemInput.type = "text";
    itemRow.appendChild(itemInput);

    const quantityLabel = document.createElement("label");
    quantityLabel.textContent = "Quantidade:";
    itemRow.appendChild(quantityLabel);

    const quantityInput = document.createElement("input");
    quantityInput.type = "text";
    itemRow.appendChild(quantityInput);

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remover";
    removeButton.className = "remove-button";
    removeButton.addEventListener("click", function () {
      itemFrame.removeChild(itemRow);
    });
    itemRow.appendChild(removeButton);
  });
});
