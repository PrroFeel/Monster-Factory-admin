import { createActions, handleActions } from "redux-actions";

const initialState = {
    targetGameId: 0,
    result : "",
    comment : ""
};

export const INIT_REVIEW='review/INIT_REVIEW';
export const SET_REVIEW='review/SET_REVIEW';
export const POST_REVIEW='review/POST_REVIEW';

const actions = createActions({
    [INIT_REVIEW]: () => {},
    [SET_REVIEW]: () => {},
    [POST_REVIEW]: () => {},
});

const reviewReducer = handleActions(
    {
        [INIT_REVIEW]:  (state, payload) => {
            return initialState;
        },
        [SET_REVIEW]: (state, {payload})=>{
            return {
                ...state,
                [payload.name] : payload.value
            }
        },
        [POST_REVIEW]: (state, { payload }) => {
            console.log(payload);
            return payload;
        },

    },
    initialState
);

export default reviewReducer;