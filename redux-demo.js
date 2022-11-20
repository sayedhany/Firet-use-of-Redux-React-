// import { legacy_createStore as createStore} from 'redux'
// import { legacy_createStore as createStore } from "redux";
const redux = require("redux");
const counterReducer = (state = { counter: 0 }, action) => {
  // console.log(action);
  if (action.type === "increment") {
    // console.log(state.counter);
    return {
      counter: state.counter + 1,
    };
  } else if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};
const store = redux.createStore(counterReducer);
// console.log(store.getState());
const counterSubscriper = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriper);
store.dispatch({
  type: "increment",
});
store.dispatch({
  type: "decrement",
});
