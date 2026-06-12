import React from "react";
import NavbarCompounent from "../../../../components/NavbarCompounent";
import { categories } from "@/data/categories";



const cameraProducts = [
  ["SALE", "Megapixel Waterproof Mini Digital Camera", "$70.00", "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=700&q=80"],
  ["", "HKI Tech Quadcopter Drone With 360 Camera", "$85.00", "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?auto=format&fit=crop&w=700&q=80"],
  ["SALE", "SkyView Foldable Drone 4K Starter Kit", "$70.00", "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=700&q=80"],
  ["", "ActionPro Waterproof 5K Sports Camera", "$85.00", "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=700&q=80"],
  ["SALE", "PocketCam Vlog Camera With Flip Screen", "$70.00", "https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?auto=format&fit=crop&w=700&q=80"],
  ["SALE", "AeroMini Drone Battery Twin Pack", "$70.00", "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=700&q=80"],
  ["", "Mirrorless Camera Lens 35mm Prime", "$85.00", "https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=700&q=80"],
  ["SALE", "Stabilizer Gimbal for Phones & Cameras", "$70.00", "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=700&q=80"],
];


export default function DronesAndCameras() {
  return (
    <>
    <NavbarCompounent/>
    <main className="drones-page">

      <section className="hero-drone">
        <div>
          <div className="breadcrumb">Home / Drones & Cameras</div>
          <h1>Drones & Cameras</h1>
          <p>Capture sharper stories with drones, compact cameras, action cams, lenses, stabilizers, and creator-ready accessories.</p>
        </div>
      </section>

      <section className="shop-layout">
        <aside className="filters" aria-label="Drones and cameras filters">
          <div className="filter-block">
            <h2>Browse by</h2>
            {categories.map((item) => (
              <label key={item}>
                <input type="checkbox" defaultChecked={item === "DronesAndCameras"} />
                <span>{item}</span>
              </label>
            ))}
          </div>
          <div className="filter-block">
            <h2>Product Type</h2>
            <label><input type="checkbox" /> Drones</label>
            <label><input type="checkbox" /> Cameras</label>
            <label><input type="checkbox" /> Lenses</label>
            <label><input type="checkbox" /> Creator Kits</label>
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
              <select aria-label="Sort drones and cameras" defaultValue="recommended">
                <option value="recommended">Recommended</option>
                <option value="newest">Newest</option>
                <option value="low">Price Low to High</option>
                <option value="high">Price High to Low</option>
              </select>
            </div>
          </div>

          <div className="product-grid">
            {cameraProducts.map(([label, name, price, image]) => (
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
        <div className="feature"><strong>4K capture</strong><span>Sharp video and crisp stills.</span></div>
        <div className="feature"><strong>Flight ready</strong><span>Drone kits, batteries, and accessories.</span></div>
        <div className="feature"><strong>Creator friendly</strong><span>Compact gear for travel and content.</span></div>
      </section>

      <section className="newsletter">
        <div>
          <h2>Sign up for camera deals</h2>
          <p>Get updates about drones, cameras, lenses, and creator bundles.</p>
        </div>
        <form>
          <input aria-label="Email address" placeholder="Email address" />
          <button className="btn" type="button">Subscribe</button>
        </form>
      </section>

      <footer className="footer">
        <div>
          <div className="logo">TechShed</div>
          <p>Drones and cameras category page inspired by the Wix TechShed store layout.</p>
        </div>
        <div>
          <h3>Store</h3>
          <a href="#shop">Shop All</a>
          <a href="#drones">Drones & Cameras</a>
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
