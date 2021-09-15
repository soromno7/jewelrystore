import "./style.scss";
import { data } from "../data.js";


export function Cart() {
    return(
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
                    <span className="productName">Кольцо классное</span>
                    <img className="cartOrderImg" src="https://1gold.by/image/cache/import_files/963711k.1_zoloto/963711k.1-600x600.jpg"></img>
                </div>
                <div className="orderPrice">
                    44 $
                </div>
                <div className="orderQuantity">
                    <img src="https://image.flaticon.com/icons/png/512/262/262039.png" width="50px" height="50px"></img>
                    1
                    <img src="https://image.flaticon.com/icons/png/512/159/159690.png" width="50px" height="50px"></img>
                </div>
                <div className="orderFinalPrice">
                    88 $
                </div>
            </div>
        </div>
    )
};