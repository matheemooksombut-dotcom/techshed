
function Icon({ type }) {
  const common = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  return (
    <span className="ts-icon">
      {type === "search" && (
        <svg {...common}>
          <circle cx="11" cy="11" r="6.5" />
          <path d="m16 16 4 4" />
        </svg>
      )}
      {type === "heart" && (
        <svg {...common}>
          <path d="M19.5 5.8c-1.6-1.7-4.3-1.6-5.8.2L12 8l-1.7-2c-1.5-1.8-4.2-1.9-5.8-.2-1.8 1.9-1.7 5 .2 6.8L12 20l7.3-7.4c1.9-1.8 2-4.9.2-6.8Z" />
        </svg>
      )}
      {type === "cart" && (
        <svg {...common}>
          <path d="M4 5h2l1.6 9.2a2 2 0 0 0 2 1.8h6.9a2 2 0 0 0 1.9-1.4L20 9H8" />
          <circle cx="10" cy="20" r="1.3" />
          <circle cx="18" cy="20" r="1.3" />
        </svg>
      )}
    </span>
  );
}

const categories = [
  "Computers",
  "Tablets",
  "Drones & Cameras",
  "Audio",
  "Mobile",
  "T.V & Home Cinema",
  "Wearable Tech",
  "Sale",
];

const NavbarCompounent = () => {
  return (
   <>


        <div className="topbar">
        <div className="shipping">
          <span className="cube" />
          <span>Free Shipping for orders over $50</span>
        </div>
        <div className="top-links">
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#help">Help Center</a>
          <a href="tel:1234567890">Call Us 123-456-7890</a>
        </div>
      </div>

      <header className="brand-row">
        <div className="logo">TechShed</div>
        <div className="actions">
          <Icon type="search" />
          <span className="login-dot" />
          <span>Log In</span>
          <Icon type="heart" />
          <Icon type="cart" />
          <strong>0</strong>
        </div>
      </header>

      
      <nav className="nav" aria-label="Product categories">
        <span>Shop All</span>
        {categories.map((item) => <span key={item}>{item}</span>)}
      </nav>
   </>
  )
}

export default NavbarCompounent