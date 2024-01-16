import React from "react";
import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";

export default function Header() {
  return (
    <div className="navbar">
      <Link className="navbarimg" to={"/"}>
        <img
          style={{
            width: "154px",
            height: "20px",
            marginTop: "2px",
            marginRight: "10px",
          }}
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
          alt="로고"
        />
      </Link>
      <Link className="navbarMenu" to={"/movie"}>
        영화
      </Link>
      <Link className="navbarMenu" to={"/tv"}>
        TV 프로그램
      </Link>
      <Link className="navbarMenu" to={"/person"}>
        인물
      </Link>
      <LoginButton />
    </div>
  );
}
