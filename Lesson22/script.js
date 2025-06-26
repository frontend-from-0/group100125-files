// Increment quantity of an element in the cart when "add to cart button" on a product is clicked

// If remove item from cart is clicked, we will hide the item and set quantity to 0

// If we click 'clear cart', then we hide all elements in the cart

// If we add/remove an items to the cart, total price should be updated

const products = [
  {
    name: 'apples',
    addButtonId: 'apples_add',
    quantityId: 'apples_quantity',
    removeButtonId: 'apples_remove',
    cartId: 'apples_cart',
  },
  {
    name: 'bananas',
    addButtonId: 'bananas_add',
    quantityId: 'bananas_quantity',
    removeButtonId: 'bananas_remove',
    cartId: 'bananas_cart',
  },
  {
    name: 'bread',
    addButtonId: 'bread_add',
    quantityId: 'bread_quantity',
    removeButtonId: 'bread_remove',
    cartId: 'bread_cart',
  },
  {
    name: 'eggs',
    addButtonId: 'eggs_add',
    quantityId: 'eggs_quantity',
    removeButtonId: 'eggs_remove',
    cartId: 'eggs_cart',
  },
];

products.map((product) => {
  document
    .getElementById(product.addButtonId)
    .addEventListener('click', () => addToCart(product.cartId, product.quantityId));

  document
    .getElementById(product.removeButtonId)
    .addEventListener('click', () =>
      removeFromCart(product.cartId, product.quantityId),
    );
});

function addToCart(cartId, quantityElementId) {
  const productCart = document.getElementById(cartId);
  const quantityElement = document.getElementById(quantityElementId);
  let quantity = parseInt(quantityElement.textContent);
  quantity++;
  productCart.classList.remove('hidden');
  quantityElement.textContent = quantity;
}

function removeFromCart(cartId, quantityId) {
  const productCart = document.getElementById(cartId);
  productCart.classList.add('hidden');
  const quantityElement = document.getElementById(quantityId);
  quantityElement.textContent = 0;
}
