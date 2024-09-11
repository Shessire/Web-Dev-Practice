const form = document.querySelector('form');
const product = document.querySelector('#product');
const quantity = document.querySelector('#qty');
const list = document.querySelector('#list');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const productV = product.value;
    const quantityV = quantity.value;
    const li = document.createElement("li");
    if(quantityV > 1) {
        li.innerText = `${quantityV} ${productV}s`;
    } else {
        li.innerText = `${quantityV} ${productV}`;
    }
    list.append(li);
    form.reset();
    product.value = "";
    quantity.value = "";
})