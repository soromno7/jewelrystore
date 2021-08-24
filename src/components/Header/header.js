import "./style.scss";
import logo from "./logo.svg";

export function Header () {
    return (
        <div className="header">
            <img
                className="logo"
                src={logo}
            />

            <h1>That's what you want.</h1>
            <button className="cartBtn"></button>
        </div>
    );
}