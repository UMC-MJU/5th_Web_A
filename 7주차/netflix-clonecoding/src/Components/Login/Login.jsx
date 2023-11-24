import * as S from "./Login.style"
import { Link } from "react-router-dom";

function Login() {
    return (
        <S.LoginButton>
            <Link to="/login">로그인</Link>
        </S.LoginButton>
    )
}

export default Login;