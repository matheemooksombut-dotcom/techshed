import React from "react";
import NavbarCompounent from "../../../../components/NavbarCompounent";
import { categories } from "@/data/categories";



const cinemaProducts = [
  ["", "Shel 50\" Class LED 4K UHD Smart TV", "$85.00", "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=700&q=80"],
  ["SALE", "65\" Class Nano LED 4K UHD Smart TV", "$70.00", "https://images.unsplash.com/photo-1601944179066-29786cb9d32a?auto=format&fit=crop&w=700&q=80"],
  ["SALE", "SoundBar Mini Home Theater Speaker", "$70.00", "https://images.unsplash.com/photo-1540829016269-e05670f88adb?auto=format&fit=crop&w=700&q=80"],
  ["", "CinemaBeam 4K Home Projector", "$85.00", "https://images.unsplash.com/photo-1605518215584-5ba74df5dfd8?auto=format&fit=crop&w=700&q=80"],
  ["SALE", "StreamBox 4K Media Player", "$70.00", "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=700&q=80"],
  ["", "WallMount Slim TV Bracket Kit", "$85.00", "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=700&q=80"],
  ["SALE", "Surround 5.1 Wireless Speaker Set", "$70.00", "https://images.unsplash.com/photo-1558089687-f282ffcbc126?auto=format&fit=crop&w=700&q=80"],
  ["", "Ultra HD HDMI Cable Twin Pack", "$85.00", "https://images.unsplash.com/photo-1616410011236-7a42121dd981?auto=format&fit=crop&w=700&q=80"],
  ["SALE", "Theater Remote Universal Controller", "$70.00", "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=700&q=80"],
];



export default function TVHomeCinema() {
  return (
    <>
    <NavbarCompounent/>
    <main className="cinema-page">


      <section className="hero-TV">
        <div>
          <div className="breadcrumb">Home / T.V & Home Cinema</div>
          <h1>T.V & Home Cinema</h1>
          <p>Upgrade movie nights with 4K TVs, projectors, soundbars, streaming devices, wall mounts, and home theater accessories.</p>
        </div>
      </section>

      <section className="shop-layout">
        <aside className="filters" aria-label="TV and home cinema filters">
          <div className="filter-block">
            <h2>Browse by</h2>
            {categories.map((item) => (
              <label key={item}>
                <input type="checkbox" defaultChecked={item === "TVHomeCinema"} />
                <span>{item}</span>
              </label>
            ))}
          </div>
          <div className="filter-block">
            <h2>Product Type</h2>
            <label><input type="checkbox" /> Smart TVs</label>
            <label><input type="checkbox" /> Projectors</label>
            <label><input type="checkbox" /> Soundbars</label>
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
              <select aria-label="Sort home cinema products" defaultValue="recommended">
                <option value="recommended">Recommended</option>
                <option value="newest">Newest</option>
                <option value="low">Price Low to High</option>
                <option value="high">Price High to Low</option>
              </select>
            </div>
          </div>

          <div className="product-grid">
            {cinemaProducts.map(([label, name, price, image]) => (
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
        <div className="feature"><strong>4K viewing</strong><span>Smart TVs and projectors for crisp detail.</span></div>
        <div className="feature"><strong>Cinema sound</strong><span>Soundbars and speakers for richer audio.</span></div>
        <div className="feature"><strong>Easy setup</strong><span>Mounts, cables, and streaming essentials.</span></div>
      </section>

      <section className="newsletter">
        <div>
          <h2>Sign up for home cinema deals</h2>
          <p>Get updates about TVs, projectors, soundbars, and streaming accessories.</p>
        </div>
        <form>
          <input aria-label="Email address" placeholder="Email address" />
          <button className="btn" type="button">Subscribe</button>
        </form>
      </section>

      <footer className="footer">
        <div>
          <div className="logo">TechShed</div>
          <p>T.V and home cinema category page inspired by the Wix TechShed store layout.</p>
        </div>
        <div>
          <h3>Store</h3>
          <a href="#shop">Shop All</a>
          <a href="#cinema">T.V & Home Cinema</a>
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
