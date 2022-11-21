import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { decodeJwt } from '../../utils/tokenUtils';
import item from './item.css';

import {
    callItemAPI
} from '../../apis/ItemAPICalls'
import { GET_ITEMS } from '../../modules/ItemModule';

function Item() {

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const itemList = useSelector(state => state.itemReducer);

    console.log('itemList', itemList);

    // const token = decodeJwt(window.localStorage.getItem("accessToken"));

    useEffect(
        () => {
            dispatch(callItemAPI());
        }, []
    );

    return (
        <>
            <div className='itembigbox'>
                <div className='itemregistbtnposition'>
                    <button className='itemregistbtn'>아이템 등록하기</button>
                </div>
                <br/>
                {
                    itemList && itemList.map((item) => (
                        <div className='itembox'>
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