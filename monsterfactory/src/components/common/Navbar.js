import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { decodeJwt } from '../../utils/tokenUtils';
import navbar from '../../commonCss/navbar.css';

import {
    callLogoutAPI
} from '../../apis/MemberAPICalls'

function Navbar() {

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const loginMember = useSelector(state => state.memberReducer);
    const isLogin = window.localStorage.getItem('accessToken');
    const [search, setSearch] = useState('');

    const onSearchHandler = (e) => {
        setSearch(e.target.value);
    }

    const onClickTokenEndHandler = () => {

        const token = decodeJwt(window.localStorage.getItem("accessToken"));

        if(token.exp * 1000 < Date.now()) {
            navigate("/login", { replace: true });
            return ;
        }

        navigate("/", { replace: true });
    }

    const onClickLogoutHandler = () => {
        window.localStorage.removeItem('accessToken');
        dispatch(callLogoutAPI());

        alert('로그아웃이 되어 메인 화면으로 이동합니다');
        navigate("/", { replace: true })
        window.location.reload();
    }

    function BeforeLogin() {

        return (
            <div className='loginBtnBox'>
                <NavLink to = "/login" className='loginBtn'>로그인</NavLink>
            </div>
        );
    }

    function AfterLogin() {

        return (
            <div className='loginBtnBox'>
                <button onClick={ onClickLogoutHandler } className='loginBtn'> 로그아웃 </button>
            </div>
        );
    }

    return (
        <>
            <div className='navbar'>
                <div className='navbarBtnS'>
                    <button className='navbarBtn'> 운영 </button>
                    <button className='navbarBtn'> 심사 </button>
                    <button className='navbarBtn'> 아이템 </button>
                    { (isLogin == null || isLogin === undefined) ? <BeforeLogin/> : <AfterLogin/> }
                </div>
            </div>
        </>
    );
}

export default Navbar;