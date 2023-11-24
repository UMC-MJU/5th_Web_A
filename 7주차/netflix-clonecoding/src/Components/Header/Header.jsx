import { Link } from "react-router-dom";
import * as S from "./Header.style";
import LoginControl from "../LoginControl/LoginControl";
import Login from "../Login/Login";

function Header() {
    return (
        <S.header>
            <Link to="/">
                <img style={{ width: "154px", height: "20px" }}
                    src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                    alt="로고"
                />
            </Link>
            <nav>
                <Link to="/movie">영화</Link>
                <Link to="/tv">TV 프로그램</Link>
                <Link to="/celebrity">인물</Link>
            </nav>
            <Login></Login>
        </S.header>
    )

}

export default Header;