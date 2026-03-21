let cart = [];
function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
  document.body.classList.add("cart-open");
}
function updateCart() {
  const items = document.getElementById("cart-items");
  items.innerHTML = cart
    .map(i => `<p class="border-b border-red-600 py-2">${i.name} — ${i.price} DKK</p>`)
    .join("");
  document.getElementById("cart-count").innerText = cart.length;
  document.getElementById("total").innerText = cart.reduce((s, i) => s + i.price, 0);
}
function toggleCart() {
  document.body.classList.toggle("cart-open");
}
function scrollToMenu() {
  document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
}
function scrollToCategory(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}
function openProduct(name, price, img) {
  document.getElementById("modal-title").innerText = name;
  document.querySelector(".modal-price").innerText = price + " DKK";
  document.getElementById("modal-img").src = img;
  document.getElementById("modal-add").onclick = () => {
    addToCart(name, price);
    closeProduct();
  };
  document.getElementById("product-modal").classList.remove("hidden");
}
function closeProduct() {
  document.getElementById("product-modal").classList.add("hidden");
}
