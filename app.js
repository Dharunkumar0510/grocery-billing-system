let products = JSON.parse(localStorage.getItem("products")) || [
    {name:"Rice", price:50},
    {name:"Dhal", price:80},
    {name:"Bath Soap", price:35},
    {name:"Washing Soap", price:25},
    {name:"Masala Powder", price:60}
];

let cart = [];
let total = 0;

function saveProducts() {
    localStorage.setItem("products", JSON.stringify(products));
}

function addProduct() {
    let name = document.getElementById("pname").value;
    let price = document.getElementById("pprice").value;

    products.push({name, price});
    saveProducts();

    alert("Product Added");
}

function findProduct(name) {
    return products.find(p => p.name.toLowerCase() === name.toLowerCase());
}

function addToCart() {
    let name = document.getElementById("search").value;
    let qty = document.getElementById("qty").value;

    let product = findProduct(name);

    if (!product) {
        alert("Product not found");
        return;
    }

    let itemTotal = product.price * qty;
    total += itemTotal;

    cart.push({name, qty, price: product.price});

    let row = `<tr>
        <td>${name}</td>
        <td>${qty}</td>
        <td>${product.price}</td>
        <td>${itemTotal}</td>
    </tr>`;

    document.getElementById("bill").innerHTML += row;
    document.getElementById("total").innerText = total;
}

function generateBill() {
    document.getElementById("qr").style.display = "block";
    setTimeout(() => window.print(), 1000);
}
