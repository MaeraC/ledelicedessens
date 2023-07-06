import { Link } from "react-router-dom"
import Logo from "./Logo"

function Nav() {
    return (
        <nav>
            <ul>
                <li className="nav-link"><Link to="/restaurant">Restaurant</Link></li>
                <li className="nav-link"><Link to="/menu">Menu</Link></li>
                <li><Link to="/"><Logo /></Link></li>
                <li className="nav-link"><Link to="/galerie">Galerie</Link></li>
                <li className="nav-link"><Link to="/reservations">Réservations</Link></li>
            </ul>
        </nav>
    )
}

export default Nav 