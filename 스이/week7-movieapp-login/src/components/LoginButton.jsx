import React from "react";
import { useNavigate } from "react-router-dom";

export default function LoginButton() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="logindiv">
      <button onClick={handleLoginClick}>로그인</button>
    </div>
  );
}
