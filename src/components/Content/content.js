import "./style.scss";
import ring from "./img/ring.jpg";
import { Line } from "../Line/Line.js";
import "../Line/style.scss";

import { StoreList } from "./storeList/StoreList.js";
import "./storeList/style.scss";

export function Content() {
    return  (
        <main>
            <div className="bg">
                <img src={ring}></img>
            </div> 

            <Line/>

            <h1 className="storeListHeader">Our store's</h1>

            <Line/>

            <StoreList/>

        </main>
    )
};