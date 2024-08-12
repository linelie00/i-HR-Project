import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Bar() {
    const logoUrl = `${process.env.PUBLIC_URL}/images/logo.svg`;
    const homeUrl = `${process.env.PUBLIC_URL}/images/home.svg`;
    const homeActiveUrl = `${process.env.PUBLIC_URL}/images/home-active.svg`;
    const chartUrl = `${process.env.PUBLIC_URL}/images/chart.svg`;
    const chartActiveUrl = `${process.env.PUBLIC_URL}/images/chart-active.svg`;

    const [activeTab, setActiveTab] = useState('home');
    const navigate = useNavigate();

    const handleTabClick = (tab) => {
        if (activeTab !== tab) {
            navigate(`/${tab}`);
        }
    };

    useEffect(() => {
        const path = window.location.pathname;
        const tab = path.replace('/', ''); // 경로에서 '/'를 제거하고 나머지 부분을 가져옴
        setActiveTab(tab || 'home'); // 빈 문자열이면 기본값으로 'home'을 사용
    }, []);

    return (
        <div className='bar'>
            <div className='bar-header'>
                <img src={logoUrl} alt="logo" />
            </div>
            <div 
                className={`b ${activeTab === 'home' ? 'active' : ''}`} 
                onClick={() => handleTabClick('home')}
            >
                <img src={activeTab === 'home' ? homeActiveUrl : homeUrl} alt="home" />
                Home
            </div>
            <div 
                className={`b ${activeTab === 'dashboard' ? 'active' : ''}`} 
                onClick={() => handleTabClick('dashboard')}
            >
                <img src={activeTab === 'dashboard' ? chartActiveUrl : chartUrl} alt="chart" />
                Dashboard
            </div>
        </div>
    );
}

export default Bar;
