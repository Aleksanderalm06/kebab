body {
  font-family: 'Inter', sans-serif;
}
.font-bebas {
  font-family: 'Bebas Neue', sans-serif;
}
/* Buttons */
.btn-red {
  background: #dc2626;
  color: white;
  font-weight: 700;
  transition: 0.2s;
}
.btn-red:hover {
  background: #b91c1c;
  transform: scale(1.05);
}
.btn-outline {
  border: 2px solid white;
  color: white;
  font-weight: 700;
  transition: 0.2s;
}
.btn-outline:hover {
  background: white;
  color: black;
}
.btn-red-small {
  background: #dc2626;
  padding: 6px 14px;
  border-radius: 6px;
  font-weight: bold;
  transition: 0.2s;
}
.btn-red-small:hover {
  background: #b91c1c;
}
/* Titles */
.section-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 54px;
  color: #dc2626;
  text-shadow: 0 0 10px rgba(255,0,0,0.4);
}
/* Menu cards */
.menu-card {
  background: #111;
  border: 2px solid #dc2626;
  border-radius: 14px;
  overflow: hidden;
  transition: 0.3s;
}
.menu-card:hover {
  transform: scale(1.04);
  box-shadow: 0 0 20px rgba(255,0,0,0.3);
}
.menu-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.item-title {
  font-family: 'Bebas Neue';
  font-size: 32px;
  color: white;
}
.item-desc {
  color: #aaa;
}
.item-price {
  color: #dc2626;
  font-size: 20px;
  font-weight: bold;
}
/* Cart */
.cart-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: none;
  z-index: 40;
}
.cart-panel {
  position: fixed;
  top: 0;
  right: 0;
  width: 340px;
  height: 100%;
  background: #111;
  border-left: 3px solid #dc2626;
  padding: 22px;
  transform: translateX(100%);
  transition: 0.3s;
  z-index: 50;
}
body.cart-open .cart-overlay {
  display: block;
}
body.cart-open #cart {
  transform: translateX(0);
}
/* Sticky CTA */
.sticky-cta {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 60;
}
