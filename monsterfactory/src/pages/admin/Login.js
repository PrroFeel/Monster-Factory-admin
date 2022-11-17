import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

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
            navigate("/", { replace: true });
        }
    }, [loginMember]);

    if(loginMember.length > 0) {
        return <Navigate to="/"/>
    }

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const onClickLoginHandler = () => {
        dispatch(callLoginAPI({
            form: form
        }));
    }

    return (
        <>
            <div>
                <h1>로그인</h1>
                <input
                    type="text"
                    name="memberId"
                    placeholder="아이디"
                    autoComplete='off'
                    onChange={ onChangeHandler }
                />
                <input
                    type="password"
                    name='memberPassword'
                    placeholder='패스워드'
                    autoComplete='off'
                    onChange={ onChangeHandler }
                />
                <button onClick={ onClickLoginHandler }>
                    로그인
                </button>
            </div>
        </>
    );
}

export default Login;