const INCREMENT ='INCREMENT' ; 
const DECREMENT = 'DECREMENT';

const counterReducer = (state=0,action)=>{
      switch(action.type) {
    case 'INCREMENT':
      return state+1;
      break;
    case 'DECREMENT':
      return state-1;
          break;
    default:
      return state;
  }
}; 

const incAction = ()=>{
    return {
        type:INCREMENT
    }
}; // define an action creator for incrementing

const decAction = ()=>{
    return {
        type:DECREMENT
    }
}; // define an action creator for decrementing

const store = Redux.createStore(counterReducer); // define the Redux store here, passing in your reducers
console.log(store.dispatch(incAction()));