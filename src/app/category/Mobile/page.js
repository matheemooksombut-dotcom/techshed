import React from "react";
import NavbarCompounent from "../../../../components/NavbarCompounent";
import { categories } from "@/data/categories";



const mobileProducts = [
  ["SALE", "Smartphone Z Pixel Max 128GB Unlocked", "$70.00", "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=700&q=80"],
  ["SALE", "OVE Light Space 5G, 128GB", "$70.00", "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=700&q=80"],
  ["", "Nova X Pro Smartphone 256GB", "$85.00", "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=700&q=80"],
  ["SALE", "UltraCharge Wireless Charging Pad", "$70.00", "https://images.unsplash.com/photo-1616410011236-7a42121dd981?auto=format&fit=crop&w=700&q=80"],
  ["", "ClearShield Phone Case & Screen Kit", "$85.00", "https://images.unsplash.com/photo-1603313011101-320f26a4f6f6?auto=format&fit=crop&w=700&q=80"],
  ["SALE", "PowerGo 20K Portable Battery Pack", "$70.00", "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=700&q=80"],
  ["SALE", "Dual USB-C Fast Wall Charger", "$70.00", "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=700&q=80"],
  ["", "Phone Camera Lens Clip-on Kit", "$85.00", "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=700&q=80"],
];


export default function Mobile() {
  return (
    <>
    <NavbarCompounent/>
    <main className="mobile-page">
        

    

      <section className="hero">
        <div>
          <div className="breadcrumb">Home / Mobile</div>
          <h1>Mobile</h1>
          <p>Shop unlocked smartphones, 5G devices, chargers, cases, mounts, and everyday mobile accessories for life on the move.</p>
        </div>
      </section>

      <section className="shop-layout">
        <aside className="filters" aria-label="Mobile filters">
          <div className="filter-block">
            <h2>Browse by</h2>
            {categories.map((item) => (
              <label key={item}>
                <input type="checkbox" defaultChecked={item === "Mobile"} />
                <span>{item}</span>
              </label>
            ))}
          </div>
          <div className="filter-block">
            <h2>Mobile Type</h2>
            <label><input type="checkbox" /> Smartphones</label>
            <label><input type="checkbox" /> Chargers</label>
            <label><input type="checkbox" /> Cases</label>
            <label><input type="checkbox" /> Accessories</label>
          </div>
          <div className="filter-block">
            <h2>Price</h2>
            <div className="range-line" />
            <div className="price-row">
              <span>$0</span>
              <span>$100</span>
            </div>
          </div>
        </aside>

        <div>
          <div className="shop-toolbar">
            <span>9 products</span>
            <div className="sort">
              <span>Sort by:</span>
              <select aria-label="Sort mobile products" defaultValue="recommended">
                <option value="recommended">Recommended</option>
                <option value="newest">Newest</option>
                <option value="low">Price Low to High</option>
                <option value="high">Price High to Low</option>
              </select>
            </div>
          </div>

          <div className="product-grid">
            {mobileProducts.map(([label, name, price, image]) => (
              <article className="product" key={name}>
                {label && <span className="sale">{label}</span>}
                <img src={image} alt={name} />
                <div className="product-body">
                  <h3>{name}</h3>
                  {label && <span className="regular">$85.00</span>}
                  <span className="price">{price}</span>
                  <button className="quick-add" type="button">Add to Cart</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="feature-strip">
        <div className="feature"><strong>Unlocked phones</strong><span>Flexible devices for everyday use.</span></div>
        <div className="feature"><strong>Fast charging</strong><span>Power banks, pads, and USB-C gear.</span></div>
        <div className="feature"><strong>Protected daily</strong><span>Cases, mounts, and screen kits.</span></div>
      </section>

      <section className="newsletter">
        <div>
          <h2>Sign up for mobile deals</h2>
          <p>Get updates about smartphones, chargers, cases, and accessories.</p>
        </div>
        <form>
          <input aria-label="Email address" placeholder="Email address" />
          <button className="btn" type="button">Subscribe</button>
        </form>
      </section>

      <footer className="footer">
        <div>
          <div className="logo">TechShed</div>
          <p>Mobile category page inspired by the Wix TechShed store layout.</p>
        </div>
        <div>
          <h3>Store</h3>
          <a href="#shop">Shop All</a>
          <a href="#mobile">Mobile</a>
          <a href="#sale">Sale</a>
        </div>
        <div>
          <h3>Policy</h3>
          <a href="#shipping">Shipping</a>
          <a href="#returns">Returns</a>
          <a href="#terms">Terms</a>
        </div>
        <div>
          <h3>Contact</h3>
          <a href="tel:1234567890">123-456-7890</a>
          <a href="mailto:info@techshed.demo">info@techshed.demo</a>
        </div>
      </footer>
    </main>
</>
  );
}
