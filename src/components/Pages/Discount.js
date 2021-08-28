import "./style.scss";
import { data } from "./data.js";
import { Btn } from "../Button/btn.js";
// import { createStore } from "../Redux/createStore";
// import { reducer } from "../Redux/reducer.js";




export function Discount() {
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
                    <Btn id={data[0][i].id}/>
                   </div>
               ))}
           </div>
        </>
    );
}

