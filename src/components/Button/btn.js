import { createStore } from "redux";
import { data } from "../Pages/data.js";

let initialState = [];


export const store = createStore(reducer);

let id = data[0].map((e) => e.id);

function reducer(initialState = [], action) {
    if (action.type === "ADD_STUFF") {
        return initialState.push("karasik");
    };
    return initialState;
}

store.subscribe(() => {
    console.log("number", store.getState())
});

store.dispatch({ type: "ADD_STUFF"});
