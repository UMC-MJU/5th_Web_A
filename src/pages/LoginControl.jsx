import React from 'react';

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false, // 로그인 상태를 저장하는 상태
    };
  }

  handleLoginClick = () => {
    this.setState({
      isLoggedIn: true, // 로그인 상태를 true로 변경
    });
  }

  handleLogoutClick = () => {
    this.setState({
      isLoggedIn: false, // 로그인 상태를 false로 변경
    });
  }

  render() {
    const { isLoggedIn } = this.state; // 로그인 상태 상태 가져오기

    let button;
    let greeting;

    if (isLoggedIn) {
      button = <button onClick={this.handleLogoutClick}>로그아웃</button>;
      greeting = <h2>환영합니다! 로그인되었습니다.</h2>;
    } else {
      button = <button onClick={this.handleLoginClick}>로그인</button>;
      greeting = <h2>로그인되어 있지 않습니다.</h2>;
    }

    return (
      <div>
        {greeting}
        {button}
      </div>
    );
  }
}

export default LoginControl;
