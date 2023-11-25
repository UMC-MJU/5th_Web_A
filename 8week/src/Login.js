import React, { useState, useEffect } from 'react';
import axios from 'axios';
import  "./Login.css"
function Login() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      const response = await axios.post('http://localhost:3000/user', {
        id: form.email,
        pw: form.password
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };


  return (
    <div>
      <div className="box1">
        <div className="login_h1_box">
          <h1 className="login_h1"> 이메일과 비밀번호를 <br/> 입력해주세요 <hr/></h1> 
        </div>
        <form className="input_box" onSubmit={handleSubmit}>
          <div>
            <p>이메일 주소</p>
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder='이메일을 입력하세요'/>
            {emailError && <span className="error">{emailError}</span>}
          </div>
          <div>
            <p>비밀번호</p>
            <input type="password" name="password" value={form.password} onChange={handleChange} placeholder='영문,숫자,특수문자 포함 8자이상' />
            {passwordError && <span className="error">{passwordError}</span>}
          </div>
          <br/>
          <button className="submit_button"type="submit" onSubmit={handleSubmit}>가입하기</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
