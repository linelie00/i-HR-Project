import React, { useState } from 'react';

function Header() {
    const profile = `${process.env.PUBLIC_URL}/images/profile.svg`;
    const triangleUp = `${process.env.PUBLIC_URL}/images/triangle-up.svg`;
    const triangleDown = `${process.env.PUBLIC_URL}/images/triangle-down.svg`;

    const [isBallonVisible, setIsBallonVisible] = useState(false);

    const toggleBallon = () => {
        setIsBallonVisible(!isBallonVisible);
    }

    return (
        <div className='header'>
            <div className='user' onClick={toggleBallon}>
                <img className='profile' src={profile} alt="user" />
                닉네임
                <img 
                    className='triangle'
                    src={isBallonVisible ? triangleUp : triangleDown}
                    alt="triangle"
                />
            </div>
            {isBallonVisible && <div className='ballon'>
                <div className='ballon-top'>
                    <img className='ballon-profile' src={profile} alt="user" />
                    닉네임
                </div>
                <div className='ballon-mid'>
                    <p>계정 관리</p>
                    <p>비밀번호 변경</p>
                    <p>로그아웃</p>
                </div>
            </div>}
        </div>
    );
}

export default Header;
