const Navbar = (props) => {
    return ( 
      <header className="header">
        <nav className="navbar">
          <a href="#" className="nav-logo">V-SELLS</a>
          <ul className="nav-menu">
              <li className="nav-item search-container">
                <input className="search-bar" placeholder="Search your for favorite product"/>
                <span title="search"><img style={{width: '100%'}} src="./search.svg"/></span>
              </li>
              <li className="nav-item">
                  <a href="#" className="nav-link">Call To Order</a>
              </li>
              <li className="nav-item">
                  <a href="#" className="nav-link">Sell</a>
              </li>
              <li className="nav-item">
                  <a href="#" className="nav-link">Region</a>
              </li>
          </ul>
          <div className="hamburger">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
          </div>
        </nav>
        <script type="text/javascript" src="./scripts/homepageInteraction.js"></script>
      </header>
    );
}
 
export default Navbar;