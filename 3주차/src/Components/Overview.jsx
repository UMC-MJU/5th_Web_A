function Overview(props) {
    return (
        <div className="Overview">
            <h4>{props.title}</h4>
            <h5>{props.originalTitle}</h5>
            <div>
                <p className="overviewText">{props.overview}</p>
            </div>
        </div>
    )
}

export default Overview;