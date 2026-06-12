import React from "react";
import NavbarCompounent from "../../../../components/NavbarCompounent";
import { categories } from "@/data/categories";


const tablets = [
  ["SALE", "JP - Space Tablet 10.4\" Wi-Fi 32GB", "$70.00", "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=700&q=80"],
  ["SALE", "Ocean Pro 11 - 12.3\" Touch Screen", "$70.00", "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?auto=format&fit=crop&w=700&q=80"],
  ["", "TabGo Mini 8\" Wi-Fi Kids Edition", "$85.00", "https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=700&q=80"],
  ["SALE", "StudioPad 12\" Drawing Tablet Bundle", "$70.00", "https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?auto=format&fit=crop&w=700&q=80"],
  ["", "NoteSlate 10\" Tablet With Pen", "$85.00", "https://images.unsplash.com/photo-1527698266440-12104e498b76?auto=format&fit=crop&w=700&q=80"],
  ["SALE", "FlexTab 11\" Keyboard Cover Combo", "$70.00", "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=700&q=80"],
  ["", "Tablet Stand Adjustable Aluminum Dock", "$85.00", "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=700&q=80"],
  ["SALE", "ViewMax 13\" Tablet 128GB LTE", "$70.00", "https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?auto=format&fit=crop&w=700&q=80"],
  ["", "Protective Tablet Sleeve & Stylus Kit", "$85.00", "https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&w=700&q=80"],
];


  

export default function Tablets() {
  return (
    <>
    <NavbarCompounent/>
      <main className="tablets-page">
  


        <section className="hero-tablet">
          <div>
            <div className="breadcrumb">Home / Tablets</div>
            <h1>Tablets</h1>
            <p>Browse lightweight tablets, pen-ready screens, keyboard bundles, and accessories for streaming, drawing, work, and travel.</p>
          </div>
        </section>

        <section className="shop-layout">
          <aside className="filters" aria-label="Tablet filters">
            <div className="filter-block">
              <h2>Browse by</h2>
              {categories.map((item) => (
                <label key={item}>
                  <input type="checkbox" defaultChecked={item === "Tablets"} />
                  <span>{item}</span>
                </label>
              ))}
            </div>
            <div className="filter-block">
              <h2>Tablet Type</h2>
              <label><input type="checkbox" /> Wi-Fi Tablets</label>
              <label><input type="checkbox" /> LTE Tablets</label>
              <label><input type="checkbox" /> Drawing Tablets</label>
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
                <select aria-label="Sort tablets" defaultValue="recommended">
                  <option value="recommended">Recommended</option>
                  <option value="newest">Newest</option>
                  <option value="low">Price Low to High</option>
                  <option value="high">Price High to Low</option>
                </select>
              </div>
            </div>

            <div className="product-grid">
              {tablets.map(([label, name, price, image]) => (
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
          <div className="feature"><strong>Portable power</strong><span>Lightweight devices for daily tasks.</span></div>
          <div className="feature"><strong>Creative ready</strong><span>Pen and keyboard friendly choices.</span></div>
          <div className="feature"><strong>Low prices guaranteed</strong><span>Selected tablet deals updated often.</span></div>
        </section>

        <section className="newsletter">
          <div>
            <h2>Sign up for tablet deals</h2>
            <p>Get updates about tablets, styluses, cases, and keyboard bundles.</p>
          </div>
          <form>
            <input aria-label="Email address" placeholder="Email address" />
            <button className="btn" type="button">Subscribe</button>
          </form>
        </section>

        <footer className="footer">
          <div>
            <div className="logo">TechShed</div>
            <p>Tablet category page inspired by the Wix TechShed store layout.</p>
          </div>
          <div>
            <h3>Store</h3>
            <a href="#shop">Shop All</a>
            <a href="#tablets">Tablets</a>
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
