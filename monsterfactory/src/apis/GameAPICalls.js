import{
    GET_GAMES,
    GET_GAME
} from '../modules/GameModule'

export const callWaitedGameList = () => {

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/games/waited`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        })
        .then(response => response.json());
            dispatch({ type: GET_GAMES, payload: result });
            
    };
}

export const callGameDetailApi = ({gameId}) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/games/${gameId}/basic`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        })
        .then(response => response.json());
            dispatch({ type: GET_GAME, payload: result });
        
    };

}