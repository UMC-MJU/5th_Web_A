import React from 'react';
import {Link} from 'react-router-dom'
import "./Header.style.css";
import LoginControl from '../pages/LoginControl';
import Movie from '../Components/Movie/Movie'


function Header(){
    return(
        <nav>
            <ul>
                <li>
                    <Link to ="/">
                    <img style={{ width: "154px", height: "20px" }} 
                    src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                    alt="로고"
                    />
                    </Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to ="/HeaderMovie">영화</Link>
                    <Movie/>
                </li>
                <li>
                    <Link to ="/HeaderTV">TV 프로그램</Link>
                </li>
                <li>
                    <Link to ="/HeaderPerson">인물</Link>
                </li>
                <li>
                    <Link to ="/HeaderLogin">{LoginControl}로그인</Link>
                </li>
            </ul>
        </nav>
    )
}


export default Header;