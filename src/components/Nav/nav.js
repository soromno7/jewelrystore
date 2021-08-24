import "./style.scss";

export function Nav() {
    return (
        <div className="mainHeader">
            <a href="/discount" id="discount">Discount</a>
            <div id="rings">Rings</div>
            <div id="earrings">Earrings</div>
            <div id="necklaces">Necklaces</div>
            <div id="pendants">Pendants</div>
            <div id="bracelets">Bracelets</div>
            <div id="watch">Watch</div>
            <div id="beadNecklace">Bead necklace</div>
        </div>
    );
}