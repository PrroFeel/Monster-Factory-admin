import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { callGameDetailApi } from '../../apis/GameAPICalls';
import ReviewButton from './ReviewButton';
function GameDetail() {

    const dispatch = useDispatch();
    const params = useParams();
    const result = useSelector(state => state.gameReducer);
    const game = result.results; 

    useEffect(
        () => {
            dispatch(callGameDetailApi({
                gameId: params.gameId
            }));
        }, []
    );

    return (
        <>

            { game && !Array.isArray(game) && 
                <div className='detailsmallbox'>
                    <div className='itemdetailtextbox'>
                        <img src={game.thumbnailFile.url} className="summaryImg"/>
                        <div className='itemdetailinfotextbox'>
                            <h3>게임 고유 번호: {game.id}</h3>
                            <h3>게임 이름 : {game.name}</h3>
                            <h3>개발자 : {game.developerMemberId}</h3>
                            <h3>게임 상태 : {game.gameStatus}</h3>
                            <h3>제출 날짜 및 시간 : {game.submitDatetime}</h3>
                            <h3>게임 설명 : {game.gameDescription}</h3>
                            <h3>웨않되</h3>
                        </div>
                    </div>
                </div>
            }
               
        </>
    );
}

export default GameDetail;