import { combineReducers } from "redux";
import memberReducer from "./MemberModule";
import itemReducer from "./ItemModule";
import gameReducer from "./GameModule";
import reviewReducer from "./ReviewModule";
const rootReducer = combineReducers({
    memberReducer,
    itemReducer,
    gameReducer,
    reviewReducer,
});

export default rootReducer;