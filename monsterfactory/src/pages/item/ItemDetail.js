import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { decodeJwt } from '../../utils/tokenUtils';
import itemDetail from './itemDetail.css';

import {
    callItemBySearchAPI
} from '../../apis/ItemAPICalls'

function ItemDetail() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const params = useParams();
    const item = useSelector(state => state.itemReducer);
    // const token = decodeJwt(window.localStorage.getItem("accessToken"));

    const [form, setForm] = useState({});

    useEffect(
        () => {
            dispatch(callItemBySearchAPI({
                itemId: params.itemId
            }));
        }, []
    );

    const onChangeHandler = (e) => {
        setForm({
            ...form
        });
    };

    return (
        <>
            <div className='itemdetailbox'>
                { item && item.map((item) => (
                    <div className='itemdetailsmallbox'>
                        <div className='itemdetailtextbox'>
                            <img src={item.itemImgData.itemImgUrl} width='25%' height='25%'/>
                            <div className='itemdetailinfotextbox'>
                                <h3>아이템 이름 : {item.itemName}</h3>
                                <h3>아이템 가격 : {item.itemPrice}</h3>
                                <h3>아이템 카테고리 : {item.itemCategoryData.itemCategoryName}</h3>
                                <h3>아이템 설명 : {item.itemExplanation}</h3>
                                <h3>아이템 파워 : {item.itemPower}</h3>
                                <h3>아이템 오브젝트 : {item.itemObjectName}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default ItemDetail;