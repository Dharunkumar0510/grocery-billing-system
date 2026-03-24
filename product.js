let products = JSON.parse(localStorage.getItem("products")) || [];

function loadProducts() {
    let table = document.getElementById("productTable");

    products.forEach((p, index) => {
        let row = `
        <tr>
            <td>${p.name}</td>
            <td>${p.price}</td>
            <td>
                <button onclick="deleteProduct(${index})">Delete</button>
            </td>
        </tr>`;
        table.innerHTML += row;
    });
}

function deleteProduct(index) {
    products.splice(index, 1);
    localStorage.setItem("products", JSON.stringify(products));
    location.reload();
}

loadProducts();
