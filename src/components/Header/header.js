import "./style.scss";
import logo from "./logo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { createStore } from "redux";
import { store, reducer } from "../Button/btn.js";
import { render } from "react-dom";


export function Header () {

    const [count, setCount] = useState(0);

    return (
        <div className="header">
            <Link to="/">
                <img
                    className="logo"
                    src={logo}
                />
            </Link>

            <h1>That's what you want.</h1>
            <button className="cartBtn">
                <div id="counter"></div>
            </button>
        </div>
    );
}