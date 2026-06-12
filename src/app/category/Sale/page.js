import React from "react";
import NavbarCompounent from "../../../../components/NavbarCompounent";
import { categories } from "@/data/categories";


const saleProducts = [
  ["JP - Space Tablet 10.4\" Wi-Fi 32GB", "$85.00", "$70.00", "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=700&q=80"],
  ["Ocean Pro 11 - 12.3\" Touch Screen", "$85.00", "$70.00", "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?auto=format&fit=crop&w=700&q=80"],
  ["Fitboot Inspire Fitness Tracker", "$85.00", "$70.00", "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&w=700&q=80"],
  ["Smartphone Z Pixel Max 128GB", "$85.00", "$70.00", "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=700&q=80"],
  ["65\" Class Nano LED 4K Smart TV", "$85.00", "$70.00", "https://images.unsplash.com/photo-1601944179066-29786cb9d32a?auto=format&fit=crop&w=700&q=80"],
  ["Megapixel Waterproof Mini Camera", "$85.00", "$70.00", "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=700&q=80"],
  ["JP Gaming Laptop 15.6\" 256GB", "$85.00", "$70.00", "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=700&q=80"],
  ["Noise Cancelling Wireless Earbuds", "$85.00", "$70.00", "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=700&q=80"],
  ["Space Moon Smartwatch With Charger", "$85.00", "$70.00", "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=80"],
  ["OVE Light Space 5G, 128GB", "$85.00", "$70.00", "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=700&q=80"],
  ["Pilates 16\" Touch Screen Laptop", "$85.00", "$70.00", "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=700&q=80"],
  ["Journey Glass XD VR Headset", "$85.00", "$70.00", "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&w=700&q=80"],
];


export default function Sale() {
  return (
    <main className="sale-page">
      
      <NavbarCompounent/>
      <section className="hero-salepage">
        <div>
          <div className="breadcrumb">Home / Sale</div>
          <span className="sale-kicker">LIMITED TIME</span>
          <h1>Sale</h1>
          <p>Save on selected laptops, phones, TVs, audio gear, cameras, tablets, and wearable technology while stocks last.</p>
        </div>
      </section>

      <section className="shop-layout">
        <aside className="filters" aria-label="Sale product filters">
          <div className="filter-block">
            <h2>Browse by</h2>
            {categories.map((item) => (
              <label key={item}>
                <input type="checkbox" defaultChecked={item === "Sale"} />
                <span>{item}</span>
              </label>
            ))}
          </div>
          <div className="filter-block">
            <h2>Discount</h2>
            <label><input type="checkbox" /> 10% off or more</label>
            <label><input type="checkbox" /> 20% off or more</label>
            <label><input type="checkbox" /> 30% off or more</label>
          </div>
          <div className="filter-block">
            <h2>Price</h2>
            <div className="range-line" />
            <div className="price-row"><span>$0</span><span>$100</span></div>
          </div>
        </aside>

        <div>
          <div className="shop-toolbar">
            <span>12 sale products</span>
            <div className="sort">
              <span>Sort by:</span>
              <select aria-label="Sort sale products" defaultValue="recommended">
                <option value="recommended">Recommended</option>
                <option value="discount">Biggest Discount</option>
                <option value="low">Price Low to High</option>
                <option value="high">Price High to Low</option>
              </select>
            </div>
          </div>

          <div className="product-grid">
            {saleProducts.map(([name, regular, price, image]) => (
              <article className="product" key={name}>
                <span className="sale-label">SALE</span>
                <img src={image} alt={name} />
                <div className="product-body">
                  <h3>{name}</h3>
                  <span className="regular">{regular}</span>
                  <span className="price">{price}</span>
                  <button className="quick-add" type="button">Add to Cart</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="deal-strip">
        <div className="deal"><strong>Limited-time prices</strong><span>Selected products while stocks last.</span></div>
        <div className="deal"><strong>Free shipping</strong><span>Available on orders over $50.</span></div>
        <div className="deal"><strong>Low prices guaranteed</strong><span>Great technology for less.</span></div>
      </section>

      <section className="newsletter">
        <div>
          <h2>Never miss a deal</h2>
          <p>Get sale alerts, limited offers, and new product updates.</p>
        </div>
        <form>
          <input aria-label="Email address" placeholder="Email address" />
          <button className="btn" type="button">Subscribe</button>
        </form>
      </section>

      <footer className="footer">
        <div><div className="logo">TechShed</div><p>Sale page inspired by the Wix TechShed store layout.</p></div>
        <div><h3>Store</h3><a href="#shop">Shop All</a><a href="#sale">Sale</a><a href="#categories">Categories</a></div>
        <div><h3>Policy</h3><a href="#shipping">Shipping</a><a href="#returns">Returns</a><a href="#terms">Terms</a></div>
        <div><h3>Contact</h3><a href="tel:1234567890">123-456-7890</a><a href="mailto:info@techshed.demo">info@techshed.demo</a></div>
      </footer>
    </main>
  );
}
