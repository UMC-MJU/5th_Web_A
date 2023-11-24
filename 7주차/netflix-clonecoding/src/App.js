import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header"

import Movies from "./pages/Movies";
import TV from "./pages/TV";
import Celebrity from "./pages/Celebrity";
import AdPage from "./Components/Ad/AdPage";
import MovieDetail from "./pages/MovieDetail";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import TVDetail from "./pages/TVDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
          <Routes>
            <Route path="/" element={<AdPage/>}></Route>
            <Route path="/movie" element={<Movies/>}></Route>
            <Route path="/movie/:title" element={<MovieDetail/>}></Route>
            <Route path="/tv" element={<TV/>}></Route>
            <Route path="/tv/:title" element={<TVDetail/>}></Route>
            <Route path="/celebrity" element={<Celebrity/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="*" element={<NotFound/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
