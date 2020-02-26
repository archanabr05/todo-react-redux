import { createStore } from "redux";
import { reducer } from "./reducer";

export const store = createStore(reducer);

const unsubscribe = store.subscribe(() => console.log(store.getState()));

unsubscribe();
