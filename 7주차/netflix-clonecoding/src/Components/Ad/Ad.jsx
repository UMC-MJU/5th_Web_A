import AdContent from "./img/Untitled.svg";

function Ad(props) {
    return (
        <div>
            {props.displayAd ? <img src={AdContent} alt="" width={'100%'}></img> : null}
        </div>
    )
}

export default Ad;