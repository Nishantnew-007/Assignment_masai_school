document.getElementById('itemForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const itemName = document.getElementById('itemName').value;
    const itemQuantity = document.getElementById('itemQuantity').value;

    addItemToList(itemName, itemQuantity);

    // Clear the input fields
    this.reset();
});

function addItemToList(name, quantity) {
    const list = document.getElementById('shoppingList');

    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <span>${name} (Quantity: ${quantity})</span>
        <button class="edit">Edit</button>
        <button class="remove">Remove</button>
    `;

    // Add event listeners for Edit and Remove buttons
    listItem.querySelector('.edit').addEventListener('click', function() {
        editItem(listItem, name, quantity);
    });

    listItem.querySelector('.remove').addEventListener('click', function() {
        listItem.remove();
    });

    list.appendChild(listItem);
}

function editItem(listItem, oldName, oldQuantity) {
    const newName = prompt('Enter new item name:', oldName);
    const newQuantity = prompt('Enter new quantity:', oldQuantity);

    if (newName && newQuantity) {
        listItem.querySelector('span').textContent = `${newName} (Quantity: ${newQuantity})`;
    }
}
