let cart = [];
let total = 0;

function addToCart(productName, price) {
  cart.push({ name: productName, price: price });
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById('cart-items');
  const totalDisplay = document.getElementById('total');

  
  if (!cartList || !totalDisplay) return;

  cartList.innerHTML = '';
  total = 0;

  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ${item.price} بلبل`;
    cartList.appendChild(li);
    total += item.price;
  });

  totalDisplay.textContent = `المجموع: ${total} بلبل`;
}
