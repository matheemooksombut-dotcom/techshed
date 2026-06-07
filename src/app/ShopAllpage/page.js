import { categories } from "@/data/categories";
import products from "../../../Product/Prodcts";
import NavbarCompounent from "../../../components/NavbarCompounent";
export default function ShopAll() {
  return (
    <>
    <NavbarCompounent/>
    <main className="shop-page">
    
      <section className="page-title">
        <div className="breadcrumb">Home / Shop All</div>
        <h1>Shop All</h1>
        <p>Browse our newest electronics, smart devices, home cinema gear, and everyday tech essentials.</p>
      </section>

      <section className="shop-layout">
        <aside className="filters" aria-label="Product filters">
          <div className="filter-block">
            <h2>Browse by</h2>
            {categories.map((item) => (
              <label key={item}>
                <input type="checkbox" defaultChecked={item === "Shop All"} />
                <span>{item}</span>
              </label>
            ))}
          </div>
          <div className="filter-block">
            <h2>Filter by</h2>
            <label><input type="checkbox" /> Sale</label>
            <label><input type="checkbox" /> In stock</label>
            <label><input type="checkbox" /> New arrival</label>
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
            <span>12 products</span>
            <div className="sort">
              <span>Sort by:</span>
              <select aria-label="Sort products" defaultValue="recommended">
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
          <p>Modern electronics shop page inspired by the Wix TechShed store layout.</p>
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
  </>
  );
}
