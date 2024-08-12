import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';
import '../Styles/Login.css';

function Signup() {
    const logoUrl = `${process.env.PUBLIC_URL}/images/logo-big.svg`;
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [phone, setPhone] = useState('');

    const handleIdCheck = async (event) => {
        event.preventDefault();
        try {
            const response = await api.post('/api/auth/idcheck', {
                username
            });

            if (response.data.success) {
                alert('사용 가능한 아이디입니다.');
            } else {
                alert('이미 사용 중인 아이디입니다.');
            }
        } catch (error) {
            console.error('아이디 중복 확인 중 오류 발생:', error);
            alert('아이디 중복 확인 중 오류가 발생했습니다. 다시 시도해주세요.');
        }
    };

    const handleSignup = async (event) => {
        event.preventDefault();
        try {
            const response = await api.post('/api/auth/signup', {
                username,
                password,
                passwordConfirm,
                email,
                name,
                gender,
                birthdate,
                phone
            });

            if (response.data.success) {
                navigate('/login');
            } else {
                alert('회원가입 실패: ' + response.data.message);
            }
        } catch (error) {
            console.error('회원가입 중 오류 발생:', error);
            alert('회원가입 중 오류가 발생했습니다. 다시 시도해주세요.');
        }
    };

    return (
        <div className='login'>
            <div className='signup-box'>
                <img className='login-img' src={logoUrl} alt="logo" />
                <form onSubmit={handleSignup}>
                    <div className='input-group'>
                        <p>이름</p>
                        <input 
                            type='text' 
                            id='name' 
                            name='name' 
                            placeholder='이름을 입력하세요' 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className='input-group id'>
                        <p>아이디</p>
                        <div>
                            <input 
                                type='text' 
                                id='username' 
                                name='username' 
                                placeholder='아이디를 입력하세요' 
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <button type='submit' className='login-button' onClick={handleIdCheck}>
                                중복확인
                            </button>
                        </div>
                    </div>
                    <div className='input-group'>
                        <p>비밀번호</p>
                        <input 
                            type='password' 
                            id='password' 
                            name='password' 
                            placeholder='비밀번호를 입력하세요' 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className='input-group'>
                        <p>비밀번호 확인</p>
                        <input 
                            type='password' 
                            id='password confirm' 
                            name='password confirm' 
                            placeholder='비밀번호를 입력하세요' 
                            value={password}
                            onChange={(e) => setPasswordConfirm(e.target.value)}
                        />
                    </div>
                    <div className='input-group id'>
                        <p>이메일</p>
                        <div>
                            <input 
                            type='email' 
                            id='email' 
                            name='email' 
                            placeholder='이메일을 입력하세요' 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                            <button type='submit' className='login-button'>인증하기</button>
                        </div>
                    </div>
                    <div className='input-group custom-select'>
                        <p>성별</p>
                        <select 
                            id='gender' 
                            name='gender' 
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                        >
                            <option value=''>선택하세요</option>
                            <option value='male'>남성</option>
                            <option value='female'>여성</option>
                            <option value='other'>기타</option>
                        </select>
                    </div>
                    <div className='input-group custom-date'>
                        <p>생년월일</p>
                        <input 
                            type='date' 
                            id='birthdate' 
                            name='birthdate' 
                            value={birthdate}
                            onChange={(e) => setBirthdate(e.target.value)}
                        />
                    </div>
                    <div className='input-group'>
                        <p>휴대전화</p>
                        <input 
                            type='tel' 
                            id='phone' 
                            name='phone' 
                            placeholder='휴대전화번호를 입력하세요' 
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <button type='submit' className='login-button'>회원가입</button>
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

export default Signup;