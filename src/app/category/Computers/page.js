import React from "react";
import NavbarCompounent from "../../../../components/NavbarCompounent";
import { categories } from "@/data/categories";



const computers = [
  ["SALE", "Pilates 16\" Touch Screen Laptop 24GB Memory", "$70.00", "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=700&q=80"],
  ["SALE", "JP Gaming Laptop 15.6\" Laptop 256GB", "$70.00", "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=700&q=80"],
  ["", "LenoPro Desktop Tower i7 1TB SSD", "$85.00", "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=700&q=80"],
  ["SALE", "TechBook Air 13\" Lightweight Notebook", "$70.00", "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=700&q=80"],
  ["", "UltraView 27\" 4K Computer Monitor", "$85.00", "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=700&q=80"],
  ["SALE", "WorkStation Pro Mini PC 512GB", "$70.00", "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=700&q=80"],
  ["", "Ergo Wireless Keyboard & Mouse Set", "$85.00", "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=700&q=80"],
  ["SALE", "Creator Laptop 14\" OLED 1TB SSD", "$70.00", "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=700&q=80"],
  ["", "Studio Docking Station USB-C Hub", "$85.00", "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=700&q=80"],
];


export default function Computers() {
  return (
    <>
    <NavbarCompounent/>
    <main className="computers-page">
   

     

      <section className="hero-computer">
        <div>
          <div className="breadcrumb">Home / Computers</div>
          <h1>Computers</h1>
          <p>Shop laptops, desktop towers, monitors, and work-ready accessories for home offices, gaming rooms, and creative studios.</p>
        </div>
      </section>

      <section className="shop-layout">
        <aside className="filters" aria-label="Computer filters">
          <div className="filter-block">
            <h2>Browse by</h2>
            {categories.map((item) => (
              <label key={item}>
                <input type="checkbox" defaultChecked={item === "Computers"} />
                <span>{item}</span>
              </label>
            ))}
          </div>
          <div className="filter-block">
            <h2>Computer Type</h2>
            <label><input type="checkbox" /> Laptops</label>
            <label><input type="checkbox" /> Desktops</label>
            <label><input type="checkbox" /> Monitors</label>
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
              <select aria-label="Sort computers" defaultValue="recommended">
                <option value="recommended">Recommended</option>
                <option value="newest">Newest</option>
                <option value="low">Price Low to High</option>
                <option value="high">Price High to Low</option>
              </select>
            </div>
          </div>

          <div className="product-grid">
            {computers.map(([label, name, price, image]) => (
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
        <div className="feature"><strong>Fast processors</strong><span>Work, stream, and play smoothly.</span></div>
        <div className="feature"><strong>Ready for setup</strong><span>Pair with monitors and accessories.</span></div>
        <div className="feature"><strong>Low prices guaranteed</strong><span>Selected computer deals updated often.</span></div>
      </section>

      <section className="newsletter">
        <div>
          <h2>Sign up for computer deals</h2>
          <p>Get updates about laptops, desktops, monitors, and accessories.</p>
        </div>
        <form>
          <input aria-label="Email address" placeholder="Email address" />
          <button className="btn" type="button">Subscribe</button>
        </form>
      </section>

      <footer className="footer">
        <div>
          <div className="logo">TechShed</div>
          <p>Computer category page inspired by the Wix TechShed store layout.</p>
        </div>
        <div>
          <h3>Store</h3>
          <a href="#shop">Shop All</a>
          <a href="#computers">Computers</a>
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
