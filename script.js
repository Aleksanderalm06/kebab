let cart = JSON.parse(localStorage.getItem("cart")) || [];
/* GEM & OPDATER */
function save() {
  localStorage.setItem("cart", JSON.stringify(cart));
}
/* GÅ HJEM */
function goHome() {
  window.location = "index.html";
}
/* ÅBN / LUK KURV */
function toggleCart() {
  document.body.classList.toggle("cart-open");
  updateCart();
}
/* TILFØJ TIL KURV */
function addToCart(name, price) {
  cart.push({ name, price });
  save();
  updateCart();
  document.body.classList.add("cart-open");
}
/* ÅBN PRODUKT (tilføj direkte til kurv) */
function openProduct(name, price, img) {
  addToCart(name, price);
}
/* FJERN FRA KURV */
function removeFromCart(index) {
  cart.splice(index, 1);
  save();
  updateCart();
}
/* OPDATER KURV */
function updateCart() {
  const items = document.getElementById("cart-items");
  const total = document.getElementById("total");
  const count = document.getElementById("cart-count");
  if (!items) return;
  items.innerHTML = cart
    .map((i, idx) => `<div class='cart-item py-2 border-b flex justify-between items-center'>
      <span>${i.name} – ${i.price} kr.</span>
      <button onclick="removeFromCart(${idx})" class="remove-btn" title="Fjern">&times;</button>
    </div>`)
    .join("");
  if (total) total.innerText = cart.reduce((s,i)=> s+i.price, 0);
  if (count) count.innerText = cart.length;
  save();
}
/* SCROLL TIL KATEGORI */
function scrollToCategory(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}
/* CHECKOUT: UDFYLD OVERSIGT */
if (window.location.pathname.includes("checkout")) {
  const summary = document.getElementById("summary");
  summary.innerHTML = cart
    .map(i => `<div class='py-2 border-b'>${i.name} – ${i.price} kr.</div>`)
    .join("");
}
/* BEKRÆFT ORDRE */
function confirmOrder() {
  if (!cart.length) {
    alert("Din kurv er tom.");
    return;
  }
  cart = [];
  save();
  window.location = "confirmation.html";
}
/* INITIALISERING */
updateCart();
