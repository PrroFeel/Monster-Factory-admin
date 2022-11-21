import { combineReducers } from "redux";
import memberReducer from "./MemberModule";
import itemReducer from "./ItemModule";

const rootReducer = combineReducers({
    memberReducer,
    itemReducer,
});

export default rootReducer;