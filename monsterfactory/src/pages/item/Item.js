import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import item from './item.css';

import {
    callItemAPI
} from '../../apis/ItemAPICalls'
import { GET_ITEMS } from '../../modules/ItemModule';

function Item() {

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const itemLists = useSelector(state => state.itemReducer);
    const itemList = itemLists.results;

    useEffect(
        () => {
            dispatch(callItemAPI());
        }, [dispatch]
    );

    const onClickHandler = (itemId) => {
        navigate(`${itemId}`, { replace: false });
    }

    const onClickBtnHandler = () => {

        navigate(`regist`, {replace: false })
    }

    return (
        <>
            <div className='itembigbox'>
                <div className='itemregistbtnposition'>
                    <button className='itemregistbtn' onClick={ onClickBtnHandler }>아이템 등록하기</button>
                </div>
                <br/>
                {
                    itemList && itemList.map((item) => (
                        <div className='itembox' onClick={ () => onClickHandler(item.itemId) }>
                            <div className='iteminfosmall'>
                                <img src={item.itemImgData.itemImgUrl} className='itemImg'/>
                                <div className='iteminfotext'>
                                    <h3>이름 : {item.itemName}</h3>
                                    <h3>가격 : {item.itemPrice}mon</h3>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default Item;