import { useNavigate } from 'react-router-dom';
import { useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './list.css';
import { GAME_INIT } from '../../modules/GameModule';


import { callWaitedGameList } from '../../apis/GameAPICalls';
function ReviewWaitedList() {

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const result = useSelector(state => state.gameReducer);
    const gameList = result.results;

    useEffect(
        () => {
            dispatch(callWaitedGameList());
        }, []
    );

    const onClickHandler = (gameId) => {
        
        navigate(`${gameId}`, { replace: false });
    }

    return (
        <>
            <div className='itembigbox'>
                <br/>
                {
                    Array.isArray(gameList) && gameList.map((game) => (
                        <div className='listbox' onClick={ () => onClickHandler(game.id) }>
                            <div className='summaryinfosmall'>
                                <img src={game.thumbnailFile.url} className='summaryImg'/>
                                <div className='iteminfotext'>
                                    <h3>이름 : {game.name}</h3>
                                    <h3>개발자 : {game.developerMemberId}</h3>
                                    <h3>제출 날짜: {game.submitDatetime}</h3>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default ReviewWaitedList;