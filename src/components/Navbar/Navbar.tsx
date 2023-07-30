import { NavLink } from "react-router-dom";
import './Navbar.scss';

export default function Navbar() {
    return (
        <nav className="navigation">
            <h1 className="portfolio">
                <NavLink to="/Portfolio-React/">Portfolio</NavLink>
            </h1>
            
            <p><NavLink to="Portfolio-React/a-propos" className={ ({isActive}) => isActive ? "nav-active" : "" }>A Propos</NavLink></p>
        </nav>
    )
}