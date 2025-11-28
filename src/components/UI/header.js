import { NavLink } from "react-router-dom";
import { useState } from "react";

function Header() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="header-main">
            <header className='container'>
                <div className="grid navbar-grid">
                    <div className="logo">
                        <NavLink to='/'>
                            <h1>worldatlas</h1>
                        </NavLink>
                    </div>

                    {/* Toggle Button (Mobile) */}
                    <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className={menuOpen ? "bar rotate1" : "bar"}></span>
                        <span className={menuOpen ? "bar hide" : "bar"}></span>
                        <span className={menuOpen ? "bar rotate2" : "bar"}></span>
                    </div>

                    <nav className={menuOpen ? "mobile-open" : ""}>
                        <ul>
                            <li><NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
                            <li><NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink></li>
                            <li><NavLink to="/country" onClick={() => setMenuOpen(false)}>Country</NavLink></li>
                            <li><NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink></li>
                        </ul>
                    </nav>

                </div>
            </header>
        </div>
    );
}

export default Header;
