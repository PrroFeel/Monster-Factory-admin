import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import itemRegist from './itemRegist.css';

import {
    callItemRegistAPI
} from '../../apis/ItemAPICalls'
import { POST_ITEM } from '../../modules/ItemModule';

function ItemRegist() {

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const item = useSelector(state => state.itemReducer);

    const [image, setImage] = useState(null);
    const [imgUrl, setImgUrl] = useState();
    const imageInput = useRef();

    const [form, setForm] = useState({
        itemCategoryCode: 0,
        itemExplanation: '',
        itemName: '',
        itemObjectName: '',
        itemPower: 0,
        itemPrice: 0
    });

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
    }, [image]
    );

    const onChangeImageUpload = (e) => {

        const image = e.target.files[0];

        setImage(image);
    };

    const onClickImageUpload = () => {
        imageInput.current.click();
    };

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const onClickItemRegistHandler = () => {

        const formData = new FormData();

        formData.append("itemCategoryCode", parseInt(form.itemCategoryCode));
        formData.append("itemExplanation", form.itemExplanation);
        formData.append("itemName", form.itemName);
        formData.append("itemObjectName", form.itemObjectName);
        formData.append("itemPower", form.itemPower);
        formData.append("itemPrice", form.itemPrice);

        if(image) {
            formData.append("itemImgFile", image);
        }

        dispatch(callItemRegistAPI({
            form: formData
        }));

        alert('아이템 리스트로 이동합니다');
        navigate('/main/item', { replace: true });
        window.location.reload();
    }

    return (
        <>
        <div className='itemregistdetailbox'>
            <div className='itemregistsmallbox'>
                <div className='itemregistinfoinputbox'>
                    <div className='imgbox'>
                        {imgUrl && 
                        <img
                            src= {imgUrl} width='200px' height='200px' 
                        />}
                    </div>
                    <div>
                    <input
                        type="file"
                        name='itemImgFile'
                        accept='image/jpg,image/png,image/jpeg,image/gif'
                        onChange={ onChangeImageUpload }
                        ref = { imageInput }
                    /></div>
                    <button onClick={ onClickImageUpload } className='imguploadbtn'>
                        이미지 업로드
                    </button>
                </div>
                <div>
                    <div className='registinfoform'>
                    <input
                        name='itemName'
                        onChange={ onChangeHandler }
                        placeholder='아이템 이름'
                        className='registitemname'
                    />
                    <input
                        name='itemPrice'
                        onChange={ onChangeHandler }
                        placeholder='아이템 가격'
                        type='number'
                        className='registitemprice'
                    />
                    </div>
                    <div>
                        <textarea
                            name='itemExplanation'
                            onChange={ onChangeHandler }
                            placeholder='아이템 설명'
                            className='registexplanation'
                        />
                    </div>
                    <div>
                        <select className='registitemcategorycode'>
                            <option><input name='itemCategoryCode' onChange={ onChangeHandler } value='1'/>무기</option>
                            <option><input name='itemCategoryCode' onChange={ onChangeHandler } value='2'/>방어구</option>
                        </select>
                        <input
                            name='itemObjectName'
                            onChange={ onChangeHandler }
                            placeholder='아이템 오브젝트 이름'
                            className='registitemobjname'
                        />
                        <input
                            name='itemPower'
                            onChange={ onChangeHandler }
                            placeholder='공격력'
                            className='registitempower'
                        />
                    </div>
                </div>
                
            </div>
            <div>
                <button onClick = { onClickItemRegistHandler } className='itemregistbtn'> 아이템 등록하기 </button>
            </div>
        </div>
        </>
    );

}

export default ItemRegist;