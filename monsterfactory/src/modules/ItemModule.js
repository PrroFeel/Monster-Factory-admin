import { createActions, handleActions } from "redux-actions";

const initialState = [];

export const GET_ITEMS = 'item/GET_ITEMS';
export const GET_ITEM = 'item/GET_ITEM';
export const POST_ITEM = 'item/POST_ITEM';
export const PUT_ITEM = 'item/PUT_ITEM';
export const DELETE_ITEM = 'item/DELETE_ITEM';

const actions = createActions({
    [GET_ITEMS]: () => {},
    [GET_ITEM]: () => {},
    [POST_ITEM]: () => {},
    [PUT_ITEM]: () => {},
    [DELETE_ITEM]: () => {}
});

const itemReducer = handleActions(
    {
        [GET_ITEMS]: (state, { payload }) => {
            return payload;
        },
        [GET_ITEM]: (state, { payload }) => {
            return payload;
        },
        [POST_ITEM]: (state, { payload }) => {
            return payload;
        },
        [PUT_ITEM]: (state, { payload }) => {
            return payload;
        },
        [DELETE_ITEM]: (state, { payload }) => {
            return payload;
        }
    },
    initialState
);

export default itemReducer;