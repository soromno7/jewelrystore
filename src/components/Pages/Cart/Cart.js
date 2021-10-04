import "./style.scss";
import { useState } from "react";
import { store } from "../Discount.js";
import { useSelector } from "react-redux"

export function Cart() {

    const [count, setCount] = useState(1);

    return(
        <>
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
                    {store.getState().map((e, i) => ( <div className="cartOrder" id="cartOrder">
                        <div className="orderView">
                            <span className="productName">{store.getState()[i].name}</span>
                            <img className="cartOrderImg" src={store.getState()[i].img}></img>
                        </div>
                        <div className="orderPrice">
                            {store.getState()[i].price}
                        </div>
                        <div className="orderQuantity">
                            <img onClick={() => setCount(count - 1)} src="https://image.flaticon.com/icons/png/512/262/262039.png" width="50px" height="50px"></img>
                            {count}
                            <img onClick={() => setCount(count + 1)}src="https://image.flaticon.com/icons/png/512/159/159690.png" width="50px" height="50px"></img>
                        </div>
                        <div className="orderFinalPrice">
                            {count * store.getState()[i].price.replace("$", "") + " $"}
                        </div>
                    </div>
                    ))}
                </div>
        </>
    )
};

