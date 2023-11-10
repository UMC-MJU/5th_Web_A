import Overview from "./Overview"

function Movie(props) {
    const imageUrl = `https://image.tmdb.org/t/p/w${500}/${props.imageUrl}`;
    
    return (
        <div className="Movie">
            <img src={imageUrl} alt="Movie Poster"></img>
            <div className="movieInfo">
                <h5>{props.title}</h5>
                <span className="vote">{props.vote}</span>
            </div>
            <Overview title={props.title} originalTitle={props.originalTitle} overview={props.overview}></Overview>
        </div>
    )
}

export default Movie;