
import products from "../../../Product/Prodcts";







export default function TechShedTemplate() {
  return (
    <main className="techshed-page">
     

      <section className="hero">
        <div>
          <span className="tag">Best Prices</span>
          <h1>Incredible Prices on All Your Favorite Items</h1>
          <p>Get more for less on selected brands</p>
          <button className="btn">Shop Now</button>
        </div>
      </section>

      <section className="deal-grid" aria-label="Promotions">
        <article className="deal" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80)" }}>
          <div className="deal-content">
            <small>Holiday Deals</small>
            <h2>Up to 30% off</h2>
            <p>Selected Smartphone Brands</p>
            <a href="#shop">Shop</a>
          </div>
        </article>
        <article className="deal" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80)" }}>
          <div className="deal-content">
            <small>Just In</small>
            <h2>Take Your Sound Anywhere</h2>
            <p>Top Headphone Brands</p>
            <a href="#shop">Shop</a>
          </div>
        </article>
      </section>

      <section className="services" aria-label="Store benefits">
        <div className="service"><strong>Curb-side pickup</strong><span>Collect your order fast</span></div>
        <div className="service"><strong>Free shipping</strong><span>On orders over $50</span></div>
        <div className="service"><strong>Low prices guaranteed</strong><span>Everyday technology deals</span></div>
        <div className="service"><strong>Available 24/7</strong><span>Support whenever you need</span></div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Best Sellers</h2>
          <a href="#all">View All</a>
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
              </div>
            </article>
          ))}
        </div>
      </section>
       <section className="split-feature">
        <div className="split-copy">
          <span className="tag">Today Special</span>
          <h2>Upgrade your setup with smarter tech</h2>
          <p>Build a cleaner desk, sharper entertainment corner, and better everyday workflow with selected devices from our latest collection.</p>
          <br/>
          <button className="btn">Shop Deals</button>
        </div>
        <div className="split-image" aria-hidden="true" />
      </section>

      <section className="promo">
        <div>
          <span>Best Price</span>
          <h2>Save up to $150</h2>
          <p>on selected laptop & tablet brands</p>
          <a href="#shop">Shop</a>
        </div>
      </section>

      <section className="newsletter">
        <div>
          <h2>Sign up for our newsletter</h2>
          <p>Get updates about new arrivals and limited deals.</p>
        </div>
        <form>
          <input aria-label="Email address" placeholder="Email address" />
          <button className="btn" type="button">Subscribe</button>
        </form>
      </section>

      <footer className="footer">
        <div>
          <div className="logo">TechShed</div>
          
        </div>
        <div>
          <h3>Store</h3>
          <a href="#shop">Shop All</a>
          <a href="#sale">Sale</a>
          <a href="#category">Categories</a>
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
