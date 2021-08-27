import "./style.scss";
import { data } from "./data.js";
import { Btn } from "../Button/btn.js";
// import { createStore } from "../Redux/createStore";
// import { reducer } from "../Redux/reducer.js";

// let id = data[0].map((e) => e.id);

// const store = createStore();

export function Discount() {
    return(
        <>
           <div className="container">
               {data[0].map((e) => (
                   <div className="card">
                    <div className="name">{data[0].[1].name}</div>
                    <img className="cardPic" src={data[0].[1].img}></img>
                    <div className="cardText">
                        <div className="weight">Weight: {data[0].[1].weight}</div>
                        <div className="price">Price: {data[0].[1].price}</div>
                        <div className="size">Size: {data[0].[1].size}</div>
                    </div>
                    <Btn/>
                   </div>
               ))}
           </div>
        </>
    );
}

