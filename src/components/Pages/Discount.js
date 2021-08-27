import "./style.scss";
import { data } from "./data.js";

let id = data[0].map((e) => e.id);
// let name = data[0].map((e) => e.name);
// let img = data[0].map((e) => e.img);
// let weight = data[0].map((e) => e.weight);
// let size = data[0].map((e) => e.size);
// let price = data[0].map((e) => e.price);

// console.log(data[0].[1].name)

// let card;



// for(let i = 0; i <= 100; i++) {

//     card = document.createElement("div");
//     card.classList.add("card")
//     card.innerHTML =
//     `
//     <div className="name">${data[0].[i++].name}</div>
//                 <img className="cardPic" src="${data[0].[i++].img}"></img>
//                 <div className="cardText">
//                     <div className="weight">Weight: ${data[0].[i++].weight}</div>
//                     <div className="price">Price: ${data[0].[i++].price}</div>
//                     <div className="size">Size: ${data[0].[i++].size}</div>
//                 </div>
//                 <button>Add to cart</button>
//     `
//     console.log(card)
// }




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
                    <button>Add to cart</button>
                   </div>
               ))}
           </div>
        </>
    );
}

