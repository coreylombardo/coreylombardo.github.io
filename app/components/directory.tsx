// this is gonna show some shit like coreylombardo -> Home
import { useLocation, Link } from "react-router";

export default function Directory() {
    const  location = useLocation();

    return (
        <span className="directory">
            <Link to="/">futuredomain</Link> → <Link to={location.pathname}>{location.pathname}</Link>
        </span>
    );
}