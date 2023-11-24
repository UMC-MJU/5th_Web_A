import React from "react";
import Ad from "./Ad"

class AdPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayAd: true
        };
    }

    handleToggleClick = () => {
        this.setState({ displayAd: !this.state.displayAd });
    }

    render() {
        return (
            <div>
                <Ad displayAd={this.state.displayAd}></Ad>
                <button onClick={this.handleToggleClick}>
                    {this.state.displayAd ? "광고 안보기" : "광고 보기"}
                </button>
            </div>
        )
    }
}

export default AdPage;