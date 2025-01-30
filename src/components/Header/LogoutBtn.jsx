import React from 'react';
import { useDispatch } from 'react-redux';
import authService from '../../appwrite/auth';
import { logout } from '../../store/authSlice';

function LogoutBtn() {
    const dispatch = useDispatch();

    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout());
        });
    };

    return (
        <button
            className='neon__button inline-block px-6 py-2 duration-200 border-4 border-transparent rounded-full text-xl'
            onClick={logoutHandler}
        >
            Logout
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </button>
    );
}

export default LogoutBtn;
