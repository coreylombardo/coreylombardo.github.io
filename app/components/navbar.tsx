import { Link } from "react-router";
import { Icon } from "@iconify/react";
import "../app.css";

const Navbar = () => {
    return (
        <div className="sidenav">
            <ul>
                <li>
                    <Link to="/">
                        <Icon icon="mdi:home-outline" className="navbar-icon" />
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/projects">
                        <Icon icon="mdi:file-document-outline" className="navbar-icon" />
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to="/blog">
                        <Icon icon="mdi:thought-bubble-outline" className="navbar-icon" />
                        Blog
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;