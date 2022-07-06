import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
import Layout from './Layout';
import SlideBox from './SlideBox';
import Video from './Video';
import './Home.css';
import CGV from './img/CGV.png'


const Home = () => {

    const [ScrollY, setScrollY] = useState(0); // window 의 pageYOffset값을 저장
    const [ScrollActive, setScrollActive] = useState(false);
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
    const [mutedVideo, setMutedVideo] = useState(true);
    const video = document.getElementById('video'); 
    
    return (
        <Layout>
            <main>
                <article>
                    <div className="movie-wrap">
                        <video id="video" autoplay={1} muted={mutedVideo}>
                            <source src="https://adimg.cgv.co.kr/images/202206/elvis/elvis_1080x608_30.mp4" type="video/mp4" ></source>
                        </video>
                
                        <div class="movieSelection_video_controller_wrap">                  
                            <a href="http://ad.cgv.co.kr/click/CGV/CGV_201401/main@MovieSelection2021?ads_id%3d47137%26creative_id%3d66867%26click_id%3d87230%26maid%3D%26event%3d" id="ctl00_PlaceHolderContent_AD_CLIP_DETAIL_URL" class="btn_movieSelection_detailView">상세보기</a>                        
                            <a href="#none" id="pause" class="btn_movieSelection_pause" onClick={() => video.pause()}>Pause</a>
                            <a href="#none" id="play" class="btn_movieSelection_play" onClick={() => video.play()}>Play</a>
                            {mutedVideo === true?
                            <a href="#none" id="mute" class="btn_movieSelection_soundOn" onClick={() => setMutedVideo(false)}>Sound On</a>:
                            <a href="#none" id="mute" class="btn_movieSelection_soundOff" onClick={() => setMutedVideo(true)}>Sound Off</a>}
                            <input name="ctl00$PlaceHolderContent$AD_CNT_URL" type="hidden" id="ctl00_PlaceHolderContent_AD_CNT_URL" value="http://ad.cgv.co.kr/NetInsight/imp/CGV/CGV_201401/main@MovieSelection2021?ads_id%3d47137%26creative_id%3d66867"></input>
                        </div>
                    </div>
                    
                    <div className="container">
                        <header>
                            <div class="tabBtn_wrap">
                                <h3><a href="#none" class="active" id="btnMovie">무비차트</a></h3>
                                <h3><a href="#none" id="btnReserMovie">상영예정작</a></h3>
                            </div>
                            <a>전체보기</a>
                        </header>
                        <SlideBox />
                    </div>
                </article>

                <div className="container">
                
                <div class="event_title_wrap">
                    <h3>EVENT</h3>
                    <a href="/culture-event/event/defaultNew.aspx" id="btn_allView_Event" class="btn_allView">전체보기</a>
                    <a href="#none" class="btn_eventControl active">playStop</a>
                </div>
                
                
                    <div className="event_list_wrap">       
                    
                        <div className="article-contents">
                            <img src="https://img.cgv.co.kr/WebApp/contents/eventV4/34725/16552592605180.jpg" width="300px"></img>
                            <strong>[탑건: 매버릭]CGV 필름마크</strong>
                            <span>2022.06.15~2022.07.10</span>
                        </div>
                        <div className="article-contents">
                            <img src="https://img.cgv.co.kr/WebApp/contents/eventV4/34767/16558733872830.jpg" width="300px"></img>
                            <strong>[헤어질 결심]CGV 필름마크</strong>
                            <span>2022.06.22~2022.07.17</span>
                        </div>
                    </div>
                    </div>

                    <div class="specialHall_wrap">
                        <div class="contents">
                            <div class="specialHall_title_wrap">
                                <h3>특별관</h3>
                                <a href="http://www.cgv.co.kr/theaters/special/defaultNew.aspx" id="btn_allView_Special" class="btn_allView">전체보기</a>
                            </div>

                            <div class="specialHall_content">
                                <a href="http://www.cgv.co.kr/theaters/special/defaultDetailNew.aspx?idx=8" id="ctl00_PlaceHolderContent_specialHall_link" class="specialHall_link">
                                    <div class="img_wrap" data-scale="false">
                                        <img src="https://img.cgv.co.kr//Front/Main/2021/1130/16382612660560.png" id="ctl00_PlaceHolderContent_specialHall_img" alt="CINE de CHEF">
                                        </img>
                                    </div>
                                </a>
                                
                                <ul class="specialHall_list">
                                    
                                    <li class="">
                                        <a href="http://www.cgv.co.kr/theaters/special/defaultDetailNew.aspx?idx=7">
                                            <strong>SUITE CINEMA</strong>
                                            <div class="specialHall_hashTag_wrap">
                                                <span class="specialHall_hashTag">#호텔 컨셉의 프리미엄관</span>                                        
                                            </div>
                                        </a>
                                    </li>
                                    
                                    <li class="">
                                        <a href="http://www.cgv.co.kr/theaters/special/defaultDetailNew.aspx?idx=14">
                                            <strong>CINE &amp; LIVINGROOM</strong>
                                            <div class="specialHall_hashTag_wrap">
                                                <span class="specialHall_hashTag">#신개념 소셜 상영관</span>                                        
                                            </div>
                                        </a>
                                    </li>
                                    
                                    <li class="">
                                        <a href="http://www.cgv.co.kr/theaters/special/defaultDetailNew.aspx?idx=2">
                                            <strong>4DX</strong>
                                            <div class="specialHall_hashTag_wrap">
                                                <span class="specialHall_hashTag">#모션시트 #오감체험</span>                                        
                                            </div>
                                        </a>
                                    </li>
                                    
                                    <li class="active">
                                        <a href="http://www.cgv.co.kr/theaters/special/defaultDetailNew.aspx?idx=8">
                                            <strong>CINE de CHEF</strong>
                                            <div class="specialHall_hashTag_wrap">
                                                <span class="specialHall_hashTag">#쉐프가 있는 영화관</span>                                        
                                            </div>
                                        </a>
                                    </li>                                   
                                </ul>                               
                            </div>
                            <img src={require("./img/CGV.png")} alt="cgv" id="cgv"/>
                        </div>
                    </div>

                    <div className={ScrollActive ? "fixedBox fixed" : "fixedBox"}>
                        {ScrollActive ? 
                                <div class="fixedBtn_wrap">
                                    <a href="/ticket/" class="btn_fixedTicketing">예매하기</a>                   
                                    <a href="#none" class="btn_gotoTop"><img src="https://img.cgv.co.kr/R2014/images/common/btn/gotoTop.png" alt="최상단으로 이동"></img></a>
                                </div> 
                                : 
                                <div class="fixedBtn_wrap topBtn">
                                    <a href="/ticket/" class="btn_fixedTicketing">예매하기</a>
                                    <a href="#none" class="btn_gotoTop"><img src="https://img.cgv.co.kr/R2014/images/common/btn/gotoTop.png" alt="최상단으로 이동"></img></a>
                                </div>}
                    </div>
            </main>
            <footer>
                <div className="img-wrapper">     
                    <img src="https://adimg.cgv.co.kr/images/202111/cgvgift/0119_980x240.png" alt="광고-CGV 기프트 카드" border="0"></img>
                </div> 
                <ul class="policy_list">
                    <li><a href="http://corp.cgv.co.kr/company/" target="_blank">회사소개</a></li>
                    <li><a href="http://corp.cgv.co.kr/company/ir/financial/financial_list.aspx" target="_blank">IR</a></li>
                    <li><a href="http://corp.cgv.co.kr/company/recruit/step/default.aspx" target="_blank">채용정보</a></li>
                    <li><a href="http://corp.cgv.co.kr/company/advertize/ad_Default.aspx" target="_blank">광고/제휴/출점문의</a></li>
                    <li><a href="http://www.cgv.co.kr/rules/service.aspx">이용약관</a></li>
                    <li><a href="http://www.cgv.co.kr/rules/organized.aspx">편성기준</a></li>
                    <li><a href="http://www.cgv.co.kr/rules/privacy.aspx"><strong>개인정보처리방침</strong></a></li>
                    <li><a href="http://www.cgv.co.kr/rules/disclaimer.aspx">법적고지</a></li>
                    <li><a href="http://www.cgv.co.kr/rules/emreject.aspx">이메일주소무단수집거부</a></li>
                    <li><a href="http://corp.cgv.co.kr/company/ethicalManagement/ceoMessage.aspx" target="_blank">윤리경영</a></li>
                    <li><a href="/company/cyberAudit.aspx" class="empha-red">사이버감사실</a></li>
                </ul>

                <article class="company_info_wrap">
                    <section class="company_info">
                        <address>(04377)서울특별시 용산구 한강대로 23길 55, 아이파크몰 6층(한강로동)</address>
                        <dl class="company_info_list">
                            <dt>대표이사</dt>
                            <dd>허민회</dd>
                            <dt>사업자등록번호</dt>
                            <dd>104-81-45690</dd>
                            <dt>통신판매업신고번호</dt>
                            <dd>2017-서울용산-0662 <a href="#none" onclick="goFtc()" class="btn_goFtc">사업자정보확인</a><a></a></dd>
                        </dl>
                        <dl class="company_info_list">
                            <dt>호스팅사업자</dt>
                            <dd>CJ올리브네트웍스</dd>
                            <dt>개인정보보호 책임자</dt>
                            <dd>심준범</dd>
                            <dt>대표이메일</dt>
                            <dd>cjcgvmaster@cj.net</dd>
                            
                        </dl>
                        <p3>© CJ CGV. All Rights Reserved</p3>
                    </section>
                    <section class="familysite_wrap">
                        <label for="familysite">CJ그룹 계열사 바로가기</label>
                        <select id="familysite">
                            <option value="" class="familysiteTitle">계열사 바로가기</option>
                            <optgroup label="CJ그룹">
                            <option value="http://www.cj.net/">CJ주식회사</option>
                            </optgroup><optgroup label="식품 &amp; 식품서비스">
                            <option value="https://www.cj.co.kr/kr/index">CJ제일제당</option>
                            <option value="https://www.cjfoodville.co.kr/main.asp">CJ푸드빌</option>
                            <option value="http://www.cjfreshway.com/index.jsp">CJ프레시웨이</option>
                            </optgroup><optgroup label="생명공학">
                            <option value="https://www.cj.co.kr/kr/about/business/bio">CJ제일제당 BIO사업부문</option>
                            <option value="https://www.cj.co.kr/kr/about/business/bio">CJ Feed&amp;Card</option>
                            </optgroup><optgroup label="물류 &amp; 신유통">
                            <option value="https://www.cjlogistics.com/ko/main">CJ대한통운</option>
                            <option value="http://www.cjenc.co.kr/kr/Default.asp">CJ대한통운 건설부문</option>
                            <option value="https://www.oliveyoung.co.kr/store/company/brandStory.do">CJ올리브영</option>
                            <option value="https://www.cjolivenetworks.co.kr:449/">CJ올리브네트웍스</option>
                            <option value="https://www.cjoshopping.com:9002/index.asp">CJ ENM 커머스부문</option>
                            </optgroup><optgroup label="엔터테인먼트 &amp; 미디어">
                            <option value="http://www.cjem.net/main/?locale=ko">CJ ENM 엔터테인먼트부문</option>
                            <option value="http://corp.cgv.co.kr/">CJ CGV</option>
                            </optgroup>
                        </select>
                        <a href="#none" class="btn_familysite" onclick="goFamilySite()">GO</a>
                    </section>
                </article>
            </footer>
        </Layout>
    );
};

export default Home;
