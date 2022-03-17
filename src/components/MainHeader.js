import React from "react";
import styled from "styled-components";
import { history } from "../redux/configureStore";
import searchIconW from '../image/icon/ic_ search@2x.png';
import arrow from "../image/icon/ic_arrow_w@2x.png";
import logo from "../image/logo.png";

const MainHeader = (props) => {
    


    // const headerHeight = header.offsetHeight;

    // window.onscroll = function () {
    //     let windowTop = window.scrollY;
    //     // 스크롤 세로값이 헤더높이보다 크거나 같으면 
    //     // 헤더에 클래스 'drop'을 추가한다
    //     if (windowTop >= headerHeight) {
    //         header.classList.add("scroll");
    //     } 
    //     // 아니면 클래스 'drop'을 제거
    //     else {
    //         header.classList.remove("scroll");
    //     }
    // };

    React.useEffect(()=>{
        // const headerHeight = document.getElementById('header').clientHeight;
        // console.log(headerHeight);
    });



    return(        
        <Wrap id="Header" className={props.className}>
            {props.className === "category"? (
                <button onClick={()=>{
                    history.go(-1);
                }}><img src={arrow}></img></button>
            ) : (
                <>
                    <h1><a href="/"></a></h1>
                    <button onClick={()=>{
                        history.push("/category/all");
                    }}><img src={searchIconW}></img></button>
                </>
            )}  
            
        </Wrap>
    );    
};


const Wrap = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 48px;
    background-color: transparent;
    position: fixed;
    top: 0;
    left: 0;
    padding: 11px 20px;
    box-sizing: border-box;  
    z-index: 10;
    &.scroll {
        background-color: #fff;
    }
    .title {
        display: flex;
        >p {
            font-size: 16px;
            margin: 0px;
            max-width: 230px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;//타이틀 길어지면 말줄임
        }
        span {
            font-size: 12px;
            color: #a3a3a3;
            margin-left: 4px;
        }
    }
    
    >h1 {
        >a {
            display: block;
            width: 69px;
            height: 32px;
            color: white;
            outline: none;
            text-decoration: none;
            background-image: url(${logo});
            background-size: cover;
        }
        font-size: 18px;
        margin: 0;

    }
    button {
        width: 28px;
        height: 28px;
        background-color: transparent;
        border:none;
        padding: 0;
        cursor: pointer;
        img {
            width: 100%;
        }
       
    }
`;



export default MainHeader;


