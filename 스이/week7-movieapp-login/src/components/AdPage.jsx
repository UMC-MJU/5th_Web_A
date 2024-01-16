import React, { Component } from "react";
import Ad from "./Ad";

export default class AdPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayAd: true,
    };

    //함수를 바인딩
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  //버튼 상태 변경 함수
  handleToggleClick() {
    this.setState((prevState) => {
      return { displayAd: !prevState.displayAd };
    });
  }

  render() {
    return (
      <div>
        <Ad displayAd={this.state.displayAd} />
        <button onClick={this.handleToggleClick}>광고 안 보기</button>
      </div>
    );
  }
}
