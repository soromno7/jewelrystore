import "./style.scss";
import { useState } from "react";
import { store } from "../Discount.js";

export function Cart() {

    const DELETE_FROM_CART = {
        type: "DELETE_FROM_CART",
        payload: store.getState().filter((e) => e !== e.id),
    }

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
                            Remove
                        </div>
                    </div>
                    {store.getState().map((e, i) => (
                    <div className="cartOrder" id="cartOrder">
                        <div className="orderView">
                            <span className="productName">{store.getState()[i].name}</span>
                            <img className="cartOrderImg" src={store.getState()[i].img}></img>
                        </div>
                        <div className="orderPrice">
                            {store.getState()[i].price}
                        </div>
                        <img id={store.getState()[i].id} src="https://img.icons8.com/material-rounded/50/000000/filled-trash.png"
                        className="removeFromCartIcon" onClick={store.dispatch(DELETE_FROM_CART)}></img>
                    </div>
                    ))}
                </div>
        </>
    )
};

