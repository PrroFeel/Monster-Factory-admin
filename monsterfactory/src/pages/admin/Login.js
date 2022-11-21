import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import login from './login.css';

import {
    callLoginAPI
} from '../../apis/MemberAPICalls'
import { POST_LOGIN } from '../../modules/MemberModule';

function Login() {

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const loginMember = useSelector(state => state.memberReducer);  // API 요청하여 가져온 loginMember 정보

    const [form, setForm] = useState({
        memberId: '',
        memberPassword: '',
    });

    useEffect(() => {

        if(loginMember.status === 200) {
            console.log("login success", loginMember);
            navigate("/main", { replace: true });
        }
    }, [loginMember]);

    if(loginMember.length > 0) {
        return <Navigate to="/main"/>
    }

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const onClickLoginHandler = () => {

        if(form.memberId != 'admin') {
            alert("관리자 아이디가 아닙니다");
        }
        else {
            dispatch(callLoginAPI({
                form: form
            }));
        }
        
    }

    return (
        <>
            <div className='centerbox'>
                <img src="monfac-logo.png" width='100%' height='100%'/>
                <h3>관리자 모드</h3>
                <input
                    type="text"
                    name="memberId"
                    placeholder="아이디 입력"
                    autoComplete='off'
                    onChange={ onChangeHandler }
                    className='logininput'
                />
                <input
                    type="password"
                    name='memberPassword'
                    placeholder='패스워드 입력'
                    autoComplete='off'
                    onChange={ onChangeHandler }
                    className='logininput'
                />
                <div>
                    <button onClick={ onClickLoginHandler } className='loginsucbtn'>
                        로그인
                    </button>
                </div>
            </div>
        </>
    );
}

export default Login;