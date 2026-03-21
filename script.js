let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
  document.body.classList.add("cart-open");
}

function updateCart() {
  const items = document.getElementById("cart-items");
  items.innerHTML = cart
    .map(item => `<p class="border-b py-2">${item.name} — ${item.price} DKK</p>`)
    .join("");

  document.getElementById("cart-count").innerText = cart.length;
  document.getElementById("total").innerText = cart.reduce((t, i) => t + i.price, 0);
}

function toggleCart() {
  document.body.classList.toggle("cart-open");
}

function scrollToMenu() {
  document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
}
