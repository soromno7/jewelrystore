import "./style.scss";

import store from "./img/jewelry-store.svg";


export function StoreList() {
    return (
        <>
            <div className="storeListContainer">
                <div className="storeNo1">
                    <img src={store}></img>
                    <div className="opacityBlock"></div>
                </div>
                <div className="storeNo2">
                    <img src={store}></img>
                </div>
                <div className="storeNo3">
                    <img src={store}></img>
                </div>
                
            </div>

            <div className="storeAddresses">
                <div className="storeNo1Address">Address: Leibnitzstrasse 59, Berlin
                <br></br>
                Phone number: +49 (151) 754-54481
                </div>
                <div className="storeNo2Address">Address: Lychener Str. 53, Berlin
                <br></br>
                Phone number: +49 (151) 722-94422</div>
                <div className="storeNo3Address">Address: Sansibar Str. 54, Berlin
                <br></br>
                Phone number: +49 (151) 894-26452</div>
            </div>
        </>
    );
}