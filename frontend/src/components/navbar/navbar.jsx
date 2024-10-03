import { Link } from 'react-router-dom'
import "./navbar.css"; 
const navbar = () =>  {
    return (
    <nav className="nav">
        <Link to='/' className="site-title">Site Name</Link>
        <ul>
            <li>
                <Link to="/pricing">Pricing</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
        </ul>
    </nav>
    )
}

export default navbar