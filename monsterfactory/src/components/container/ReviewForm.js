import reviewReducer, { SET_REVIEW } from "../../modules/ReviewModule";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import RegistButton from "../item/RegistButton";

import { callRegistReviewApi } from "../../apis/ReviewAPICalls";

import { useSelector } from "react-redux";
function ReviewForm(){

    const params = useParams();

    useEffect(
        ()=>{
            dispathch({type: SET_REVIEW, payload: {name: "targetGameId", value: Number(params.gameId) }});
        },
        []
    )


    const dispathch = useDispatch();
    const onChangeHandler = (e) => {
        dispathch({type: SET_REVIEW, payload: {name: e.target.name, value: e.target.value}});
    }

    const review = useSelector(state=>state.reviewReducer);

    const onClickRegistHandler = (e) => {
        // result 값 set
        // dispathch({type: SET_REVIEW, payload: {name: "result", value: e.target.value}});
        // 등록 api 호출
        dispathch(callRegistReviewApi({form:{
            ...review,
            "result" : e.target.value
        }}));
    }
    return (
        <>
            <textarea name="comment" onChange={onChangeHandler}></textarea>
            <div style={{display:"flex", justifyContent:"center"}}>
                <RegistButton onClickHandler={onClickRegistHandler} value="APPROVED" buttonText="승인"/>
                <RegistButton onClickHandler={onClickRegistHandler} value="RETURNED" buttonText="반려"/>
            </div>

        </>
    );
}
export default ReviewForm;