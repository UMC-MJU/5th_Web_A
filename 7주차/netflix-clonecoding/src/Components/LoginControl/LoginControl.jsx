import React, { useState } from "react";
import * as S from "./LoginControl.style";

function LoginControl() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    return (
        <div>
            {!(isLoggedIn)? 
            <S.LoginControl>
                <button onClick={() => setIsLoggedIn(!isLoggedIn)}>로그인</button>
                <div>로그인 해주세요!</div>
            </S.LoginControl> : 
            <S.LoginControl>
                <button onClick={() => setIsLoggedIn(!isLoggedIn)}>로그아웃</button>
                <div>환영합니다!</div>
            </S.LoginControl>}
        </div>
    )
}

export default LoginControl;