import './form.css';


import reviewReducer, { SET_REVIEW } from "../../modules/ReviewModule";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import RegistButton from "../item/RegistButton";

import { callRegistReviewApi } from "../../apis/ReviewAPICalls";

import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

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

    const navigate = useNavigate();
    const onClickRegistHandler = (e) => {
        // 등록 api 호출
        dispathch(callRegistReviewApi({form:{
            ...review,
            "result" : e.target.value
        }}));
        navigate('/main/review',  { replace: false });

    }
    return (
        <>
            <div className="textbox">
                <h3 style={{color: 'white'}}>심사평</h3>
                <textarea cols="10" rows="100" className='textareastyle' name="comment" onChange={onChangeHandler}></textarea>
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <RegistButton onClickHandler={onClickRegistHandler} value="APPROVED" buttonText="승인"/>
                <RegistButton onClickHandler={onClickRegistHandler} value="RETURNED" buttonText="반려"/>
            </div>
        </>

       
    );
}
export default ReviewForm;