import GameDetail from "../../components/item/GameDetail";
import ReviewButton from "../../components/item/ReviewButton";

function ReviewPage() {

    return (
        <>
            <div className='detailbox'>
                <GameDetail/>
                <ReviewButton/>
            </div>

        </>
    );
}

export default ReviewPage;