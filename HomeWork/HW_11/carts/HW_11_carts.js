// взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
function fetchAndDisplayCarts() {
    fetch('https://dummyjson.com/carts')
        .then(response => response.json())
        .then(data => {
            let cartContainer = document.getElementById('cart-container');
            cartContainer.innerHTML = '';

            data.carts.forEach(cart => {
                let cartDiv = document.createElement('div');
                cartDiv.classList.add('cart');


                cartDiv.innerHTML = `
                            <h2>Cart ID: ${cart.id}</h2>
                            <p>User ID: ${cart.userId}</p>
                            <p>Total Products: ${cart.totalProducts}</p>
                            <p>Total Quantity: ${cart.totalQuantity}</p>
                            <p>Total: $${cart.total.toFixed(2)}</p>
                            <p>Discounted Total: $${cart.discountedTotal.toFixed(2)}</p>
                            <h3>Products:</h3>
                            <ul>
                                ${cart.products.map(product => `
                                    <li class="product">
                                        <p>Product ID: ${product.id}</p>
                                        <p>Title: ${product.title}</p>
                                        <p>Price: $${product.price.toFixed(2)}</p>
                                        <p>Quantity: ${product.quantity}</p>
                                        <p>Total: $${product.total.toFixed(2)}</p>
                                        <p>Discount Percentage: ${product.discountPercentage.toFixed(2)}%</p>
                                        <p>Discounted Total: $${product.discountedTotal.toFixed(2)}</p>
                                        <img src="${product.thumbnail}" alt="${product.title}">
                                    </li>
                                `).join('')}
                            </ul>
                        `;

                cartContainer.appendChild(cartDiv);
            });
        })
        .catch(error => {
            console.error('Error', error);
        });
}

fetchAndDisplayCarts();