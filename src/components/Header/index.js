// Write your JS code here
import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <div className="navbar-mobile-logo-container">
        <img
          className="website-logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
        />
        <button type="button" className="nav-mobile-btn">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="nav logout"
            className="navbar-img"
          />
        </button>
      </div>
      <div className="nav-content navbar-large-container">
        <img
          className="website-logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
        />
        <ul className="nav-menu">
          <li className="nav-menu-item">Home</li>
          <li className="nav-menu-item">Products</li>
          <li className="nav-menu-item">Cart</li>
        </ul>
        <button type="button" className="logout-desktop-btn">
          Logout
        </button>
      </div>
    </div>
    <div className="nav-menu-mobile">
      <ul className="nav-menu-list-mobile">
        <li className="nav-menu-item-mobile">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            alt="nav home"
            className="navbar-img"
          />
        </li>
        <li className="nav-menu-item-mobile">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            alt="nav products"
            className="navbar-img"
          />
        </li>
        <li className="nav-menu-item-mobile">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
            alt="nav cart"
            className="navbar-img"
          />
        </li>
      </ul>
    </div>
  </nav>
)
export default Header
