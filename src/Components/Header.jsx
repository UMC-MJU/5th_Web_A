import React from 'react';
import {Link} from 'react-router-dom';
//import LoginControl from '../pages/LoginControl';
import styled from 'styled-components';

function Header(){
    return(
        <HeaderContainer>
            <TestLink to ="/">
            <LogoImg 
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
            alt="로고"
            />
            </TestLink>
            <CustomLink to="/Movies">영화</CustomLink>
            <CustomLink to ="/TV">TV 프로그램</CustomLink>
            <CustomLink to ="/Celebrity">인물</CustomLink>
            <CustomLink to ="/LoginControl">
                <LoginLink>로그인</LoginLink>
            </CustomLink>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
  background-color: #22254b;
  display: flex;
  //justify-content: space-between;
  text-decoration: none;
  colcor: white;
  padding-right: 5px;
`;

const TestLink = styled(Link)`
    text-align: center;
    justify-content: center;
    display: flex;
`;

const LogoImg = styled.img`
    width: 154px; 
    height: 20px;
    margin: auto;
    margin-left: 20px;
    margin-right: 10px;
    
`;

const CustomLink = styled(Link)`
    color: white;
    text-decoration: none;
    justify-content: center;
    padding: 20px;
    padding-left: 20px;
    margin-top: 10px;
`;

const LoginLink = styled.button`
    color: black;
    border-radius: 15px;
    outline: none;
    border: none;
    height: 25px;
    width: 70px;
    margin-top: -7px;
    margin-right: 15px;
`;


export default Header;