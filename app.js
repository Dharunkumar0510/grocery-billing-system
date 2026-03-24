// ✅ LOAD PRODUCTS FROM STORAGE OR DEFAULT
let products = JSON.parse(localStorage.getItem("products")) || [
    {name:"Rice", price:50},
    {name:"Dhal", price:80},
    {name:"Bath Soap", price:35},
    {name:"Washing Soap", price:25},
    {name:"Masala Powder", price:60}
];

let cart = [];
let total = 0;

// ✅ SAVE PRODUCTS
function saveProducts() {
    localStorage.setItem("products", JSON.stringify(products));
}

// ✅ ADD PRODUCT (FIXED)
function addProduct() {
    let name = document.getElementById("pname").value.trim();
    let price = document.getElementById("pprice").value;

    if (name === "" || price === "") {
        alert("Enter product name and price");
        return;
    }

    price = Number(price);

    // check duplicate
    let exists = products.find(p => 
        p.name.toLowerCase() === name.toLowerCase()
    );

    if (exists) {
        alert("Product already exists");
        return;
    }

    products.push({ name, price });
    saveProducts();

    alert("✅ Product Added Successfully");

    // clear fields
    document.getElementById("pname").value = "";
    document.getElementById("pprice").value = "";

    console.log(products); // debug
}

// ✅ FIND PRODUCT (CASE INSENSITIVE)
function findProduct(name) {
    return products.find(p =>
        p.name.toLowerCase() === name.toLowerCase()
    );
}

// ✅ ADD TO BILL
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

    let row = `<tr>
        <td>${name}</td>
        <td>${qty}</td>
        <td>${product.price}</td>
        <td>${itemTotal}</td>
    </tr>`;

    document.getElementById("bill").innerHTML += row;
    document.getElementById("total").innerText = total;
}

// ✅ GENERATE BILL
function generateBill() {
    alert("Bill Generated");
}
