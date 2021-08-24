import "./style.scss";
import inst from "./img/instagram.svg";
import facebook from "./img/facebook.svg";
import twitter from "./img/twitter.svg";

export function Footer() {
    return (
        <footer>
            <h3>Contact us</h3>
            <div className="socialMediaContainer">
                <img src={inst}></img>
                <img src={facebook}></img>
                <img src={twitter}></img>
            </div>
        </footer>
    );
}