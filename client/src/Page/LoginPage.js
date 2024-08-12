import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Styles/Login.css';

function Login() {
    const logoUrl = `${process.env.PUBLIC_URL}/images/logo-big.svg`;
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault(); // 페이지 리프레시 방지
        try {
            const response = await axios.post('/api/login', {
                username,
                password
            });
            
            // 예시: 로그인 성공 시, 대시보드 페이지로 이동
            if (response.data.success) {
                navigate('/dashboard');
            } else {
                alert('로그인 실패: ' + response.data.message);
            }
        } catch (error) {
            console.error('로그인 중 오류 발생:', error);
            alert('로그인 중 오류가 발생했습니다. 다시 시도해주세요.');
        }
    };

    return (
        <div className='login'>
            <div className='login-box'>
                <img className='login-img' src={logoUrl} alt="logo" />
                <form onSubmit={handleLogin}>
                    <div className='input-group'>
                        <input 
                            type='text' 
                            id='username' 
                            name='username' 
                            placeholder='아이디를 입력하세요' 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)} // 입력값을 상태로 업데이트
                        />
                    </div>
                    <div className='input-group'>
                        <input 
                            type='password' 
                            id='password' 
                            name='password' 
                            placeholder='비밀번호를 입력하세요' 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} // 입력값을 상태로 업데이트
                        />
                    </div>
                    <button type='submit' className='login-button'>로그인</button>
                </form>
            </div>
            <div className='options'>
                <button 
                    className='link-button' 
                    onClick={() => navigate('/signup')}
                >
                    회원가입하기
                </button>
                <button 
                    className='link-button' 
                    onClick={() => navigate('/forgot-password')}
                >
                    아이디/비밀번호 찾기
                </button>
            </div>
        </div>
    );
}

export default Login;
