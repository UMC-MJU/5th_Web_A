import { Link } from "react-router-dom";
import "./Top.css";
import { useState } from "react";

function Top() {
  const [login, setLogin] = useState(true);

  const handleLogin = () => {
    setLogin(!login);
  };

  return (
    <div className="top_border">
      <Link to="/">
        <img
          style={{ width: "154px", height: "20px" }}
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
          alt="로고"
        />
      </Link>
      <ul className="menu">
        <li>
          <Link to="/Moviemain">영화</Link>
        </li>
        <li>
          <Link to="/Tvmain">TV 프로그램</Link>
        </li>
        <li>
          <Link>인물</Link>
        </li>
      </ul>
      <Link to="/Login">
        <button className="top_btn" onClick={handleLogin}>
          {login ? "로그인" : "로그아웃"}
        </button>
      </Link>
    </div>
  );
}

export default Top;
