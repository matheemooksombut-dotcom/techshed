import React from "react";
import NavbarCompounent from "../../../../components/NavbarCompounent";
import { categories } from "@/data/categories";
const audioProducts = [
  ["", "White Buds Wireless Earbud Headphones", "$85.00", "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=700&q=80"],
  ["", "SDK Portable Bluetooth Speaker", "$85.00", "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=700&q=80"],
  ["SALE", "In-ear Noise Cancelling Wireless Earbuds", "$70.00", "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=700&q=80"],
  ["SALE", "Turn5 Portable Bluetooth Speaker", "$70.00", "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=700&q=80"],
  ["", "StudioMax Over-ear Wireless Headphones", "$85.00", "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=80"],
  ["SALE", "SoundBar Mini Home Theater Speaker", "$70.00", "https://images.unsplash.com/photo-1540829016269-e05670f88adb?auto=format&fit=crop&w=700&q=80"],
  ["", "Podcast USB Microphone Starter Kit", "$85.00", "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=700&q=80"],
  ["SALE", "BassPod Waterproof Outdoor Speaker", "$70.00", "https://images.unsplash.com/photo-1589256469067-ea99122bbdc4?auto=format&fit=crop&w=700&q=80"],
  ["", "AudioDock Charging Speaker Station", "$85.00", "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&w=700&q=80"],
];



export default function Audio() {
  return (
    <>
    <NavbarCompounent/>
    <main className="audio-page">
    

      <section className="heroaudio">
        <div>
          <div className="breadcrumb">Home / Audio</div>
          <h1>Audio</h1>
          <p>Find wireless earbuds, headphones, speakers, microphones, and compact sound gear for home, travel, work, and play.</p>
        </div>
      </section>

      <section className="shop-layout">
        <aside className="filters" aria-label="Audio filters">
          <div className="filter-block">
            <h2>Browse by</h2>
            {categories.map((item) => (
              <label key={item}>
                <input type="checkbox" defaultChecked={item === "Audio"} />
                <span>{item}</span>
              </label>
            ))}
          </div>
          <div className="filter-block">
            <h2>Audio Type</h2>
            <label><input type="checkbox" /> Headphones</label>
            <label><input type="checkbox" /> Earbuds</label>
            <label><input type="checkbox" /> Speakers</label>
            <label><input type="checkbox" /> Microphones</label>
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
              <select aria-label="Sort audio products" defaultValue="recommended">
                <option value="recommended">Recommended</option>
                <option value="newest">Newest</option>
                <option value="low">Price Low to High</option>
                <option value="high">Price High to Low</option>
              </select>
            </div>
          </div>

          <div className="product-grid">
            {audioProducts.map(([label, name, price, image]) => (
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
        <div className="feature"><strong>Wireless freedom</strong><span>Earbuds and speakers for every space.</span></div>
        <div className="feature"><strong>Clear sound</strong><span>Noise cancelling and rich bass options.</span></div>
        <div className="feature"><strong>Creator ready</strong><span>Mics and audio kits for content.</span></div>
      </section>

      <section className="newsletter">
        <div>
          <h2>Sign up for audio deals</h2>
          <p>Get updates about headphones, speakers, earbuds, and microphones.</p>
        </div>
        <form>
          <input aria-label="Email address" placeholder="Email address" />
          <button className="btn" type="button">Subscribe</button>
        </form>
      </section>

      <footer className="footer">
        <div>
          <div className="logo">TechShed</div>
          <p>Audio category page inspired by the Wix TechShed store layout.</p>
        </div>
        <div>
          <h3>Store</h3>
          <a href="#shop">Shop All</a>
          <a href="#audio">Audio</a>
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
