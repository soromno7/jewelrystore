import "./style.scss";
import logo from "./logo.svg";
import { Link } from "react-router-dom";

export function Header () {
    return (
        <div className="header">
            <Link to="/">
                <img
                    className="logo"
                    src={logo}
                />
            </Link>

            <h1>That's what you want.</h1>
            <button className="cartBtn"></button>
        </div>
    );
}