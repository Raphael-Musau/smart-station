
let cart = [];
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.dataset.product;
        const price = parseInt(button.dataset.price);
        cart.push({ product, price });
        updateCart();
    });
});

function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.product} - KES ${item.price}`;
        cartItems.appendChild(li);
        total += item.price;
    });
    cartTotal.textContent = `KES ${total}`;
}

document.getElementById('checkout').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    if (!email) {
        alert('Please enter your email to proceed.');
        return;
    }
    alert(`Thank you for your purchase! Resources will be sent to: ${email}`);
    cart = [];
    updateCart();
});
