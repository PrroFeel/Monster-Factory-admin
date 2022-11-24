import './button.css'

function ReviewButton({onClickHandler}){

    return (
        <div className="btnposition">
            <button className='btn' onClick={onClickHandler}>심사 하기</button>
        </div>

    );
}

export default ReviewButton;