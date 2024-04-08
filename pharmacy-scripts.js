document.addEventListener("DOMContentLoaded", function () {
  const pharmacyItemFrame = document.getElementById("pharmacy-item-frame");
  const pharmacyAddButton = document.getElementById("pharmacy-add-button");

  let pharmacyItemRowCounter = 0;

  pharmacyAddButton.addEventListener("click", function () {
    pharmacyItemRowCounter++;

    const pharmacyItemRow = document.createElement("div");
    pharmacyItemRow.className = "item-row";
    pharmacyItemFrame.appendChild(pharmacyItemRow);

    const pharmacyItemLabel = document.createElement("label");
    pharmacyItemLabel.textContent = `Item ${pharmacyItemRowCounter}:`;
    pharmacyItemRow.appendChild(pharmacyItemLabel);

    const pharmacyItemInput = document.createElement("input");
    pharmacyItemInput.type = "text";
    pharmacyItemRow.appendChild(pharmacyItemInput);

    const pharmacyQuantityLabel = document.createElement("label");
    pharmacyQuantityLabel.textContent = "Quantidade:";
    pharmacyItemRow.appendChild(pharmacyQuantityLabel);

    const pharmacyQuantityInput = document.createElement("input");
    pharmacyQuantityInput.type = "text";
    pharmacyItemRow.appendChild(pharmacyQuantityInput);

    const pharmacyRemoveButton = document.createElement("button");
    pharmacyRemoveButton.textContent = "Remover";
    pharmacyRemoveButton.className = "remove-button";
    pharmacyRemoveButton.addEventListener("click", function () {
      pharmacyItemFrame.removeChild(pharmacyItemRow);
    });
    pharmacyItemRow.appendChild(pharmacyRemoveButton);
  });
});
