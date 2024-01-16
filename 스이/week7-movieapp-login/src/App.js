import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TV from "./pages/Tv";
import Person from "./pages/Celebirity";
import Header from "./components/Header";
import MovieDetail from "./pages/MovieDetail";
import TvDetail from "./pages/TvDetail";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";

function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie" element={<Movies />} />
          <Route path="/tv" element={<TV />} />
          <Route path="/person" element={<Person />} />
          <Route path="/movie/:title" element={<MovieDetail />} />
          <Route path="/tv/:title" element={<TvDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
