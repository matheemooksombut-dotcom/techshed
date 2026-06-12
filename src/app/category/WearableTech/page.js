import React from "react";

const products = [
  ["SALE", "Fitboot Inspire Fitness Tracker With Heart Rate Tracking", "$70.00", "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&w=700&q=80"],
  ["SALE", "Space Moon Smartwatch With Charger", "$70.00", "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=80"],
  ["", "Active Pro GPS Running Watch", "$85.00", "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=700&q=80"],
  ["SALE", "Journey Glass XD Virtual Reality Headset", "$70.00", "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&w=700&q=80"],
  ["", "Pulse Ring Smart Health Monitor", "$85.00", "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=700&q=80"],
  ["SALE", "Kids Move Activity Tracker", "$70.00", "https://images.unsplash.com/photo-1557935728-e6d1eaabe558?auto=format&fit=crop&w=700&q=80"],
  ["", "Smartwatch Magnetic Charging Dock", "$85.00", "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=700&q=80"],
  ["SALE", "Sport Watch Band Three Pack", "$70.00", "https://images.unsplash.com/photo-1617043786394-f977fa12eddf?auto=format&fit=crop&w=700&q=80"],
  ["", "Sleep & Recovery Fitness Band", "$85.00", "https://images.unsplash.com/photo-1510017803434-a899398421b3?auto=format&fit=crop&w=700&q=80"],
];




import NavbarCompounent from "../../../../components/NavbarCompounent";
import { categories } from "@/data/categories";

export default function WearableTech() {
  return (
    <main className="wearable-page">
    
        <NavbarCompounent/>
      <section className="hero">
        <div>
          <div className="breadcrumb">Home / Wearable Tech</div>
          <h1>Wearable Tech</h1>
          <p>Track fitness, stay connected, and explore immersive technology with smartwatches, activity bands, VR headsets, and accessories.</p>
        </div>
      </section>

      <section className="shop-layout">
        <aside className="filters" aria-label="Wearable technology filters">
          <div className="filter-block">
            <h2>Browse by</h2>
            {categories.map((item) => (
              <label key={item}>
                <input type="checkbox" defaultChecked={item === "WearableTech"} />
                <span>{item}</span>
              </label>
            ))}
          </div>
          <div className="filter-block">
            <h2>Product Type</h2>
            <label><input type="checkbox" /> Smartwatches</label>
            <label><input type="checkbox" /> Fitness Trackers</label>
            <label><input type="checkbox" /> VR Headsets</label>
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
              <select aria-label="Sort wearable technology" defaultValue="recommended">
                <option value="recommended">Recommended</option>
                <option value="newest">Newest</option>
                <option value="low">Price Low to High</option>
                <option value="high">Price High to Low</option>
              </select>
            </div>
          </div>

          <div className="product-grid">
            {products.map(([label, name, price, image]) => (
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
        <div className="feature"><strong>Health insights</strong><span>Track activity, sleep, and heart rate.</span></div>
        <div className="feature"><strong>Stay connected</strong><span>Notifications and controls on your wrist.</span></div>
        <div className="feature"><strong>Immersive technology</strong><span>VR gear for games and experiences.</span></div>
      </section>

      <section className="newsletter">
        <div>
          <h2>Sign up for wearable deals</h2>
          <p>Get updates about smartwatches, fitness trackers, VR gear, and accessories.</p>
        </div>
        <form>
          <input aria-label="Email address" placeholder="Email address" />
          <button className="btn" type="button">Subscribe</button>
        </form>
      </section>

      <footer className="footer">
        <div>
          <div className="logo">TechShed</div>
          <p>Wearable technology category page inspired by the Wix TechShed store layout.</p>
        </div>
        <div>
          <h3>Store</h3>
          <a href="#shop">Shop All</a>
          <a href="#wearables">Wearable Tech</a>
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
  );
}
