let btnAdd = document.querySelector('#add');
let btnCal = document.querySelector('#calculate');
let table = document.querySelector('table');
let nameInput = document.querySelector('#name');
let codeInput = document.querySelector('#code');
let priceInput = document.querySelector('#price');
let quantityInput = document.querySelector('#quantity');
btnAdd.addEventListener('click',() => {
    let name = nameInput.value;
    let code = codeInput.value;
    let price = priceInput.value;
    let quantity = quantityInput.value;
    let template = `<tr>
    <td>${name}</td>
    <td>${code}</td>
    <td>${price}</td>
    <td>${quantity}</td>
    </tr>`;
    table.innerHTML += template;
});
btnCal.addEventListener("click", () => {
  var mytab = document.getElementById("mytab");
  let total = 0;

  for (i = 1; i < mytab.rows.length; i++) {
    var obj = mytab.rows.item(i).cells;
    total += parseInt(obj.item(2).innerHTML) * parseInt(obj.item(3).innerHTML);
  }
  info.innerHTML = "Total price to be paid is Rs. " + total;
});