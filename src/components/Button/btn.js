import { createStore } from "redux";

function reducer(state = 0, action) {
    if (action.type === "ADD_STUFF") {
        return state + 1;
    };
    return state;
}

export const store = createStore(reducer);

store.subscribe(() => {
    console.log("Kopa", store.getState())
});

store.dispatch({ type: "ADD_STUFF"});

function add() {
    store.dispatch({ type: "ADD_STUFF"});
}

export function Btn() {

    return(
        <button id="btn" onClick={add}>Add to cart</button>
    );
}