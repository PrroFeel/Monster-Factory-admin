import { 
    POST_REVIEW
} from "../modules/ReviewModule";

export const callRegistReviewApi = ({form}) => {


    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/reviews/`;

    return async (dispatch, getState) => {
        console.log("form",form);
        const result = await fetch(requestURL, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            },
            body: JSON.stringify(form)
        })
        .then(response => response.json());
        
        if(result.status == 200){
            dispatch({ type: POST_REVIEW, payload: result.results});
            alert("리뷰 등록 성공");
        } else{
            alert("리뷰 등록 실패 -- " + result.results);
        }
 
    };
}