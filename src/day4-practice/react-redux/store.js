import { createStore } from "redux";
import CounterReducer from "./CounterApp/reducer";

const store = createStore(CounterReducer)

export default store