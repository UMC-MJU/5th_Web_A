import Movie from "./Components/Movie";

import { movies } from "./movieDummy";

function App() {
  return (
    <div className="App">
      <div className="app-container">
        {
          movies.results.map((item) => {
            return (
              <div className="MovieContainer">
                <Movie title={item.title} vote={item.vote_average} imageUrl={item.poster_path} originalTitle={item.original_title} overview={item.overview}></Movie>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
