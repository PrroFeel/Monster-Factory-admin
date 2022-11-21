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

    const onClickTokenEndHandler = () => {

        const token = decodeJwt(window.localStorage.getItem("accessToken"));

        if(token.exp * 1000 < Date.now()) {
            navigate("/", { replace: true });
            return ;
        }

        navigate("/main", { replace: true });
    }

    const onClickLogoutHandler = () => {
        window.localStorage.removeItem('accessToken');
        dispatch(callLogoutAPI());

        alert('로그아웃이 되어 로그인 페이지로 이동합니다');
        navigate("/", { replace: true })
        window.location.reload();
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
                    <NavLink to={"manage"} className='navbarBtn'> 운영 </NavLink>
                    <NavLink to={"review"} className='navbarBtn'> 심사 </NavLink>
                    <NavLink to={"item"} className='navbarBtn'> 아이템 </NavLink>
                    <AfterLogin/>
                </div>
            </div>
        </>
    );
}

export default Navbar;