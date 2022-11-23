import { combineReducers } from "redux";
import memberReducer from "./MemberModule";
import itemReducer from "./ItemModule";
import gameReducer from "./GameModule";

const rootReducer = combineReducers({
    memberReducer,
    itemReducer,
    gameReducer,
});

export default rootReducer;