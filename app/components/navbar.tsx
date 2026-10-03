import { Link } from "react-router";
import { Icon } from "@iconify/react";

const Navbar = () => {
    return (
        <div className="sidenav">
            <ul>
                <li>
                    <Link to="/"><Icon icon="mdi:home-outline" />Home</Link>
                </li>
                <li>
                    <Link to="/projects"><Icon icon="mdi:file-document-outline" />Projects</Link>
                </li>
                <li>
                    <Link to="/blog"><Icon icon="mdi:thought-bubble-outline" />Blog</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;