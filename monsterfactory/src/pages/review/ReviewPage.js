import GameDetail from "../../components/item/GameDetail";
import ReviewButton from "../../components/item/ReviewButton";

import { useState } from "react";
import ReviewForm from "../../components/container/ReviewForm";

function ReviewPage() {

    const [isClicked, setIsClicked] = useState(false);   
    const reviewRegistClickHandler = ()=>{
        setIsClicked(true);
    }

    return (
        <>
            <div className='detailbox'>
                <GameDetail/>
                {isClicked ? <ReviewForm/> : <ReviewButton onClickHandler={reviewRegistClickHandler}/>}
            </div>

        </>
    );
}

export default ReviewPage;