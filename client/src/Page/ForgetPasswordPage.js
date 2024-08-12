import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Styles/Login.css';

function ForgotPassword() {
    const logoUrl = `${process.env.PUBLIC_URL}/images/logo-big.svg`;
    const navigate = useNavigate();

    const [email, setEmail] = useState('');

    const handleForgotPassword = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('/api/forgot-password', {
                email
            });

            if (response.data.success) {
                alert('비밀번호 재설정 링크가 이메일로 전송되었습니다.');
                navigate('/login');
            } else {
                alert('오류: ' + response.data.message);
            }
        } catch (error) {
            console.error('비밀번호 찾기 중 오류 발생:', error);
            alert('비밀번호 찾기 중 오류가 발생했습니다. 다시 시도해주세요.');
        }
    };

    return (
        <div className='login'>
            <div className='login-box'>
                <img className='login-img' src={logoUrl} alt="logo" />
                <form onSubmit={handleForgotPassword}>
                    <div className='input-group'>
                        <input 
                            type='email' 
                            id='email' 
                            name='email' 
                            placeholder='이메일을 입력하세요' 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <button type='submit' className='login-button'>비밀번호 재설정</button>
                </form>
            </div>
            <div className='options-signup'>
                <button 
                    className='link-button' 
                    onClick={() => navigate('/')}
                >
                    로그인하기
                </button>
            </div>
        </div>
    );
}

export default ForgotPassword;