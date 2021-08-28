import { createStore } from "redux";
import { data } from "../Pages/data.js";

let initialState = [];

let id = data[0].map((e) => e.id);



function reducer(initialState = [], action) {
    if (action.type === "ADD_STUFF") {
        return [];
    };
    return initialState;
}

export const store = createStore(reducer);

store.subscribe(() => {
    console.log("number", store.getState())
});

store.dispatch({ type: "ADD_STUFF"});

function add() {
    if(id[2] === data[0][2].id) {
        initialState.push(data[0][2])
        console.log(initialState)
    }
    store.dispatch({ type: "ADD_STUFF"});
}


export function Btn() {

    return(
        <button onClick={add}>Add to cart</button>
    );
}