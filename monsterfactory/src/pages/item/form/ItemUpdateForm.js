import { callItemBySearchAPI } from '../../../apis/ItemAPICalls';
import { useDispatch,useSelector} from 'react-redux';
import { useEffect, useState, useRef } from 'react';

import { GET_ITEM } from '../../../modules/ItemModule';

function ItemUpdateForm({itemId}) {

    const items = useSelector(state => state.itemReducer);
    const item = items.results;
    console.log('item', item);
    const dispatch = useDispatch();
    const [image, setImage] = useState(null);
    const [imgUrl, setImgUrl] = useState(item[0].itemImgData.itemImgUrl);
    const imageInput = useRef();

    const onChangeImageUpload = (e) => {

        const image = e.target.files[0];

        setImage(image);
    };

    const onClickImageUpload = () => {
        imageInput.current.click();
    };

    useEffect(() => {

        if(image) {
            
            const fileReader = new FileReader();
            fileReader.onload = (e) => {
                const { result } = e.target;
                if(result) {
                    setImgUrl(result);
                }
            }
            fileReader.readAsDataURL(image);
        }

        dispatch(callItemBySearchAPI({itemId: itemId}));
    }, [image]);

    const onChangeHandler = (e) => {
        dispatch({type: GET_ITEM, payload: {key: e.target.name, value: e.target.value}});
    };

    return item && item.map((item) => (
        <>
        <div>
            <div>
                {imgUrl && <img
                    src= {imgUrl}
                />}
                <input
                    type="file"
                    name='itemImgFile'
                    accept='image/jpg,image/png,image/jpeg,image/gif'
                    onChange={ onChangeImageUpload }
                    ref = { imageInput }
                />
                <button onClick={ onClickImageUpload }>
                    이미지 업로드
                </button>
            </div>
            <div>
                <input
                    name='itemName'
                    onChange={ onChangeHandler }
                    placeholder='아이템 이름'
                    value={item.itemName}
                />
                <input
                    name='itemPrice'
                    onChange={ onChangeHandler }
                    placeholder='아이템 가격'
                    type='number'
                    value={item.itemPrice}
                />
                <textarea
                    name='itemExplanation'
                    onChange={ onChangeHandler }
                    placeholder='아이템 설명'
                    value={item.itemExplanation}
                />
                <select value={item.itemCategoryCode}>
                    <option><input name='itemCategoryCode' onChange={ onChangeHandler } value='1'/>무기</option>
                    <option><input name='itemCategoryCode' onChange={ onChangeHandler } value='2'/>방어구</option>
                </select>
                <input
                    name='itemObjectName'
                    onChange={ onChangeHandler }
                    placeholder='아이템 오브젝트 이름'
                    value={item.itemObjectName}
                />
                <input
                    name='itemPower'
                    onChange={ onChangeHandler }
                    placeholder='아이템 공격력'
                    value={item.itemPower}
                />
            </div>
        </div>
        </>
    ));
}

export default ItemUpdateForm;