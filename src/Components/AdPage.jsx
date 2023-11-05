import React from 'react';
import Ad from './Ad';

class AdPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdVisible: true, // 광고 표시 여부를 저장하는 상태
    };
  }

  handleToggleClick = () => {
    this.setState((prevState) => ({
      isAdVisible: !prevState.isAdVisible, // 광고 표시 여부를 반전시킴
    }));
  }

  render() {
    const { isAdVisible } = this.state; // 광고 표시 여부 상태 가져오기

    return (
      <div>
        {isAdVisible && <Ad />} {/* 광고 표시 여부에 따라 광고 컴포넌트 렌더링 */}
        <button onClick={this.handleToggleClick}>
          {isAdVisible ? '광고 숨기기' : '광고 표시하기'} {/* 광고 제어 버튼 */}
        </button>
      </div>
    );
  }
}

export default AdPage;
