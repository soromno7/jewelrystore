import "./style.scss";
import { data } from "./data.js";
import { createStore } from "redux";

let initialState = [];

export const store = createStore(reducer);

function reducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_PRODUCT_TO_CART":
            return [...state, action.payload]
        case "KARASIK":
            return console.log(state);
    }
    return state;
}

let id = data[0].map((e) => e.id);

export function Discount() {

    const getButtonId = (e) => {

        let result = e.currentTarget.id;

        let toCartProduct = data[0].find(e => e.id === result);

        const AddProductToCart = {
            type: "ADD_PRODUCT_TO_CART",
            payload: toCartProduct,
        }
        
        store.dispatch(AddProductToCart);

      }

    return(
        <>
           <div className="container">
               {data[0].map((e, i) => (
                   <div className="card">
                    <div className="name">{data[0][i].name}</div>
                    <img className="cardPic" src={data[0][i].img}></img>
                    <div className="cardText">
                        <div className="weight">Weight: {data[0][i].weight}</div>
                        <div className="price">Price: {data[0][i].price}</div>
                        <div className="size">Size: {data[0][i].size}</div>
                    </div>
                    <button id={data[0][i].id} onClick={getButtonId}>Add to cart</button>
                   </div>
               ))}
           </div>
        </>
    );
}

