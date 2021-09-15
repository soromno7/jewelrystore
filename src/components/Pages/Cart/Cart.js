import "./style.scss";
import { useState } from "react";
import { store } from "../Discount.js";
import { useSelector } from "react-redux"

export function Cart() {

    const [count, setCount] = useState(1);

    return(
        <>
            {/* {store.map((e, i) => ( */}
                <div className="cartContainer">
                    <div className="cartHeader">
                        <div>
                            Product name
                        </div>
                        <div>
                            Price
                        </div>
                        <div>
                            Quantity
                        </div>
                        <div>
                            Final price
                        </div>
                    </div>
                    <div className="cartOrder">
                        <div className="orderView">
                            <span className="productName">Карасик</span>
                            <img className="cartOrderImg"></img>
                        </div>
                        <div className="orderPrice">
                            44 $
                        </div>
                        <div className="orderQuantity">
                            <img onClick={() => setCount(count + 1)} src="https://image.flaticon.com/icons/png/512/262/262039.png" width="50px" height="50px"></img>
                            {count}
                            <img onClick={() => setCount(count - 1)}src="https://image.flaticon.com/icons/png/512/159/159690.png" width="50px" height="50px"></img>
                        </div>
                        <div className="orderFinalPrice">
                            {count * 44}
                        </div>
                    </div>
                </div>
            
        </>
    )
};
