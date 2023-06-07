let itemList = [];
const elementInput = document.querySelector(".input");
function formEvent(event) {
  event.preventDefault();
  itemList.push(elementInput.value);
  generateItems();
}
function removeItem(j) {
  itemList.splice(j, 1);
  generateItems();
}
function generateItems() {
  const elementList = document.querySelector(".list");
  elementList.innerHTML = "";
  for (let i = 0; i < itemList.length; i++) {
    elementList.innerHTML += `<li><span class="content">${itemList[i]}</span> <button class="button button-remove" type="button" onclick="removeItem(${i})"><span class="material-symbols-outlined icon-size">
    delete
    </span></button></li>`;
    elementInput.value = "";
  }
  changeQuantity();
}
function changeQuantity() {
  const elementTotal = document.querySelector(".total");
  elementTotal.textContent = itemList.length;
}
function removeAll() {
  itemList = [];
  generateItems();
}
