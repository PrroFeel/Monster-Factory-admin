import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState, useRef } from 'react';
import ItemUpdateForm from './form/ItemUpdateForm';

import {
    callItemUpdateAPI,
} from '../../apis/ItemAPICalls';

function ItemUpdatePage() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const params = useParams();
    const form = useSelector(state => state.itemReducer);

    const onClickHandler = () => {
        dispatch(callItemUpdateAPI({form: form}));
        navigate('/main/item');
    };

    return (
        <>
        <div>
            <ItemUpdateForm itemId={params.itemId}/>
            <button onClick = { onClickHandler }> 아이템 수정하기 </button>
        </div>
        </>
    );
}

export default ItemUpdatePage;