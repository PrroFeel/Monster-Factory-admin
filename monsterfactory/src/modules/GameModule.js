import { createActions, handleActions } from "redux-actions";

const initialState = [];

export const GET_GAMES = 'game/GET_GAMES';
export const GET_GAME = 'game/GET_GAME';
export const GAME_INIT = 'game/GAME_INIT';
const actions = createActions({
    [GET_GAMES]: () => {},
    [GET_GAME]: () => {},
    [GAME_INIT]: () => {},
});

const gameReducer = handleActions(
    {
        [GAME_INIT]:  (state, payload) => {
            return initialState;
        },
        [GET_GAMES]: (state, { payload }) => {
            return payload;
        },
        [GET_GAME]: (state, { payload }) => {
            return payload;
        }
    },
    initialState
);

export default gameReducer;