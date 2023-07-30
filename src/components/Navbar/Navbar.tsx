import { NavLink } from "react-router-dom";
import './Navbar.css';

export default function Navbar() {
    return (
        <nav className="nav">
            <h1 className="portfolio">
                <NavLink to="/Portfolio-React/">Portfolio</NavLink>
            </h1>
            <div className="navbar">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>

                <ul id="menu">
                    <li><NavLink to="Portfolio-React/a-propos" className={ ({isActive}) => isActive ? "nav-active" : "" }>A Propos</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}