let cart = [];
let total = 0;

async function getPrice(productName) {
    let res = await fetch("../backend/get_products.php");
    let data = await res.json();

    let item = data.find(p => p.name.toLowerCase() === productName.toLowerCase());

    return item ? item.price : 0;
}

async function addItem() {
    let name = document.getElementById("product").value;
    let qty = document.getElementById("qty").value;

    let price = await getPrice(name);

    if (price === 0) {
        alert("Product not found");
        return;
    }

    let itemTotal = price * qty;
    total += itemTotal;

    cart.push({name, qty, price});

    let row = `<tr>
        <td>${name}</td>
        <td>${qty}</td>
        <td>${price}</td>
        <td>${itemTotal}</td>
    </tr>`;

    document.getElementById("billTable").innerHTML += row;
    document.getElementById("total").innerText = total;
}

function generateBill() {

    fetch("../backend/create_bill.php", {
        method: "POST",
        body: JSON.stringify({ total: total })
    });

    // Show QR
    document.getElementById("qrSection").style.display = "block";

    setTimeout(() => {
        window.print();
    }, 1000);
}
