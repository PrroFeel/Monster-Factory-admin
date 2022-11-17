import {
    POST_LOGIN
} from '../modules/MemberModule';

export const callLoginAPI = ({form}) => {

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/auth/login`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({
                memberId: form.memberId,
                password: {value: form.memberPassword}
            })
            
        })
        .then(response => response.json());

        if(result.status === 200) {
            window.localStorage.setItem('accessToken', result.results.accessToken);
        }
        dispatch({ type: POST_LOGIN, payload: result });

    };

}

export const callLogoutAPI = () => {
    

    return async (dispatch, getState) => {            

        dispatch({ type: POST_LOGIN,  payload: '' });        
        console.log('[MemberAPICalls] callLogoutAPI RESULT : SUCCESS');
    };
}