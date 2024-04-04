import { applyMiddleware, createStore } from "redux";
import Mainreducer from "./reducers";
import { thunk } from "redux-thunk";

const store = createStore(Mainreducer, applyMiddleware(thunk));

export default store;