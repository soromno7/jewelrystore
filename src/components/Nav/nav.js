import "./style.scss";
import { Link } from "react-router-dom";

export function Nav() {
    return (
        <div className="mainHeader">
            <Link to="/discount" id="discount">Discount</Link>
            <Link to="/rings" id="rings">Rings</Link>
            <Link to="/earrings" id="earrings">Earrings</Link>
            <Link to="/necklaces" id="necklaces">Necklaces</Link>
            <Link to="/pendants" id="pendants">Pendants</Link>
            <Link to="/bracelets" id="bracelets">Bracelets</Link>
            <Link to="/watch" id="watch">Watch</Link>
            <Link to="/beadNecklace" id="beadNecklace">Bead necklace</Link>
        </div>
    );
}