import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './Header.css';
import logo from './img/logo.png';
import loginIcon from './img/login.png';
import signupIcon from './img/join.png';
import mypageIcon from './img/my.png';
import supportIcon from './img/service-center.png';
import searchIcon from './img/search.png';

const Header = () => {
    const [searchKey, setSearchKey] = useState('');
    const navigate = useNavigate();

    const handleSearchKeyChange = (e) => {
        setSearchKey(e.target.value);
    }

    const handleSearchKeySubmit = (e) => {
        e.preventDefault();
        navigate('/search?key=' + searchKey);
    }
    const [ScrollY, setScrollY] = useState(0); // window 의 pageYOffset값을 저장
    const [ScrollActive, setScrollActive] = useState(true);
    function handleScroll() {
        if (ScrollY > 200) {
            setScrollY(window.pageYOffset);
            setScrollActive(false);
        } else {
            setScrollY(window.pageYOffset);
            setScrollActive(true);
        }
        }
        useEffect(() => {
        function scrollListener() {
            window.addEventListener("scroll", handleScroll);
        } //  window 에서 스크롤을 감시 시작
        scrollListener(); // window 에서 스크롤을 감시
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }; //  window 에서 스크롤을 감시를 종료
    });



    return (
        <header>
            <div id="title-bar">
                <div className="container">
                    <div>
                        <a><img src={logo} alt="CGV 로고" /></a>
                        <span>CULTUREPLEX</span>
                    </div>
                    <img src="https://img.cgv.co.kr/WingBanner/2022/0303/16462658373950.png" alt="현대M포인트" width="136px" height="39px"></img>
                    <UserNavList />
                </div>
            </div>
            
            
            <div className={ScrollActive ? "fixedBox fixed" : "fixedBox"}>
                        {ScrollActive ? 
                                <div id="nav-bar">
                                <nav className="container">
                                    <MovieNavList />
                                    <form onSubmit={handleSearchKeySubmit}>
                                        <input type="text" value={searchKey} onChange={handleSearchKeyChange} />
                                        <button type="submit">
                                            <img src={searchIcon} alt="검색 아이콘" />
                                        </button>
                                    </form>
                                </nav>
                            </div>
                                : 
                                <div class="nav-fixed">
                                    <img src="https://img.cgv.co.kr/R2014/images/common/logo/logoWhite.png" alt="CGV" width="70px"></img>
                                    <ul class="nav_menu">
                                    
                                        <li>
                                            <h2><a>영화</a></h2>                                         
                                        </li>
                                        <li>
                                            <h2><a>극장</a></h2>                                               
                                        </li>
                                        <li>
                                            <h2><a><strong>예매</strong></a></h2>                                              
                                        </li>
                                        <li>
                                            <h2><a>스토어</a></h2>                                               
                                        </li>
                                        <li>
                                            <h2><a>이벤트</a></h2>                                             
                                        </li>
                                        <li>
                                            <h2><a>혜택</a></h2>                                            
                                        </li>
                                    </ul>                                
                                    
                                </div>}
                    </div>


            
        </header>
    );
};

const UserNavList = () => {
    return (
        <ul>
            <li>
                <a>
                    <img src={loginIcon} alt="로그인 아이콘" />
                    <span>로그인</span>
                </a>
            </li>
            <li>
                <a>
                    <img src={signupIcon} alt="회원가입 아이콘" />
                    <span>회원가입</span>
                </a>
            </li>
            <li>
                <a>
                    <img src={mypageIcon} alt="마이페이지 아이콘" />
                    <span>MY CGV</span>
                </a>
            </li>
            <li>
                <a>
                    <img src={supportIcon} alt="고객센터 아이콘" />
                    <span>고객센터</span>
                </a>
            </li>
        </ul>
    );
};

const MovieNavList = () => {
    return (
        <ul>
            <li><a>영화</a></li>
            <li><a>극장</a></li>
            <li><a>예매</a></li>
            <li><a>스토어</a></li>
            <li><a>이벤트</a></li>
            <li><a>혜택</a></li>
        </ul>
    );
};

export default Header;
